import React from 'react'
import logo1 from "../Assets/RBS_Logo.png"
import logo2 from "../Assets/iso.png"
import logo3 from "../Assets/iaf.png"
import logo4 from "../Assets/madeinindia.png"
import logo5 from "../Assets/iso27001.png"
import logo6 from "../Assets/npci-logo.png"

const Partner = () => {
  return (
    <div>
      <div className="bg-[#94a3b8] p-4 overflow-hidden mb-2">
  <div className="flex justify-around animate-marquee">
    <img alt="ISO Certification" src={logo1} className="w-[20rem] h-auto object-cover"/>
    <img alt="ISO 27001" src={logo2} className="w-[10rem] h-auto object-contain"/>
    <img alt="Make in India" src={logo3} className="w-[10rem] h-auto object-contain"/>
    <img alt="NPCI" src={logo4} className="w-[10rem] h-auto object-contain" />
    <img alt="RBS" src={logo5} className="w-[10rem] h-auto object-contain" />
    <img alt="Startup India" src={logo6} className="w-[10rem] h-auto object-contain" />
  </div>
</div>
    </div>
  )
}

export default Partner
