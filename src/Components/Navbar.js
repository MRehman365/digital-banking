import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../Assets/Logo_Horizontal.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const storedNavState = localStorage.getItem('navState');
    if (storedNavState === 'open') {
      setNavOpen(true);
    }
  }, []);

  const toggleNav = () => {
    setNavOpen((prevState) => {
      const newState = !prevState;
      localStorage.setItem('navState', newState ? 'open' : 'closed');
      return newState;
    });
  };

  const closeNav = () => {
    setNavOpen(false);
    localStorage.setItem('navState', 'closed');
    setDropdownOpen(null); // Close all dropdowns
  };

  const handleDropdownToggle = (index) => {
    // Check if the current dropdown is open, if so, close it, otherwise open it
    if (dropdownOpen === index) {
      setDropdownOpen(null); // Close the dropdown if it is already open
    } else {
      setDropdownOpen(index); // Open the new dropdown
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-auto py-3 bg-[#1e262d] text-white shadow-md z-50">
      <div className="navbar flex items-center justify-between h-full px-8">
        <FaBars
          className="text-white text-xl cursor-pointer lg:hidden"
          onClick={toggleNav}
        />
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className=" w-[120px]"
            />
          </Link>
        </div>
        <div className={`nav-links fixed top-0 ${navOpen ? 'left-0' : 'left-[-100%]'} lg:static sm:w-[90%] sm:h-[100vh] lg:h-auto lg:w-auto bg-[#1e262d] lg:flex items-center lg:p-0 p-6 transition-all duration-500 z-40`}>
          <div className="sidebar-logo flex items-center justify-between mb-4 lg:hidden">
            <span className="logo-name">
              <img
                src={logo}
                alt="Logo"
                className="w-[100px]"
              />
            </span>
            <FaTimes className="text-white text-xl cursor-pointer" onClick={closeNav} />
          </div>
          <ul className="links flex flex-col lg:flex-row gap-5 lg:space-x-8 space-y-4 lg:space-y-0">
            <li className=''>
              <Link to="/">Home</Link>
            </li>
            {/* <li className="dropdown" onClick={() => handleDropdownToggle(0)}>
              <Link to="/our-practice">API'S <FaChevronDown className="arrow inline-block lg:hidden" /></Link>
              {dropdownOpen === 0 && (
                <ul className="sub-menu mt-2 space-y-2 bg-[#1e262d] lg:absolute lg:mt-0 p-2 lg:w-48 lg:rounded-lg lg:shadow-md">
                  <li>
                    <Link to="/meet-doctor">MEET THE DOCTOR</Link>
                  </li>
                  <li>
                    <Link to="/testimonials">TESTIMONIALS</Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li className="dropdown" onClick={() => handleDropdownToggle(1)}>
              <Link to="#">SERVICES <FaChevronDown className="arrow inline-block lg:hidden" /></Link>
              {dropdownOpen === 1 && (
                <ul className="sub-menu text-[0.8rem] mt-2 space-y-5 bg-[#1e262d] lg:absolute lg:mt-0 p-2 lg:w-48 lg:rounded-lg lg:shadow-md">
                  <li>
                    <Link to="/insurance">INSURANCE</Link>
                  </li>
                  <li>
                    <Link to="/atm">MICRO ATM</Link>
                  </li>
                  <li>
                    <Link to="/whitelable">WHITELABLE SOFTWARE</Link>
                  </li>
                  <li>
                    <Link to="/mlm">MLM DEVELOPMENT</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown" onClick={() => handleDropdownToggle(2)}>
              <Link to="#">PRODUCTS <FaChevronDown className="arrow inline-block lg:hidden" /></Link>
              {dropdownOpen === 2 && (
                <ul className="sub-menu text-[0.8rem] mt-2 space-y-5 bg-[#1e262d] lg:absolute lg:mt-0 p-2 lg:w-48 lg:rounded-lg lg:shadow-md">
                  <li>
                  <Link to="/whitelable">WHITELABLE SOFTWARE</Link>
                  </li>
                  <li>
                  <Link to="/mlm">MLM DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/realestate">REAL ESTATE SOFTWARES</Link>
                  </li>
                  <li>
                    <Link to="/cms">CMS</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown" onClick={() => handleDropdownToggle(3)}>
              <Link to="/contact">CONTACT US </Link>
              
            </li>
            <li className="dropdown" onClick={() => handleDropdownToggle(4)}>
              <Link to="/about">ABOUT US </Link>
              
            </li>
            <li>
              <Link to="/login">SIGN UP/LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
      {navOpen && <div className="overlay fixed inset-0 bg-black opacity-50 lg:hidden" onClick={closeNav}></div>}
    </nav>
  );
};

export default Navbar;
