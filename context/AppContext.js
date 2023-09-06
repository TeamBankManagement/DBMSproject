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
   const [image, setImage] = useState("");

   useEffect(() => {
    const storedImage = localStorage.getItem('image');
    if (storedImage) {
      // Data is available in localStorage
      setImage(storedImage);
    } else {
      // Data is not available, set a default link
      setImage('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg');
    }
  }, []);

useEffect(() => {
  const myDiv = document.querySelector('#mydiv');
    if (!open) {
      myDiv.classList.remove('is-sidebar-open');
    } else {
      myDiv.classList.add('is-sidebar-open');
    }
}, [open])

  //data filling pending
  const value = {
    darkMode, setDarkMode,isFocused, setIsFocused,isNotific,setNotific,isSignup,setSignup,open,setOpen,image, setImage
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
