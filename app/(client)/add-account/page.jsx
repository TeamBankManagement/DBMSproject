'use client'
import Input from '@/app/(auth)/components/Input';
import { Emailsvg } from '@/app/(auth)/components/Svg';
import { AppContext } from '@/context/AppContext';

import { updateUser } from '@/store/feature/user/userSlice';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

import { toast } from 'react-toastify';

const AddAccount = () => {
   const {add,setAdd,curOtp,setCurOtp} = useContext(AppContext);

const {data:session} = useSession();

const router=useRouter();
    const handleInputChange = (e) => setAdd({ ...add, [e.target.name]: e.target.value });
 
    const handleSubmit = async() =>{
      const userdata ={
        userid:session?.user?._id,
        email: add.email,
      }
     
      try {
        const response = await fetch('/api/email', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userdata),
        });
    
        if (!response.ok) {
          // Handle the error if the response status is not okay (e.g., 4xx or 5xx)
          const errorData = await response.json();
          toast.warn('Please Check your email Id', {
          
            theme: darkMode ? 'dark' : 'light',
            });
          throw new Error(errorData.error || 'Failed to send email');
        }
       
        toast.success('Email send successfully', {
          
          theme: 'light',
          // theme: darkMode ? 'dark' : 'light',
          });
        // Output the response message
        const responseData = await response.json();
       setCurOtp(JSON.parse(responseData).otp);
    
       router.replace("/verify")
      } catch (error) {
        console.log('Error:', error.message);
      }
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
</div>

    </>
  )
}

export default AddAccount