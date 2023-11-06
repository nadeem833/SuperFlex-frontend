import React from 'react';

const CalendarCard = () => {
  return (
    <div className="w-full max-w-[410px] min-h-[151px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[23px]">
      <h1 className="font-semibold text-white text-3xl">My Calendar</h1>
      <p className="text-[#F65B0B] font-thin text-sm mt-2">
        No offers in your calendar
      </p>
    </div>
  );
};

const MyCalendar = () => {
  return (
    <div>
      <CalendarCard />
    </div>
  );
};

export default MyCalendar;
