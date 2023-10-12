import {connect} from "@/dbConfig/dbConfig";
import Order from "@/models/Order";
import User from "@/models/User";
import {  NextResponse } from "next/server";




export const GET = async (request) => {
    try {
        await connect();

        const orders = await Order.find({});
        if (!orders) {
            return NextResponse.json("User Not Found", { status: 404 });
        }
        return NextResponse.json(JSON.stringify(orders), { status: 200 });
    } catch (error) {
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};