import React from 'react'
import img1 from '../Assets/mlmdevp.png'
import { SiJirasoftware } from "react-icons/si";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import Partner from '../Components/Partner';

const Mlm = () => {
  return (
    <div className='mt-[70px]'>
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary">MLM DEVELOPMENT</h2>
                <p className="mt-4 text-[#6b7280] leading-relaxed">
                  Planet C Technology is the leading Software Solution provider in the domain of Direct Selling, E-Commerce, Non-Banking and Finance, Retail Management and Mobile Solutions – Worldwide.
                </p>
                <button className="mt-6 inline-block bg-[white] w-fit border border-[#8821cd] text-[#8821cd] hover:bg-[#8821cd] hover:text-white transition-all  py-2 px-4 rounded-lg">
                  Contact Us
                </button>
              </div>
              <div className="flex-1">
                <img undefinedhidden="true" alt="network-illustration" src={img1} className="w-full h-full object-cover" />
              </div>
            </div>



            <div className="max-w-6xl mx-auto p-6 mt-11">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What Can You Expect From a World-Class MLM Software Development Company?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <SiJirasoftware size={22} className='text-[#8821cd]'/>                    <h3 className="text-lg font-semibold text-foreground ml-2">Fully Equipped MLM Software</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">
                    PlanetCTechnology is characterized by the presence of most recent features such as Multi-Language, Multi-Currency, Website Replication, CMS enabled Website and E-commerce Integration.
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <TbArrowAutofitHeight size={22} className='text-[#8821cd]' />                    <h3 className="text-lg font-semibold text-foreground ml-2">Enhanced Productivity</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">
                    PlanetCTechnology focuses on aspects such as search engine optimization, full-fledged integration and extensive customization to give you an unmatched experience.
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <IoMailOutline size={22}  className='text-[#8821cd]' />                    <h3 className="text-lg font-semibold text-foreground ml-2">Service Assurance</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">
                    We make certain that our clients get timely and quality maintenance and support services incessantly. We believe in the speedy resolution of technical and administrative issues reported by
                    customers using advanced mechanisms.
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <CgMenuGridR size={22}  className='text-[#8821cd]' />                    <h3 className="text-lg font-semibold text-foreground ml-2">Guaranteed Returns on Investment</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">
                    PlanetCTechnology is promoted as one of the leading MLM software developers, which guarantee to give positive returns on your investment in Ventaforce.
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <AiOutlineSecurityScan size={22} className='text-[#8821cd]' />                    <h3 className="text-lg font-semibold text-foreground ml-2">High-Level Security</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">
                    Our software is equipped with 7 level security methodology to ensure undefined security. Our disaster management methodology is agile and can be executed at a rapid pace.
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow border border-[#8821cd] transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                  <BsBox size={22} className='text-[#8821cd]' />                    <h3 className="text-lg font-semibold text-foreground ml-2">Top-Notch Quality</h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">Being a premier MLM software development company believes in excellence and remains committed to delivering value for money to its clients.</p>
                </div>
              </div>
            </div>
            <Partner/>
    </div>
  )
}

export default Mlm
