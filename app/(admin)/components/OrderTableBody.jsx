'use client'
import React, { useEffect } from 'react'
import { TableRowdata } from './Data/TableData'
import TableRow from './TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { showAllAccount } from '@/store/feature/Account/accountDetailsSlice'
import SkeletonLoader from './SkeletonLoader'
const OrderTableBody = () => {
   const dispatch = useDispatch();
   const {accData , loading}=useSelector((state)=>state.accountData);
   useEffect(() => {
    dispatch(showAllAccount());

  }, [dispatch]);
  
  if(loading){
    return <SkeletonLoader/>
  }
  return (
    <>
       <tbody>
            {accData.map((data, index) => (
        <TableRow key={index} data={data} number={index}/>
      ))}            
            </tbody>
    </>
  )
}

export default OrderTableBody
