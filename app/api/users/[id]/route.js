import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/User";
import {  NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const GET = async (request, { params }) => {  
  try {
    await connect(); 
    const {id} = params ;   
    // const user = await User.findById(params.id);
    console.log(id);
    const user = await User.findOne({userid:id});
console.log(user);
    if (!user) {
        return NextResponse.json("User Not Found", { status: 404 });
}
    return NextResponse.json(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

export const PUT = async (request,{params}) => {
  console.log(params.id);
  try {
    await connect();

    const {verify ,accounts} = await request.json();
    console.log(accounts);
    const user = await User.findByIdAndUpdate(params.id, {verify , accounts});

   if (!user) {
      return NextResponse.json("User Not Found", { status: 404 });
  }

    return NextResponse.json(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
export const PATCH = async (request, { params }) => {
 
  try {
      await connect();
      const reqBody = await request.json()
       
      const { pin , epin } = reqBody 
      const existingUser= await User.findById(params.id);

      if (!existingUser) {
          return NextResponse.json("User not found", { status: 404 });
      }
      const salt = await bcryptjs.genSalt(10);
      if(pin){
        const hashedPin= await bcryptjs.hash(pin, salt);
        existingUser.pin=hashedPin;
      }
       if(epin) {
        const hashedEpin= await bcryptjs.hash(epin, salt);
        existingUser.epin=hashedEpin;
      }
      try {
        await existingUser.save();
      } catch (error) {
        return NextResponse.json("Error updating order", { status: 500 });
      }
      return NextResponse.json("Successfully Updated", { status: 200 });
  } catch (error) {
    console.log(error);
      return NextResponse.json("Error Updating Pin", { status: 500 });
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
