import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Fill up Application Form",
      icon: <FaCheckCircle />,
      color: "#eb5757",
    },
    {
      text: "Make Online Payment",
      icon: <FaTimesCircle />,
      color: "#27ae60",
    },
    {
      text: "Executive will Process Application",
      icon: <FaInfoCircle />,
      color: "#f2994a",
    },
    {
      text: "Get Confirm Mail",
      icon: <FaExclamationCircle />,
      color: "#828282",
    },
  ];

  return (
    <div className="w-full p-8 bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {headings.map((heading, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg"
          >
            <div
              className="rounded-full p-3 flex items-center justify-center text-white"
              style={{ backgroundColor: heading.color }}
            >
              {heading.icon}
            </div>
            <h2 className="text-base font-semibold">{heading.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconHeadings;

