"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Input from "@/app/(pin)/components/Input.jsx";
import { Emailsvg, Locksvg } from "@/app/(pin)/components/Svg";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext.js";
import { signIn, useSession } from "next-auth/react";
import { toast } from 'react-toastify';
import Link from "next/link.js";
import { useUser } from "@clerk/nextjs";
import bcrypt from "bcryptjs";
const Epin = () => {  
  const bgImageStyle = {
    backgroundImage: 'url("")',
  };  

const {formData,setFormData,handleInputChange}= useContext(AppContext);

 const {data:session,status} = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {pass  } = formData;
    const epin =session.user.epin;
    if (pass === "") {
      const errorMessage = "Please provide ePIN.";    
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
    
      return;
    }
    const passwordsMatch = await bcrypt.compare(pass, epin);
if(passwordsMatch){
  console.log("match");
  return;
}
    
    const loadingToastId = toast.loading('Signing in...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
  
    try {
     
      toast.dismiss(loadingToastId);
  
      if (res.error) {
        console.log(res.error);
        toast.error('Invalid Credentials', {
          autoClose: 3000, position: 'top-center',});
        return;
      }
      // type=='customer'?router.replace("/choose"):router.replace("/manager");

      router.replace("/");
      toast.success('Sign In Successful', {
        autoClose: 3000, position: 'top-center',});
    } catch (error) {
     
      toast.dismiss(loadingToastId);
    toast.error('An error occurred', {
        autoClose: 5000,position: 'top-center', 
      });
    }
  };
  
  // if (status === "authenticated") {

  //   router.replace("/choose");
  // }

  return (
    <>
      <div
        className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden"
        style={bgImageStyle}
      >
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              <Image
                className="mx-auto h-16 w-16"
                src="/images/100x100.png"
                alt="logo"
                width={16}
                height={16}
              />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                  Welcome Back
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please Enter pin to continue
                </p>
              </div>
            </div>
            <div className="card mt-5 rounded-lg p-5 lg:p-7">
           
              <Input
                svgIcon={<Locksvg />}
                title="Enter Pin"
                type="password"
                placeholder="Enter pin"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
              />

              <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" onClick={handleSubmit}>
                Sign In
              </button>
              
            </div>
            <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
              <a href="#">Privacy Notice</a>
              <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
              <a href="#">Term of service</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Epin;
