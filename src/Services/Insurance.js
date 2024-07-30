import React from 'react'
import img10 from "../Assets/insurance.jpeg"

const Insurance = () => {
  return (
    <div className='mt-[70px]'>
      <div className="w-[full] rounded-lg  bg-card shadow-md px-4">
                <img className=" w-full h-[80vh] object-cover" src={img10} alt="Insurance Service" />
                <div className="p-4">
                  <h2 className="text-4xl font-bold text-[#8821cd]">Insurance</h2>
                  <p className="text-[#374151] leading-relaxed">
                    With Planet C Technology, a retailer gets a chance to be part of a growing insurance network and help customers navigate insurance product uncertainties. They can provide a wide range of
                    insurance products like 2-wheeler insurance, commercial insurance, and shop insurance and hospitality directly from their shop.
                  </p>
                  <div className="mt-4">
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#Pancard</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#BBPS</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#Loan</span>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Insurance
