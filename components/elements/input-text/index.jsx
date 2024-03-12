import React, { forwardRef } from "react";

const InputText = ({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type="text"
      className="bg-gray-100 placeholder:text-gray-400 ring-transparent placeholder:text-sm placeholder:font-medium focus:ring-gray-600 outline-none ring-1 font-montserrat text-sm font-medium p-3 w-full rounded-md"
    />
  );
};

export default forwardRef(InputText);
