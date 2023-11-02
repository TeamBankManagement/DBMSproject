import { connect } from "@/dbConfig/dbConfig";
import Account from "@/models/Acount_details";
import Order from "@/models/Order";
import User from "@/models/User";
import { NextResponse } from "next/server";
import mail from "./mail";


export async function POST(request) {
    try {

        await connect();
        const reqBody = await request.json()
        
        const { _id,account_number, userid, ifsc, balance, acctype, phone, aadhar,status,email } = reqBody;



        const account = await Account.find({userid, acctype});
        
        if (account.length>0) {
            return NextResponse.json("Already Exist", { status: 409 })
        }       
        


        const newAccount = new Account({
            account_number,
            ifsc,
            balance,
            userid,
            phone,
            acctype,
            aadhar,
        });
        try {
            await newAccount.save()
        } catch (error) {
            console.log(error);
            return NextResponse.json("Account Create Failed", { status: 409 })
        }
        await Order.updateOne(
            { _id: _id },
            { $set: { status: status } }
          );        
          mail(email,account_number);

        return NextResponse.json({
            message: "Account created successfully",
            success: true,
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}

export const GET = async (request) => {
    try {
        await connect();

        const orders = await Order.find({});
        if (!orders) {
            return NextResponse.json("User Not Found", { status: 404 });
        }
        return NextResponse.json(JSON.stringify(orders), { status: 200 });
    } catch (error) {
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};