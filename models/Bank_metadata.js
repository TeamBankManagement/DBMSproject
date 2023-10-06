import mongoose from "mongoose";

// //bank Metadata collection
// {
//     _id:
//     number of employees:
//     total_Account://included all type account like savings,current,Loans.
//     total_savings:[(branch_id,time,amount)]
//     total_current:[(branch_id, time, amount)]
//     total_Loans:[(branch_id, time, amount)]
//     total_RD:[(branch_id, time, amount)]
//     total_FD:[(branch_id, time, amount)]
//     total_Deposits:[(branch_id, time, amount)]
//     total_Withdrawals:[(branch_id, time, amount)]
   
//   }
const BankMetaDataSchema = new mongoose.Schema({

    number_of_employee : {
        type : Number
    },
    total_account:{
        type :Number
    },
    total_savings:[{
        branch_id : Number,
        time : Date,
        amount : Number
    }],
    total_current:[{
        branch_id : Number,
        time : Date,
        amount : Number
    
    }],
    total_loans:[{
        branch_id : Number,
        time : Date,
        amount : Number
    }],
    total_rd : [{
        branch_id : Number,
        time : Date,
        amount : Number
    }],
    total_fd:[{
        branch_id : Number,
        time : Date,
        amount : Number
    }],
    total_deposits:[{
        branch_id : Number,
        time : Date,
        amount : Number
    }],
    total_withdrawls:[{
        branch_id : Number,
        time : Date,
        amount : Number
    }]


});



const BankMetaData = mongoose.models.BankMetaData || mongoose.model("BankMetaData", BankMetaDataSchema);
export default BankMetaData;