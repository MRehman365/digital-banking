import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import img9 from "../Assets/representation-user-experience-interface-design-smartphone.jpg"
import img10 from "../Assets/insurance.jpeg"
import img11 from "../Assets/miniaa.jpeg"
import Partner from '../Components/Partner';
import Card from '../Components/Card';

const Whitetable = () => {
  return (
    <div className='mt-[70px]'>
     <div className="container mx-auto p-6">
              <h1 className="text-4xl font-extrabold text-center text-primary mb-4">Whitelable Software</h1>
              <p className="text-center text-muted-foreground text-lg mb-8">Creating Your Business Ideas With Right Software</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">API Services</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">NSDL</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">Bill Payment</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">DMT Software</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">Loan</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">BBPS</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">AePS</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">Credit Card Payment</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">Recharge Software</span>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] p-2 rounded-md transition-transform transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-[#6d7af5] text-2xl mr-2"><FiCheckCircle /></span>
                    <span className="text-muted-foreground text-md font-semibold">CMS API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Digital Payment Solution
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-[#374151] leading-relaxed">
          Start your own recharge business anywhere in the world using corporate
          multi-recharge software by Planet Recharge. This enterprise software
          gives you the freedom to manage unlimited retailers and distributors.
          A complete automatic Flexi distribution software that fulfills all
          your requirements includes bill payment API, recharge API,
          multi-recharge software, long code, and bulk SMS API. Business
          Expertise Delivered In A Small Wonder of Recharge Xpress software by
          Planet Recharge.
        </p>
        </div>
        <div className="flex flex-wrap justify-around gap-3 p-4 mt-10">
              <div className="max-w-md rounded-lg  bg-card   ">
                <img className="rounded-t-lg w-full h-auto" src={img9} alt="DMT Service" />
                <div className="">
                  <h2 className="text-xl font-semibold text-foreground">DMT</h2>
                  <p className="text-[#374151] leading-relaxed">
                    DMT is a cash-to-bank-account remittance service provided by business correspondents. A retailer can provide Planet C Technology domestic money transfer (DMT) service from their shop and
                    help customers transfer money to any nationalised and private banks that operate in India and support NEFT/IMPS.
                  </p>
                  <div className="mt-4">
                    <span className="text-[#8821cd] rounded-full text-[1rem]">Learn More</span>
                  </div>
                </div>
              </div>
              <div className="max-w-md rounded-lg  bg-card  ">
                <img className="rounded-t-lg w-full h-auto" src={img10} alt="Insurance Service" />
                <div className="">
                  <h2 className="text-xl font-semibold text-foreground">Insurance</h2>
                  <p className="text-[#374151] leading-relaxed">
                    With Planet C Technology, a retailer gets a chance to be part of a growing insurance network and help customers navigate insurance product uncertainties. They can provide a wide range of
                    insurance products like 2-wheeler insurance, commercial insurance, and shop insurance and hospitality directly from their shop.
                  </p>
                  <div className="mt-4">
                  <span className="text-[#8821cd] rounded-full text-[1rem]">Learn More</span>
                  </div>
                </div>
              </div>
              <div className="max-w-md rounded-lg  bg-card  ">
                <img className="rounded-t-lg w-full h-auto" src={img11} alt="Micro ATM" />
                <div className="">
                  <h2 className="text-xl font-semibold text-foreground">Micro ATM</h2>
                  <p className="text-[#374151] leading-relaxed">
                    Micro ATM is a device for Business Correspondents (BC) to deliver essential banking services to customers. These Correspondents, who could be a small store owner, will serve as a 'micro
                    ATM' to conduct instant transactions. They will use a device that will let you transfer money via your Aadhaar linked bank account by merely authenticating your fingerprint.
                  </p>
                  <div className="mt-4">
                  <span className="text-[#8821cd] rounded-full text-[1rem]">Learn More</span>
                  </div>
                </div>
              </div>
            </div>
            <Partner/>
            <Card/>
    </div>
  )
}

export default Whitetable
