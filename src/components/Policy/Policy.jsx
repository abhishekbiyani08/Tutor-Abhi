// import React from 'react';
import './Policy.css'
import image2 from './image.png'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="title-animation max-w-[900px] mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8 uppercase">Privacy Policy</h1>
        
        {/* Hero Image */}
        <div className="w-[400px] mx-auto mb-8">
        <img
            src={image2}
            alt="Privacy policy"
            className="w-full h-auto max-w-[400px] object-cover"
        />
        </div>

        <p className="text-lg leading-relaxed">
          Welcome to <span className="text-purple-500 text-2xl">Tutor-Abhi</span>. We are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it. 
          Please take a moment to read it carefully.
        </p>

        <h2 className="text-3xl font-semibold mt-8">1. Information We Collect</h2>
        <p className="text-lg leading-relaxed">
          We collect information that you provide to us directly when you register, book tutoring sessions, or contact us. 
          This includes your name, email address, phone number, and other details required for the tutoring services we offer.
        </p>

        <h2 className="text-3xl font-semibold mt-8">2. How We Use Your Information</h2>
        <p className="text-lg leading-relaxed">
          We use the information to provide and improve our services, communicate with you, and ensure that your experience with 
          <span className="text-purple-500"> Tutor-Abhi</span> is seamless. We may also use the information for security purposes and legal compliance.
        </p>


        <h2 className="text-3xl font-semibold mt-8">3. Data Security</h2>
        <p className="text-lg leading-relaxed">
          We implement a variety of security measures to ensure the safety of your personal information. We use encryption and secure
          storage techniques to protect your data from unauthorized access.
        </p>

        <h2 className="text-3xl font-semibold mt-8">4. Your Rights</h2>
        <p className="text-lg leading-relaxed">
          You have the right to access, update, and delete your personal information. You can also object to certain data processing 
          activities or request a copy of your information by contacting us directly at <a href='mailto:abhishekbiyani08@gmail.com' className="text-purple-500">abhishekbiyani@gmail.com</a>.
        </p>

        <h2 className="text-3xl font-semibold mt-8">5. Changes to This Policy</h2>
        <p className="text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review
          it periodically.
        </p>

        <h2 className="text-3xl font-semibold mt-8">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have any questions about this Privacy Policy or how we handle your personal information, feel free to reach out to us 
          at <a href='mailto:abhishekbiyani08@gmail.com' className="text-purple-500">abhishekbiyani@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
