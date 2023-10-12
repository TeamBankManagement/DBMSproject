
'use client'
import { AppContext } from '@/context/AppContext';
import { finalupdataAccount, updateAccount } from '@/store/feature/Account/accountDetailsSlice';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const FormFooter = ({handleSubmit,setStep,step,handleSubmitdoc,accountType}) => {
const dispatch=useDispatch();

  const {accdata,setAccData}=useContext(AppContext);
console.log(accountType);
  function generateUniqueNumber() {    
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 900000000000) + 100000000000;
    const uniqueNumber = timestamp + randomPart;
    const twelveDigitNumber = uniqueNumber % 1000000000000;  
    return twelveDigitNumber;
  }
  
   

  const handleAdmin=()=>{
    const uniqueNumber = generateUniqueNumber();


  }

    const nextClick=()=>{
      if(accountType=='undefined'){
        console.log("submit button Clicked")
      }
      if(accountType=='Manager'){
       
      }
        setStep(step+1);

    }
    
    const prevClick=()=>{
        if(step>1 && step<4 ){
        setStep(step-1);
        }
    }

    const Submit=()=>{
      if(step==1 && accountType=='undefined'){
      handleSubmit();
     
      }
      if(step==1){
        nextClick()
      }
      if (step==2){
        // handleSubmitdoc();
        nextClick();
      }
      if(step==3 && accountType=='undefined'){
        FinalSubmit();
        nextClick();
      }
      if(step==4){
        nextClick()
      }
      
    }

    const FinalSubmit=()=>{
            dispatch(finalupdataAccount(accdata));           

    }
  return (
    <>
    <div className="flex justify-end space-x-2 mt-5">
                  <button className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" onClick={Submit}>
                    
                    <span>{accountType==undefined?'Save':'Reject'}</span>
                  </button>
                  <button className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" onClick={prevClick}>
                    
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
                  <button className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" onClick={Submit}>
                  <span>
  {step === 3 ? (accountType === undefined ? 'Submit' : 'Approved') : 'Next'}
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
                </div>
    </>
  )
}

export default FormFooter