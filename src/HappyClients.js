import React from "react";
import logo1 from "./Asset/65eba5ffa14998827c92cc01_slack-octothorpe.png";
import logo2 from "./Asset/Pinterest-logo.png";
import logo3 from "./Asset/_shopping-512.webp";
import logo4 from "./Asset/atlassian-icon-512x512-2p7fz86w.png";
import logo5 from "./Asset/download (1).png";
import logo6 from "./Asset/download (2).png";
import logo7 from "./Asset/download (3).png";
import { FaArrowRight } from "react-icons/fa";

const HappyClients = () => {
  const blog = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
    { image: logo7 },
  ];

  return (
    <div className="bg-white text-center mb-16 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <div className="font-bold text-2xl sm:text-3xl lg:text-4xl py-2 pt-9">
        Our Happy Clients
      </div>
      <div className="text-gray-400 text-sm sm:text-base lg:text-lg pb-10">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-
        <br className="hidden sm:block" />
        leveling customer service for state-of-the-art customer service.
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {blog.map((house, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex justify-center items-center bg-white rounded-full shadow-md"
          >
            <img
              src={house.image}
              alt={`Logo ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <a
        className="flex items-center justify-center text-primary font-semibold text-sm sm:text-base px-4 py-2 mt-8 transition text-blue-600 hover:underline"
        href="/"
      >
        Show more
        <FaArrowRight className="ml-2 text-blue-600" />
      </a>
    </div>
  );
};

export default HappyClients;
