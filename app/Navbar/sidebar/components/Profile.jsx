import React from 'react';
import Link from 'next/link'
import { ProfileData } from './AllData';

const Profile = () => {
  return (
    <>
    {ProfileData.map((item, index) => (
         <Link
         key={index}
         href="#"
         className="group flex items-center space-x-3 px-4 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
       >
         <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${item.icon.color} text-white`}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            dangerouslySetInnerHTML={{ __html: item.icon.svg }}
          />
         </div>
         <div>
           <h2 className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
            {item.title}
           </h2>
           <div className="line-clamp-1 text-xs text-slate-400 dark:text-navy-300">
             Your profile setting
           </div>
         </div>
       </Link>

    ))}
    
    </>
  )
}

export default Profile