
import mongoose from "mongoose";


const AccountSchema = new mongoose.Schema({

    account_number : {
        type: String,
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


