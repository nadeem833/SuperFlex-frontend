import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import Paypal from '../components/Paypal';
import { privateRequest } from '../requestMethods';

const PlanCard = ({ isActive, plan, handleClick }) => {
  return (
    <div
      className={`w-full max-w-[150px] min-h-[150px] rounded-[28.5px] bg-[#282828] flex flex-col items-center justify-center cursor-pointer ${
        isActive && 'border border-[#f65b0b]'
      }`}
      onClick={() => handleClick(plan)}
    >
      <h1 className="font-semibold text-white text-2xl ">{`${plan.day} days`}</h1>
      <p className="text-[#F65B0B] font-thin text-sm mt-2">{plan.price}</p>
    </div>
  );
};

const PayNow = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPlans = () => {
    privateRequest
      .get(`get-payment`)
      .then(res => {
        setPlans(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error.response.data.msg);
      });
  };
  useEffect(() => {
    fetchPlans();
  }, []);

  if (isLoading) {
    return <h1>Loading Plans...</h1>;
  }

  return (
    <>
      <h1 className="font-semibold text-white text-3xl">
        Select a plan to the payment
      </h1>
      <div className="flex gap-8 flex-wrap my-5">
        {plans.map((plan, index) => (
          <PlanCard
            isActive={selectedPlan?.id === plan.id}
            key={index}
            plan={plan}
            handleClick={receivedPlan => {
              setSelectedPlan(receivedPlan);
            }}
          />
        ))}
      </div>
      {selectedPlan && <Paypal selectedPlan={selectedPlan} />}
    </>
  );
};

export default PayNow;
