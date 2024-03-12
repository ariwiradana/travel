import Logo from "@/components/elements/icons/logo";
import Link from "next/link";
import React from "react";
import Container from "../container";

const Footer = ({ menu }) => {
  return (
    <>
      <Container className="flex px-4 py-8 lg:p-10 bg-gray-50 mt-12 w-full">
        <div className="flex justify-start flex-col items-start">
          <Logo className="transform lg:scale-110" />
          <ul className="flex md:flex-row flex-col md:items-center gap-4 lg:gap-10 mt-8">
            {menu?.map(({ label, path }) => (
              <li key={`footer-${path}`} className="text-sm font-semibold font-montserrat text-gray-600">
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-t-gray-200 mt-10 py-6 flex md:flex-row flex-col gap-y-4 md:gap-y-0 justify-between items-center">
          <p className="font-raleway text-sm text-gray-500 font-medium">
            © 2022 Karens Tour. All rights reserved.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
