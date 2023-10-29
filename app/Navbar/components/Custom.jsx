import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
   
export function Custom() {
    return (
      <>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl="/sign-in"/>
        </SignedIn>

        <SignedOut>
          {/* Signed out users get sign in button */}
          
          <SignInButton className="btn h-11 w-full justify-between bg-gradient-to-r from-purple-500 to-indigo-600 text-white"/>
        </SignedOut>
      </>
    );
  }