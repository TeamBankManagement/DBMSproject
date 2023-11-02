'use client'
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext,useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import { showUser } from "@/store/feature/user/userSlice";
import Choose from "./(client)/choose/page";
import Carousel from "./(client)/home/page";
import Manager from "./(admin)/manager/page";
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser(); 
  const { data: session, status } = useSession();
  const {isfetch,setIsfetch} = useContext(AppContext);
  const { currentUser, loading } = useSelector((state) => state.userData);
  const dispatch = useDispatch(); 
useEffect(() => {
 console.log("Hiranmoy");
  
    if(!isSignedIn){
      redirect("/sign-in");
    }
 
}, [])
if(!session){
 
  // if (status === "unauthenticated"){
  if (!isfetch && user?.id) {
    dispatch(showUser(user?.id)); 
  } 
if(currentUser ){
      if (currentUser === "User Not Found" ) {
        redirect("/set-pin");
      } else {
        redirect("/enter-pin");
      }  
    }
  // }
  }
  if(status=="loading"){
    return <div class="h-[100vh] flex flex-col justify-center items-center ">
    <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    <div class="pt-2 text-xl">Page  </div>
    </div>
  }
  if (status === "authenticated") {  
   
    return (      
      <>      
      {session.user.acctype=="Manager"? (<Manager/>): session?.user.accounts.length>0 ? (<Carousel/>): (<Choose/>)}    
      </>
    );
  }
  if (loading) {
    return (
       <div className="main-content h-[100vh] flex flex-col justify-center ">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
        <div className="pt-2 text-xl">Page is Loading </div>
    </div>
    );
  }
  
  return null;
}
