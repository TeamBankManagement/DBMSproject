'use client'
import React, { useContext, useState,useEffect} from "react";
import Desktopsearchbar from "./components/Desktopsearchbar";
import Rightcontent from "./components/Rightcontent";
import { AppContext } from "@/context/AppContext";



const Navbar = () => {
  const { open, setOpen} = useContext(AppContext);

  
  const handleClick = () => {
    const myDiv = document.querySelector('#mydiv');
    if (open) {
      myDiv.classList.remove('is-sidebar-open');
    } else {
      myDiv.classList.add('is-sidebar-open');
    }
    setOpen(!open);
  };

  return (
    <>
      <div className="header-container relative flex w-full bg-black dark:bg-navy-700 print:hidden">
        {/* Header Items */}
        <div className="flex w-full items-center justify-between">
          {/* Left: Sidebar Toggle Button */}
          <div className="h-7 w-7 ">
            {/* for three bar to arrow add active */}
            <button
              className={`menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 ${open ? 'active' : '' }`}
              onClick={handleClick}
            >
            
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="hidden sm:block">
            <Desktopsearchbar />
            {/* <Mainsearch/> */}
          </div>
          {/* Right header button */}
          <div className="-mr-1.5 flex items-center space-x-2">
            {/* Mobile Search bar */}
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

            <Rightcontent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
