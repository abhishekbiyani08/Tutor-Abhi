// import React from 'react';

function Services() {
  return (
    <div className='bg-gray-900 text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10'>
      <h1 className='title-animation text-2xl mt-24 sm:text-3xl lg:text-4xl'>
        OUR SERVICES
      </h1>

      <h1 className='heading-animation text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-purple-500 max-w-[900px] text-center mt-4'>
        Shaping Futures with Tailored Learning Experiences
      </h1>

      <p className='paragraph-animation max-w-[900px] text-center mt-6 mb-12 text-base sm:text-lg md:text-xl lg:text-2xl'>
        We offer a variety of educational services designed to cater to each student&apos;s unique learning needs. Whether a beginner or expert looking to advance, our services are crafted to help you reach your full potential.
      </p>

      {/* Services section */}
      <div className="title-animation flex flex-wrap justify-center items-center w-[1000px] mb-10 mt-4 gap-8">
        <div className="service-card bg-gray-800 p-6 rounded-lg text-center w-full h-[250px] sm:w-1/2 lg:w-1/4 hover:scale-105 transition-all duration-200s">
          <h2 className="text-xl font-bold text-purple-500 mb-4">Personalized Tutoring</h2>
          <p className="text-sm lg:text-base text-white">
            Tailored lessons designed to meet individual learning styles and goals, perfect for everyone.
          </p>
        </div>

        <div className="service-card bg-gray-800 p-6 rounded-lg text-center w-full h-[250px] sm:w-1/2 lg:w-1/4 hover:scale-105 transition-all duration-200s">
          <h2 className="text-xl font-bold text-purple-500 mb-4">Advanced Test Prep</h2>
          <p className="text-sm lg:text-base text-white">
            Comprehensive test preparation to help you excel in exams, focusing on strategies and subject expertise.
          </p>
        </div>

        <div className="service-card bg-gray-800 p-6 rounded-lg text-center w-full h-[250px] sm:w-1/2 lg:w-1/4 hover:scale-105 transition-all duration-200s">
          <h2 className="text-xl font-bold text-purple-500 mb-4">Career Guidance and Counseling</h2>
          <p className="text-sm lg:text-base text-white">
            We help students set goals and create a roadmap to achieve their academic and professional aspirations.
          </p>
        </div>

        <div className="service-card bg-gray-800 p-6 rounded-lg text-center w-full h-[250px] sm:w-1/2 lg:w-1/4 hover:scale-105 transition-all duration-200s">
          <h2 className="text-xl font-bold text-purple-500 mb-4">Hands-On Learning Workshops</h2>
          <p className="text-sm lg:text-base text-white">
            Join interactive workshops that use hands-on learning and real-life examples to simplify complex concepts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
