import React from 'react';

const DashboardTopBar = () => {
  return (
    <div className=" w-full h-[132px] flex justify-between items-center px-12">
      <button className="flex items-center justify-center text-white text-opacity-[0.33] font-thin text-sm gap-3 w-[95px] h-[39px] rounded-[26px] bg-[#292929]">
        <img
          src="/assets/BackArrow.svg"
          alt="Arrow"
          className="w-3 h-[6.8px]"
        />
        Back
      </button>

      <div className="flex gap-5 items-center">
        <button className="flex items-center justify-center gap-5 text-white font-thin text-sm w-[149px] h-[57px] rounded-[28.5px] bg-[#292929]">
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
  );
};

export default DashboardTopBar;
