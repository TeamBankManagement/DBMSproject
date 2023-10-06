import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({


    from : {
        type: String,
        required : [true, 'From Account number is required!']
    },

    to : {
        type: String,
        required : [true, 'To Account number is required!']
    },

    account_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
        },
    ],

    type : {
        type : String,
        enum : ['Deposit', 'Withdrawal','Transfer'],      
    },

    amount : {
        type : String,
        required : [true, 'Enter valid amount greater than 0']
    },

    timestamp : {
        type : Date,
        default : Date.now()
    },

    status : {
        type : Boolean,
    } 

});
const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
export default Transaction;








