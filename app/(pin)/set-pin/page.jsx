"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { Emailsvg, Locksvg } from "../components/Svg.jsx";
import { redirect, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { toast } from 'react-toastify';
import Link from "next/link.js";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/store/feature/user/userSlice.js";
const Page = () => {
    
  // const bgImageStyle = {
  //   backgroundImage: 'url("")',
  // };/

const { isSignedIn, user, isLoaded } = useUser();
const [formData, setFormData] = useState({    
  pass: '',
  cpass:'',
});
const dispatch = useDispatch();
const router=useRouter();
if (!isLoaded) {
    return null;
  }
 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
  };
  const handleSubmit = () => {
  const { pass ,cpass} = formData;

  
    if (pass==="" || cpass === "") {
      const errorMessage = "Please provide both pin.";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }
    if (pass!== cpass ) {
      const errorMessage = "Pin not matched";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }
   
    const loadingToastId = toast.loading('setting pin...', {
        autoClose: false,
        closeOnClick: false,
        position: 'top-center',
      });
      
    const data={
        userid:user.id,
        username:user.fullName,
        email:user.primaryEmailAddress.emailAddress,
        phone:user.phoneNumbers[0].phoneNumber,
        pin:pass,
        image:user.imageUrl,
        verify:true,
        acctype:'Customer',
        onboarded: true,
        path: '/',
    } 

    try {
        dispatch(createUser(data)); 
        router.replace("/enter-pin")  
        toast.dismiss(loadingToastId);           
        toast.success('Pin setup successful', {
            autoClose: 3000,
            position: 'top-center',
          });
    } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error('Something wrong!!', {
            autoClose: 3000,
            position: 'top-center',
          });
    }

    // dispatch(createUser(formData));
    // if(loading){
    //   toast.loading('Signing up...', {
    //   autoClose: false,
    //   closeOnClick: false,
    //   position: 'top-center',
    // });
    // }
    //  router.replace("/signin");
  
  };

 
return (
    <>
      <div
        className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden"
        // style={bgImageStyle}
      >
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                  Welcome Back
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please Set pin Number to continue
                </p>
              </div>
            </div>
            <div className="card mt-5 rounded-lg p-5 lg:p-7">
            
              <Input
                svgIcon={<Locksvg />}
                title="Pin"
                type="text"
                placeholder="Enter 4 digit pin"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
              />
              <Input
                svgIcon={<Locksvg />}
                title="Confirm Pin"
                type="password"
                placeholder="Enter Confirm Pin"
                name="cpass"
                value={formData.cpass}
                onChange={handleInputChange}
              />

              <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" onClick={handleSubmit}>
                Set Pin
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

export default Page;
