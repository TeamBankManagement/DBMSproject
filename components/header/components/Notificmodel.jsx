'use client'
import React, { useState } from "react";
import Tab from "./Tab";
const Notificmodel = () => {

    const [activeTab,setActiveTab]=useState("tabAll");
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <>

    {/* add show */}
      <div className="popper-root right-10 top-14" x-ref="popperRoot">
        <div
          className={`popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80`}
        >
         <div className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
  <div className="flex items-center justify-between px-4 pt-2">
    <div className="flex items-center space-x-2">
      <h3 className="font-medium text-slate-700 dark:text-navy-100">
        Notifications
      </h3>
      <div className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
        26
      </div>
    </div>
    <button className="flex items-center justify-center -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4.5 w-4.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
  </div>
  <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
    {[
      { tab: "tabAll", label: "All" },
      { tab: "tabAlerts", label: "Alerts" },
      { tab: "tabEvents", label: "Events" },
      { tab: "tabLogs", label: "Logs" }
    ].map((item) => (
      <button
        key={item.tab}
        className={`btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5 ${
          activeTab === item.tab
            ? "border-primary dark:border-accent text-primary dark:text-accent-light"
            : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
        }`}
        onClick={() => handleTabClick(item.tab)}
      >
        <span>{item.label}</span>
      </button>

    ))}
  </div>
</div>

          <div className="tab-content flex flex-col overflow-hidden">
            <Tab activeTab={activeTab}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notificmodel;
