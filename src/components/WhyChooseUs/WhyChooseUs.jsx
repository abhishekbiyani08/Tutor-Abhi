import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { GrUserExpert } from "react-icons/gr";
import { FaUserClock } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { PiFediverseLogoFill } from "react-icons/pi";

const WhyChooseData = [
  {
    id: 1,
    title: "Expert Instruction",
    desc: "Our experts offer in-depth knowledge and personalized teaching to ensure you achieve your learning goals.",
    icon: <GrUserExpert />,
    bgColor: "purple",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Flexible Scheduling",
    desc: "Our flexible booking system allows you to choose session times that work best for you, fitting seamlessly into your life.",
    link: "/",
    icon: <FaUserClock />,
    bgColor: "blue",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Diverse Subject Offerings",
    desc: "Whether you need help with coding, math, or other areas, our diverse offerings ensure that you can find the support you need.",
    link: "/",
    icon: <PiFediverseLogoFill />,
    bgColor: "red",
    delay: 0.5,
  },
  {
    id: 4,
    title: "Affordable Rates",
    desc: "Our pricing structure ensures that top-notch education is accessible to everyone, without compromising on quality.",
    link: "/",
    icon: <FaRupeeSign />,
    bgColor: "green",
    delay: 0.5,
  },
];

const WhyChooseUs = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set hasAnimated to true after the component mounts
    setHasAnimated(true);
  }, []);

  return (
    <div className="bg-green-50">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[700px] mx-auto mb-5">
          <h1 className="uppercase text-[20px] text-purple-800">
            Why Choose Us
          </h1>
          <p className="font-semibold text-[32px]">
            Key Advantages of Our Online Tutoring
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideLeft(item.delay)}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"} // Animate only if hasAnimated is true
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-white"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
