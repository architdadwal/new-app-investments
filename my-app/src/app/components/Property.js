// components/MlmPropertyCard.js

import React from "react";

const MlmPropertyCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 my-8">
      <img
        src="/money.jpg"
        alt="Property Investment"
        className="w-full h-96 object-cover object-center"
      />
      <div className="px-6 py-4">
        <h2 className="text-white text-2xl font-semibold mb-2">
          Unlock Passive Income Potential with Multi-Level Marketing in Property
          Investments
        </h2>
        <p className="text-gray-200 text-base leading-relaxed pb-2">
          Explore the powerful combination of multi-level marketing and property
          investments. Join our exclusive network to gain access to premium real
          estate opportunities, build your portfolio, and generate substantial
          passive income streams.
        </p>
        <p className="text-gray-200 text-base leading-relaxed pb-2">
          Our dedicated team of experts is here to guide you through every step
          of the journey, ensuring your success in the world of property MLM.
          Discover financial freedom with innovative investment strategies and a
          supportive community.
        </p>
      </div>
      <div className="bg-gray-800 px-6 py-6">
        <p className="text-sm text-white">
          Ready to embark on your journey to financial freedom? Join us today
          and discover the potential of MLM in property investments.
        </p>
      </div>
    </div>
  );
};

export default MlmPropertyCard;
