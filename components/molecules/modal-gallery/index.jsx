import React from "react";
import Image from "next/image";

const ModalGalleryContent = ({ images, onToggleLightbox }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {images?.map((image, index) => (
        <div
          onClick={() => onToggleLightbox(index + 1)}
          key={`detail-image-${image}`}
          className="w-full h-44 md:h-44 xl:h-48 aspect-square bg-cover relative cursor-pointer"
        >
          <Image
            quality={50}
            fill
            src={image}
            alt={`alt-${image}`}
            className="object-cover aspect-square"
          />
        </div>
      ))}
    </div>
  );
};

export default ModalGalleryContent;
