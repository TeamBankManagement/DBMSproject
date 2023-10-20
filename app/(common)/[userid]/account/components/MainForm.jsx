'use client'
import { AppContext } from '@/context/AppContext';
import React, { useState,useContext,useEffect } from 'react'

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useSession } from 'next-auth/react';
import FormFooter from './FormFooter';
import FormBody from './FormBody';
import Document from './Document';
import { useDispatch, useSelector } from 'react-redux'
import { createAccount, showAccount } from '@/store/feature/Account/accountDetailsSlice';
import Processing from './Processing';
const MainForm = ({type,userid}) => {
  const dispatch = useDispatch();
  const {accdata,setAccData,step,setStep}=useContext(AppContext);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  // const [loading, setLoading] = useState('loading');
  const { data: session ,status } = useSession();
 console.log(session);
  const {singleData , loading,error}=useSelector((state)=>state.accountData);
 
 console.log(accdata);
  
 useEffect(() => {
  // console.log(accountType);    
  if (session?.user.accountType =='Manager') {
    setStep(1);
  }
}, [session?.user.accountType]);
 
  const handleSubmit = async (e) => {
      const params1={
        accdata,
        userid,
        acctype:type
      }
      console.log(accdata);
      
    const { name, phone, address, aadhar, pan, doc } = accdata;
   
    if (name ==="" || phone === "" || aadhar === "" || pan === "") {
      const errorMessage = "Please provide all required information.";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }
  
    const loadingToastId = toast.loading('Creating order...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
  
    try {
     await dispatch(createAccount(params1)).unwrap();
  
     
      toast.dismiss(loadingToastId);
      console.log(error);
      toast.success('Data saved', {
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
  const handleSubmitdoc = async (e) => {
    // e.preventDefault();
   
    if (!file1 && !file2) {
      const errorMessage = "Please provide all required information.";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }

  
    const loadingToastId = toast.loading('Saving...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
   
      const file = new FormData();
file.set('file1', file1);
file.set('file2',file2);
file.set('type',type);
file.set('email',session.user?.email);

 
      const response = await fetch('/api/account/docments', {
        method: 'POST',       
        body: file
      });
  
      const data = await response.json();
     
      toast.dismiss(loadingToastId);
      if(response.status == 409){
        toast.error(data.message || 'Order exist', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
  
      if (!response.ok) {
        toast.error(data.message || 'Data not Saved', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
      // localStorage.setItem('cacheData', JSON.stringify(accdata));
      toast.success('Data saved', {
        autoClose: 3000,
        position: 'top-center',
      });
    
  };

  return (
    <>
<div className="card p-4 sm:p-5">
           
              {step==1 &&    <FormBody title="Create Account" step={step} userid={userid} />}
              {step==2 &&  <Document file1={file1} setFile1={setFile1} file2={file2} setFile2={setFile2}/>  }
              {step==3 &&
              <>
              <FormBody title="Create Account" step={step} userid={userid}/>
              <Document file1={file1} setFile1={setFile1} file2={file2} setFile2={setFile2}/> 
              </>}
              {step==4 && <Processing status={accdata.status}/>}
              {step<4 && <FormFooter handleSubmit={handleSubmit} setStep={setStep} step={step} handleSubmitdoc={handleSubmitdoc} accountType={session?.user.accountType} type={type}/> }
                              
            </div>
    </>
  )
}

export default MainForm