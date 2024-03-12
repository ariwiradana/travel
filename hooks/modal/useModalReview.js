import React, { useState } from "react";

const useModalReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  return { isOpen, onCloseModal, onOpenModal };
};

export default useModalReview;
