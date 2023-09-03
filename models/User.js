import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    pass: {
        type: String,
        required: [true, 'password is required!'],
       
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    accounts: {
        type: [String],
    },
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
    
    // [
    //     {
    //         // type: mongoose.Schema.Types.ObjectId,
    //         ref: "order",
    //     },
    // ],
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