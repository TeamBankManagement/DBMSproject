'use client'
import { createContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
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
   const [isfetch,setIsfetch] = useState(false);
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
    step:'',
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
  const [step,setStep]=useState(1);
  
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
  pass: '',
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });

};


const MailSend = async(userid , email) =>{
  const userdata ={
    userid,
    email,
  }
 console.log("Hiranmoy");
  try {
    const response = await fetch('/api/email', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });

    if (!response.ok) {
      // Handle the error if the response status is not okay (e.g., 4xx or 5xx)
      console.log("Hiranmoy")
      const errorData = await response.json();
      toast.warn('Please Check your email Id', {
      
        theme: darkMode ? 'dark' : 'light',
        });
      throw new Error(errorData.error || 'Failed to send email');
    }
   
    toast.success('Email send successfully', {      
      theme: 'light',
      // theme: darkMode ? 'dark' : 'light',
      });
    // Output the response message
    const responseData = await response.json();
   setCurOtp(JSON.parse(responseData).otp);

   router.replace("/verify")
  } catch (error) {
    console.log('Error:', error.message);
  }
}


  //data filling pending
  const value = {
    darkMode, setDarkMode,isFocused, setIsFocused,isNotific,setNotific,isSignup,setSignup,open,setOpen,image, setImage,formData, setFormData,handleInputChange,accdata, setAccData,step,setStep,curOtp,setCurOtp,add,setAdd,isfetch,setIsfetch,MailSend
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
