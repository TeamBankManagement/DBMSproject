'use client'
import React, { useEffect, useState } from 'react';
import Input from '@/app/(auth)/components/Input';
import { Emailsvg } from '@/app/(auth)/components/Svg';
import { AppContext } from '@/context/AppContext';
import { updateUser } from '@/store/feature/user/userSlice';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import PinModal from './components/PinModal';
import bcrypt from "bcryptjs";

const Transaction = () => {
  const {data:session}=useSession();
  const [formData, setFormData] = useState({
    paymentMethod: 'account', // Default to 'account' payment method
    toaccount: '',
    amount: '',
    mobileNumber: '',
    epin: '',
  });

  
  console.log(formData);
  const [isOpen,setIsOpen] = useState(false);

  const router = useRouter();
const handleSubmit1 =() =>{
  setIsOpen(true);
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { paymentMethod,  toaccount, mobileNumber, amount ,epin } = formData; 
    const passwordsMatch = await bcrypt.compare(epin, session?.user.epin);
    if( !passwordsMatch){
      return toast("Epin does not match");
    }
  const data1={
    fromaccount: session?.user.accounts[0].accountNumber ,
    paymentMethod,
     toaccount,
      mobileNumber,
      amount 
  }
  if (((formData.toaccount === '') && (formData.amount === '' || formData.mobileNumber == '')) || ((formData.mobileNumber === '') && ((formData.amount === '' || formData.toaccount ==='')) )  ){
      toast.error('Please fill all details');
      return;
    }
       
      const loadingToastId = toast.loading('Saving...', {
        autoClose: false,
        closeOnClick: false,
        position: 'top-center',
      });     
        const response = await fetch('/api/transaction', {
          method: 'PATCH',       
          body: JSON.stringify(data1)
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
    console.log(data);
        if (!response.ok) {
          toast.error(data || 'Data not Saved', {
            autoClose: 3000,
            position: 'top-center',
          });
          return;
        }
        // localStorage.setItem('cacheData', JSON.stringify(accdata));
        toast.success('Transaction Successful', {
          autoClose: 3000,
          position: 'top-center',
        });      
   
    router.push('/success'); // Redirect to a success page, adjust the path accordingly
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 flex justify-center items-center">
      <div className=" mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Make a Transaction</h1>
          </div>
          <div className="mt-5">
            <div className="grid gap-y-4">
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              >
                <option value="account">Account Payment</option>
                <option value="mobile">Mobile Payment</option>
              </select>
              {formData.paymentMethod === 'account' && (
                <div>
                  <div className="relative">
                    <Input
                      svgIcon={<Emailsvg />}
                      title="Account Number"
                      type="text"
                      placeholder="Enter Your Account Number"
                      name="account"
                      value={formData.toaccount}
                      onChange={(e) => setFormData({ ...formData, toaccount: e.target.value })}
                    />
                  </div>
                </div>
              )}
              {formData.paymentMethod === 'mobile' && (
                <div>
                  <div className="relative">
                    <Input
                      svgIcon={<Emailsvg />}
                      title="Mobile Number"
                      type="text"
                      placeholder="Enter Mobile Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    />
                  </div>
                </div>
              )}
              <div>
                <div className="relative">
                  <Input
                    svgIcon={<Emailsvg />}
                    title="Amount"
                    type="number"
                    placeholder="Enter Amount"
                    name="amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>
              </div>
              
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                onClick={handleSubmit1}
              >
                Make Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
      <PinModal isOpen={isOpen} onPinSubmit={handleSubmit} formData={formData} setFormData = {setFormData} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Transaction;
