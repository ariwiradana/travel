import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useNavbar = () => {
  const { pathname } = useRouter();
  const [isTop, setIsTop] = useState(true);

  const [menu] = useState([
    { label: "Home", path: "/" },
    { label: "Tours", path: "/tours" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  return { isTop, menu };
};

export default useNavbar;
