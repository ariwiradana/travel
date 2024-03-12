import useScreenSize from "@/hooks/screen/useScreenSize";
import { Modal, SwipeableDrawer } from "@mui/material";
import React from "react";

const CustomModal = ({ open, onClose, onOpen, children, title }) => {
  const { screen } = useScreenSize();
  return (
    <>
      {screen?.tablet || screen?.desktop ? (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-2xl outline-none bg-white border-none">
            {title && (
              <h4 className="font-raleway font-semibold text-2xl mb-3 lg:mb-4">
                {title}
              </h4>
            )}
            <div className="min-w-[55vw] max-h-[70vh] overflow-auto">
              {children}
            </div>
          </div>
        </Modal>
      ) : (
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={onClose}
          onOpen={onOpen}
        >
          <div className="p-1">{children}</div>
        </SwipeableDrawer>
      )}
    </>
  );
};

export default CustomModal;
