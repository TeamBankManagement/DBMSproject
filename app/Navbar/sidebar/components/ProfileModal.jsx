'use client'
import React, { useRef } from "react";
import Link from 'next/link';
import {signOut , useSession } from 'next-auth/react';
import Profile from './Profile'
const ProfileModal = () => {
  const modalRef = useRef(null);

  const profilemodal = false;
  return (
    <>

      <div
        className={`proper-root fixed bottom-6 left-20 ${!profilemodal ? "hidden" : ""    }`}>
        <div className="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
          <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 px-4 py-5 dark:bg-navy-800">
            <div className="avatar h-14 w-14">
              <img
                className="rounded-full"
                src="images/100x100.png"
                alt="avatar"
              />
            </div>
            <div>
              <Link
                href="#"
                className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Travis Fuller
              </Link>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Product Designer
              </p>
            </div>
          </div>

          <div className="flex flex-col pb-5 pt-2">
            <Profile />

            <div className="mt-3 px-4">
              <button
                className="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                onClick={()=>signOut()} 
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
