import React from 'react'

const ComingSoon = () => {
  return (
        <>
        <div class="min-h-screen flex flex-col justify-center items-center">
        <img src="/Images/2.jpg" alt="Logo" class="object-cover w-52 h-52 mb-8 rounded-full"/>
        <h1 class="text-6xl font-mono mb-4 text-cyan-100 ">Coming Soon</h1>
        <p class="text-2xl font-serif mb-8 px-4 md:px-0 text-sky-100 ">We are working hard to bring you something awesome !</p>
        <div class="flex justify-center items-center space-x-4">
            <a href="#" class="bg-purple-400 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Homepage</a>
            <a href="#" class="bg-blue-400 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</a>
        </div>
        <img  class="absolute z-[-10] object-cover" src="/Images/1.jpg" alt="beach"/>
           </div>
</>
  )
}

export default ComingSoon