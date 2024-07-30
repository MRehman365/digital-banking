import React from "react";
import img1 from "../Assets/45106.jpg";
import img2 from "../Assets/3d-render-money-transfer-mobile-banking-online.jpg";
import { GiThreeFriends } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import {
  FiShield,
  FiHeart,
  FiAnchor,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-background">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold sm:text-center md:text-left">
            About Us
          </h2>
          <p className="mt-4 text-[#6b7280] leading-relaxed sm:text-center md:text-left">
            Planet C Technology is driven by a vision to grow and lead digital
            banking as a service in the country with its financial super App
            NYE. Whether you’re a consumer, a retailer, or an MSME, you can bank
            upon us. For consumers, we offer a wide suite of banking & financial
            services, and for businesses, we have assisted payment services, POS
            solutions, and MSME loans.
          </p>
        </div>
        <div className="md:w-1/2 flex md:mt-0 lg:max-w-lg">
          <img
            undefinedhidden="true"
            alt="Mobile banking illustration"
            src={img1}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <section className="py-12 bg-background p-4">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            We are focused
          </h2>
          <p className="text-[#6b7280] mb-8 md:w-[60%] mx-auto leading-relaxed">
            24x7, We Endeavour to influence Planet C service modules by riding
            on the advantage of IT innovations. We work towards creating a
            technological environment that delivers high performance, saves time
            & money, and higher customer satisfaction within the service
            sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 border rounded-lg bg-card">
              <GiThreeFriends size={35} className="text-[#6875f5]" />{" "}
              <h3 className="text-xl font-semibold text-foreground mt-2">
                2.7K
              </h3>
              <p className="text-[#6b7280]">Partners</p>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg bg-card">
              <FaUsers size={35} className="text-[#6875f5]" />
              <h3 className="text-xl font-semibold text-foreground mt-2">
                35+K
              </h3>
              <p className="text-[#6b7280]">Users</p>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg bg-card">
              <FaDatabase size={35} className="text-[#6875f5]" />
              <h3 className="text-xl font-semibold text-foreground mt-2">
                9+L
              </h3>
              <p className="text-[#6b7280]">Data</p>
            </div>

            <div className="flex flex-col items-center p-4 border rounded-lg bg-card">
              <RiSecurePaymentLine size={35} className="text-[#6875f5]" />{" "}
              <h3 className="text-xl font-semibold text-foreground mt-2">
                100%
              </h3>
              <p className="text-[#6b7280]">Security</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
        <div className="relative w-full md:w-1/2 flex flex-col space-y-6">
          {/* Vertical Line */}
          <div className="absolute left-5 top-[7%] bottom-[12%] w-[2px] bg-gray-300"></div>

          {/* Integrity */}
          <div className="flex items-start space-x-4 relative">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10">
              <FiShield />
            </div>
            <div>
              <h3 className="text-lg font-bold">Integrity</h3>
              <p
                className="text-[#6b7280] leading-relaxed"
                about="1">
                We endorse honesty in all our actions.
              </p>
            </div>
          </div>

          {/* Trust */}
          <div className="flex items-start space-x-4 relative">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10">
              <FiHeart />
            </div>
            <div>
              <h3 className="text-lg font-bold">Trust</h3>
              <p className="text-[#6b7280] leading-relaxed">
                We honour the promises made to you.
              </p>
            </div>
          </div>

          {/* Customer First */}
          <div className="flex items-start space-x-4 relative">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10">
              <FiAnchor />
            </div>
            <div>
              <h3 className="text-lg font-bold">Customer First</h3>
              <p className="text-[#6b7280] leading-relaxed">
                We place our customers at the heart of what we do.
              </p>
            </div>
          </div>

          {/* Transparency */}
          <div className="flex items-start space-x-4 relative">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10">
              <FiUser />
            </div>
            <div>
              <h3 className="text-lg font-bold">Transparency</h3>
              <p className="text-[#6b7280] leading-relaxed">
                We take pride in communicating our beliefs and decisions with
                complete openness.
              </p>
            </div>
          </div>

          {/* Finish */}
          <div className="flex items-start space-x-4 relative">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10">
              <FiCheckCircle />
            </div>
            <div>
              <h3 className="text-lg font-bold">FINISH</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Pitchfork ugh tattooed scenester echo park gastropub whatever
                cold-pressed retro.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img src={img2} alt="Illustration" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around p-4 bg-background mb-2">
        <div className="text-center md:w-1/3 px-6">
          <h3 className="font-bold text-lg">API</h3>
          <p className="text-[#6b7280] leading-relaxed">
            Planettechnology Provide Api Recharge, Aeps, Dmt, Nsdl Pan, Uti Pan,
            Payout, PG, Fastag, CMS etc:
          </p>
          <div className="w-full bg-border h-1 my-2">
            <div className="bg-[blue] h-[2px] w-[80px] mx-auto"></div>
          </div>
          <span className="text-sm text-[#6b7280] leading-relaxed">
            ALL API
          </span>
        </div>
        <div className="text-center md:w-1/3 px-6">
          <h3 className="font-bold text-lg">UI/UX</h3>
          <p className="text-[#6b7280] leading-relaxed">
            Rated one of the best UI/UX design companies in India, humanizing
            technology for product adoption & retention
          </p>
          <div className="w-full bg-border h-1 my-2">
            <div className="bg-[blue] h-[2px] w-[80px] mx-auto"></div>
          </div>
          <span className="text-sm text-[#6b7280] leading-relaxed">
            UI Developer
          </span>
        </div>
        <div className="text-center md:w-1/3 px-6">
          <h3 className="font-bold text-lg">Android Development</h3>
          <p className="text-[#6b7280] leading-relaxed">
            We develop, maintain and update customized Data-Centric Applications
            that are 100% secure
          </p>
          <div className="w-full bg-border h-1 my-2">
            <div className="bg-[blue] h-[2px] w-[80px] mx-auto"></div>
          </div>
          <span className="text-sm text-[#6b7280] leading-relaxed">
            APP Develop
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
