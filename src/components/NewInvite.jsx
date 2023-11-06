import React, { useState } from 'react';

const NewInvite = () => {
  const [phone, setPhone] = useState('');
  return (
    <div className="w-full max-w-[579px] min-h-[182px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[50px] sm:pr-[115px]">
      <h1 className="font-semibold text-white text-3xl">Your invitations</h1>

      <p className="text-[#A4A4A4] font-thin text-sm mt-1">
        For each person you invite, after they make their first payment, you
        will be granted a free week
      </p>

      <div className="flex flex-col sm:flex-row justify-start item-start sm:items-center gap-4 mt-[21px]">
        <div className=" flex gap-2 items-center w-full sm:max-w-[292px] h-[41px] bg-[#00000029] rounded-[28.5px] pl-[14px] pr-2 sm:pr-6">
          <div className="flex gap-2 items-center">
            <img src="/assets/America.svg" alt="Flag" />
            <p className="text-[12px] font-thin leading-5 text-white">+1</p>

            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone number to invite"
              className="flex-1 h-full text-[12px] font-thin leading-5 bg-inherit text-white placeholder-[#FFFFFF54] text-[12px]::placeholder focus:outline-none "
              value={phone}
              onChange={event => {
                setPhone(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          //   onClick={() => {
          //     navigate('sign-up');
          //   }}
          type="button"
          className="text-white w-[102px] h-[41px] font-light text-sm rounded-[28.5px] bg-[#F65B0B] hover:bg-[#E34F0A]"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default NewInvite;
