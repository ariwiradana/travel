import React, { forwardRef } from "react";

const ButtonFillDark = ({ title, icon, size, full, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`bg-black hover:bg-opacity-90 duration-300 text-white hover:text-white rounded-full group md:text-sm font-semibold font-montserrat transition-colors ease-in-out lg:px-6 lg:py-3 md:px-4 md:py-2 px-3 py-[10px] ${
        full ? "w-full py-4 text-sm" : "w-auto text-xs md:text-sm"
      }`}
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

export default forwardRef(ButtonFillDark);
