import React from 'react';

const PhonePricing = ({ features, pricing, subText, title, image, index }) => {
  console.log(index);
  return (
    <div className="relative w-full max-w-[416px] h-[800px] ">
      <img src="/assets/Phone.svg" alt="Phone" className="hidden xs:block " />
      <div
        class={`absolute top-[75px] right-[65px] w-[320px] h-[640px]  rounded-[45px] py-7 px-8 ${
          index === 0 ? 'bg-white' : 'bg-black'
        }
        border border-[#F65B0B]
        xs:border-0
        `}
      >
        <div className="flex gap-2 items-center mb-7">
          <img src={image} alt="circle" />
          <h1
            className={`${
              index === 0 ? 'text-black ' : 'text-white'
            } font-medium text-xl`}
          >
            {title}
          </h1>
        </div>
        <h2
          className={`${
            index === 0 ? 'text-black ' : 'text-white'
          } font-normal text-4xl mb-6 text-start`}
        >
          {pricing}
        </h2>
        <p
          className={`${
            index === 0 ? 'text-black ' : 'text-white'
          } font-thin text-sm mb-5 text-start`}
        >
          {subText}
        </p>
        <button
          className={`w-full h-12 rounded-xl text-sm  text-white mb-12 ${
            index === 0 ? 'bg-black' : 'bg-[#F65B0B]'
          }`}
        >
          Register
        </button>
        <div className="flex flex-col gap-8">
          {features.map(feature => (
            <div className="flex gap-5 items-center">
              <img
                src="/assets/Tick.svg"
                alt="tick"
                className="w-[18px] h-[13px]"
              />
              <h3
                className={`${
                  index === 0 ? 'text-black ' : 'text-white'
                } font-thin text-sm`}
              >
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhonePricing;
