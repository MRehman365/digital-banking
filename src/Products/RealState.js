import React from 'react'
import { Link } from 'react-router-dom'

const RealState = () => {
  return (
    <div className='mt-[90px]'>
      <div className="flex flex-col items-center justify-center mt-[50px]">
              <h1 className="text-5xl font-bold">
                <span className="text-primary">Real Estate</span> <span className="text-[#ff8a4c]">App</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-center md:w-[50%]">
                Want to style up your photos? Maybe get that perfect LinkedIn headshot? Let our AI do its magic and replace your background with your color of choice. 100% free - pop your photos today.
              </p>
              <Link to='/contact'><button className="mt-6 bg-black text-white px-4 py-2 rounded-lg">
                Contact Us
              </button></Link>
            </div>

            <div className="bg-gradient-to-b from-black to-[#200101] p-8 rounded-lg mt-5">
              <h2 className="text-4xl font-extrabold text-white mb-4">WHY CHOOSE US</h2>
              <h3 className="text-2xl font-semibold text-white mb-6">What is A CRM in Real Estate?</h3>
              <p className="text-zinc-200 mb-8">
                CRM software for real estate developers, built exclusively for the industry can easily streamline the management of leads from multiple sources, define project details, keep a detailed record
                of enquiries, generate sale documents and provide unique insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <img undefinedhidden="true" alt="Best CRM for Real Estate" src="https://openui.fly.dev/openui/24x24.svg?text=🏢" className="w-12 h-12" />
                    <h4 className="text-xl font-bold text-white ml-2">Best CRM for Real Estate</h4>
                  </div>
                  <p className="text-zinc-300">
                    The best CRM for real estate is a one-window centralized platform that acts as an empowerment tool for the sales and marketing teams by equipping them with the automation of various
                    pre-sales and sales activities.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <img undefinedhidden="true" alt="Pre-Sales Management & Reporting" src="https://openui.fly.dev/openui/24x24.svg?text=📊" className="w-12 h-12" />
                    <h4 className="text-xl font-bold text-white ml-2">Pre-Sales Management & Reporting</h4>
                  </div>
                  <p className="text-zinc-300">Track all pre-sales activities and campaign performance. With the CRM software for Real Estate Sales, you can...</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <img undefinedhidden="true" alt="Sales Management & Reporting" src="https://openui.fly.dev/openui/24x24.svg?text=📈" className="w-12 h-12" />
                    <h4 className="text-xl font-bold text-white ml-2">Sales Management & Reporting</h4>
                  </div>
                  <p className="text-zinc-300">Manage documentation and nurture customer relationships. With the real estate sales CRM, you can...</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default RealState
