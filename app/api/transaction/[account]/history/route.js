import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Transaction from "@/models/Transaction";

export const GET = async (request, { params }) => {

    try {
        await connect();

      
        const transactionHistory = await Transaction.find({
            $or: [
              { from: params.account },
              { to: params.account }
            ]
          });
          
        if (!transactionHistory) return  NextResponse.json("Account Not Found", { status: 404 });
console.log("Hiranmoy")

        return  NextResponse.json(JSON.stringify(transactionHistory), { status: 200 })

    } catch (error) {
        return  NextResponse.json("Internal Server Error", { status: 500 });
    }
}