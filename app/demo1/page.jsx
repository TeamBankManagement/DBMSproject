'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const {accountData}=useSelector((state)=>state.accountManage);
  return (
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">{accountData.map(user=>(
        <h1 key={user.name}>{user.name}</h1>
        
    ))}
    </div>
  )
}

export default page