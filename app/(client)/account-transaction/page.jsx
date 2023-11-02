import React from "react";
import Info from "./components/Info";

const Page=()=>{

    return (
        <>
        <div className="main-content">  
            <h1 class="text-sm fonts-bold p-2 md:text-2xl lg:text-4xl m-4 font-semibold text-black ">Account details & Transaction</h1>
            <Info/>
            </div>
        </>
    )
}

export default Page;
