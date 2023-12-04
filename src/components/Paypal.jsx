import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { privateRequest } from '../requestMethods';

export default function Paypal({ selectedPlan }) {
  const paypal = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (paypal.current) {
      paypal.current.innerHTML = ''; // Clear the content of the container
    }

    const createPaypalButton = () => {
      window.paypal
        .Buttons({
          style: {
            layout: 'vertical', // 'horizontal' by default. Change to 'vertical' for a vertical layout.
            color: 'gold', // Specify the color of the PayPal button. You can use hex codes or color names.
            shape: 'pill', // 'rect' (default) or 'pill' for a rounded button.
            size: 'responsive', // 'responsive' by default
            label: 'paypal' // 'paypal' by default. Set to 'checkout' to display a "Pay with PayPal" label.
          },
          // fundingSource: window.paypal.FUNDING.PAYPAL,
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: `${selectedPlan.day} day super flex plan`,
                  amount: {
                    currency_code: 'USD',
                    value: parseFloat(selectedPlan.price.replace('$ ', ''))
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            privateRequest
              .put(`update-payment?id=${selectedPlan.id}`)
              .then(() => {
                toast.success('Payment Successful');
                navigate('/user-profile');
              })
              .catch(error => {
                toast.error(error.response.data.msg);
              });
          },
          onError: err => {
            toast.error(err);
          }
        })
        .render(paypal.current);
    };

    createPaypalButton();
  }, [selectedPlan]);

  return (
    <div>
      <div className="xs:w-[330px] w-[100%]" ref={paypal}></div>
    </div>
  );
}
