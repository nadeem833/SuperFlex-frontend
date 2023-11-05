import React from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import { fadeIn, slideIn, staggerContainer, textVariant } from '../../motion';
import '../global.css';

const faqList = [
  {
    question: 'Is it safe to use SuperFlex?',
    answer:
      '100% safe, follow our instructions and we assure you that your account will never be at risk, the security of your account is our top priority!'
  },
  {
    question: 'How is payment made?',
    answer:
      'Through our website you can pay with a card, we use Stripe as a payment method, one of the safest platforms for processing payments online.'
  },
  {
    question: 'What are your customer service hours?',
    answer: 'From 7 am to 10 pm EST time.'
  },
  {
    question: 'What do I get if I refer a friend?',
    answer:
      'For each friend who registers and pays, you will receive a free week of service.'
  },
  {
    question: 'Do you have limited spots?',
    answer:
      'West Superflex is a premium system that allows limited users per city in order to offer them the best service.'
  },
  {
    question: 'Do you have an app that I can download?',
    answer: 'No. Superflex is used through the website.'
  }
];

const FAQ = () => {
  return (
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
        <motion.div variants={fadeIn('top', 'tween', 0.2, 1)}>
          <h1 className="text-white font-medium text-4xl">
            Frequently Asked Questions
          </h1>
          <h2 className="text-white font-thin text-lg">
            If your question is not here, please contact us via WhatsApp at
            0000000000 or 0000000000
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 justify-center gap-4 w-full mt-14 ">
          {faqList.map((faq, index) => (
            <motion.div
              key={index}
              variants={slideIn(
                `${index % 2 !== 0 ? 'right' : 'left'}`,
                'tween',
                0.2,
                1
              )}
              className="col-span-12 md:col-span-6 flex justify-center"
            >
              <div
                className={`
                   h-[171px] w-full max-w-[550px] rounded-[34px] bg-gradient-to-r from-[#F65B0B]  to-[#000] p-[1px]`}
              >
                <div className="flex flex-col h-full rounded-[34px] w-full items-start justify-center bg-black px-4 sm:px-8 gap-4">
                  <h2 className="text-white font-medium text-xl">
                    {faq.question}
                  </h2>
                  <p className="text-white font-thin text-sm"> {faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
