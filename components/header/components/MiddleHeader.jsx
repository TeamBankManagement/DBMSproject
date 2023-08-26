"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Ping from "./Ping";
const MiddleHeader = () => {
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setActiveTab(pathName);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center space-x-2 ">
        {[
          { tab: "/", label: "Home" },
          { tab: "/travel", label: "Our Products" },
          { tab: "/about", label: "About Us" },
          { tab: "/contact", label: "Contact Us" },
        ].map((item, index) => (
          <>
            <Link
              href={item.tab}
              key={index}
              className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 relative ${
                activeTab === item.tab
                  ? "border-primary dark:border-accent text-primary dark:text-accent-light"
                  : "border-transparent block  text-gray-800 dark:text-white hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              }`}
              onClick={() => handleTabClick(item.tab)}
              passHref
            >
              {item.label}
              {activeTab === item.tab && <Ping />}
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default MiddleHeader;
