'use client'
import { useUser } from "@clerk/nextjs";
 
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
 
  if (!isLoaded) {
    return null;
  }
  
 console.log(user);

  if (isSignedIn) {
    return <div className="main-content">Hello {user.fullName}!</div>;
  }
 
  return <div>Not signed in</div>;
}
 