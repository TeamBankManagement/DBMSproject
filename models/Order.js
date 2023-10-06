import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
 
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type:String,
    required:[true,'Please Login first']
  },
  acctype: {
    type:String,
    enum:['savings','current'],
  },
  address: {
    street: String,
    state: String,
    district: String,
    pin: String,
  },
  aadhar: {
    type: String,
  },
  pan: {
    type: String,
  },
  doc: [
    {
      documentName: String,
      documentURL: String,
    },
  ],
  
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;