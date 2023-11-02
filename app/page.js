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
import Loading from "./components/Loading";
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser(); 
  const { data: session, status } = useSession();
  const {isfetch,setIsfetch} = useContext(AppContext);
  const { currentUser, loading } = useSelector((state) => state.userData);
  const dispatch = useDispatch(); 
useEffect(() => {
 console.log("Hiranmoy");
  if(!isLoaded){
    if(!isSignedIn){
      redirect("/sign-in");
    }
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
    return <Loading/>
  }
  if (status === "authenticated") {  
   
    return (      
      <>      
      {session && session.user.acctype=="Manager"? (<Manager/>): session?.user.accounts.length>0 ? (<Carousel/>): (<Choose/>)}    
      </>
    );
  }
  if (loading) {
    return (
       <Loading/>
    );
  }
  
  return null;
}
