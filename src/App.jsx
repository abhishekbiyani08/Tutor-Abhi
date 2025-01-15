// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from "./components/About/About";
import Students from "./components/Students/Students"
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import GetStarted from "./components/GetStarted/GetStarted";
import Login from './components/Login/Login'
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs"
import Careers from "./components/Careers/Careers";
import Terms from "./components/Terms/Terms"
import Policy from "./components/Policy/Policy";
import Refund from "./components/Refund/Refund";
import Conditions from "./components/Conditions/Conditions";
import Dashboard from "./components/Dashboard/Dashboard";

const BannerData = {
  image: Img1,
  tag: "PERSONALIZED LEARNING PLANS",
  title: "Experience a learning journey that's completely tailored to you.",
  subtitle:
    "Our tutors design sessions based on your unique needs, ensuring that lessons align with your strengths and target areas where you need more support. Whether you're aiming to master specific topics or need help with a broad subject, each session is structured to match your pace, keeping you engaged and progressing steadily. We believe every student learns differently, and we’re here to provide the flexibility you need to succeed.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "COVENIENT ONLINE ACCESS",
  title: "Learning has never been more accessible.",
  subtitle:
    "With our online tutoring platform, you can connect with top-tier tutors from the comfort of your home, at any time that fits your schedule. No more commuting or rigid class timings — simply log in and start learning wherever you are. Whether you're on a computer, tablet, or smartphone, we bring quality education right to your fingertips, making learning flexible and stress-free.",
  link: "#",
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden bg-green-50">
              <NavbarBanner />
              <Hero />
              <NumberCounter />
              <WhyChooseUs />
              <Banner {...BannerData} />
              <Banner {...BannerData2} reverse={true} />
              <SubjectCard />
              <Testimonial />
            </main>
          }
        />
        <Route path="/connect" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/for-students" element={<Students />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms-and-conditions" element={<Conditions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;