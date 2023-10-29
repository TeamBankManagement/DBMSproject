'use client'
import React, { useEffect } from 'react'

const Processing = () => {

  


const status = "Completed"
  return (
    <>
   {/* Hero */}
<div className=" main-content relative overflow-hidden w-full h-full">
  {/* Gradients */}
  <div aria-hidden="true" className="flex absolute -top-96 left-1 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
  </div>
  {/* End Gradients */}
  <div className="flex justify-center items-center left-1 z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 items-center">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          In Process
        </p>
        {/* Title */}
        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
           Application Submitted Successfully
           {/* Already Send your Account number in your email} */}
            
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-400">your application has been submitted successfully and your account number will be sent to your respective email address .</p>
        </div>
        {/* Buttons */}
        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="javascript:;">
         Contact
            <svg className="w-3 h-3" width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </a>
          <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" href="#">
           
            Send Email
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  </div>
</div>
{/* End Hero */}
    </>
  )
}

export default Processing