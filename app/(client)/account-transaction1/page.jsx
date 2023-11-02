'use client'
import { accHistory } from '@/store/feature/transaction/tranSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
        const {data:session ,status} = useSession();
    const dispatch=useDispatch();
    // const history = useSelector((state)=>state.historyData.history);
    const {history} = useSelector((state)=> state.historyData);
    useEffect(() => { 
        
        console.log(session?.user.accounts[0].accountNumber);
                       dispatch(accHistory(session?.user.accounts[0].accountNumber));
      }, [status=='authenticated']);
    //   const data1 = JSON.parse(history);
    // const data = JSON.parse(history);
console.log(history);
if(status=='loading'){
    return <p>loading</p>

}
  return (
    <>
      <div className="main-content card col-span-2 px-4 pb-5 sm:px-5">
  <div className="my-3 flex h-8 items-center justify-between">
    <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
      Transactions
    </h2>
    <a href="#" className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
      View All
    </a>
  </div>
  <div className="space-y-4">

  {history && history.map((transaction) => (
         
           <div className="flex cursor-pointer items-center justify-between" key={transaction._id}>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <img className="rounded-full" src="images/100x100.png" alt="avatar" />
             </div>
             <div>
               <p className="text-slate-700 dark:text-navy-100">
               {transaction.from}
               </p>
               <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                 Dec 21, 2021 - 08:05
               </p>
             </div>
           </div>
           <p className="font-medium text-success">{transaction.amount}</p>
         </div>
        ))}

   
  </div>
</div>
    </>
  )
}

export default page
