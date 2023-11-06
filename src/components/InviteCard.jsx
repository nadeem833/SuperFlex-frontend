import React from 'react';

const InviteCard = () => {
  return (
    <div className="w-full max-w-[579px] min-h-[139px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[23px]">
      <h1 className="font-semibold text-white text-3xl">Your invitations</h1>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-white font-base text-sm mt-2">+1 (786) 231-9787</p>
          <p className="text-[#A4A4A4] font-thin text-xs">Pago pendiente!</p>
          <p className="text-[#A4A4A4] font-thin text-sm mt-1">
            Invited 7 days ago
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-[21px]">
          <img
            src="/assets/Whatsapp.svg"
            alt="Icon"
            className="cursor-pointer"
          />
          <img
            src="/assets/Attachment.svg"
            alt="Icon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default InviteCard;
