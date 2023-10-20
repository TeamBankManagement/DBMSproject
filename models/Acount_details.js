
import mongoose from "mongoose";


// // Accounts Collection
// {
//   _id: ObjectId,
//   accountNumber: String,
//   userId: ObjectId, // Reference to User
//   balance: Number,
//    accountType: String, // Checking, Savings, etc.
//    branch:String,
//   Tax: {
//    id:
//    trancition id:
//    }
//   loan:loan_id;
//   card:[card_id1,card_id2];
// },

const AccountSchema = new mongoose.Schema({


    account_number : {
        type: Number,
        required : [true, ' Account number is required!'],
        unique: true, 
    },
    ifsc : {
        type: String,
        required : [true, ' IFSC code is required!']
    },

    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    phone: {
        type: String,
        required : [true,'Phone no is required!']
      },
    aadhar: {
        type: String,
        required : [true,'aadhar no is required!'],
        unique:true,
      },
    balance : {
        type : Number      
    },

    acctype : {
        type : String,
        enum:['current' , 'savings']
    },

    branch : {
        type : String,
    },

    tax : [{
        id : Number,
        transaction_id : Number
    }],

    loan_id : {
        type : String
    },

    cards_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cards",
        },
    ],
});


const Account = mongoose.models.Account || mongoose.model("Account", AccountSchema);
export default Account;


