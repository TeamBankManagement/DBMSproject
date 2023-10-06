// // Loans Collection
// {
//     _id: ObjectId,
//     acc_id:REFERNCE acc_no
//     userId: ObjectId, // Reference to User
//     loanType: String,
//     pr_amount: Number,
//     loan_interest:
//     loan_period:
//     current_outstanding:  
//     // ... other loan-related fields
//   }

import mongoose from "mongoose";


const LoanSchema = new mongoose.Schema({
    accId:{
        type :String ,
        required:[true,'Please enter the account number']
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    loanType :{
        type:String
    },
    prAmount : {
        type : Number
    },
    loanInterest :{
        type :Number
    },
    loanPeriod : {
        type :Date,
        default:Date.now()
    },
    current_outstanding : {
        type : Number
    }

});


const Loan = mongoose.models.Loan || mongoose.model("Loan", LoanSchema);
export default Loan;