import React from 'react'
import { orderBudget,orderIncome,orderExpense } from './Data/ChartData'
import Chart from '../Chart'
const Balence = () => {
  return (
    <>
     <div className="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:col-span-4 lg:grid-cols-2 lg:gap-6">
      <div className="card col-span-2 px-4 pb-5 sm:px-5">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Budget
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
       
          </div>
        </div>
        <div className="flex grow space-x-5">
          <div className="flex w-1/2 flex-col">
            <div className="grow">
              <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
               50 lack
              </p>
              <a href="#" className="border-b border-dotted border-current pb-0.5 text-tiny font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
                Total Amount
              </a>
            </div>
            <p className="mt-2 line-clamp-3 text-xs leading-normal">
              You have spent about 25% of your annual budget.
            </p>
          </div>
          <div className="ax-transparent-gridline flex w-1/2 items-end">
          <Chart chartData={orderBudget}/>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Credit
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-2 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
        
          </div>
        </div>
        <p className="grow px-4 text-xl font-semibold text-slate-700 dark:text-navy-100 sm:px-5">
          1 lakh
        </p>
        <div className="ax-transparent-gridline">
        <Chart chartData={orderIncome}/>
        </div>
      </div>
      <div className="card">
        <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Debit
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-2 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
            {/* <div x-ref="popperRoot" className="popper-root" :class="isShowPopper && 'show'">
              <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                <ul>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                  </li>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                  </li>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                  </li>
                </ul>
                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
                <ul>
                  <li>
                    <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <p className="grow px-4 text-xl font-semibold text-slate-700 dark:text-navy-100 sm:px-5">
          10 lakh 
        </p>
        <div className="ax-transparent-gridline">
        <Chart chartData={orderExpense}/>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Balence