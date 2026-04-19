import React from "react";

const PageHeader = () => {
  return (
    <div
      className={`relative h-[300px] md:h-[440px] 2xl:h-[500px] flex items-end md:pb-11 justify-center bg-cover bg-bottom bg-[linear-gradient(180deg,#0D3023_4.39%,rgba(21,23,23,0.2)_100%),url('/products-page-bg.png')]`}
    >
      <div className="relative z-10 p-8 container">
        <h1 className="text-white text-center font-police text-4xl md:text-[64px] leading-[120%] mb-3 md:mb-8">
          Our Products
        </h1>
        <p className="text-[#B4C0C3] text-center text-lg md:text-2xl font-normal leading-[150%] max-w-[1050px] mx-auto">
          Explore our premium selection of natural herbal products
        </p>
      </div>
      <div className="absolute w-full h-[180px] -bottom-5 bg-[url('/hero-bottom-gradient.png')] bg-no-repeat" />
    </div>
  );
};

export default PageHeader;
