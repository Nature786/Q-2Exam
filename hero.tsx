
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-full relative">
        {/* Background Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7930b4e1d1fb127bcbd6cf90b2c7b967939bb189b039ddac48bff432a851759a?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
          alt="Hero section banner"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Text and Button Section */}
        <div className="absolute left-12 top-1/3 transform -translate-y-1/2 text-black text-left space-y-6 p-6">
          {/* Heading */}
          <h1 className="text-5xl sm:text-4xl md:text-7xl font-extrabold uppercase tracking-wide">
            <span className="block">FIND CLOTHES</span>
            <span className="block">THAT MATCHES</span>
            <span className="block">YOUR STYLE</span>
          </h1>
          <div className="w-full max-w-[545px] text-gray-600 py-1 font-[400] text-[16px] leading-[22px] font-satoshi">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </div>
          {/* Button */}
          <CtaButton />

        </div>
      </div>
    </div>
  );
};

const CtaButton = () => {
  return (
    <button
      className="rounded-full bg-black text-white px-12 py-4 font-medium text-base cursor-pointer border-none transition-colors duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 mt-6"
      type="button"
    >
      Shop Now
    </button>
  );
};

export default Hero;
