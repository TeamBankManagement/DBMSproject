"use client";
import React, { useState, useEffect, useContext } from "react";
import MainForm from "../components/MainForm";
import { AppContext } from "@/context/AppContext";
import { useDispatch, useSelector } from 'react-redux'
import { showAccount } from '@/store/feature/Account/accountDetailsSlice';
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
function Step({ number, title }) {
  const { step } = useContext(AppContext);
  return (
    <li
      className="step pb-8 before:bg-primary dark:before:bg-accent"
      key={number}
    >
      <div className="step-header rounded-full bg-primary text-white dark:bg-accent">
        {number + 1 < step ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          number + 1
        )}
      </div>
      <h3 className="ml-4 text-slate-700 dark:text-navy-100">{title}</h3>
    </li>
  );
}

function MainContent(params) {
  const [isAtTop, setIsAtTop] = useState(true);
  const dispatch = useDispatch();
  const {accdata,setAccData,step,setStep}=useContext(AppContext);
  const {singleData , loading}=useSelector((state)=>state.accountData);
const {data:session} = useSession();
 const [temp,setTemp]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params1 = {
          type: params.params.type, 
          userid: params.params.userid  
        };
        await dispatch(showAccount(params1)).unwrap();

       
        setAccData(singleData); 
        setTemp(true);


      } catch (error) {
        console.error("Error fetching single order:", error);
      }
    };
    fetchData();
  }, [params.params.userid,params.params.type]);  

  // if(loading){
  //   return <p>Loading...</p>
  // }  

  if(temp){
   
    setAccData(singleData);
    setTemp(false);
  }
  console.log(singleData.status);
if(singleData.status =='Completed' && session?.user.acctype=='Manager'){
    redirect('/aproved')
  }

  if(singleData.status =='Completed' && session?.user.acctype=='Customer'){
    redirect(`/add-account/${params.params.type}`)
  }
console.log(session?.user.acctype)
 if (singleData.status =='Processing' && session?.user.acctype=='Customer'){
    redirect ('/processing')
  }

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      {/* Header */}
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
        Create Account
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <a
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="#"
            >
              {params.params.type}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>account</li>
        </ul>
      </div>

      {/* Steps */}
      <div className="sm:hidden pb-6">
        <div
          className={`pb-6 ${
            !isAtTop ? "fixed right-0 top-[60px] w-full z-10" : ""
          }`}
        >
          <div
            className={`transition-all duration-200 ${
              !isAtTop
                ? "py-2.5 px-4 bg-white dark:bg-navy-700 shadow-lg relative"
                : ""
            }`}
          >
            <ol className="steps with-space-line">
              {[
                "Enter Details",
                "Choose Account type",
                "Upload documents",
                "Submit",
              ].map((steps, index) => (
                <Step key={index} number={index} title={steps} />
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        {/* Main form */}
        <div className="col-span-12 sm:col-span-8">
          <MainForm type={params.params.type} userid={params.params.userid} />
        </div>
        {/* Laptop step */}
        <div className="hidden sm:col-span-4 sm:block">
          <div className="sticky top-24 mt-3">
            <ol className="steps is-vertical line-space">
              {[
                "Enter Details",
                "Upload Documents",
                "Review & Submit",
                "Status",
              ].map((step, index) => (
                <Step key={index} number={index} title={step} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;