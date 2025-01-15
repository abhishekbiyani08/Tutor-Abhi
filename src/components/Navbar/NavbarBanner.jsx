import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-teal-300 text-sm text-center font-semibold p-1 hidden lg:block relative"
      >
        Are you a student looking for an online tutoring partnership with a university or school ?
        <a href="https://wa.me/+919699114832" className="text-blue-800 ml-2 text-[17px]">
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          <FaWindowClose />
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
