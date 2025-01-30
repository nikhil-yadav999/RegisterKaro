import React from "react";

const Blog = () => {
  const blog = [
    { who: "1M⁺", title: "Customers" },
    { who: "12⁺", title: "Years of Excellence" },
    { who: "41⁺", title: "R&D Engineer" },
    { who: "78⁺", title: "Countries" },
    { who: "3287⁺", title: "Partners" },
    { who: "41⁺", title: "Awards Received" },
  ];

  return (
    <div className="bg-white text-center py-10 px-4">
      {/* Heading */}
      <div className="text-secondary text-sm uppercase tracking-widest">
        Why Register Karo
      </div>
      <div className="font-bold text-3xl sm:text-4xl py-2 pb-6">
        Some Numbers are Important
      </div>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blog.map((house, index) => (
          <div
            key={index}
            className="bg-white p-5 pb-8 w-full max-w-[350px] mx-auto cursor-pointer shadow-lg rounded-lg"
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800 text-4xl font-bold">
              {house.who}
            </div>
            <div className="text-sm font-semibold max-w-[260px] mx-auto mt-2">
              {house.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

