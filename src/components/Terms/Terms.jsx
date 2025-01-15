// import React from 'react';
import './Terms.css'
import image from './image.jpg';

const TermsOfService = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="title-animation max-w-[900px] mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8 uppercase">Terms of Service</h1>

        {/* Hero Image */}
        <div className="flex justify-center mb-8">
          <img
            src={image}
            alt="Terms of service"
            className="w-full h-auto max-w-[400px] object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed">
          Welcome to <span className="text-purple-500 text-2xl">Tutor-Abhi</span>. These Terms of Service govern your use of our website and
          the services we provide. By accessing or using the site, you agree to comply with and be bound by the following terms. Please
          read them carefully.
        </p>

        <h2 className="text-3xl font-semibold mt-8">1. Use of Services</h2>
        <p className="text-lg leading-relaxed">
          By using our website, you agree to use the services provided by <span className="text-purple-500">Tutor-Abhi</span> only for lawful purposes and in a manner
          consistent with all applicable laws and regulations. Any misuse of our services may result in the termination of your access to
          our platform.
        </p>

        <h2 className="text-3xl font-semibold mt-8">2. User Accounts</h2>
        <p className="text-lg leading-relaxed">
          When creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the
          confidentiality of your account login credentials and for any activity that occurs under your account.
        </p>

        <h2 className="text-3xl font-semibold mt-8">3. Payment and Fees</h2>
        <p className="text-lg leading-relaxed">
          Payment for tutoring services is required upfront through the available payment methods. All fees are non-refundable unless
          otherwise stated. We reserve the right to modify the fees at any time without prior notice.
        </p>

        <h2 className="text-3xl font-semibold mt-8">4. Cancellations and Refunds</h2>
        <p className="text-lg leading-relaxed">
          You may cancel a tutoring session at least 24 hours in advance to receive a full refund. Cancellations made less than 24 hours
          before the scheduled session may not be eligible for a refund.
        </p>

        <h2 className="text-3xl font-semibold mt-8">5. Intellectual Property</h2>
        <p className="text-lg leading-relaxed">
          All content on <span className="text-purple-500">Tutor-Abhi</span>, including text, images, and code, is the property of <span className="text-purple-500">Tutor-Abhi</span> and is protected by intellectual property laws. 
          You may not copy, distribute, or reproduce any part of our website without prior written consent.
        </p>

        <h2 className="text-3xl font-semibold mt-8">6. Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          <span className="text-purple-500">Tutor-Abhi</span> will not be liable for any damages arising from your use of the website or any services provided. 
          This includes direct, indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-3xl font-semibold mt-8">7. Changes to Terms</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting
          to the site. Your continued use of <span className="text-purple-500">Tutor-Abhi</span> signifies your acceptance of any updated terms.
        </p>

        <h2 className="text-3xl font-semibold mt-8">8. Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions or concerns regarding these Terms of Service, please contact us at <a href='mailto:abhishekbiyani08@gmail.com' className="text-purple-500">abhishekbiyani@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
