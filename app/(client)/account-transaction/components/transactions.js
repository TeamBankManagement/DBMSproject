'use client'

import { useSession } from "next-auth/react";

function Transactions({_id,from,to,type,amount,timestamp}){
    const {data:session} =useSession();
    const date = new Date(timestamp);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(day)
    const formattedDate = `${month} ${day},${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return(
            <div class="flex p-2 w-[50vw]">
                <div><img class="h-14 rounded-full" src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yV3dTTFp4OGVQT09RaEZpaGwwYUVuWHBaT1kiLCJyaWQiOiJ1c2VyXzJYTEtFTHdBOEptdXZTMVg0ZE4yU0dBVERodyJ9" alt=""></img></div>
                <div class="pl-2">
                    <div class="font-bold">{to}</div>
                    <div>Order id - {_id}</div>
                    <div class="pl-2">{formattedDate}</div>
                </div>
                <div class="font-bold pt-2 pl-20 text-red-400"> {amount}₹ </div>
            </div>
    )
}
export default Transactions;