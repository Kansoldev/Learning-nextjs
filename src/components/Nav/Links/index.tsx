"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type linksType = { title: string; path: string }[];

const links: linksType = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`text-base ${
              pathname == link.path
                ? "bg-white text-[#0d0c22] p-[10px] rounded-[20px] font-medium text-center"
                : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className="bg-white text-[#0d0c22] p-[10px] md:hidden"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>

      {open && (
        <div
          className="absolute top-[100px] right-8 w-1/2 flex flex-col items-end gap-10 mt-20 md:hidden"
          style={{ backgroundColor: "#0d0c22", height: "calc(100vh - 100px)" }}
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={`text-base ${
                pathname == link.path
                  ? "bg-white text-[#0d0c22] p-[10px] rounded-[20px] font-medium text-center"
                  : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
