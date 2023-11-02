import Input from '@/app/(auth)/components/Input'
import { Locksvg } from '@/app/(auth)/components/Svg'
import Epin from '@/app/(epin)/enter-epin/page'
import React from 'react'

const PinModal = ({isOpen,setIsOpen,formData,setFormData,onPinSubmit}) => {
    console.log(formData)
    const handleClose = () => {
        setIsOpen(false);
      }
  return (
    <>
     <div>
  {/* Modal toggle */}
 
  {/* Main modal */}
  {isOpen && <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed flex justify-center items-center   w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full sm:justify-center">
    <div className="relative w-full max-w-md max-h-full">
      {/* Modal content */}
      
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose}>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        {/* <Epin/> */}
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              {/* <Image
                className="mx-auto h-16 w-16"
                src="/images/100x100.png"
                alt="logo"
                width={16}
                height={16}
              /> */}
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                  Welcome Back
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please Enter pin for Transaction
                </p>
              </div>
            </div>
            <div className="card mt-5 rounded-lg p-5 lg:p-7">
           
              <Input
                svgIcon={<Locksvg />}
                title="Enter Pin"
                type="password"
                placeholder="Enter pin"
                name="pass"
                value={formData.epin}
                onChange={(e) => setFormData({ ...formData, epin: e.target.value })}
              />
              <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" onClick={onPinSubmit}>
                Make Payment
              </button>
              
            </div>
            <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
              <a href="#">Privacy Notice</a>
              <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
              <a href="#">Term of service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>}
  
</div>
    </>
  )
}

export default PinModal