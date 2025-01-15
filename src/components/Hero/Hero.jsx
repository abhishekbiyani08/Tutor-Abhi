// import React from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative bg-green-50">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.3)}
              initial="hidden"
              animate="visible"
              className="text-purple-800 uppercase font-bolder text-2xl"
            >
              Satisfaction, Guaranteed !
            </motion.p>
            <motion.h1
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-3xl font-semibold lg:text-5xl !leading-tight"
            >
              Learn anytime, anywhere, with <span className="text-teal-500">Expert Guidance</span> tailored for you.
            </motion.h1>
            <motion.p
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
            >
              Experience personalized online tutoring focused on enhancing skills and success.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <NavLink to='/get-started'>
                <button className="primary-btn bg-teal-300">Get Started</button>
              </NavLink>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
