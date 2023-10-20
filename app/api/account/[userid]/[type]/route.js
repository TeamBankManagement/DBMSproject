import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/User";
import {  NextResponse } from "next/server";
import Order from "@/models/Order";


export async function POST(request,{params}){
  try {
    
      await connect();
      const reqBody = await request.json()
      
      const {accdata} = reqBody;   
      const {email, name,phone, address, aadhar, pan, doc ,acctype} = accdata;   
     
      
      const orders = await Order.find({ userid:params.userid });
      const user = await User.findById(params.userid);
      let alreadyExist = false;
      
      if (user && orders.length > 0) {
        for (const order of orders) {
          if (order.acctype === acctype) {
            alreadyExist = true;
            break; 
          }
        }
      }       
      
      if (alreadyExist) {
        return NextResponse.json("Already Exist", {status: 409})
      }
     
      if (!user) {
          return NextResponse.json("User Not Found", { status: 404 });
        }
      
        const newOrder = new Order({    
        userid:params.userid,        
        name,
        phone,
        email,
        acctype:params.type,
        address,
        aadhar,
        pan,
        doc,
        draft:false,
        status:'Processing'
      });
      try {
        await newOrder.save()  
      } catch (error) {
        console.log(error);
      }
        
      
     
      return NextResponse.json({
          message: "User created successfully",
          success: true,
      })  
    
  } catch (error) {
      return NextResponse.json({error: error.message}, {status: 500})

  }
} 
export const GET = async (request, { params }) => {
  console.log(params.userid,params.type);
  try {
      await connect();

      const order = await Order.findOne({ userid: params.userid, acctype: params.type });
      if (!order) return new Response("Order Not Found", { status: 404 });

      return new Response(JSON.stringify(order), { status: 200 })

  } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
  }
}
export const PUT = async (request,{params}) => {
  console.log(params.id);
  try {
    await connect();

    const {verify} = await request.json();
    const user = await User.findByIdAndUpdate(params.id, {verify});

    if (!user) {
      return NextResponse.json("User Not Found", { status: 404 });
    }

    return NextResponse.json(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
export const PATCH = async (request, { params }) => {
 
  try {
      await connect();
      const reqBody = await request.json()
       
  const {email, name,phone, address, aadhar, pan, doc ,acctype} = reqBody;   
      const existingOrder = await Order.findOne({ userid: params.userid,acctype:params.type });

      if (!existingOrder) {
          return NextResponse.json("Order not found", { status: 404 });
      }

      // Update the order with new data
      existingOrder.name=name;
      existingOrder.email=email;
      existingOrder.phone=phone;
      existingOrder.address=address;
      existingOrder.aadhar=aadhar;
      existingOrder.pan=pan;
      existingOrder.doc=doc;
      existingOrder.acctype=acctype;
      existingOrder.draft = false;
      existingOrder.status='Processing'
      try {
        await existingOrder.save();
      } catch (error) {
        return NextResponse.json("Error updating order", { status: 500 });
      }
      return NextResponse.json("Successfully Submitted the Application", { status: 200 });
  } catch (error) {
    console.log(error);
      return NextResponse.json("Error Updating Order", { status: 500 });
  }
};
export const DELETE = async (request,{params}) => {
  try {
    await connect();

    const user = await User.findByIdAndDelete(params.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
