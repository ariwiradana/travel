import React from "react";

const ButtonOutlinedDark = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-white border border-app-black-500 text-black-border-app-black-500 rounded-full text-sm font-bold font-montserrat px-4 py-2 transition-colors ease-in-out"
    >
      {title}
    </button>
  );
};

export default ButtonOutlinedDark;
