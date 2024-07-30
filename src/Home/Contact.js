import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='mt-[70px]'>
      <div className='flex flex-col items-center p-2'>
      <h2 className='text-black text-4xl font-extrabold'>Contact Us</h2>
      <p className='text-lg text-[#6b7280]'>Please use the form below to contact us. Thank you!</p>
      <form action="" className='sm:w-full md:w-[40%] flex flex-col gap-3'>
      <label htmlFor="name" className='text-sm text-[#374151] font-medium'>Name</label>
      <input type='text' id='name' className='py-2 px-2 border border-[gray] rounded-md active:border-[blue] mb-2' placeholder='Name' />
      <label htmlFor="email" className='text-sm text-[#374151] font-medium'>Email</label>
      <input type='email' id='email' className='py-2 px-2 border border-[gray] rounded-md active:border-[blue] mb-2' placeholder='Email' />
      <label htmlFor="number" className='text-sm text-[#374151] font-medium'>Phone Number</label>
      <input type="number" id='number' className='py-2 px-2 border border-[gray] rounded-md active:border-[blue] mb-2' placeholder='Phone Number' />
      <label htmlFor="message" className='text-sm text-[#374151] font-medium'>Message</label>
      <textarea name="" className='py-2 px-2 border border-[gray] rounded-md active:border-[#0ea5e9] mb-2' id="message"></textarea>
      <button className='bg-white border border-[#0ea5e9] text-[#0ea5e9] w-fit px-4 py-1 rounded-md'>Submit</button>
      </form>
      </div>

      <div className="flex flex-col items-start mb-3 space-y-4 p-6 bg-white dark:bg-card rounded-lg sm:w-full md:w-[80%] mx-auto">
              <div className="flex items-start">
                <div className="bg-[#2196f3] text-white rounded-full p-3">
                <IoLocationOutline size={22}/>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-[#6b7280]">A-3 Jhariya complex noida uttar pradesh 202001 Branch Office: B-9 Ramghat Road, Vikram Colony Near Chawla Petrol Pump Aligarh, Uttar Pradesh – 202001</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2196f3] text-white rounded-full p-3">
                <MdOutlineEmail size={22}/>                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-[#6b7280]">support@planettechnology.com</p>
                </div>
              </div>
        
              <div className="flex items-center">
                <div className="bg-[#2196f3] text-white rounded-full p-3">
                <FaPhoneAlt size={22}/>                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-[#6b7280]">8006478964</p>
                </div>
              </div>
        
              <div className="flex items-center">
                <div className="bg-[#2196f3] text-white rounded-full p-3">
                <FaAddressCard size={22}/>                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">CIN</h3>
                  <p className="text-[#6b7280]">U58200UP2023PTC191897</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contact
