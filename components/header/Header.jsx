"use client";
import React, { useState, useEffect, useContext } from "react";

import Rightheaderbutton from "./components/Rightheaderbutton";
import MiddleHeader from "./components/MiddleHeader";
// import { AppContext } from "@/context/AppContext";
import Link from "next/link";

const Header = () => {
  // const {darkMode}=useContext(AppContext);
  const [isScreenSizeLessThan800, setScreenSizeLessThan800] = useState(false);
  const [isScreenSizeLessThan650, setScreenSizeLessThan650] = useState(false);
  const darkMode = true;
  useEffect(() => {
    // Function to check the screen size and update the variable
    function checkScreenSize() {
      setScreenSizeLessThan800(window.innerWidth < 800);
      setScreenSizeLessThan650(window.innerWidth < 650);
    }

    // Call the function to set the initial value
    checkScreenSize();

    // Add event listener to update screen size on window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount
  const handleMailClick = () => {
    // Replace 'recipient@example.com' with the email address you want to send the email to
    window.location.href = "mailto:saptakexterio@gmail.com";
  };
  return (
    <>
      <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
        {/* Header Items */}
        <div className="flex w-full items-center justify-between">
          {/* Left: Sidebar Toggle Button */}
          <div className="h-7 w-7">
            <button className="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
              <span />
              <span />
              <span />
            </button>
          </div>
                    {/* Right: Header buttons */}
          <Rightheaderbutton />

      
        </div>
      </div>
    </>
  );
};

export default Header;
