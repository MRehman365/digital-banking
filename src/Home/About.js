import React from "react";
import img1 from "../Assets/45106.jpg";
import { GiThreeFriends } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-background">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold sm:text-center md:text-left">About Us</h2>
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
    </div>
  );
};

export default About;
