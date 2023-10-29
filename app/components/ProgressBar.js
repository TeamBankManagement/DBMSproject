'use client'
import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress,setProgress]=useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress)=>prevProgress>=100? 0: prevProgress+10)
        }, 600);
    }, [])
    
  return (
    <>
    <div class="main-content progress h-1 bg-slate-150 dark:bg-navy-500">
    <div
      class="is-indeterminate relative w-4/12 rounded-full bg-slate-500 dark:bg-navy-400"
    ></div>
    </div>
    </>
  )
}

export default ProgressBar