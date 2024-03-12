import Link from "next/link";
import React from "react";

const Sidebar = ({ active, data }) => {
  return (
    <div
      className={`h-screen bg-white fixed w-full z-10 top-16 transition-all ease-in-out duration-500 opacity-0 p-5 border-t ${
        active
          ? "left-0 opacity-100 border-t-gray-200"
          : "left-[100%] border-t-transparent"
      }`}
    >
      <ul className="flex flex-col gap-4">
        {data?.map(({ label, path }) => (
          <li key={`sidebar-${path}`}>
            <Link
              className="text-base font-montserrat font-semibold"
              href={path}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
