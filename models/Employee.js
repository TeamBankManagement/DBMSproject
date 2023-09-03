import { Schema, model, models } from 'mongoose';

const EmployeeSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    phone: String,
    account_type: {
        type: String,
        enum: ['employee', 'manager'],
    },
    department: {
        type: String,
        enum: ['loan_dept', 'Investment and wealth management', 'Card_Services', 'Account_create_dept', 'Cash_Transaction_Dept', 'Audit_dept', 'Customer_support'],
    },
    status: String,
    session: [{
        session_id: {
            type: Number,
            required: true,
        },
        online_Status: {
            type: Boolean,
            required: true,
        },
        time: [{
            start: {
                type: Date,
                required: true,
            },
            end: {
                type: Date,
            },
        }],
    }],
});

const Employee = models.Employee || model("Employee", EmployeeSchema);
export default Employee;
