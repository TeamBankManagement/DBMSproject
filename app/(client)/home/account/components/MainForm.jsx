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
const MainForm = ({type}) => {
  const dispatch = useDispatch();
  const {accdata,setAccData,step,setStep}=useContext(AppContext);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState('loading');
  const { data: session ,status } = useSession();
  const router = useRouter();
  const {accountData}=useSelector((state)=>state.accountManage);
  useEffect(() => {       dispatch(addUser({name:"hiran@gmail.com",email:"hiran@gmail.com"}))
      console.log(accountData);
       }, [dispatch])
       console.log(accountData);
       
  //   useEffect(() => {   
  //     const fetchPosts = async () => { 
  //       if (status === 'loading') {
  //      return <div>Loading...</div>;
  //    }
    
  //      const response = await fetch(`/api/users/details/${session.user.email}/${type}`);
  //      const datas = await response.json();
  //     //  localStorage.setItem('cacheData', JSON.stringify(datas));
  //     dispatch(addUser(datas));
  //      setAccData(datas);

  //    };  
  //     // fetchPosts();    
  //     dispatch(addUser({name:"hiran@gmail.com",email:"hiran@gmail.com"}))
  // }, []); 
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/users/details/${session.user.email}/${type}`);
      const datas = await response.json();
      setAccData(datas);
      dispatch(addUser(datas));

      setLoading('success');
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading('error');
    }
  };

  const fetchPosts = async () => { 
    if (status === 'loading') {
   return <div>Loading...</div>;
 }

   const response = await fetch(`/api/users/details/${session.user.email}/${type}`);
   const datas = await response.json();
  //  localStorage.setItem('cacheData', JSON.stringify(datas));
   setAccData(datas);
 };   

 
  const handleSubmit = async (e) => {
        e.preventDefault();
       
    const { name, phone, address, aadhar, pan, doc } = accdata;
  
    if (name === "" || phone === "" || aadhar === "" || pan === "") {
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
      const response = await fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:session?.user.email,
          name,
          phone,
          acctype:type,
          address,
          aadhar,
          pan,
          doc,
        }),
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
        toast.error(data.message || 'Order creation failed', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
      localStorage.setItem('cacheData', JSON.stringify(accdata));
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
 const nextClick=()=>{
  setStep(step+1);
 }
  return (
    <>
<div className="card p-4 sm:p-5">
           
              {step==1 &&    <FormBody title="Create Account" step={step}/>}
              {step==2 &&  <Document file1={file1} setFile1={setFile1} file2={file2} setFile2={setFile2}/>  }
              {step==3 &&
              <>
              <FormBody title="Create Account" step={step}/>
              <Document file1={file1} setFile1={setFile1} file2={file2} setFile2={setFile2}/> 
              </>}
                <FormFooter handleSubmit={handleSubmit} setStep={setStep} step={step} handleSubmitdoc={handleSubmitdoc}/>
              
            </div>
    </>
  )
}

export default MainForm