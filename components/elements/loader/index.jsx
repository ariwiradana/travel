import useScreenSize from "@/hooks/screen/useScreenSize";
import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  const { screen } = useScreenSize();
  return (
    <div className="w-full flex justify-center">
      <CircularProgress
        sx={{ color: "black" }}
        size={screen?.mobile ? 16 : 24}
      />
    </div>
  );
};

export default Loader;
