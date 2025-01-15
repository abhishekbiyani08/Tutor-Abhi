// import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-purple-800 text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={10}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert tutors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={200}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Hours of Content</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={15}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Subjects and Courses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={500}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
