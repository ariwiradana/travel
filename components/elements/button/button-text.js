import React from "react";

const Buttontext = ({ title, icon, ...props }) => {
  return (
    <button
      {...props}
      className="text-black-border-app-black-500 rounded-full text-sm font-bold font-montserrat px-4 py-2 transition-colors ease-in-out group"
    >
      {icon ? (
        <div className="flex items-center gap-x-2 group-hover:gap-x-4 transition-all ease-in-out duration-500">
          <span>{title}</span>
          <div>{icon}</div>
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default Buttontext;
