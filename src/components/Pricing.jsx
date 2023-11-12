import React from 'react';

import PhonePricing from './PhonePricing';

const pricingData = [
  {
    image: '/assets/DaysGrey.svg',
    title: '5-day trail plan',
    pricing: '$0',
    subText:
      'Enjoy our system for 5 day for free with all its functionalities.',
    features: [
      'Unlimited offer capture',
      'SMS notification',
      'Access to add our filters',
      "i've arrived",
      'Available Now',
      'Personalized Assistance'
    ]
  },
  {
    image: '/assets/DaysOrange.svg',
    title: '7-day plan',
    pricing: '$49.87',
    subText: 'Enjoy our system for 7 days with personalized support.',
    features: [
      'Unlimited offer capture',
      'SMS notification',
      'Access to add our filters',
      "i've arrived",
      'Available Now',
      'Personalized Assistance'
    ]
  },
  {
    image: '/assets/DaysOrange.svg',
    title: '14-day plan',
    pricing: '$89.99',
    subText: 'Enjoy our system for 14 days with personalized support.',
    features: [
      'Unlimited offer capture',
      'SMS notification',
      'Access to add our filters',
      "i've arrived",
      'Available Now',
      'Personalized Assistance'
    ]
  },
  {
    image: '/assets/DaysOrange.svg',
    title: '30-day plan',
    pricing: '$169.99',
    subText: 'Enjoy our system for 30 days with personalized support.',
    features: [
      'Unlimited offer capture',
      'SMS notification',
      'Access to add our filters',
      "i've arrived",
      'Available Now',
      'Personalized Assistance'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="relative mx-auto text-center w-screen max-w-[1280px] z-10">
      <h1 className="text-4xl text-white font-thin font-poppins mb-[38px]">
        Pricing
      </h1>
      <div className="relative flex flex-wrap justify-center lg:justify-start">
        {pricingData.map((data, index) => (
          <PhonePricing {...data} key={index} index={index} />
        ))}

        <img
          src="/assets/Robo3.svg"
          alt="Robo"
          className="absolute bottom-12 right-44 z-50  hidden lg:block "
        />
      </div>
    </div>
  );
};

export default Pricing;
