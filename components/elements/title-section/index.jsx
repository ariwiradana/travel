import React from "react";
import Buttontext from "../button/button-text";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import ButtonFillDark from "../button/button-fill-dark";

const TitleSection = ({ className, title, subtitle, href, actionTitle }) => {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between md:items-end mb-8 md:mb-5 lg:mb-10">
        <div>
          <h6 className="font-montserrat uppercase text-xs lg:text-sm text-app-black-500 font-semibold mb-1 lg:mb-2">
            {subtitle}
          </h6>
          <h3 className="lg:text-3xl text-xl md:text-2xl font-raleway font-bold text-black">
            {title}
          </h3>
        </div>
        {href && (
          <Link href={href}>
            <div className="hidden md:block">
              <Buttontext
                title={actionTitle}
                icon={<HiOutlineArrowNarrowRight size={20} />}
              />
            </div>
            <div className="md:hidden">
              <ButtonFillDark
                title={actionTitle}
                icon={<HiOutlineArrowNarrowRight size={20} />}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
