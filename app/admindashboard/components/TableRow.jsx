import React from 'react';

const TableRow = ({ data }) => (
    <>
    <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    {data[0]}
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">{data[1]}</p>
                  <p className="mt-0.5 text-xs">{data[2]}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img className="mask is-squircle" src="images/100x100.png" alt="avatar" />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-navy-100">{data[3]}

                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">{data[4]}
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className={`badge ${data[5]=='Completed'?'bg-success/10 text-success':''} ${data[5]=='Processing'?'bg-primary/10 text-primary' :''} ${data[5]=='Cancelled'?'bg-error/10 text-error':'' } dark:bg-warning/15`}>                    {data[5]}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className={`badge space-x-2.5 text-xs+ ${data[5]=='Completed'?'text-success':''} ${data[5]=='Processing'?'text-primary' :''} ${data[5]=='Cancelled'?'text-error':''} } `}>
                    <div className="h-2 w-2 rounded-full bg-current" />
                    <span>{data[6]}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    {data[7]}
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="flex justify-center items-center  h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
 
  </>
);

export default TableRow