import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import Employee from "@/models/Employee";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import mail from './mail'
import OTPGenerator from 'otp-generator';


export async function POST(request) {
    try {
        await connect();
        const reqBody = await request.json()
        const { userid,username, email,phone,image,verify,acctype,onboarded,path,pin } = reqBody
        
            console.log(reqBody);
        const user = await User.findOne({ email })

        if (user) {
                      return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }
        //hash password
        
        const salt = await bcryptjs.genSalt(10)
        console.log("hiranmoy")
        const hashedPassword = await bcryptjs.hash(pin, salt)
       
            console.log("hiranmoy Mandal");
        const newUser = new User({
            userid,
            username,
            email,
            pin: hashedPassword,
            image,
            phone,
            verify,
            acctype,
            onboarded,
            path,
            status:true,
            epin:null,
        })
    const savedUser = await newUser.save()    
    



        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}
export const GET = async (request) => {
    try {
        await connect();

        const users = await User.find({});
        if (!users) {
            return NextResponse.json("User Not Found", { status: 404 });
        }
        return NextResponse.json(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};