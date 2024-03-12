import React from "react";

const ButtonFillWhite = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-white hover:bg-blue-600 text-black hover:text-white rounded-full text-sm font-bold font-montserrat px-4 py-2 transition-colors ease-in-out"
    >
      {title}
    </button>
  );
};

export default ButtonFillWhite;
