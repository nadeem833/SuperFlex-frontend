import React from 'react';

import { useNavigate } from 'react-router-dom';

import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageNavbar from '../components/LandingPageNavbar';
import Pricing from '../components/Pricing';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <Hero />

      {/* <div className="relative overflow-x-hidden">
        <AboutUs />
        <div className="hidden 2xl:flex absolute top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full justify-end bg-[#fdaa4f] blur-[165px] opacity-[0.07]" />

        <Pricing />
        <div className="hidden 2xl:flex absolute top-[54%] -right-20 w-[450px] h-[450px] justify-end z-[99999]">
          <img
            src="/MoneyBag.png"
            alt="Not working"
            className="object-contain w-auto h-full z-[99999]"
          />
        </div>

        <div className="hidden 2xl:flex absolute top-[72%] -right-28 w-[450px] h-[450px] rounded-full justify-end bg-[#f79324] blur-[165px] opacity-[0.15]" />

        <div className="hidden 2xl:flex absolute top-[50%] -left-28 w-[450px] h-[450px] rounded-full justify-end bg-[#f79324] blur-[165px] opacity-10" />
      </div>
      <ContactUs /> */}
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
