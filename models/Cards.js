import mongoose from "mongoose";

// // Cards Collection
// {
//     _id: ObjectId,
//     userId: ObjectId, // Reference to User
//     cardType: String,
//     cardNumber: String,
//     card_hold_name:
//     expirationDate: Date,
//     cvv:
//     status: String, // Active, Blocked
  
//   }
const CardSchema = new mongoose.Schema({

    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    card_type : {
        type  :String ,
    },

    card_number : {
        type : Number
    },

    card_holder_name : {
        type: String
    },
    expirayiondate : {
        type: Date
    },
    cvv_code : {
        type: Number
    },
    status : {
        type : String
    }

});


const Card = mongoose.models.Card || mongoose.model("Card", CardSchema);
export default Card;