"use client";

import Link from "next/link";
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
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
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
  );
};

export default Links;
