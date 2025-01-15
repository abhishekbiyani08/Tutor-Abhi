// import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Aayush Agarwal",
    text: "Abhishek is truly passionate about teaching. My grades and confidence have soared thanks to his tutoring!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Pratik Kumbhar",
    text: "Excellent tutor! The lessons were tailored to my needs, and I learned faster than I expected.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Keshav Darak",
    text: "Tutor-Abhi offers great flexibility and high-quality teaching. The improvement in my understanding was instant!",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Shubham Biyani",
    text: "The personalized attention I received made all the difference. Highly recommend for anyone seeking to excel academically!",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 6,
    name: "Aryan Nimbalkar",
    text: "Abhishek is an amazing tutor who genuinely cares about student progress. I feel much more confident now.",
    img: "https://picsum.photos/110/110",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-12 bg-green-50">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-purple-700 text-[20px]">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10 mb-10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
