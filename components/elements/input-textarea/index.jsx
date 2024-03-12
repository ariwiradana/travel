import React, { forwardRef } from "react";

const InputTextarea = ({ ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      rows={5}
      cols={4}
      className="bg-gray-100 placeholder:text-gray-400 text-sm ring-transparent placeholder:text-sm placeholder:font-medium focus:ring-gray-600 outline-none ring-1 font-montserrat font-medium p-3 w-full rounded-md"
    ></textarea>
  );
};

export default forwardRef(InputTextarea);
