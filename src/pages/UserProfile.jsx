import React from 'react';

import { useNavigate } from 'react-router';

const ProfileCard = () => {
  return (
    <div className="w-full max-w-[628px] min-h-[120px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[23px]">
      <h1 className="font-semibold text-white text-3xl">Profile information</h1>

      <div className="w-full flex justify-start gap-3 mt-3">
        <p className="text-[#A4A4A4] font-thin text-sm w-[40%]">Name</p>
        <p className="text-[#A4A4A4] font-thin text-sm w-[40%]">Phone Number</p>
      </div>
      <div className="w-full flex justify-start gap-3 mt-[1px]">
        <p className="text-white font-thin text-sm w-[40%]">Dummy User</p>
        <p className="text-white font-thin text-sm w-[40%]">090078601</p>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-white text-3xl">Profile</h1>

      <p className="text-[#A4A4A4] font-thin text-sm ">
        Your services expires in 4 days
      </p>

      <div className="hidden lg:flex relative gap-4 items-center mb-2">
        <button
          onClick={() => {
            navigate('/edit-profile');
          }}
          type="button"
          className="border px-3 text-white w-auto h-[38px] rounded-[10px]  hover:border-[#E27A00] hover:text-[#E27A00] focus:outline-none "
        >
          Edit Profile
        </button>
        <button
          onClick={() => {
            navigate('/change-password');
          }}
          type="button"
          className="text-white px-3 w-auto h-[38px] font-light text-base rounded-[10px] bg-[#F65B0B] hover:bg-[#E34F0A] focus:outline-none"
        >
          Change Password
        </button>
      </div>
      <ProfileCard />
    </div>
  );
};

export default UserProfile;
