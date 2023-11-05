import React from 'react';

import { useNavigate } from 'react-router-dom';

import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import LandingPageFooter from '../components/LandingPageFooter';
import Pricing from '../components/Pricing';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      {/* <Features /> */}
      <div className="relative">
        <Pricing />
        <img
          src="/assets/Lights.svg"
          alt="Lights"
          className="absolute top-[0px] right-[5%]  "
        />

        <img
          src="/assets/Lights.svg"
          alt="Lights"
          className="absolute hidden lg:block bottom-[600px] left-[25%]  "
        />
      </div>
      <FAQ />

      <div className="flex justify-end w-[100%] mt-14">
        <div className="w-[80%] h-[0.5px] bg-white" />
      </div>

      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
