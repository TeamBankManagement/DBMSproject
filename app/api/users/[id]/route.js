import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/User";
import {  NextResponse } from "next/server";


export const GET = async (request, { params }) => {
  
  try {
    await connect();    
    const user = await User.findById(params.id);
    if (!user) {
        return NextResponse.json("User Not Found", { status: 404 });
      }
    return NextResponse.json(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

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
