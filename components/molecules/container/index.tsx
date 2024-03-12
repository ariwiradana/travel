import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="2xl:max-w-[1536px] mx-auto px-5 md:px-12 lg:px-[120px] 2xl:px-0 w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
