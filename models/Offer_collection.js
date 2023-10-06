import mongoose from "mongoose";


// // Offers Collection
// {
//     _id: ObjectId,
//     title: String,
//     description: String,
//     startDate: Date,
//     endDate: Date,
//     // ... other offer-related fields
//   }

const OfferSchema = new mongoose.Schema({
    title:{
        type :String ,
        required:[true,'Please add a Title']
        },
    
    description : {
        type :String
    },
        
    startDate:{
        type :Date,
        default: Date.now()
    },
    endDate:{
        type :Date,
    },      

});


const Offer = mongoose.models.Offer || mongoose.model("Offer", OfferSchema);
export default Offer;