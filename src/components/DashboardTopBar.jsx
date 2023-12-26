import React, { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const DashboardTopBar = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => {
          setLanguageDropdown(false);
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLanguageChange = language => {
    console.log('Changing language to:', language);
    setSelectedLanguage(language === 'en' ? 'English' : 'Español');
    setLanguageDropdown(false);
    i18n.changeLanguage(language);
  };

  const { full_name } = useSelector(state => state.auth.userDetails);
  const currentURL = location.pathname;

  return (
    <>
      <div className="hidden laptop:flex w-full h-[132px] justify-between items-center">
        <div className="flex gap-2">
          <button className="flex items-center justify-center text-white text-opacity-[0.33] font-thin text-sm gap-3 w-[95px] h-[39px] rounded-[26px] bg-[#292929]">
            <img
              src="/assets/BackArrow.svg"
              alt="Arrow"
              className="w-3 h-[6.8px]"
            />
            Back
          </button>
          {currentURL === '/pay-now' && (
            <button
              onClick={() => {
                navigate('/pay-now/invites');
              }}
              className=" text-white font-thin text-sm gap-3 w-[130px] h-[39px] rounded-[28.5px] bg-[#292929]"
            >
              Invitations
            </button>
          )}
        </div>

        <div className="flex gap-5 items-center">
          {/* <button className="flex items-center justify-center gap-5 text-white font-thin text-sm w-[149px]  h-[57px] rounded-[28.5px] bg-[#292929]">
            English
            <img
              src="/assets/ArrowDown.svg"
              alt="Arrow"
              className="w-3 h-[6.8px]"
            />
          </button> */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              ref={dropdownRef}
              onClick={() => {
                setLanguageDropdown(!languageDropdown);
              }}
              className="flex items-center justify-center gap-5 text-white font-thin text-sm w-[149px] h-[57px] rounded-[28.5px] bg-[#292929]"
            >
              {selectedLanguage}
              <img
                src="/assets/ArrowDown.svg"
                alt="Arrow"
                className="w-3 h-[6.8px]"
              />
            </button>

            {languageDropdown && (
              <div className="absolute z-10 mt-2 w-[149px] bg-[#292929] rounded-3xl shadow-lg">
                <button
                  onClick={() => {
                    console.log('Clicked English');
                    handleLanguageChange('en');
                  }}
                  className="w-full px-4 py-3 text-sm text-white hover:bg-[#404040] rounded-t-3xl"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    console.log('Clicked Español');
                    handleLanguageChange('es');
                  }}
                  className="w-full px-4 py-3 text-sm text-white hover:bg-[#404040] rounded-b-3xl"
                >
                  Español
                </button>
              </div>
            )}
          </div>

          <div
            className="flex gap-3 cursor-pointer relative"
            onClick={() => {
              navigate('/user-profile');
            }}
          >
            <div>
              <p className="text-white font-poppins text-base font-medium leading-normal tracking-tight">
                {full_name}
              </p>
              <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-tight">
                john@yopmail.com
              </p>
            </div>
            <div className="w-12 h-12 rounded-[36px] border">
              <img src="/assets/Avatar.png" alt="Avatar" />
            </div>

            {/* <div className="absolute w-full top-[100%] mt-2  bg-white border rounded shadow-md">
            {

            }
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-orange-200"
              >
                Item 3
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex  laptop:hidden w-full min-h-[132px] justify-between items-center">
        <div className="flex gap-2 ">
          {currentURL === '/pay-now' ? (
            <button
              onClick={() => {
                navigate('/pay-now/invites');
              }}
              className=" text-white font-thin text-sm gap-3 w-[130px] h-[39px] rounded-[28.5px] bg-[#292929]"
            >
              Invitations
            </button>
          ) : (
            <button className="flex items-center justify-center gap-5 text-white font-thin text-xs w-[120px]  h-[40px] rounded-[28.5px] bg-[#292929]">
              English
              <img
                src="/assets/ArrowDown.svg"
                alt="Arrow"
                className="w-3 h-[6.8px]"
              />
            </button>
          )}
        </div>

        <div className=" items-center">
          <div className="flex gap-3">
            <div>
              <p className="text-white font-poppins text-sm font-medium leading-normal tracking-tight">
                John Doe
              </p>
              <p className="text-gray-500 font-poppins text-sm font-medium leading-normal tracking-tight">
                john@yopmail.com
              </p>
            </div>
            <div className="w-12 h-12 rounded-[36px] border">
              <img src="/assets/Avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopBar;
