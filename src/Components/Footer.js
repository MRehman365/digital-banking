import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-card text-card-foreground p-6">
              <div className=" mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">SERVICES</h3>
                  <ul className="mt-2">
                    <li><Link to='/atm'>Micro ATM</Link></li>
                    <li><Link to='/whitelable'>Whitelable Software</Link></li>
                    <li><Link to='/mlm'>MLM Development</Link></li>
                    <li><Link to='/insurance'>Insurance</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Products</h3>
                  <ul className="mt-2">
                    <li><Link to='/whitelable'>Whitelable Software</Link></li>
                    <li><Link to='/realestate'>Real Estate Software</Link></li>
                    <li><Link to='/mlm'>MLM Development</Link></li>
                    <li><Link to='/cms'>CMS</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Popular</h3>
                  <ul className="mt-2">
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/whitelable'>Whitelable software</Link></li>
                    <li><Link to='/atm'>Micro ATM</Link></li>
                    <li><Link to='/realestate'>Real Estate Software</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Genral</h3>
                  <ul className="mt-2">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm mt-2">© 2018 Designed and Developed by PlanetC Technology</p>
                <div className="flex justify-center space-x-4 mt-2">
                  
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
