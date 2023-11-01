import React, { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LandingPageNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const NavLinkStyle =
    'hover:text-[#f7931e] flex gap-2 items-center text-white text-[18px] font-light';

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const NavArray = ['Feature', 'Pricing', 'FAQ'];

  return (
    <nav className="py-6 w-screen">
      <div className="w-full h-[70px] p-5 lg:p-0 max-w-[1280px] mx-auto flex justify-between items-center ">
        {/* Section 1 */}
        <div className="flex items-center justify-between w-full my-2">
          {/* Logo */}
          <div className="w-36 h-[50px] flex items-center">
            <img
              src="/assets/SuperflexSmallLogo.svg"
              alt=""
              className="object-cover"
            />
            <div className="gap-[42px] ml-[85px] hidden lg:flex">
              {NavArray.map((value, index) => (
                <Link
                  key={index}
                  to={`#${value}`}
                  onClick={() => {
                    toggleMobileDropdown();
                  }}
                >
                  <a
                    className={`${NavLinkStyle} ${
                      currentURL.includes(`${value}`)
                        ? 'text-[#f7931e]'
                        : 'text-white'
                    }`}
                  >
                    {value}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Burger Menu */}
          <div className="lg:hidden flex gap-2 items-center">
            <button
              onClick={toggleMobileDropdown}
              type="button"
              className="text-white focus:outline-none"
            >
              <RxHamburgerMenu className="text-2xl text-white" />
            </button>
          </div>

          {/* Section 2 */}
          <div className="hidden lg:flex relative gap-[50px] items-center">
            <button
              onClick={() => {
                navigate('sign-in');
              }}
              type="button"
              className="border text-white w-[80px] h-[38px] rounded-[10px]  hover:border-[#E27A00] hover:text-[#E27A00] focus:outline-none "
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate('sign-up');
              }}
              type="button"
              className="text-white w-[114px] h-[38px] font-light text-base rounded-[10px] bg-[#F65B0B] hover:bg-[#E34F0A] focus:outline-none"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileDropdownOpen && (
        <div className="lg:hidden mt-2 w-full bg-[#1e1e1e] brightness-[115%] bg-opacity-90 border-t border-b flex flex-col gap-2 py-5 px-4">
          {NavArray.map((value, index) => (
            <Link
              key={index}
              to={`#${value}`}
              onClick={() => {
                toggleMobileDropdown();
              }}
            >
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes(`${value}`)
                    ? 'text-[#f7931e]'
                    : 'text-white'
                }`}
              >
                {value}
              </a>
            </Link>
          ))}
          <Link
            to={`sign-in`}
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a className={`${NavLinkStyle} `}>Login</a>
          </Link>
          <Link
            to={`sign-up`}
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a className={`${NavLinkStyle} `}>Register</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default LandingPageNavbar;
