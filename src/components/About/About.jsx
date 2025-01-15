// import React from 'react';
import './About.css';
import Image from './OnlineTeacher.jpg';
import img from './img.jpg';

function About() {
  return (
    <div className='bg-gray-900 text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10'>
      <h1 className='title-animation text-2xl mt-24 sm:text-3xl lg:text-4xl'>
        ABOUT US
      </h1>

      <h1 className='heading-animation text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-purple-500 max-w-[900px] text-center mt-4'>
        Empowering Students, One Lesson at a Time
      </h1>

      <p className='paragraph-animation max-w-[900px] text-center mt-6 mb-12 text-base sm:text-lg md:text-xl lg:text-2xl'>
        At Tutor-Abhi, we believe in creating an individualized learning experience that fits the unique needs of every student. Whether you&apos;re looking to strengthen your basics or advance to complex topics, I’m here to guide you every step of the way. With a passion for teaching and a student-first approach, I focus on making learning engaging, effective, and enjoyable.
      </p>

      <img src={Image} alt="Online Teacher" className='image-animation cursor-pointer w-full sm:w-[80%] md:w-[70%] lg:w-[1000px] rounded-lg mb-8'></img>

      {/* Statistics title */}
      <h1 className='title-animation text-2xl sm:text-3xl lg:text-4xl text-purple-500 mt-10 mb-6'>
        OUR STATISTICS
      </h1>

      {/* Statistics section */}
      <div className="title-animation flex flex-wrap justify-center items-center w-[1000px] mb-10 mt-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center p-4 md:border-r md:border-slate-500 last:border-none">
          <div className="font-bold font-heading dark:text-white lg:text-5xl text-[2.6rem] text-primary xl:text-6xl">10</div>
          <div className="text-sm font-medium lg:text-base text-white tracking-widest uppercase">AWARDS</div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 text-center p-4 md:border-r md:border-slate-500 last:border-none">
          <div className="font-bold font-heading dark:text-white lg:text-5xl text-[2.6rem] text-primary xl:text-6xl">5</div>
          <div className="text-sm font-medium lg:text-base text-white tracking-widest uppercase">EMPLOYEES</div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 text-center p-4 last:border-none">
          <div className="font-bold font-heading dark:text-white lg:text-5xl text-[2.6rem] text-primary xl:text-6xl">50+</div>
          <div className="text-sm font-medium lg:text-base text-white tracking-widest uppercase">TESTIMONIALS</div>
        </div>
      </div>

      <img src={img} alt="Statistics" className='title-animation w-full sm:w-[80%] md:w-[70%] lg:w-[1000px] rounded-lg mb-4' />
    </div>
  );
}

export default About;
