import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const columns = [
    {
      heading: "Start a Business",
      links: ["Features", "Solutions", "Integrations", "Enterprise","Solutions"],
    },
    {
      heading: "Government Registration ",
      links: ["Patners", "Community", "Developers", "App","Blog"],
    },
    {
      heading: "Compliance & Tax",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      heading: "BIS & CDSCO",
      links: ["About", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
        <div className="pl-6">
          <>
            Design outstanding interfaces <br />
            with advanced Figma features in <br />a matter of minutes.
          </>
          <div className="flex flex-row pt-3">
            <FaFacebook className="mr-5 size-6" />
            <AiFillGoogleCircle className="mr-5 size-6" />
            <FaApple className="mr-5 size-6" />
            <RiInstagramFill className="mr-5 size-6" />
          </div>
        </div>
        {columns.map((column, index) => (
          <div key={index}>
            <h3 className="text-xl text-secondary font-semibold mb-4">
              {column.heading}
            </h3>
            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-2">
                  <button className="text-white hover:text-gray-400 transition duration-300">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 pt-16 bg-white-100">
        <div className="text-center md:w-1/2">
          <button className="text-secondary">
            <FaArrowAltCircleUp className="size-14" />
          </button>

          <p className="mt-2 text-gray-400 tracking-widest">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
