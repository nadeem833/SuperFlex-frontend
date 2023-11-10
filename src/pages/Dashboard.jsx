import React from 'react';

import { useNavigate } from 'react-router';

const PaymentCard = () => {
  return (
    <div className=" flex justify-between w-full max-w-[300px] min-h-[178px] rounded-[28.5px] bg-[#282828] pt-[18px] pb-[20px] pl-[32px] pr-[6px]">
      <div className="flex flex-col gap-4 ">
        <h2 className="text-sm text-[#FFFFFF4A]">Payment</h2>
        <h1 className="font-semibold text-white text-4xl">$30</h1>
        <h2 className="text-sm text-[#FFFFFF4A]">Today</h2>
      </div>
      <img src="/assets/Payment.svg" alt="Icon" className="cursor-pointer" />
    </div>
  );
};

const HoursCard = () => {
  return (
    <div className="relative flex justify-between w-full max-w-[300px] min-h-[178px] rounded-[28.5px] bg-[#282828] pt-[18px] pb-[20px] pl-[32px] pr-[6px]">
      <div className="flex flex-col gap-4 w-[170px]">
        <h2 className="text-sm text-[#FFFFFF4A]">Hours</h2>
        <h1 className="font-semibold text-white text-4xl">01 Hours</h1>
        <h2 className="text-sm text-[#FFFFFF4A]">Today</h2>
      </div>
      <img
        src="/assets/Hours.svg"
        alt="Icon"
        className="absolute -right-[25.6px] top-[35px] cursor-pointer"
      />
    </div>
  );
};
const SmallRedirectionCard = ({ text, navigation }) => {
  return (
    <div
      onClick={navigation}
      className="relative flex justify-between w-full min-w-[300px] min-h-[85px] rounded-[28.5px] bg-[#282828] py-[27px] px-[28px] cursor-pointer"
    >
      <h1 className="font-semibold text-white text-xl">{text}</h1>
      <img
        src="/assets/OrangeArrow.svg"
        alt="Icon"
        className="absolute right-5 top-5 "
      />
    </div>
  );
};
const BigRedirectionCard = ({ text, navigation }) => {
  return (
    <div
      onClick={navigation}
      className="relative flex justify-between w-full min-w-[368px] min-h-[145px] rounded-[28.5px] bg-[#282828] py-[27px] px-[28px] cursor-pointer"
    >
      <h1 className="font-semibold text-white text-3xl">{text}</h1>

      <img
        src="/assets/OrangeArrow.svg"
        alt="Icon"
        className="absolute right-5 top-5 "
      />
    </div>
  );
};
const GoneOffersCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/dashboard/gone-offers');
      }}
      className="relative flex flex-col w-full min-w-[300px] min-h-[178px] rounded-[28.5px] bg-[#282828] py-[27px] px-[28px] cursor-pointer"
    >
      <h1 className="font-semibold text-white text-4xl">76$</h1>
      <h2 className="text-sm font-thin text-[#FFFFFF4A]">
        From 3:00 pm to 7:00pm
      </h2>
      <h2 className="text-sm font-thin text-white">17-10-23</h2>
      <h2 className="text-sm font-thin text-white mt-9">
        Tamarac FL (VFL3) - Sub Same-Day
      </h2>
      <img
        src="/assets/OrangeArrow.svg"
        alt="Icon"
        className="absolute right-5 top-5 "
      />
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <PaymentCard />
        <HoursCard />

        <div className="flex flex-col gap-2">
          <SmallRedirectionCard
            text={'Pay Now'}
            navigation={() => {
              navigate('/pay-now');
            }}
          />
          <SmallRedirectionCard
            text={'Invitations'}
            navigation={() => {
              navigate('/pay-now/invites');
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <BigRedirectionCard
            text={'Disliked offers'}
            navigation={() => {
              navigate('/dashboard/disliked-offers');
            }}
          />
          <BigRedirectionCard
            text={'Gone offers'}
            navigation={() => {
              navigate('/dashboard/gone-offers');
            }}
          />
        </div>
      </div>

      <div className="flex gap-5">
        <GoneOffersCard />
        <GoneOffersCard />
        <GoneOffersCard />
        <GoneOffersCard />
      </div>
    </div>
  );
};

export default Dashboard;
