import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const RazorpayPayment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay SDK. Are you online?');
      return;
    }

    const options = {
      key: 'your-public-razorpay-key-here', // Replace with your Razorpay key
      amount: 10000, // Amount is in paise (INR 100.00)
      currency: 'INR',
      name: 'Tutor Abhi',
      description: 'Appointment Booking Fee',
      handler: function (response) {
        alert('Payment Successful!');
        setPaymentSuccess(true); // Set payment success state to true
      },
      prefill: {
        name: 'Abhishek Biyani',
        email: 'example@gmail.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-screen">
      {!paymentSuccess ? (
        <button
          onClick={handlePayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pay INR 100 to Book Appointment
        </button>
      ) : (
        <AppointmentForm />
      )}
    </div>
  );
};

export default RazorpayPayment;
