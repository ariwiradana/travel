import FsLightbox from "fslightbox-react";
import React from "react";

const LightBoxGallery = ({ open, sources, slide }) => {
  return (
    <>
      <FsLightbox toggler={open} sources={sources} slide={slide} />
    </>
  );
};

export default LightBoxGallery;
