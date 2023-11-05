import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router';

import '../global.css';

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

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentURL = location.pathname;
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <section
      className={`relative ml-5 custom-scrollbar flex h-[95%]  ${
        isExpanded ? 'w-[261px]' : 'w-[105px]'
      } flex-col items-center justify-between max-md:hidden sidebar-background`}
    >
      <img
        src="/assets/SidebarBack.svg"
        alt="logo"
        className="absolute right-0 translate-x-[50%] top-[60px] cursor-pointer"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      />

      {isExpanded ? (
        <img
          src="/assets/SuperflexLogo.svg"
          alt="logo"
          className="w-[172px] h-[38px] mt-7"
        />
      ) : (
        <img
          src="/assets/SuperflexSmallLogo.svg"
          alt="logo"
          className="w-[53px] h-[53px] mt-7"
        />
      )}

      <div className="sidebar-separator mt-9" />

      <h4 className="my-[12px] w-full px-6  text-gray-400 font-poppins text-sm  ">
        Main
      </h4>

      <div className="flex w-full flex-col px-6 ">
        {sidebarLinks1.map(link => {
          const isActive = currentURL.includes(link.route.toLowerCase());
          return (
            <div
              onClick={() => {
                navigate(link.route);
              }}
              key={link.label}
              className={`relative rounded-lg py-4 h-[56px] cursor-pointer ${
                isActive ? 'active-link' : 'inactive-link`'
              }
              ${isExpanded ? 'px-5' : 'px-4'}
              `}
            >
              <div
                className={` flex  items-center z-90 ${
                  !isActive ? 'text-[#ffffff8e]' : 'text-white'
                } ${isExpanded ? 'justify-center' : 'justify-start'} gap-4 `}
              >
                <img src={link.imgURL} alt={link.label} className="w-6 h-6 " />
                {isExpanded && (
                  <p className="font-poppins text-sm font-normal flex-1">
                    {link.label}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="sidebar-separator my-[12.5px]" />

      <div className="flex w-full flex-col px-6 ">
        {sidebarLinks2.map(link => {
          const isActive = currentURL.includes(link.route.toLowerCase());
          return (
            <div
              onClick={() => {
                navigate(link.route);
              }}
              key={link.label}
              className={`relative rounded-lg py-4 h-[56px] cursor-pointer ${
                isActive ? 'active-link' : 'inactive-link`'
              }
              ${isExpanded ? 'px-5' : 'px-4'}
              `}
            >
              <div
                className={`flex  items-center z-90 ${
                  !isActive ? 'text-[#ffffff8e]' : 'text-white'
                } ${isExpanded ? 'justify-center' : 'justify-start'} gap-4 `}
              >
                <img src={link.imgURL} alt={link.label} className="w-6 h-6 " />
                {isExpanded && (
                  <p className="font-poppins text-sm font-normal flex-1">
                    {link.label}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        {isExpanded ? (
          <button
            className="text-white w-[168px] h-[50px] border font-normal text-sm rounded-[13px] sidebar-button cursor-pointer focus:outline-none mb-14"
            onClick={() => {
              router.push('/sign-in');
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-white px-3 font-normal text-sm focus:outline-none mb-14"
            onClick={() => {
              router.push('/sign-in');
            }}
          >
            Logout
          </button>
        )}
      </div>
    </section>
  );
}

export default Sidebar;
