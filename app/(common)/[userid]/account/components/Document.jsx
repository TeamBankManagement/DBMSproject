"use client";
import React, { useState, useCallback, useContext } from "react";
import { toast } from "react-toastify";

import Link from "next/link";

import FileInput from "./FileInput";

const Document = ({ file1, setFile1, file2, setFile2 }) => {
  
  const handleSubmitdoc = async (e) => {
    e.preventDefault();
   
    if (!file1 && !file2) {
      const errorMessage = "Please provide all required information.";
      toast.error(errorMessage, {
        autoClose: 2000,
        position: 'top-center',
      });
      return;
    }

  
    const loadingToastId = toast.loading('Saving...', {
      autoClose: false,
      closeOnClick: false,
      position: 'top-center',
    });
   
      const file = new FormData();
file.set('file1', file1);
file.set('file2',file2);

 
      const response = await fetch('/api/account/docments', {
        method: 'POST',       
        body: file
      });
  
      const data = await response.json();
     
      toast.dismiss(loadingToastId);
      if(response.status == 409){
        toast.error(data.message || 'Order exist', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
  
      if (!response.ok) {
        toast.error(data.message || 'Data not Saved', {
          autoClose: 3000,
          position: 'top-center',
        });
        return;
      }
      // localStorage.setItem('cacheData', JSON.stringify(accdata));
      toast.success('Data saved', {
        autoClose: 3000,
        position: 'top-center',
      });
    
  };
  return (
    <>
      <form >
        <section className="mt-10">
          <div className="flex gap-4">
            <h2 className="title text-3xl font-semibold">Aadhar Card</h2>

            {file1 && (
              <button
                type="submit"
                className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
              >
                <Link href={URL.createObjectURL(file1)} target="_blank">
                  View
                </Link>
              </button>
            )}
          </div>
        </section>
      <FileInput data={file1} setData={setFile1}/>
        <section className="mt-10">
          <div className="flex gap-4">
            <h2 className="title text-3xl font-semibold"> Pan Card</h2>

            {file2 && (
              <button
                type="submit"
                className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
              >
                <Link href={URL.createObjectURL(file2)} target="_blank">
                  View
                </Link>
              </button>
            )}
          </div>
        </section>
        <FileInput data={file2} setData={setFile2}/>

      </form>
    </>
  );
};

export default Document;
