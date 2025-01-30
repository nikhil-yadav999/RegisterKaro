import React from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import sample3 from "./Asset/7067548.png";
import { IoIosPlayCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";
import sample2 from "./Asset/3d-male-character-happy-working-on-a-laptop-free-png.webp";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-amber-100 via-blue-100 via-white-100 to-blue-200">
      <div className="md:w-1/2 mb-8 md:mb-0 ml-8">
        <a
          className="flex items-center text-primary font-semibold py-4 transition"
          href="/"
        >
          <IoIosStar className="mr-2 text-yellow-400 size-4" />
          Google Rating
          <MdStars className="ml-2 text-yellow-400 size-4" />
          <MdStars className=" text-yellow-400 size-4" />
          <MdStars className=" text-yellow-400 size-4" />
          <MdStars className=" text-yellow-400 size-4" />
          <MdStars className=" text-yellow-400 size-4" />
        </a>

        <h1 className="text-4xl md:text-5xl font-semi-bold mb-4">
          Your Trusted Partner
        </h1>
        <h1 className="text-4xl md:text-5xl font-semi-bold mb-4">
          for Compliance Business Needs
        </h1>

        <hr className="w-24 h-1 my-4 bg-red-600 border-0 rounded md:my-10" />

        <p className="mb-6">
          <>
            An online business compliance platform that helps entrepreneurs and{" "}
            <br />
            other individuals with various <b>registrations</b>,{" "}
            <b>tax filings</b>, and other{" "}
            <b>
              legal
              <br /> matters
            </b>
            .
          </>
        </p>

        <div className="flex flex-col md:flex-row mb-12 gap-4">
          <button className="flex items-center py-2 px-4 rounded-lg">
            <PiSquaresFourLight className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">4.5+</p>
              <p className="text-sm">Customer Rating</p>
            </div>
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg">
            <IoIosPeople className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">20,000+</p>
              <p className="text-sm">Clients</p>
            </div>
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg">
            <FaHandshakeSimple className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">99.8%</p>
              <p className="text-sm">Financial Stability</p>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-start mt-12 mb-12">
          <a
            className="bg-primary font-semibold text-white px-4 py-2 transition rounded"
            href="/"
          >
            See All Services
          </a>
          <a
            className="flex items-center text-primary font-semibold px-4 py-2 ml-4 transition"
            href="/"
          >
            <IoIosPlayCircle className="mr-2 text-red-600 size-8" />
            See how it works
          </a>
        </div>
      </div>

      {/* Right Side with Image & Floating Buttons */}
      <div className="relative md:w-1/2 flex flex-col items-center">
        {/* Background Image (Hidden on Mobile) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden">
          <img
            src={sample3}
            alt="Example"
            className="w-64 h-auto max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Main Image (Always Visible) */}
        <div className="relative z-10 w-full flex justify-center">
          <img
            src={sample2}
            alt="Example"
            className="w-full max-w-md h-auto object-cover rounded-lg"
          />
        </div>

        {/* Floating Buttons - Fixed for Mobile View */}
        <div className="relative mt-6 md:absolute md:right-0 md:top-0 flex flex-col space-y-4 items-center md:items-end">
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg">
            <span>Annual Compliance</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg">
            <span>Payroll Services</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg">
            <span>Company Formations</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg">
            <span>Annual Compliance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
