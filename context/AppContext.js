'use client'
import { createContext, useState, useEffect, useRef } from "react";



//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true' // Check localStorage for initial value
  );
  const [isFocused, setIsFocused] = useState(false);
  const [isNotific,setNotific] = useState(false);
   const [isSignup,setSignup]=useState(false);
   const [open,setOpen]=useState(false);


  //data filling pending
  const value = {
    darkMode, setDarkMode,isFocused, setIsFocused,isNotific,setNotific,isSignup,setSignup,open,setOpen
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
