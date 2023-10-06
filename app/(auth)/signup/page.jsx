"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Input from "../components/Input.jsx";
import { Emailsvg, Locksvg } from "../components/Svg.jsx";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext.js";
import { FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import { toast } from 'react-toastify';
import Link from "next/link.js";
const Page = () => {
  const bgImageStyle = {
    backgroundImage: 'url("")',
  };
  const { formData,handleInputChange } = useContext(AppContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {username,email, pass } = formData;
  
    if (username==="" || email === "" || pass === "") {
      const errorMessage = "Please provide both email and password.";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }
  
    const loadingToastId = toast.loading('Signing up...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
      try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, pass }), // Adjust property names to match your API's expectations
      });
  
      const data = await response.json();
          console.log(data);
      toast.dismiss(loadingToastId);
  
      if (!response.ok) {
       toast.error(data.message || 'Signup failed', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
  
      router.replace("/signin");
      toast.success('Signup successful', {
        autoClose: 3000,
        position: 'top-center',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss(loadingToastId);
      toast.error('An error occurred', {
        autoClose: 5000,
        position: 'top-center',
      });
    }
  };
  
return (
    <>
      <div
        className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden"
        style={bgImageStyle}
      >
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                  Welcome Back
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please sign up to continue
                </p>
              </div>
            </div>
            <div className="card mt-5 rounded-lg p-5 lg:p-7">
              <Input
                svgIcon={<Emailsvg />}
                title="Name"
                type="text"
                placeholder="Enter Name"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <Input
                svgIcon={<Emailsvg />}
                title="Email"
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                svgIcon={<Locksvg />}
                title="Password"
                type="password"
                placeholder="Enter Password"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
              />
              <Input
                svgIcon={<Locksvg />}
                title="Confirm password"
                type="password"
                placeholder="Enter Password"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
              />

              <div className="mt-4 flex items-center justify-between space-x-2">
                <label className="inline-flex items-center space-x-2">
                  <input
                    className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                    type="checkbox"
                  />
                  <span className="line-clamp-1">Accept terms & condition</span>
                </label>
                <Link
                  href="#"
                  className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >T&C
                </Link>
              </div>
              <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" onClick={handleSubmit}>
                Sign In
              </button>
              <div className="mt-4 text-center text-xs+">
                <p className="line-clamp-1">
                  <span>I have a Account?</span>
                  <Link
                    className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              <div className="my-7 flex items-center space-x-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
                <p>OR</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
              </div>
              <div className="flex space-x-4">
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90" onClick={()=>signIn("google")}>
          <FaGoogle />            
                  <span>Google</span>
                </button>
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                  <FaMicrosoft/>
                  <span>Microsoft</span>
                </button>
              </div>
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
