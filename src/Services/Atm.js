import React from 'react'
import img1 from '../Assets/miniaa.jpeg'

const Atm = () => {
  return (
    <div className='mt-[70px]'>
       <div class="flex flex-col md:flex-row items-center p-8 bg-background">
        <div class="md:w-1/2">
          <h1 class="text-4xl font-bold sm:text-center md:text-left">
          Micro ATM
          </h1>
          <p class="mt-4 text-justify text-[#6b7280]">
          Micro ATM is a device for Business Correspondents (BC) to deliver essential banking services to customers.These Correspondents,who could even be a local store owner, will serve as a ‘micro ATM’ to conduct instant transactions. They will use a device that will let you transfer money via your Aadhaar linked bank account by merely authenticating your fingerprint.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            aria-hidden="true"
            alt="mobile banking interface"
            className="sm:w-[100%] md:w-[80%] h-auto"
            src={img1}
          />
        </div>
      </div>
    </div>
  )
}

export default Atm
