'use client'
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { data: session ,status} = useSession();
 const {setImage}=useContext(AppContext);
  if (status === "authenticated") {
    setImage(session.user.image);
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

    redirect("/login");
  }


  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-900">


      </div>
    </>
  )
}
