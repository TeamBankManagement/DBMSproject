"use client";
import React, { useEffect, useState } from 'react';
import Serivice from './components/Serivice';
import Footer from '@/app/Navbar/Footer';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    '/Images/slide1.png',
    '/Images/slide2.png',
    '/Images/slide3.png',
  ];
  const serviceItems = [
    {
      id: 1,
      title: 'Account Details',
      imageSrc: '/Images/service1.svg',
      to:'account-transaction'
    },
    {
      id: 2,
      title: 'Payment to Mobile',
      imageSrc: '/Images/service2.svg',
      to:'/transaction'
    },
    {
      id: 3,
      title: 'Payment to Bank',
      imageSrc: '/Images/service3.svg',
      to:'/transaction'
    },
    {
      id: 4,
      title: 'Transaction History',
      imageSrc: '/Images/service4.svg',
      to:'/account-transaction'
    },
    {
      id: 5,
      title: 'Internet Banking',
      imageSrc: '/Images/service5.svg',
      to:'/comingsoon'
    },
    {
      id: 6,
      title: 'Offer',
      imageSrc: '/Images/service6.svg',
      to:'/comingsoon'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
const {status} = useSession();
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change the interval as needed (3000ms = 3 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  if (status === "authenticated") {

    return (
      <>
    <div class="main-content w-full px-[var(--margin-x)] pb-8">
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}
            data-carousel-item
          >
            <Image
            width={1600}
            height={800}
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"  onClick={goToPrevSlide}>
      <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"  onClick={goToNextSlide}>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
    </div>
      <Serivice serviceItems={serviceItems} title="Account & Payments"/>
      <Serivice serviceItems={serviceItems} title="Loan Service"/>
     
      <Footer/>
    </div>
    </>
    )
  }
  if (status === "unauthenticated") {

    redirect("/signin");
  }




}

export default Carousel;
