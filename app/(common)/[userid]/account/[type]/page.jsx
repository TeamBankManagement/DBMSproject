"use client";
import React, { useState, useEffect, useContext } from "react";
import MainForm from "../components/MainForm";
import { AppContext } from "@/context/AppContext";
import { useDispatch, useSelector } from 'react-redux'
import { showAccount } from '@/store/feature/Account/accountDetailsSlice';
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
 const [temp,setTemp]=useState(false);
  // useEffect(() => {
   
  //   const fetchData = async () => {
  //     try {
  //       console.log(params.params.type);
  //       const params1 = {
  //         type: params.params.type, // Replace with the first parameter
  //         userid: params.params.userid  // Replace with the second parameter
  //       };
  //       await dispatch(showAccount(params1)).unwrap();
       
      
  //       setAccData(singleData); 
  //       setTemp(true);
       
  //     } catch (error) {
  //       console.error("Error fetching single order:", error);
  //     }
  //   };

  //   fetchData();
  // }, [params.params.userid,params.params.type]);  

  // if(loading){
  //   return <p>Loading...</p>
  // }  
 
  if(temp){
    setAccData(singleData);
    setTemp(false);
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
    </main>
  );
}

export default MainContent;
