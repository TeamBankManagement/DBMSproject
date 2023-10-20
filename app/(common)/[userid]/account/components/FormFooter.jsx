"use client";
import { AppContext } from "@/context/AppContext";
import {
  finalupdataAccount,
  updateAccount,
} from "@/store/feature/Account/accountDetailsSlice";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const FormFooter = ({ handleSubmit, setStep, step, handleSubmitdoc,accountType,type,}) => {
  const dispatch = useDispatch();
  const [temp1, setTemp1] = useState(false);
  const [temp2, setTemp2] = useState(localStorage.getItem("temp2") || false);
  const { accdata, setAccData } = useContext(AppContext);
  const { loading } = useSelector((state) => state.accountData);
  function generateUniqueNumber() {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 900000000000) + 100000000000;
    const uniqueNumber = timestamp + randomPart;
    const twelveDigitNumber = uniqueNumber % 1000000000000;
    return twelveDigitNumber;
  }

  useEffect(() => {
    setTemp1(true);
  }, [accdata]);

  console.log(accdata);

  const handleAdmin = async() => {
    const status="Completed";
    const {_id, userid,  acctype, phone, aadhar,email}=accdata;
    const account_number = generateUniqueNumber();
    const newAccount = {
      _id,
      account_number,
      userid,
      ifsc:'NEWIFSC1234',
      balance:0,
      acctype,
      phone,
      email,
      aadhar,
      status,
    };

    const loadingToastId = toast.loading('Creating order...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
  
    try {
      const response= await fetch(
        '/api/account',
        {
          method: "POST",         
          body: JSON.stringify(newAccount),
        }
      );
      if(response.status==409){
        toast.dismiss(loadingToastId);     
        toast.error('Account Exist', {
          autoClose: 3000,
          position: 'top-center',
        }); 
      }
      if(response.ok){
      toast.dismiss(loadingToastId);     
      toast.success('Account Created Successfully', {
        autoClose: 3000,
        position: 'top-center',
      });  
    } 
    } catch (error) {   
      console.log(error);  
      toast.dismiss(loadingToastId);
      toast.error('An error occurred', {
        autoClose: 5000,
        position: 'top-center',
      });
    }
  };


  const nextClick = () => {
    setStep(step + 1);
    if (typeof accountType === "undefined") {
      localStorage.setItem("step", step + 1);
    }
   
  };

  const prevClick = () => {
    if (step > 1 && step < 4) {
      setStep(step - 1);
    }
  };

  const Submit = () => {
    if (step == 1 && typeof accountType === "undefined" && temp1) {
      if (!temp2) {
        setTemp1(false);
        setTemp2(true);
        localStorage.setItem("temp2", true);
        handleSubmit();

      } else {
        FinalSubmit();
      }
    }

    if (step == 2 || step == 1 || step == 3) {
      // handleSubmitdoc();
      nextClick();
    }
    if (step == 3 && typeof accountType === "undefined") {
      FinalSubmit();
      nextClick();
    }
    if (step == 3 && accountType === "Manager") {
    }
    if (step == 4) {
      nextClick();
    }
  };
  const FinalSubmit = () => {
    dispatch(finalupdataAccount(accdata));
    if (loading) {
      return <p>Loading...</p>;
    }
  };
  return (
    <>
     {accountType == undefined ? ( <div className="flex justify-end space-x-2 mt-5">
        <button
          className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          onClick={Submit}
        >
          <span>Save</span>
        </button>
        <button
          className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          onClick={prevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Prev</span>
        </button>
        <button
          className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          onClick={Submit}
        >
          <span>
            {step === 3 ? "Submit": "Next"}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>):(<div className="flex justify-end space-x-2 mt-5">
        <button
          className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          // onClick={}
        >
          <span>Reject</span>
        </button>
        <button
          className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          onClick={prevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Prev</span>
        </button>
        {step==3?(<button
          className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          
          onClick={handleAdmin}
        >
          <span>
            Approved
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>):(<button
          className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          
          onClick={nextClick}
        >
          <span>
            Next
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>)}
        
      </div>)} 
     
    </>
  );
};

export default FormFooter;
