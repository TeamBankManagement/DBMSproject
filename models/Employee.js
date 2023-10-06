import mongoose from "mongoose";


const EmployeeSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    pass: {
        type: String,
        required: [true, 'password is required!'],       
    },
    phone : {
        type : Number
    },
    accountType :{
        type: String,
        enum: ['Employee', 'Manager']
    },
    departmentId : {
        type: String,
        enum:['Loan Department','Investment & Wealth Management','Card Services','Account Creation Department','Cash Transaction Department','Audit Department','Customer Support']
    },

    status : {
        type : Boolean,
    },
    
    session : [{
        session_id : Number,
        online_status : Boolean,
        start_time : Date,
        end_time : Date

    }]     
});


const Employee = mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);
export default Employee;