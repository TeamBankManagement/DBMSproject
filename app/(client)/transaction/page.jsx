'use client'
import Input from '@/app/(auth)/components/Input';
import { Emailsvg } from '@/app/(auth)/components/Svg';
import Epin from '@/app/(epin)/enter-epin/page';
import { AppContext } from '@/context/AppContext';

import { updateUser } from '@/store/feature/user/userSlice';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

import { toast } from 'react-toastify';

const AddAccount = () => {
   const {add,setAdd,curOtp,MailSend} = useContext(AppContext);

const {data:session} = useSession();

const router=useRouter();
    const handleInputChange = (e) => setAdd({ ...add, [e.target.name]: e.target.value });
 
    const handleSubmit = async() => {
      
        const userid=session?.user?._id;
        const email= add.email;
        MailSend(userid,email ); 
        router.replace("/verify");      
    }

  

  return (
    <>
    <div className="w-full max-w-md mx-auto p-6 flex justify-center items-center ">
  <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Add your Account</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Recover your Account Number?
          <Link className="text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/signin.html">
            Click here
          </Link>
        </p>
      </div>
      <div className="mt-5">
      
       
        {/* Form */}
      
          <div className="grid gap-y-4">
           {/* Email */}
            <div>
             
              <div className="relative">
               
                <Input
                svgIcon={<Emailsvg />}
                title="Email"
                type="email"
                placeholder="Enter email"
                name="email"
                value={add.email}
                onChange={handleInputChange}
              />

              </div>
            </div>
            {/* Account Number */}
            <div>
             
              <div className="relative">
               
                <Input
                svgIcon={<Emailsvg />}
                title="Account Number"
                type="text"
                placeholder="Enter Your Account Number"
                name="account"
                value={add.account}
                onChange={handleInputChange}
              />

              </div>
             
            </div>
            {/* Confirm Account Number */}
            <div>
             
              <div className="relative">
               
                <Input
                svgIcon={<Emailsvg />}
                title="Confirm Account Number"
                type="text"
                placeholder="Enter Confirm Account Number"
                name="caccount"
                value={add.caccount}
                onChange={handleInputChange}
              />

              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Confirm Account number does not match d</p>
            </div>
            {/* End Form Group */}
           
           <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
           onClick={handleSubmit}>Add Account</button>
          </div>
        
        {/* End Form */}
      </div>
    </div>
  </div>

  {/* modal */}
  <div>
  {/* Modal toggle */}
 
  {/* Main modal */}
  <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed flex justify-center items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-md max-h-full">
      {/* Modal content */}
      
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <Epin/>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default AddAccount