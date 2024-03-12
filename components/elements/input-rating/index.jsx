import { Rating } from "@mui/material";
import React, { forwardRef } from "react";

const InputRating = ({ value, onChange, size }, ref) => {
  return (
    <Rating
      ref={ref}
      size={size}
      name="simple-controlled"
      value={value}
      onChange={onChange}
    />
  );
};

export default forwardRef(InputRating);
