'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { redirect } from "next/navigation";
import { useSession } from 'next-auth/react';
function Choose() {
  const [atype, setAtype] = useState("savings");
 const {data:session,status}=useSession();
 if(session?.user.accounts.length>0){
  redirect("/home");
 } 
 return (
    <div className="relative p-6 md:p-16">
      {/*Grid*/}
      <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
            Create Your Account
          </h2>
          {/* Tab Navs */}
          <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active ${
                atype === "savings" ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''
              }`}
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
              onClick={() => setAtype("savings")}
            >
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <span className="grow ml-6">

                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Savings Account</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">The facility of transfer of accounts through Internet Banking channel.</span>
              </span>
            </span>
            </button>
            <button
              type="button"
              className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover-bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                atype === "current" ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''
              }`}
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
              onClick={() => setAtype("current")}
            ><span className="flex">
            <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
            </svg>
            <span className="grow ml-6">
              <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Current Account</span>
              <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">The facility of transfer of accounts through Internet Banking channel.</span>
            </span>
          </span>
            </button>
            <button
              type="button"
              className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover-bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                atype === "minor" ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''
              }`}
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
              onClick={() => setAtype("minor")}
            >
               <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Minor Account</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">The facility of transfer of accounts through Internet Banking channel</span>
              </span>
            </span>
            </button>
            <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-gray-700">
              <Link
                className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href={`/${session?.user?._id}/account/${atype}`}
              >
                Continue
              </Link>
            </div>
            
          </nav>
          {/* End Tab Navs */}
        </div>
        {/* End Col */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Tab Content */}
            <div>
              <div id="tabs-with-card-1" className={` ${atype === "savings" ? '' : 'hidden'}`} role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="https://img.freepik.com/free-vector/save-money-hand-put-coin-glass-put_24877-59997.jpg?w=740&t=st=1697127293~exp=1697127893~hmac=e4a440bead802de978a37de6f553d4c157ecc5f913b8ddd88322c2ebff66e6a0"
                  alt="Image Description"
                />
              </div>
              <div id="tabs-with-card-2" className={` ${atype === "current" ? '' : 'hidden'}`} role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-13925.jpg?w=900&t=st=1697127363~exp=1697127963~hmac=f02711d561381e1f9ebe9c0bb32457c2e32255d81413003dc29159396a2cdd2d"
                  alt="Image Description"
                />
              </div>
              <div id="tabs-with-card-3" className={` ${atype === "minor" ? '' : 'hidden'}`} role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="https://img.freepik.com/premium-vector/accountant-flat-vector-illustration-concept-tax-calculating-financial-analysis_199064-865.jpg?w=740"
                  alt="Image Description"
                />
              </div>

            </div>
            {/* End Tab Content */}
            {/* SVG Element */}
            <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
              <svg
                className="w-16 h-auto text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      {/* Background Color */}
      <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]" />
      </div>
      {/* End Background Color */}
      
    </div>
  );
}

export default Choose;

