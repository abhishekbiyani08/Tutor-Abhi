import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Connect = () => {
  useEffect(() => {
    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 fade-element text-center">Connect with Me</h1>

      <div className="flex justify-center items-center space-x-8 fade-element">
        <a href="https://www.linkedin.com/in/abhishek-biyani08/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaLinkedin className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />
        </a>
        <a href="https://github.com/abhishekbiyani08" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaGithub className="h-10 w-10 sm:h-12 sm:w-12 text-gray-300" />
        </a>
        <a href="mailto:abhishekbiyani08@gmail.com" className="transition-transform transform hover:scale-110">
          <FaEnvelope className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
        </a>
        <a href="https://www.instagram.com/abhishek.biyani.08" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaInstagram className="h-10 w-10 sm:h-12 sm:w-12 text-pink-600" />
        </a>
      </div>

      <div className="mt-10 fade-element">
        <a href="https://calendar.app.google/MFW8rzHM8LQiGydf8" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-md transition-transform transform hover:scale-105">
            Book a Meeting
          </button>
        </a>
      </div>
    </div>
  );
};

export default Connect;
