import React from "react";

const TrustedBy = () => {
  return (
    <div className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-6">
          Trusted By Over 100+ Startups and Freelance Business
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-36">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
            alt="Oracle Logo"
            className="h-12"
          />
          <img
            src="https://morpheusdata.com/wp-content/uploads/2020/08/Morpheus-horizontal-v2.png"
            alt="Morpheus Logo"
            className="h-12"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"
            alt="Samsung Logo"
            className="h-12"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2023/03/monday.com-Logo.png"
            alt="Monday.com Logo"
            className="h-12"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2024/10/Segment-Logo.png"
            alt="Segment Logo"
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
