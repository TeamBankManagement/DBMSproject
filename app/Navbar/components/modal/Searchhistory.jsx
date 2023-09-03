import React from 'react'
import History from './History'

const Searchhistory = () => {
  return (
    <>
     {/* x-show="$store.breakpoints.isXs && $store.global.isSearchbarActive" x-transition:enter="easy-out transition-all" x-transition:enter-start="opacity-0 scale-105" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="easy-in transition-all" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" */}
      <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-navy-700 sm:hidden hidden">
  <div className="flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800">
    <button className="flex items-center justify-center -ml-1.5 h-7 w-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <input x-effect="$store.global.isSearchbarActive && $nextTick(() => $el.focus() );" className="form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300" type="text" placeholder="Search here..." />
  </div>
  {/* <div x-data="{activeTab:'tabAll'}" className="is-scrollbar-hidden flex shrink-0 overflow-x-auto bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
   
  </div> */}
<History/>
</div>
    </>
  )
}

export default Searchhistory
