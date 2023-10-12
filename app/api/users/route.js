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
        const { username, email, pass } = reqBody

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(pass, salt)
        const imgurl = `https://api.dicebear.com/5.x/initials/svg?seed=${username}`;
        const otp = OTPGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });

        const newUser = new User({
            username,
            email,
            pass: hashedPassword,
            image: imgurl,
            otp,
            verify: false,
            status:true,
        })

        const savedUser = await newUser.save()

        //send verification email
        mail(email, otp)


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