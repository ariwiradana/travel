import React from "react";

const Logo = ({ className }) => {
  return (
    <div className="flex flex-col items-center">
      <h2
        className={`text-2xl md:text-3xl font-montserrat font-bold leading-4 lg:leading-6 text-black ${className}`}
      >
        karens.
      </h2>
      <h5
        className={`font-raleway uppercase leading-4 md:leading-5 text-[9px] font-semibold tracking-[0.2rem] lg:tracking-[0.3rem] ml-[2px] text-app-black-500 ${className}`}
      >
        Bali Tours
      </h5>
    </div>
  );
};

export default Logo;
