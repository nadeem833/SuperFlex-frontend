import React from 'react';

const PaymentCard = () => {
  return (
    <div className="w-full max-w-[410px] min-h-[151px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[23px]">
      <h1 className="font-semibold text-white text-3xl">Payment</h1>
      <p className="text-[#F65B0B] font-thin text-sm mt-2">
        Couldn't start payment process
      </p>
    </div>
  );
};

const PayNow = () => {
  return (
    <div>
      <PaymentCard />
    </div>
  );
};

export default PayNow;
