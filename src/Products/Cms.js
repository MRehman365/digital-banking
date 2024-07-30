import React from 'react'

const Cms = () => {
  return (
    <div className='mt-[70px]'>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#17163d] to-black text-white py-[140px]">
              <h1 className="text-6xl font-extrabold text-white mb-2 drop-shadow-lg">Developer Tools</h1>
              <h2 className="text-6xl font-bold text-center text-[#0ea5e9] mb-4 drop-shadow-md md:w-[60%]">from Centers for Medicare & Medicaid Services</h2>
              <p className="mt-4 text-zinc-200 text-center max-w-md">
                Leverage our collection of APIs, undefinedsets, frameworks, and style guides to create applications that empower individuals to access the services and benefits they depend on.
              </p>
              <button className="mt-8 bg-[#0ea5e9] text-white hover:bg-blue-700 px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Try Now →
              </button>
            </div>
    </div>
  )
}

export default Cms
