"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hash = pathname.split("#")[1];
    if (hash) {
      setActiveId(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-transparent p-4 z-50 flex flex-col items-center">
      <ul className="space-y-4">
        {[
          { name: "Home", icon: "mdi:home" },
          { name: "About", icon: "mdi:account" },
          { name: "Resume", icon: "mdi:file-document" },
          { name: "Portfolio", icon: "mdi:briefcase" },
          { name: "Services", icon: "mdi:cog" },
          { name: "Contact", icon: "mdi:email" },
        ].map((item) => (
          <li
            key={item.name}
            className={`p-3 rounded-full cursor-pointer ${
              activeId === item.name.toLowerCase()
                ? "bg-gray-600 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            <Link
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-2"
            >
              <Icon icon={item.icon} width="24" height="24" />
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
