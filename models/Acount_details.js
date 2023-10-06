
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
        type: String,
        required : [true, 'From Account number is required!']
    },

    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    balance : {
        type : String      
    },

    account_type : {
        type : String,
        enum:[current , savings]
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


