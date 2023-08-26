// import React from 'react'
// import { FaHouseUser } from "react-icons/fa";
// import Link from 'next/link';
// const MobileNav = () => {
//     const activeLink = "pricing";

//     const setActiveLink=(head)=>{
    
//     }
//   return (
//     <>
//       {/* mobile navigation  */}
//       <nav className="fixed header-container lg:hidden bottom-0 left-0 right-0 z-20  sm:px-8 shadow-t w-full ">
//         <div className="bg-white dark:bg-navy-700  sm:px-3">
//           <ul className="flex w-full justify-between items-center text-black-500">
//           {[
//       { tab: "/about", label: "About",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
//       { tab: "/travel", label: "Products" , d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
//       { tab: "/about", label: "Wishlists",  d:"M19.594 8.406a4.752 4.752 0 010 6.718L12 21l-7.594-5.876a4.752 4.752 0 010-6.718 4.752 4.752 0 016.718 0 4.752 4.752 0 016.876 0z" },
//       { tab: "/contact", label: "Contact Us" , d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
//     ].map((item) => (
// <>
// <Link
//               activeClass="active"
//               href={item.tab}    key={item.tab}
             
//               duration={1000}              
           
//               className={
//                 "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
//                 (activeLink === "about"
//                   ? "  border-orange-500 text-orange-500"
//                   : " border-transparent")
//               }
//             >

//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={item.d}
//                 />
//               </svg>
//               {item.label}
//             </Link>
// </>
//     ))}
     
//           </ul>
//            {/* <div className='pb-1 pt-1 flex items-center justify-center  '>
//       <button type="submit" className="bg-red-500 border-0 outline-none text-white px-6 py-3 w-72 rounded-lg text-lg md:text-base md:mt-10 md:mb-15 md:rounded-md">Check Availability</button>
//       </div> */}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default MobileNav
'use client'
import React, { useState } from "react";
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import Notificationsvg from "./components/svg/Notification";
const MobileNav = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                {/* <ion-icon name={menu.icon}></ion-icon> */}
                <Notificationsvg/>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;