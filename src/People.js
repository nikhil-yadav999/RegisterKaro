import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample1 from "./Asset/girl.jpg";

const customers = [
  {
    name: "Lucy",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
  {
    name: "Katy",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
  {
    name: "Kiara",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
  {
    name: "Zoro",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
  {
    name: "Zatch",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
  {
    name: "Martin",
    review: "Very satisfied",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sample1,
  },
];

const CustomerFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="client_section py-16 bg-primary relative">
      <div className="container mx-auto px-4">
        <div className="heading_container text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            What people say about me
          </h2>
          <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-2">
            <button
              onClick={previous}
              className="bg-secondary text-white p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="bg-secondary text-white p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="carousel-wrap relative">
          <Slider ref={sliderRef} {...settings}>
            {customers.map((customer, index) => (
              <div key={index} className="item px-2">
                <div className="box bg-white p-6 rounded-lg shadow-lg">
                  <div className="detail-box text-left">
                    <div className="client_id flex mb-4">
                      <FaQuoteLeft
                        className="text-indigo-500 text-2xl items-left justify-start"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-gray-700">{customer.feedback}</p>
                    <div className="client_info flex mt-5">
                      <div className="img-box">
                        <img
                          src={customer.image}
                          alt={customer.name}
                          className="box-img w-16 h-16 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col ml-4">
                        <h6 className="text-lg font-semibold">
                          {customer.name}
                        </h6>
                        <p className="text-sm text-gray-500">
                          {customer.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

