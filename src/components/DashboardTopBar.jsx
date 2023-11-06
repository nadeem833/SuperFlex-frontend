import React from 'react';

import { useLocation, useNavigate } from 'react-router';

const DashboardTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentURL = location.pathname;
  console.log(location.pathname);
  console.log(currentURL === '/pay-now');
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
          <button className="flex items-center justify-center gap-5 text-white font-thin text-sm w-[149px]  h-[57px] rounded-[28.5px] bg-[#292929]">
            English
            <img
              src="/assets/ArrowDown.svg"
              alt="Arrow"
              className="w-3 h-[6.8px]"
            />
          </button>

          <div className="flex gap-3">
            <div>
              <p className="text-white font-poppins text-base font-medium leading-normal tracking-tight">
                John Doe
              </p>
              <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-tight">
                john@yopmail.com
              </p>
            </div>
            <div className="w-12 h-12 rounded-[36px] border">
              <img src="/assets/Avatar.png" alt="Avatar" />
            </div>
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
