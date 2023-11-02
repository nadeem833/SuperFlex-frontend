import React from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import { fadeIn, slideIn, staggerContainer, textVariant } from '../../motion';
import '../global.css';

import LandingPageNavbar from './LandingPageNavbar';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="background1 laptop:min-h-[1000px] mb-[66px]">
      <LandingPageNavbar />
      <section
        id="Home"
        className=" w-screen max-w-[1280px] mx-auto flex justify-between items-center px-4 py-8 h-full "
      >
        <motion.div
          variants={structuredClone}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
        >
          <div className="relative  w-full mx-auto mb-10 sm:mb-0 xl:gap-0 laptop:grid laptop:gap-8 laptop:grid-cols-12 laptop:py-16   ">
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="mr-auto place-self-center laptop:col-span-6"
            >
              <img src="./assets/Heading1.svg" alt="Heading" />
              <img src="./assets/Heading2.svg" alt="Heading" />
              <p className="max-w-2xl mb-6 font-light text-white laptop:mb-8 text-base">
                SuperFlex is a tool that makes it easy for you to search for
                offers, with the highest security for your account and all the
                features you need in your day-to-day life!
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    navigate('sign-up');
                  }}
                  type="button"
                  className="text-white w-[206px] h-[61px] border font-normal text-sm rounded-[13px] button-hover cursor-pointer focus:outline-none"
                >
                  Register Now
                </button>

                <button
                  onClick={() => {
                    navigate('sign-in');
                  }}
                  type="button"
                  className="text-white w-[151px]  h-[61px] border font-normal text-sm rounded-[13px] button-hover cursor-pointer focus:outline-none"
                >
                  Login
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn('right', 'tween', 0.2, 1)}
              className="mt-8 laptop:mt-0 max-full laptop:col-span-6 flex justify-center"
            >
              <div className="mt-8 laptop:mt-0 max-full laptop:col-span-6 flex justify-center ">
                <img
                  src="./assets/Robo1.svg"
                  alt="Robo"
                  className="w-full max-w-[600px]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="absolute top-[90%] lg:top-[85%] flex flex-col gap-2 justify-evenly left-0 "
            >
              <h4 className="text-white font-poppins  text-3xl sm:text-[40px] font-light">
                SuperFlex has all the
              </h4>
              <h4 className="text-white font-poppins  text-3xl sm:text-[40px] font-light">
                features and tools
              </h4>
              <h4 className="text-white font-poppins  text-3xl sm:text-[40px] font-light">
                you need to work!
              </h4>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
