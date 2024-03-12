import useNavbar from "@/hooks/navbar/useNavbar";
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { menu, isTop } = useNavbar();
  return (
    <>
      <Head>{title && <title>{title}</title>}</Head>
      <Navbar />
      <div
        style={{ top: isTop ? -400 : 0, opacity: isTop ? 0 : 1 }}
        className="fixed w-full z-20 bg-white transition-all ease-in-out duration-500"
      >
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer menu={menu} />
    </>
  );
};

export default Layout;
