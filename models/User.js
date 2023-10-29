import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userid:{
        type:String,
        required: [true, 'UserId is required!'],
    } ,
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    phone: {
        type: String,
        unique: [true, 'Phone Number already exists!'],
        required: [true, 'Pnone Number is required!'],
    },
    accounts: [
        {
            accountNumber: {
                type: String,
            }
        }
    ],
    cif_id: {
        type: String,
    },
    pin: {
        type: String,
    },
    order_id:String,
    otp:{
        type: String,
    },
    verify:{
        type: Boolean,
    },
    status:{
        type: Boolean,
    },
    acctype:{
        type:String,
    },    
    onboarded:{
        type:Boolean,
    },
    path:{
        type:String,
    },
    session: [{
        session_id: Number,
        online_Status: Boolean,
        start_time: Date,
        end_time: Date
    }],
    image:String,



  
});

const User =  mongoose.models.User || mongoose.model("User", UserSchema);
export default User;