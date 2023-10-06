import mongoose from "mongoose";

// // Policies and insurence Collection
// {
//     _id: ObjectId,
//    acc_id:REFERNCE acc_no
//    userId: ObjectId, // Reference to User
//    policyType: String,
//    instalment: Number,
//    interest:
//    period:
//    current_outstanding:  
//  }


const PolicySchema = new mongoose.Schema({

    acc_id : [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account_number",
    } ],
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    policytype : {
        type :String
    },
    instalment : {
        type :Number
    },
    interest : {
        type : Number
    },
    period : {
        type : Number
    },
    current_outstanding : {
        type : Number
    }

});


const Policy = mongoose.models.Policy || mongoose.model("Policy", PolicySchema);
export default Policy;