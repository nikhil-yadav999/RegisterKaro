import React from "react";

const TrustedBy = () => {
  return (
    <div className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-semibold mb-6">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
            alt="Oracle Logo"
            className="max-w-[150px] h-auto"
          />
          <img
            src="https://morpheusdata.com/wp-content/uploads/2020/08/Morpheus-horizontal-v2.png"
            alt="Morpheus Logo"
            className="max-w-[150px] h-auto"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"
            alt="Samsung Logo"
            className="max-w-[150px] h-auto"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2023/03/monday.com-Logo.png"
            alt="Monday.com Logo"
            className="max-w-[150px] h-auto"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2024/10/Segment-Logo.png"
            alt="Segment Logo"
            className="max-w-[150px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;


