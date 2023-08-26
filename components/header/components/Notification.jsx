'use client'
import React,{useContext, useEffect} from 'react'
import Notificmodel from './Notificmodel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import Notificationsvg from './svg/Notification'
import Boardsvg from './svg/Boardsvg'

import { AppContext } from '@/context/AppContext';
import Link from 'next/link';
const Notification = () => {
  const {darkMode , setDarkMode} = useContext(AppContext);


  
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Save the current state to localStorage
    applyDarkMode(); // Apply dark mode on initial load
  }, [darkMode]);

  const applyDarkMode = () => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const handleToggle = () => {
    setDarkMode(!darkMode); // Toggle the state of darkMode
  };

  const iconStyles = {
    backgroundImage: 'linear-gradient(to right, #24a326, #24a326)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: 'lg',
    fontWeight: 'bold',
  };
  return (
    <>
      <button className="flex items-center justify-center h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" onClick={handleToggle}>
        {
          darkMode?(<svg
            className="h-6 w-6 text-amber-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z" />
          </svg>):( <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>)
        }</button>
         
    <div
              
              x-data="usePopper({placement:'bottom-end',offset:12})"
              className="flex"
            >
              <button
               
                className="flex items-center justify-center relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <Notificationsvg/>
                <span className="absolute -right-px -top-px flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
              </button>
              {/* dekhanor jonno class show & & this is notification model*/}
              <Notificmodel/>
              {/* Right Sidebar Toggle */}
              <Link href="/fabourite">
              <button
               
                className="flex items-center justify-center relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
               <Boardsvg/>
                <span className="absolute -right-px -top-px flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80" ></span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
              </button>

              </Link>
        
            </div> 
    </>
  )
}

export default Notification