import {connect} from "@/dbConfig/dbConfig";
import Order from "@/models/Order";
export const GET = async (request, { params }) => {
    console.log(params.id,params.type);
    try {
        await connect();

        const order = await Order.findOne({ email: params.id, acctype: params.type });
        if (!order) return new Response("Order Not Found", { status: 404 });

        return new Response(JSON.stringify(order), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}