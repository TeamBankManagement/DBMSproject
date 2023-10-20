import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Service = ({serviceItems,title}) => {
  return (
    <>
      <h1 className="mb-2 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
       {title}
      </h1>

      <div className="transition-all duration-300 sm:mt-5 lg:mt-6" id="home">
        <div className="rounded-3xl bg-purple-200 pb-2 pt-2 dark:bg-navy-800 pl-2 pr-2">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
            {serviceItems.map((item) => (
              <div className="relative p-1" key={item.id}>
               <Link href='#'>
               {/* bg-gradient-to-r from-slate-300 to-indigo-100  */}
               <div className="rounded-3xl p-4 transition-shadow bg-gradient-to-r from-accent to-purple-400 bg-accent duration-300 hover:shadow-lg hover:shadow-primary/50 dark:bg-accent dark:shadow-accent/50 dark:hover:shadow-accent/50 flex items-center flex-col relative">
                  <Image width={96} height={96} src={item.imageSrc} alt="service" className="" />
                  <p className="mt-3 text-xl font-medium text-white">{item.title}</p>
                </div>
               </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
