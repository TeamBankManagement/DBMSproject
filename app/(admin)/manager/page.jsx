'use client'
import React from 'react'
import OrderOver from '../components/OrderOver'
import Balence from '../components/Balence'
import Table from '../components/Table';
import OrderTableBody from '../components/OrderTableBody';
import { useUser } from '@clerk/nextjs';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Manager = () => {
  const { isSignedIn, user, isLoaded } = useUser(); 
  const { data: session, status } = useSession();
  
if(session?.user.acctype !="Manager"){
  redirect("/")
}
  return (
    <>
    <div className="main-content w-full px-[var(--margin-x)] pb-8">
  <div className="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <Balence/>
    <OrderOver/>
         
    <Table maintable={<OrderTableBody/>} title="Order" c1="No" c2="Image" c3="Name" c4="Address" c5="Status" c6="Action by" c7="Order type" /> 
</div>
{/* <PermisionModal/> */}
</div>
    </>
  )
}

export default Manager
