'use client'
import React, { useEffect } from 'react'
import { TableRowdata } from './Data/TableData'
import TableRow from './TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { showAllAccount } from '@/store/feature/Account/accountDetailsSlice'
const OrderTableBody = () => {
   const dispatch = useDispatch();
   const {accData}=useSelector((state)=>state.accountData);
   useEffect(() => {
    dispatch(showAllAccount());

  }, [dispatch]);
  console.log(accData);
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
