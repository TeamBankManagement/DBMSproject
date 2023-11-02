import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Account from "@/models/Acount_details";

export const GET = async (request, { params }) => {

    try {
        await connect();
        const accountDetails = await Account.findOne({ account_number : params.account});
        if (!accountDetails) return  NextResponse.json("Account Not Found", { status: 404 });

        return  NextResponse.json(JSON.stringify(accountDetails), { status: 200 })

    } catch (error) {
        return  NextResponse.json("Internal Server Error", { status: 500 });
    }
}