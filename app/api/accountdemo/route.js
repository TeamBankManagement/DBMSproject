import {connect} from "@/dbConfig/dbConfig";
import Order from "@/models/Order";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request){
    try {
        await connect();
        const reqBody = await request.json()
        const {email, name,phone, address, aadhar, pan, doc ,acctype} = reqBody;
        const orders = await Order.find({ email });
        let alreadyExist = false;
        
        if (orders && orders.length > 0) {
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
        
    
        const newOrder = new Order({            
          name,
          phone,
          email,
          acctype,
          address,
          aadhar,
          pan,
          doc,
        });

        await newOrder.save()      
                   

        return NextResponse.json({
            message: "User created successfully",
            success: true,
        })  
      
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}


