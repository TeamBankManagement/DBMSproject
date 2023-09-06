"use client";
import React, { useEffect } from "react";

const page = () => {
  return (
    <>
      <div className="main-content w-full px-[var(--margin-x)] pb-8">
        <div className="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
          <div className="col-span-12 grid grid-cols-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-5 sm:py-6">
            {/* <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <div className="px-4 text-white sm:px-5">
          <div className="-mt-1 flex items-center space-x-2">
            <h2 className="text-base font-medium tracking-wide">Balance</h2>
            <div x-data="usePopper({placement:'bottom-end',offset:4})" className="inline-flex">
              <button x-ref="popperRef"  className="btn h-8 w-8 rounded-full p-0 hover:bg-white/20 focus:bg-white/20 active:bg-white/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
              
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-semibold">$6,556.55</p>
            <p className="text-xs">+ 3.5%</p>
          </div>
          <div className="mt-4 flex space-x-7">
            <div>
              <p className="text-indigo-100">Income</p>
              <div className="mt-1 flex items-center space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <p className="text-base font-medium">$2,225.22</p>
              </div>
            </div>
            <div>
              <p className="text-indigo-100">Expense</p>
              <div className="mt-1 flex items-center space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                  </svg>
                </div>
                <p className="text-base font-medium">$225.22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-12 mt-5 sm:col-span-6 sm:mt-0 lg:col-span-8">       
               <div className="scrollbar-sm flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5 ">
            <div className=" relative h-40 w-64 shrink-0 rounded-lg bg-gradient-to-br from-[#ffffff55] to-[#ffffff20]">
              <div className="absolute inset-0 flex flex-col justify-between rounded-lg border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <img className="h-3" src="images/payments/cc-visa-white.svg" alt="image" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.343 7.257a.5.5 0 01.354.147 6.5 6.5 0 010 9.192.64.64 0 00-.073.087 4.718 4.718 0 01-.56-.094 1.301 1.301 0 01-.109-.03.5.5 0 01.035-.67 5.5 5.5 0 000-7.778.5.5 0 01.353-.854zm-.422 9.288a.06.06 0 010 0zM15 1.6a.5.5 0 01.354.147 14.5 14.5 0 010 20.506.5.5 0 11-.708-.707 13.5 13.5 0 000-19.092A.5.5 0 0115 1.6zM10.172 4.43a.5.5 0 01.353.146 10.5 10.5 0 010 14.85.5.5 0 11-.707-.707 9.5 9.5 0 000-13.436.5.5 0 01.354-.853z" />
                  </svg>
                </div>
                <div className="text-white">
                  <p className="text-lg font-semibold tracking-wide">
                    $1,686.66
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    **** **** **** 7946
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-64 shrink-0 rounded-lg bg-gradient-to-br from-[#ffffff55] to-[#ffffff20]">
              <div className="absolute inset-0 flex flex-col justify-between rounded-lg border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <img className="h-3" src="images/payments/cc-visa-white.svg" alt="image" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.343 7.257a.5.5 0 01.354.147 6.5 6.5 0 010 9.192.64.64 0 00-.073.087 4.718 4.718 0 01-.56-.094 1.301 1.301 0 01-.109-.03.5.5 0 01.035-.67 5.5 5.5 0 000-7.778.5.5 0 01.353-.854zm-.422 9.288a.06.06 0 010 0zM15 1.6a.5.5 0 01.354.147 14.5 14.5 0 010 20.506.5.5 0 11-.708-.707 13.5 13.5 0 000-19.092A.5.5 0 0115 1.6zM10.172 4.43a.5.5 0 01.353.146 10.5 10.5 0 010 14.85.5.5 0 11-.707-.707 9.5 9.5 0 000-13.436.5.5 0 01.354-.853z" />
                  </svg>
                </div>
                <div className="text-white">
                  <p className="text-lg font-semibold tracking-wide">
                    $5,589.16
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    **** **** **** 5699
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-64 shrink-0 rounded-lg bg-gradient-to-br from-[#ffffff55] to-[#ffffff20]">
              <div className="absolute inset-0 flex flex-col justify-between rounded-lg border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <img className="h-3" src="images/payments/cc-visa-white.svg" alt="image" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.343 7.257a.5.5 0 01.354.147 6.5 6.5 0 010 9.192.64.64 0 00-.073.087 4.718 4.718 0 01-.56-.094 1.301 1.301 0 01-.109-.03.5.5 0 01.035-.67 5.5 5.5 0 000-7.778.5.5 0 01.353-.854zm-.422 9.288a.06.06 0 010 0zM15 1.6a.5.5 0 01.354.147 14.5 14.5 0 010 20.506.5.5 0 11-.708-.707 13.5 13.5 0 000-19.092A.5.5 0 0115 1.6zM10.172 4.43a.5.5 0 01.353.146 10.5 10.5 0 010 14.85.5.5 0 11-.707-.707 9.5 9.5 0 000-13.436.5.5 0 01.354-.853z" />
                  </svg>
                </div>
                <div className="text-white">
                  <p className="text-lg font-semibold tracking-wide">
                    $2,139.22
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    **** **** **** 8945
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-64 shrink-0 rounded-lg bg-gradient-to-br from-[#ffffff55] to-[#ffffff20]">
              <div className="absolute inset-0 flex flex-col justify-between rounded-lg border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <img className="h-3" src="images/payments/cc-visa-white.svg" alt="image" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.343 7.257a.5.5 0 01.354.147 6.5 6.5 0 010 9.192.64.64 0 00-.073.087 4.718 4.718 0 01-.56-.094 1.301 1.301 0 01-.109-.03.5.5 0 01.035-.67 5.5 5.5 0 000-7.778.5.5 0 01.353-.854zm-.422 9.288a.06.06 0 010 0zM15 1.6a.5.5 0 01.354.147 14.5 14.5 0 010 20.506.5.5 0 11-.708-.707 13.5 13.5 0 000-19.092A.5.5 0 0115 1.6zM10.172 4.43a.5.5 0 01.353.146 10.5 10.5 0 010 14.85.5.5 0 11-.707-.707 9.5 9.5 0 000-13.436.5.5 0 01.354-.853z" />
                  </svg>
                </div>
                <div className="text-white">
                  <p className="text-lg font-semibold tracking-wide">
                    $369.74
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    **** **** **** 2568
                  </p>
                </div>
              </div>
            </div>
          </div>
       
      </div> */}
          </div>
        </div>
        {/* second */}
        <div className="mt-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
          <div className=" rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-5 sm:py-6">

          <div className="  mt-5  sm:mt-0 ">       
               <div className="scrollbar-sm flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5 ">
               <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
        <div className="bg-black w-96 h-48 m-4"></div>
                </div>
                </div>
        

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
