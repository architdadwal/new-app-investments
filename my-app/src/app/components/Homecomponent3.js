// components/PropertyBenefitsCard.js

import React from "react";

const citiesData = [
  { name: "Gurgaon", image: "/gurgaon.jpg" },
  { name: "Delhi", image: "/delhi.jpg" },
  { name: "Lucknow", image: "/lucknow.jpg" },
  { name: "Noida", image: "/noida.jpg" },
];

const PropertyBenefitsCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-green-400 to-blue-500 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 my-8">
      <div className="px-6 py-8">
        <h2 className="text-white text-2xl font-semibold mb-4">
          More Returns than Gold, FDs, and Mutual Funds
        </h2>
        <p className="text-gray-200 text-base leading-relaxed pb-4">
          Experience superior returns on your investments with our premium real
          estate offerings. Diversify your portfolio and secure your financial
          future with property investments that outperform traditional options
          like gold, fixed deposits, and mutual funds.
        </p>
        <p className="text-gray-200 text-base leading-relaxed pb-4">
          Explore our hot-selling properties in major cities like Mumbai, Delhi,
          Gurgaon, Noida, and Lucknow. These dynamic urban centers offer prime
          real estate opportunities, ensuring your investment growth is
          maximized.
        </p>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {citiesData.map((city, index) => (
            <div key={index}>
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-32 object-cover object-center rounded-lg"
              />
              <p className="text-gray-200 text-sm mt-2">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyBenefitsCard;
