import React from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { fadeIn, slideIn } from '../../motion';
import '../global.css';

const faqList = [
  {
    question: 'faq.question.safety',
    answer: 'faq.answer.safety'
  },
  {
    question: 'faq.question.payment',
    answer: 'faq.answer.payment'
  },
  {
    question: 'faq.question.customerServiceHours',
    answer: 'faq.answer.customerServiceHours'
  },
  {
    question: 'faq.question.referralProgram',
    answer: 'faq.answer.referralProgram'
  },
  {
    question: 'faq.question.limitedSpots',
    answer: 'faq.answer.limitedSpots'
  },
  {
    question: 'faq.question.appDownload',
    answer: 'faq.answer.appDownload'
  }
];

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section
      id="Home"
      className=" w-full max-w-[1280px] mx-auto flex justify-between items-center px-4 py-8 h-full "
    >
      <motion.div
        variants={structuredClone}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
      >
        <motion.div variants={fadeIn('top', 'tween', 0.2, 1)}>
          <h1 className="text-white font-medium text-4xl">
            {t('faq.question.heading')}
          </h1>
          <h2 className="text-white font-thin text-lg">
            {t('faq.question.subHeading')}
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
                    {t(`${faq.question}`)}
                  </h2>
                  <p className="text-white font-thin text-sm">
                    {t(`${faq.answer}`)}
                  </p>
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
