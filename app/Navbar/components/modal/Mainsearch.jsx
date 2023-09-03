'use client'
import React, { useContext } from 'react'
import History from './History'
import { AppContext } from '@/context/AppContext'

const Mainsearch = () => {
  const {isFocused} = useContext(AppContext);
  return (
    <>
     <div className="flex" x-data="usePopper({placement:'bottom-end',offset:12})" >
   <div  className={`popper-root ${isFocused?"show":''}`} >
    <div className="popper-box }flex max-h-[calc(100vh-6rem)] w-96 flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark">     
     <History/>
    </div>
  </div>
</div> 
    </>
  )
}

export default Mainsearch
