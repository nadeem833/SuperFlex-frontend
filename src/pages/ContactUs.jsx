import React from 'react';

const ContactUsCard = () => {
  return (
    <div className="w-[628px] h-[182px] rounded-[28.5px] bg-[#282828] pt-[14px] pb-[24px] pl-[32px] pr-[23px]">
      <h1 className="font-semibold text-white text-3xl">Contact us</h1>
      <p className="text-[#A4A4A4] font-thin text-sm mt-2">
        Contact us via chat, which you can find in the lower right corner of the
        screen. Our customer service hours are from 7am to 10pm EST.
      </p>

      <div className="w-full flex justify-end gap-3 mt-[21px]">
        <img src="/assets/Whatsapp.svg" alt="Icon" className="cursor-pointer" />
        <img
          src="/assets/Attachment.svg"
          alt="Icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <ContactUsCard />
    </div>
  );
};

export default ContactUs;
