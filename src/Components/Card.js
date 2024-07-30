import React from 'react'
import img9 from "../Assets/representation-user-experience-interface-design-smartphone.jpg"
import img10 from "../Assets/insurance.jpeg"
import img11 from "../Assets/miniaa.jpeg"

const Card = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around gap-3 p-4 mt-10">
              <div className="max-w-md rounded-lg  bg-card shadow-md transform hover:scale-105 transition-all ">
                <img className="rounded-t-lg w-full h-auto" src={img9} alt="DMT Service" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-foreground">DMT</h2>
                  <p className="text-[#374151] leading-relaxed">
                    DMT is a cash-to-bank-account remittance service provided by business correspondents. A retailer can provide Planet C Technology domestic money transfer (DMT) service from their shop and
                    help customers transfer money to any nationalised and private banks that operate in India and support NEFT/IMPS.
                  </p>
                  <div className="mt-4">
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#DMT</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#Bankopen</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#Planettechnology</span>
                  </div>
                </div>
              </div>
              <div className="max-w-md rounded-lg  bg-card shadow-md transform hover:scale-105 transition-all">
                <img className="rounded-t-lg w-full h-auto" src={img10} alt="Insurance Service" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-foreground">Insurance</h2>
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
              <div className="max-w-md rounded-lg  bg-card shadow-md transform hover:scale-105 transition-all">
                <img className="rounded-t-lg w-full h-auto" src={img11} alt="Micro ATM" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-foreground">Micro ATM</h2>
                  <p className="text-[#374151] leading-relaxed">
                    Micro ATM is a device for Business Correspondents (BC) to deliver essential banking services to customers. These Correspondents, who could be a small store owner, will serve as a 'micro
                    ATM' to conduct instant transactions. They will use a device that will let you transfer money via your Aadhaar linked bank account by merely authenticating your fingerprint.
                  </p>
                  <div className="mt-4">
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#AEPS Payment</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#UPI</span>
                    <span className="text-black bg-[#e5e7eb] rounded-full py-1 px-2 ml-2 text-[0.8rem]">#Recharge</span>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Card
