import React, { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import '../global.css';

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const NavLinkStyle = 'hover:text-[#f7931e] flex gap-2 items-center';

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const sidebarLinks1 = [
    {
      imgURL: '/assets/Dashboard.svg',
      route: '/dashboard',
      label: 'Dashboard'
    },
    {
      imgURL: '/assets/PayNow.svg',
      route: '/pay-now',
      label: 'Pay Now'
    },
    {
      imgURL: '/assets/ContactUs.svg',
      route: '/contact-us',
      label: 'Contact Us'
    },
    {
      imgURL: '/assets/FAQs.svg',
      route: '/faqs',
      label: 'FAQs'
    },
    {
      imgURL: '/assets/AdminDashboard.svg',
      route: '/admin-dashboard',
      label: 'Admin Dashboard'
    }
  ];
  const sidebarLinks2 = [
    {
      imgURL: '/assets/Filter.svg',
      route: '/filter',
      label: 'Filter'
    },
    {
      imgURL: '/assets/Calender.svg',
      route: '/my-calendar',
      label: 'My Calendar'
    },
    {
      imgURL: '/assets/Location.svg',
      route: '/user-arrived',
      label: "I've arrived"
    },
    {
      imgURL: '/assets/AvailableNow.svg',
      route: '/available',
      label: 'Available'
    }
  ];

  return (
    <nav className="topbar-background ">
      <div className="w-full p-5 lg:p-0 max-w-[1280px] mx-auto flex justify-between items-center ">
        {/* Section 1 */}
        <div className="flex items-center justify-between w-full">
          {/* Burger Menu */}
          <img
            src="/assets/SuperflexLogo.svg"
            alt="logo"
            className="object-fit w-[220px] "
          />

          <button
            onClick={toggleMobileDropdown}
            type="button"
            className="text-white "
          >
            <RxHamburgerMenu className="text-2xl text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileDropdownOpen && (
        <div className="lg:hidden mt-2 w-full bg-[#282828] bg-opacity-50 flex flex-col gap-2 py-5 px-4">
          {sidebarLinks1.map(link => (
            <Link
              to={link.route}
              onClick={() => {
                toggleMobileDropdown();
              }}
            >
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes(link.route)
                    ? 'text-[#f7931e]'
                    : 'text-white'
                }`}
              >
                <img src={link.imgURL} alt="" /> {link.label}
              </a>
            </Link>
          ))}
          {sidebarLinks2.map(link => (
            <Link
              to={link.route}
              onClick={() => {
                toggleMobileDropdown();
              }}
            >
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes(link.route)
                    ? 'text-[#f7931e]'
                    : 'text-white'
                }`}
              >
                <img src={link.imgURL} alt="" /> {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Topbar;
