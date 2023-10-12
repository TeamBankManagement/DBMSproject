'use client'
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { data: session ,status} = useSession();
 const {setImage,setId }=useContext(AppContext);
  if (status === "authenticated") {

    return (
      <>
        <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>        
      </>
    )
  }
  if (status === "unauthenticated") {

    redirect("/signin");
  }


  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-900">


      </div>
    </>
  )
}
