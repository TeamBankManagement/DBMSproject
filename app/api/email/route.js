import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/User";
import Employee from "@/models/Employee";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import mail from '../users/mail'
import OTPGenerator from 'otp-generator';


export async function PUT(request){
    try {
        await connect();
        const reqBody = await request.json()
        const {userid,email} = reqBody ;      
        const otp = OTPGenerator.generate(4, {  upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });
         console.log(userid);
        
        
         const user = await User.findByIdAndUpdate(userid, { otp }, { new: true });
         console.log(JSON.stringify(user));
         
mail(email,otp);
        if (!user) {
           return NextResponse.json("User Not Found", { status: 404 });
       }      
        
       
       return NextResponse.json(JSON.stringify(user), { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
  };