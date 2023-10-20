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
   
  //  const [id, setId] = useState("");
   const [accdata, setAccData] = useState({
    _id:'',
    name: '',
    phone:'',
    acctype:'',
    address: {
      street: '', 
      state:'',  
      country:'',
      district: '',  
      pin: '', 
    },
    aadhar: '',
    pan: '',
    draft:'',
    doc: {
      documentName: '',
      documentURL: '',
    },
  });
  const [add,setAdd]=useState({
    email:'',
    account:'',
    caccount:'',
    otp:'',

})
const [curOtp,setCurOtp] = useState("");
  const[allUser,setAllUser]=useState([]);
  const[allOrder,setAllOrder]=useState([]);
  const [step,setStep]=useState(localStorage.getItem('step') || 1);
  
   useEffect(() => {
    
    const storedImage = localStorage.getItem('image');
    // const AccountData=localStorage.getItem('cacheData');
    // if(AccountData){
    //   setAccData(JSON.parse(AccountData));
    // }
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

//nor require
const [formData, setFormData] = useState({
  username:'',
  email: '',
  pass: '',
  type:'customer',
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });

};





  //data filling pending
  const value = {
    darkMode, setDarkMode,isFocused, setIsFocused,isNotific,setNotific,isSignup,setSignup,open,setOpen,image, setImage,formData, setFormData,handleInputChange,accdata, setAccData,step,setStep,curOtp,setCurOtp,add,setAdd
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
