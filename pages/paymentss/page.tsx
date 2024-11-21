'use client'
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { backendURL } from '@/app/utils/constants';
import { useState } from 'react';



const stripePromise = loadStripe('pk_test_51QHJbtE1d9bD85gEI45nbvGJk7GqUIyy5juekmUpl6CbCrdrNfhP0dPCEXsgUUiRbJ3vfvrOUK1R5SGgUA9NenN000oq7NqJHD');

function Checkout() {
  const stripe = useStripe();

  const handleCheckout = async () => {
    if (!stripe) {
      console.error("Stripe has not loaded yet.");
      return; // Exit if Stripe is not available
    }

    try {
      const response = await axios.post('http://127.0.0.1:7885/service/payments', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { id } = response.data;

      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
  <div className='mb-96'>
     <div  className='border border-black mt-28 mx-96 text-center p-5' >
        <h1>Your Now paying the 50$ as Advance to book the Service  </h1>
     <button onClick={handleCheckout} disabled={!stripe} className='bg-gray-600 text-white px-5 py-2 hover:bg-gray-800' >
      Pay!
    </button>
     </div>
  </div>
  );
}

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
