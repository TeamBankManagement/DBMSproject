import mongoose from "mongoose";

// //order tracking collection
// {
//     _id:
//     employee_id:
//     order_id:ref of Order collection
//     history: [(employee_id,time_of_assignment,time_of_completion)],
    
    
//     }
const OrderTrackingSchema = new mongoose.Schema({

    employee_id : {
        type: String
    },
    order_id : {
        type:String
    },
    history:[{
        employee_id : Number,
        time_of_assignment : Date,
        time_of_completion : Date
    }]
});


const Order_tracking = mongoose.models.Order_tracking || mongoose.model("Order_tracking", OrderTrackingSchema);
export default Order_tracking;