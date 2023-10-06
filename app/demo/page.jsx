'use client'
import React ,{useEffect} from 'react'
import { addUser } from '@/store/feature/newaccount-manage/accountManageSlice'
import { useDispatch, useSelector } from 'react-redux'
const Page = () => {
 const dispatch=useDispatch();
 const {accountData}=useSelector((state)=>state.accountManage);
 console.log(accountData);
  const handleSubmit=()=>{
    dispatch(addUser({name:"hiran",email:"hiran@gmail.com"}))
  }
  return (
    <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
      <button onClick={handleSubmit}>submit</button>
      {accountData.map(user=>(
        <h1 key={user.name}>{user.name}</h1>
    ))}
    </div>
  )
}

export default Page