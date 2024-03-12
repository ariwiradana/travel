import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screen, setScreen] = useState({
    mobile: false,
    tablet: false,
    desktop: true,
  });

  useEffect(() => {
    const width = window.innerWidth;
    console.log({ width });
    if (width < 768) {
      setScreen({ mobile: true, tablet: false, desktop: false });
    } else if (width >= 768 && width < 1024) {
      setScreen({ mobile: false, tablet: true, desktop: false });
    } else {
      setScreen({ mobile: false, tablet: false, desktop: true });
    }
  }, []);

  return { screen };
};

export default useScreenSize;
