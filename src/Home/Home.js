import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/heroimg.jpg";
import img2 from "../Assets/person-paying.jpg";
import img3 from "../Assets/aeps_index.jpg";
import img4 from "../Assets/app_pg.jpg";
import img5 from "../Assets/dmt.jpg";
import img6 from "../Assets/pan_index.jpg";
import img7 from "../Assets/6204100.jpg"
import img8 from "../Assets/revenue-operation-collage.jpg"
import { BsActivity } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { LuPieChart } from "react-icons/lu";
import Partner from "../Components/Partner";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div className="mt-[70px]">
      <div class="flex flex-col md:flex-row items-center p-8 bg-background">
        <div class="md:w-1/2">
          <h1 class="text-4xl font-bold text-center">
            Digital Banking as a Services
          </h1>
          <p class="mt-4 text-justify text-[#6b7280] leading-relaxed">
            Planet C Technology Payments has developed a Unified Open API
            Platform to revolutionize the way Digital India transacts and
            increase UI engagement, and monetary collections. Thousands of
            company entrusts our banking, finance, and verification API product
            suites that are extensive and sophisticated.
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
      <div className="flex flex-col md:flex-row p-6 bg-card rounded-lg">
        <div className="flex-1 mb-4 md:mr-4">
          <img
            undefinedhidden="true"
            alt="mobile-payment"
            src={img2}
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-10 mt-10 sm:p-2 md:p-6">
          <div className="flex flex-col gap-3 sm:items-center md:items-start sm:text-center md:text-start">
            <div className=" bg-[#e5edff] p-3 rounded-full w-fit">
              <BsActivity size={22} className="text-[#6875f5]" />
            </div>
            <h2 className="text-lg font-semibold text-primary">
              Digital Payment
            </h2>
            <p className="text-muted-foreground mb-1 text-[#374151] leading-relaxed">
              Digital payments are transactions that take place via digital or
              online modes, with no physical exchange of money involved. This
              means that both parties, the payer and the payee, use electronic
              mediums to exchange money.
            </p>
            <Link className="text-[#888df6]">Learn More</Link>
          </div>
          <div className="flex flex-col gap-3 sm:items-center md:items-start sm:text-center md:text-start">
            <div className=" bg-[#e5edff] p-3 rounded-full w-fit">
              <LuPieChart size={22} className="text-[#6875f5]" />
            </div>
            <h2 className="text-lg font-semibold text-primary ">UPI</h2>
            <p className="text-muted-foreground mb-1 text-[#374151] leading-relaxed">
              UPI is a payment system that culminates numerous bank accounts
              into a single application, allowing the transfer of money easily
              between any two parties. As compared to NEFT, RTGS, and IMPS, UPI
              is far more well-defined and standardized across banks. You can
              use UPI to initiate a bank transfer from anywhere in just a few
              clicks.
            </p>
            <Link className="text-[#888df6]">Learn More</Link>
          </div>
          <div className="flex flex-col gap-3 sm:items-center md:items-start sm:text-center md:text-start">
            <div className=" bg-[#e5edff] p-3 rounded-full w-fit">
              <GoPerson size={22} className="text-[#6875f5]" />
            </div>
            <h2 className="text-lg font-semibold text-primary ">BBPS</h2>
            <p className="text-muted-foreground mb-1 text-[#374151] leading-relaxed">
              Retailers can open new gateways for their business by providing a
              wide range of BBPS services using Planet C Technology portal or
              app. They can make their shop a one-stop solution for all bill
              payments like electricity, telecom, gas, water, FasTag recharge
              and many more. Not just bill payments, Planet C Technology agents
              (DBOs) can also provide mobile and DTH service providers' recharge
              plans to their consumers. All major mobile and DTH service
              providers' recharge plans are available.
            </p>
            <Link className="text-[#888df6]">Learn More</Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <img
              undefinedhidden="true"
              alt="Pan Card"
              src={img4}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">Pan Card</h2>
            <p className="text-muted-foreground text-[#374151] leading-relaxed">
              UTI Infrastructure Technology And Services Limited (UTITSL) is a
              government-owned firm in India that provides financial services.
              The firm provides services like mutual fund distribution, medical
              bill processing (CGHS, ECHS, etc.), and more on behalf of the
              Income Tax Department. You can apply for PAN card or track your
              PAN application.
            </p>
          </div>

          <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <img
              undefinedhidden="true"
              alt="BBPS"
              src={img5}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">BBPS</h2>
            <p className="text-[#374151] leading-relaxed">
              Retailers can open new gateways for their business by providing a
              wide range of BBPS services using Planet C Technology portal or
              app. They can make their shop a one-stop solution for all bill
              payments like electricity, telecom, gas, water, FasTag recharge
              and many more.
            </p>
          </div>

          <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <img
              undefinedhidden="true"
              alt="AePS"
              src={img6}
              className="mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold">AePS</h2>
            <p className="text-[#374151] leading-relaxed">
              AePS is a secure and user-friendly system through which the user
              can make payments simply by providing Aadhaar verification at
              different locations like point of sale or micro ATMs. The AePS
              machine works similar to the Point of Sale machine but instead of
              using a debit or credit card, the retailer needs to enter the
              customer’s Aadhaar number and biometric information.
            </p>
          </div>

          <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <img
              undefinedhidden="true"
              alt="Internet Banking"
              src={img3}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">Internet Banking</h2>
            <p className="text-[#374151] leading-relaxed">
              Internet Banking, also known as e-banking or online banking,
              allows the customers of a particular bank to make transactions and
              conduct other financial activities via the bank's website. It has
              become one of the most popular means of online transactions, NEFT,
              RTGS, or IMPS.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-6 bg-background rounded-lg">
                  <div className="flex flex-col items-center md:w-1/2 p-4">
                  <div className="h-[16rem] w-full mb-4 ">
                    <img src={img7} alt="Wallet" className="rounded-lg  h-full w-full object-cover" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Wallet</h2>
                    <p className="text-[1rem] text-center leading-relaxed text-[#374151]">
                      Nowadays, many banks have launched their wallets. Additionally, notable private companies have also established their presence in the Mobile Wallet space.<br/> Some popularly used ones include Paytm, Freecharge, Mobikwik, mrupeey, electricity, Vodafone-Airtel Money, Jio Money, SBI Buddy, Vodafone M-Pesa, Axis Bank Lime, ICICI Pockets, etc.
                    </p>
                  </div>
                  <div className="flex flex-col items-center md:w-1/2 p-4">
                  <div className="h-[16rem] w-full mb-4">
                    <img src={img8} alt="Loan" className=" rounded-lg  h-full w-full object-cover" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Loan</h2>
                    <p className="text-[1rem] text-center leading-relaxed text-[#374151]">
                      There are times when a retailer requires emergency funds to run his business efficiently, which he may not be able to manage from his current cash flows. This is when our business loans come in handy. Planet C Technology business loan helps its agents bridge these cash flow gaps. Our retailers can avail of business loans to support their existing enterprises or start a new venture. Our pre-approved business loans are easy on the pocket with low-interest rates and are provided based on the retailer’s eligibility. Our retailers also enjoy the flexibility of making their loan repayments online seamlessly saving one from the hassles of manual submission.
                    </p>
                  </div>
                </div>

                <Card/>
            <Partner/>
    </div>
  );
};

export default Home;
