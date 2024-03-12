import React, { useState } from "react";

const useLightbox = () => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [slide, setSlide] = useState(1);

  const onToggleLightbox = (slide) => {
    setIsOpenLightbox(!isOpenLightbox);
    setSlide(slide)
  };

  return {
    isOpenLightbox,
    slide,
    onToggleLightbox,
  };
};

export default useLightbox;
