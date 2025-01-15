// import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
// import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  borderTop: '1px dashed grey',
  backgroundImage: `linear-gradient(white, lightBlue)`,
};

const Footer = () => {
  return (
    <div style={FooterBg}>
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold">
                <img src="./logo.png" id="logo-footer"></img>
                <p className="text-1xl">Tutor-Abhi</p>
              </div>
              <p>
                Hi, I&apos;m Abhishek Biyani, a final year CSE undergrad and educator. I make web development, coding, and data structures easy to understand and fun. Join me to boost your tech skills and build a strong foundation!
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="https://maps.app.goo.gl/u2k1MRjHj9WB8PN58" className="hover:text-purple-800 duration-200" target="_blank">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/abhishek.biyani.08" className="hover:text-purple-800 duration-200" target="_blank">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://github.com/abhishekbiyani08" className="hover:text-purple-800 duration-200">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-biyani08/" className="hover:text-purple-800 duration-200" target="_blank">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href='/' className="hover:text-purple-800 duration-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='/about' className="hover:text-purple-800 duration-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href='/services' className="hover:text-purple-800 duration-200">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='/connect' className="hover:text-purple-800 duration-200">
                      Connect
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="https://drive.google.com/drive/folders/14rCsiU629EbsieSeOgf1rjneWtk9pcNB?usp=drive_link" className="hover:text-purple-800 duration-200" target="_blank">
                      DSA
                    </a>
                  </li>
                  <li>
                    <a href="https://learning-zone.github.io/react-basics/#table-of-contents" className="hover:text-purple-800 duration-200" target="_blank">
                      React
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1vr3MAWlOF5fW3VO_9_0hcHdR5PIJAeOE?usp=drive_link" className="hover:text-purple-800 duration-200" target="_blank">
                      Interview Prep
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1XOzTdMFkBy6tY4UESYFHD1G37rjxdDNI?usp=drive_link" className="hover:text-purple-800 duration-200" target="_blank">
                      Dynamic Programming
                    </a>
                  </li>
                  <li>
                    <a href="https://www.indiabix.com" className="hover:text-purple-800 duration-200" target="_blank">
                      Aptitude Preparation
                    </a>
                  </li>
                  <li>
                    <a href="https://takeuforward.org/interviews/must-do-questions-for-dbms-cn-os-interviews-sde-core-sheet/" className="hover:text-purple-800 duration-200" target="_blank">
                      Core Subjects
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/careers" className="hover:text-purple-800 duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="hover:text-purple-800 duration-200">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="hover:text-purple-800 duration-200">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="hover:text-purple-800 duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/refund-policy" className="hover:text-purple-800 duration-200">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions" className="hover:text-purple-800 duration-200">
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-1">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                {" "}
                @copyright 2024 Abhishek Biyani
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
