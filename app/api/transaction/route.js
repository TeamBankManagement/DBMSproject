
import { connect } from "@/dbConfig/dbConfig";
import { MongoClient, Session } from "mongodb";
import { NextResponse } from "next/server";
import Account from "@/models/Acount_details";
import Transaction from "@/models/Transaction";
import mail from "./mail";
import User from "@/models/User";

export const PATCH = async (request) => {
  // await connect();
  const client = new MongoClient('mongodb+srv://Hiranmoy:Testhiran@cluster0.gpgpn.mongodb.net/?', { monitorCommands: true });
  const session = client.startSession();

  try {
    session.startTransaction();
    const reqBody = await request.json();
    const { paymentMethod, fromaccount, toaccount, mobileNumber, amount } = reqBody;    
    console.log(fromaccount);
      // Check if the sender has sufficient balance
      const amount1 = parseFloat(amount);
      let accountDetails = await Account.findOne({ account_number: fromaccount });
      
      if (accountDetails.balance < amount1) {
        return NextResponse.json("Insufficient balance", { status: 404 });
      }
      try {
        // Update the sender's balance        
      await Account.findOneAndUpdate(
          {
            account_number: fromaccount,
          },
          { $inc: { balance: -amount1 } },
          { new: true , session }
        );

        
let toAccount;
        if (paymentMethod == 'account') {
           toAccount = await Account.findOneAndUpdate(
            {
              account_number: toaccount,
            },
            { $inc: { balance: amount1 } },
            { new: true , session}
          );
        }else{
           toAccount = await Account.findOneAndUpdate(
            {
              phone: mobileNumber,
            },
            { $inc: { balance: amount1 } },
            { new: true , session}
          );
        }
        // Update the receiver's balance
        const senderEmail = await User.findById(accountDetails.userid);
        mail(senderEmail.email ,amount1,"Debited")
        const receiverEmail = await User.findById(toAccount.userid);
        mail(receiverEmail.email ,amount1,"Credited");

               if (!toAccount) {
                await session.abortTransaction();        
          return NextResponse.json("Account Not Found", { status: 404 });
        }
        const newHistory = new Transaction({
          from:fromaccount,
          to:toAccount.account_number,
          tranType:"Transfer",
          amount:amount1
      })
await newHistory.save()    

        // Commit the transaction
  
        await session.commitTransaction();

        // Return the user data
        return NextResponse.json(JSON.stringify(accountDetails), { status: 200 });
      } catch (error) {
        // Abort the transaction if an error occurs
        await session.abortTransaction();

        // Return an internal server error
        return NextResponse.json("Something is wrong!", { status: 500 });
      }
  
  } catch (error) {
    console.log(error);
    // Abort the transaction if an error occurs
    await session.abortTransaction();
    console.log(error);

    // Return an internal server error
    return NextResponse.json("Internal Server Error", { status: 500 });
  } finally {
    // Close the session
    await session.endSession();
  }
};

