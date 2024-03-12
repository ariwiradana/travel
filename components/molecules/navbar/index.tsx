import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import Logo from "@/components/elements/icons/logo";
import useNavbar from "@/hooks/navbar/useNavbar";
import useSidebar from "@/hooks/sidebar/useSidebar";
import fetcher from "@/lib/fetcher";
import Link from "next/link";
import React, { FC } from "react";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import Container from "../container";
import Sidebar from "../sidebar";
import useSWR from "swr";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { setActive, active } = useSidebar();
  const { menu } = useNavbar();
  const { data: contact } = useSWR("/api/contact", fetcher);

  return (
    <>
      <nav
        className={`w-full z-20 transition-all ease-in-out duration-500 border-b`}
      >
        <Container>
          <div
            className={`grid grid-cols-3 lg:grid-cols-4 items-center w-full transition-all ease-in-out duration-500 h-16 lg:h-20`}
          >
            <Link href="/" className="lg:flex order-2 lg:order-1 hidden">
              <Logo className={`text-black`} />
            </Link>
            <div className="h-full items-center md:gap-x-8 lg:gap-x-10 hidden md:flex lg:justify-center lg:order-2 md:col-span-2">
              {menu?.map(({ label, path }) => (
                <Link
                  key={`navbar-${path}-${label}`}
                  href={path}
                  className={`font-montserrat text-sm lg:text-base leading-6 font-semibold transition-all ease-in-out duration-500 text-black`}
                >
                  {label}
                </Link>
              ))}
            </div>
            {contact && (
              <Link
                target="_blank"
                href={`https://wa.me/${contact?.phone}`}
                className="flex justify-end order-3 lg:order-2 col-span-2 md:col-span-1"
              >
                <ButtonFillDark title="Book Now" size="sm" />
              </Link>
            )}

            <div className="md:hidden lg:ml-auto order-1">
              {active ? (
                <HiX onClick={() => setActive(false)} size={26} />
              ) : (
                <HiOutlineMenuAlt1
                  onClick={() => setActive(true)}
                  size={26}
                  className={`transform lg:rotate-180 text-black`}
                />
              )}
            </div>
          </div>
        </Container>
      </nav>
      <Sidebar active={active} data={menu} />
    </>
  );
};

export default Navbar;
