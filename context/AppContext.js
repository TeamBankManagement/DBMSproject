'use client'
import { createContext, useState, useEffect, useRef } from "react";



//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true' // Check localStorage for initial value
  );
  const [loading,setLoading] =useState(false);
  const [data, setData] = useState([]);



  //data filling pending
  const value = {
    darkMode, setDarkMode,loading,data, setData,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
