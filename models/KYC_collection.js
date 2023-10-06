import mongoose from "mongoose";


const KYCSchema = new mongoose.Schema({


    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    documentType:{
        type  :String ,
        required:[true,'Please add a Document Type']
    },

    documentnumber:{
        type : Number,
        required : [ true,"Please Add A Valid Document number"]
    },

    expiration_date : {
        type : Date
    }  

});


const KYC = mongoose.models.KYC || mongoose.model("KYC", KYCSchema);
export default KYC;