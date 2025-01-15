import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import { NavLink } from "react-router-dom";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(componentRef.current); // Stop observing after the first animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="bg-green-50 pb-14" ref={componentRef}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* Banner Image section */}
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[400px] h-full object-cover"
            />
          </div>
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={hasAnimated ? SlideUp(0.5) : {}}
              initial={hasAnimated ? "hidden" : ""}
              animate={hasAnimated ? "visible" : ""}
              className="text-[20px] text-purple-800 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={hasAnimated ? SlideUp(0.7) : {}}
              initial={hasAnimated ? "hidden" : ""}
              animate={hasAnimated ? "visible" : ""}
              className="text-xl lg:text-2xl font-semibold capitalize"
            >
              {title}
            </motion.p>
            <motion.p
              variants={hasAnimated ? SlideUp(0.9) : {}}
              initial={hasAnimated ? "hidden" : ""}
              animate={hasAnimated ? "visible" : ""}
              className="text-sm text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={hasAnimated ? SlideUp(1.1) : {}}
              initial={hasAnimated ? "hidden" : ""}
              animate={hasAnimated ? "visible" : ""}
              className="flex justify-center md:justify-start"
            >
              <NavLink to='/get-started'>
                <button className="primary-btn bg-purple-700 !mt-5 text-white">Get Started</button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
