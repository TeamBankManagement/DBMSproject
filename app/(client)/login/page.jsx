'use client'
import React, { useContext,useEffect } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./logins.css";
import { AppContext } from "@/context/AppContext";
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Page () {
  const { data: session ,status} = useSession();
  const { isSignup, setSignup } = useContext(AppContext);
 
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/home");
    }
  }, [])
  
  return (
    <>
      {/* component */}      
      <div className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden">
     
        <div class={`container ${isSignup ? "sign-up-mode" : ""}`}>
          <div class="forms-container">
            <div class="signin-signup">
             
<Signin/>
<Signup/>


            </div>
          </div>
          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button
                  class="btns transparent"
                  id="sign-up-btns"
                  onClick={() => setSignup(!isSignup)}
                >
                  Sign up
                </button>
              </div>
              <img src="images/logsvg.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button
                  class="btns transparent"
                  id="sign-in-btns"
                  onClick={() => setSignup(!isSignup)}
                >
                  Sign in
                </button>
              </div>
              <img src="images/frontsvg.svg" class="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


