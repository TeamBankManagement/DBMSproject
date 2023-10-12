import React from 'react'
import TableBody from './components/TableBody'
import Table from '../components/Table'

const page = () => {
  return (
    <>
    <div class="main-content w-full px-[var(--margin-x)] pb-8">
  <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
      All Customers
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Components</a>
        <svg x-ignore xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <li>Customers</li>
    </ul>
  </div>
  <Table maintable={<TableBody/>} title="Users Table" c1="No" c2="Image" c3="Name" c4="email" c5="Phone" c6="Account Type" c7="Status" />

      </div>
   
 
    </>
  )
}

export default page