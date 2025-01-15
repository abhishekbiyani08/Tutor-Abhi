// import React from 'react';
import './ContactUs.css';
import contactImage from './image.png';
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="title-animation max-w-[750px] mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 uppercase">Contact Us</h1>

        {/* Hero Image */}
        <div className="flex justify-center mb-8">
          <img
            src={contactImage}
            alt="Contact us"
            className="w-full h-auto max-w-[300px] sm:max-w-[400px] object-cover"
          />
        </div>

        <p className="text-lg sm:text-xl leading-relaxed text-center">
          We would love to hear from you! Whether you have questions about our services, need assistance with booking a tutoring session, 
          or want to share your feedback, feel free to reach out to us.
        </p>

        <div className="space-y-8 mt-8">
          {/* Phone Section */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <IoIosCall className="text-purple-500 mr-2" size={24} />
              <p className="text-md sm:text-lg">Phone: <span className="text-purple-500">+91 9699114832</span></p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <AiOutlineMail className="text-purple-500 mr-2" size={24} />
              <p className="text-md sm:text-lg">Email: <span className="text-purple-500">abhishekbiyani08@gmail.com</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 uppercase">Get In Touch</h2>
          <p className="text-md sm:text-lg leading-relaxed mb-6">
            Feel free to reach out via phone or email, or send us a message using the form below, and we&apos;ll get back to you as soon as possible!
          </p>

          {/* Contact Form */}
          <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="887cc473-d2f6-47d2-83d9-63e2140bb60e" />
            
            {/* Name Input */}
            <input
              required
              name="Name"
              type="text"
              placeholder="Your Name"
              className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-2 rounded-lg text-gray-900 bg-white shadow focus:outline-none"
            />
            
            {/* Email Input */}
            <input
              required
              name="Email"
              type="email"
              placeholder="Your Email"
              className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-2 rounded-lg text-gray-900 bg-white shadow focus:outline-none"
            />

            {/* Message Textarea */}
            <textarea
              rows="4"
              name="Message"
              placeholder="Your Message"
              className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-2 rounded-lg text-gray-900 bg-white shadow focus:outline-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl py-3 px-6 bg-purple-700 rounded-lg font-semibold text-white hover:bg-purple-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
