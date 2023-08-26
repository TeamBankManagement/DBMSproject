import React from 'react'

import Mains from './Mains'
import Notification from './Notification';
const Rightheaderbutton = () => {
 
   
  return (
    <>
    <div className="-mr-1.5 flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button className="flex items-center justify-center h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* Main Searchbar */}
            <Mains/>
            {/* Dark Mode Toggle */}
          
            {/* Notification*/}
            <Notification/>
          </div>
    </>
  )
}

export default Rightheaderbutton