// import React from 'react';
import './Careers.css';
import image from './image.png'

const Careers = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen sm:p-8 flex flex-col items-center justify-center">
      <div className="title-animation max-w-6xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase">Careers</h1>
        <div className="flex justify-center">
          <img
            src={image}
            alt="No openings"
            className="w-full max-w-[300px] sm:max-w-[400px] object-cover"
          />
        </div>


        <p className="text-lg sm:text-xl leading-relaxed">
          We appreciate your interest in joining our team! Currently, we do not have any job openings.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed">
          When new opportunities arise, we will update this page with the latest openings. Please check back later!
        </p>

        <p className="text-md sm:text-lg">
          In the meantime, feel free to contact us at <a href='mailto:abhishekbiyani08@gmail.com' className="text-purple-500">abhishekbiyani@gmail.com</a> for any inquiries.
        </p>
      </div>
    </div>
  );
};

export default Careers;
