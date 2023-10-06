import React from 'react'

const Tab = ({type,setType}) => {
  
  return (
    <>
    <div>
  <div className="flex mb-2">
    <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
      <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
        <button onClick={() => setType({ ...type, type: 'customer' })}  className={`${type.type=='customer'?'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-400':''} py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active`}>
          Customer
        </button>
        <button  onClick={() => setType({ ...type, type: 'manager' })} className={`${type.type=='manager'?'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-400':''}py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active`} >
          Manager
        </button>
        <button  onClick={() => setType({ ...type, type: 'employee' })} className={`${type.type=='employee'?'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-400':''} py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active`}>
          Employee
        </button>
      </nav>
    </div>
  </div>  
</div>
    </>
  )
}

export default Tab