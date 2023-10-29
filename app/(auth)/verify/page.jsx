"use client"
import { AppContext } from '@/context/AppContext'
import { updateUser } from '@/store/feature/user/userSlice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Page = () => {
const {curOtp,add}= useContext(AppContext);

const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const newValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    // Move focus to the next input field if a digit is entered
    if (newValue.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  const {data:session}=useSession();
const dispatch=useDispatch();
const router = useRouter();
const handleAdd= async(user) => {

  const enteredOTP = otp.join('');
  console.log(enteredOTP);
  if(enteredOTP!=session?.user.otp){
    toast.error('Otp verification failed!! Please try Again later..', {
          
      theme: 'light',
      // theme: darkMode ? 'dark' : 'light',
      });
      return;
  }
  const newAccount = {
    accountNumber: add.account,
  };
 
  const accountExists = session.user.accounts.some(account => account.accountNumber === newAccount.accountNumber);  
  if (!accountExists) {
    const newUser = {
      ...session.user,
      accounts: [...session.user.accounts, newAccount],
    };
  const array={...newUser,verify:!user.verify};
 
  try {
    await dispatch(updateUser(array)).unwrap();
   router.replace("/");
  } catch (error) {
    console.error("Error updating user:", error);
  }
}
}
  return (
    <>
    {/* component */}
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email </p>
        </div>
      </div>
      <div>
        <form action method="post">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              
    {otp.map((digit, index) => (
        <div key={index} className="w-16 h-16">
          <input
            className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            placeholder=""
            maxLength="1"
            ref={inputRefs[index]}
          />
        </div>
      ))}

             
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                onClick={handleAdd}>
                  Verify Account
                </button>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Did not recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Page