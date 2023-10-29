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
 
  if (!isLoaded) {
    return null;
  }

}, [])
if(!session){
 
  if (status === "unauthenticated"){
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
  }
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
      <div className="main-content">
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return null;
}
