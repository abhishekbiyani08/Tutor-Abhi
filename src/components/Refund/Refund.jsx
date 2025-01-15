// import React from 'react';
import './Refund.css';
import image from './image.png'

const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="title-animation max-w-[900px] mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8 uppercase">Refund Policy</h1>

        <div className="w-[400px] mx-auto mb-8">
        <img
            src={image}
            alt="Privacy policy"
            className="w-full h-auto max-w-[400px] object-cover"
        />
        </div>

        <div className="text-xl leading-relaxed space-y-6">
          <p className='text-lg mb-12'>
            Our refund policy applies only in cases where the payment is successfully made by the user but is 
            not received on our end due to a technical or transactional error.
          </p>

          <h2 className="text-3xl font-semibold text-white">Refund Eligibility</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Refunds are issued only if the payment was deducted from the user&apos;s account but not received by us.</li>
            <li>We do not process refunds for successfully completed transactions.</li>
            <li>Refunds can only be requested within 7 business days of the transaction.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white pt-8">Refund Request Process</h2>
          <p className='text-lg'>
            To request a refund, please provide proof of payment, such as transaction ID or receipt, 
            and contact us through our support page. We will review the case and verify whether the payment 
            was received or not.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Refund Timeline</h2>
          <p className='text-lg'>
            If the refund is approved, it will be processed within 5-7 business days. Refunds will be credited 
            back to the original payment method.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Additional Information</h2>
          <p className='text-lg'>
            If you believe a payment was made but not reflected in our records, 
            please allow up to 24 hours for our systems to process the transaction before raising a refund request.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Contact Us</h2>
          <p className='text-lg'>
            For any questions or to initiate a refund request, please reach out to our support team through the 
            <a href='/contact-us' className="text-purple-500"> Contact Us</a> section of our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
