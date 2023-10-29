"use client";
import { AppContext } from "@/context/AppContext";
import { SignIn } from "@clerk/nextjs";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";

export default function Page() {
  const {isfetch,setIsfetch} = useContext(AppContext);
    const { status } = useSession();
  if (status === "authenticated") {
    signOut();
    setIsfetch(false);    

  }
  const bgImageStyle = {
    backgroundImage:
      'url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")',
  };

  return (
    <>
      <div
        className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden"
        // style={bgImageStyle}
      >
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}
