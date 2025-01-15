import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";

const subjectList = [
  {
    id: 1,
    name: "C Programming",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0,
    link: "https://forms.gle/7ZjKWNF7nRUAqQz69",
  },
  {
    id: 2,
    name: "C++ Programming",
    icon: <FaComputer />,
    color: "#00c986",
    delay: 0.1,
    link: "https://forms.gle/VFRKtwihD2v3sMSU9",
  },
  {
    id: 3,
    name: "Javascript",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.2,
    link: "https://forms.gle/G8rbCsehUxBgcedDA",
  },
  {
    id: 4,
    name: "DBMS",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.3,
    link: "https://forms.gle/Yx3d55VDYZZKkFqc7",
  },
  {
    id: 5,
    name: "OS",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.4,
    link: "https://forms.gle/dGMa33bRSK3hmrax9",
  },
  {
    id: 6,
    name: "Cloud Computing",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.5,
    link: "https://forms.gle/KqMcGR1EnB2A7UrP7",
  },
  {
    id: 7,
    name: "Web Development",
    icon: <FaComputer />,
    color: "#b93838",
    delay: 0.6,
    link: "https://forms.gle/28zHTyoWeucdwcDC8",
  },
  {
    id: 8,
    name: "DSA",
    icon: <FaComputer />,
    color: "#464646",
    delay: 0.7,
    link: "https://forms.gle/N9V2uYKLkC37Mw267",
  },
];

const SubjectCard = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Set to true to animate only once
          observer.unobserve(componentRef.current); // Stop observing after first animation
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
    <>
      <div className="container py-14 md:py-24 bg-green-50" ref={componentRef}>
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-purple-700">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Get Started with these Subjects
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border rounded-lg border-purple-800/50 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer bg-white/50"
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <a href={subject.link} target="_blank" rel="noopener noreferrer">
                  {subject.name}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
