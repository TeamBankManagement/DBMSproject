'use client'
import { deleteUser, showAllUser, updateUser } from '@/store/feature/user/userSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
const TableBody = () => {
  

const dispatch=useDispatch();
const {users,loading}  = useSelector((state) => state.userData);
const [openModalIndex, setOpenModalIndex] = useState(-1);
  useEffect(() => {
    dispatch(showAllUser());
  }, [dispatch]);

  const togglePopper = (index) => {
    if (openModalIndex === index) {
      // Clicking the same button, so close the modal
      setOpenModalIndex(-1);
    } else {
      // Clicking a different button, so open that modal and close the previously open one
      setOpenModalIndex(index);
    }
  };
  

  const closePopper = (index) => {
    const updatedShowPopperArray = [...showPopperArray];
    updatedShowPopperArray[index] = false;
    setShowPopperArray(updatedShowPopperArray);
  };

  const handleUpdate = async(user) => {

    const array={...user,verify:!user.verify};
   
    try {
      await dispatch(updateUser(array)).unwrap();
      dispatch(showAllUser());
    } catch (error) {
      console.error("Error updating user:", error);
    }
    
  
  }; 
  const handleDelete= async(user)=>{
   
    try {
      await dispatch(deleteUser(user)).unwrap();      
      dispatch(showAllUser());
    } catch (error) {
      console.error("Error Deleting user:", error);
    }
  }
 


  return (
    <tbody>
      { users.map((user,index) => (
        <tr
          key={user._id}
          className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
        >
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">{index+1}</td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">
            <div className="avatar flex h-10 w-10">
              <img
                className="mask is-squircle"
                src={user.image}
                alt="avatar"
              />
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">
            {user.username}
          </td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.email}</td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.phone}</td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">
            <div className={`badge rounded-full ${user.role_bg}`}>
              {user.role}
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">
            <label className="inline-flex items-center">
              <input
                checked={user.verify}
                className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
                onChange={()=>handleUpdate(user)}
                
              />
            </label>
          </td>
          <td className="whitespace-nowrap px-4 py-3 sm:px-5">
            <div
              className="inline-flex"
              // onClick={() => setIsShowPopper(!isShowPopper)}
              // onClick={()=>handleDelete(user)}
              onClick={() => togglePopper(index)}
            >
              <button
                className="flex justify-center items-center h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                   
                  />
                </svg>
              </button>

              {openModalIndex === index && (
                <div className="popper-root show right-9 mt-6">
                  <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >
                          Another Action
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >
                          Something else
                        </a>
                      </li>
                    </ul>
                    <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >
                          Separated Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
