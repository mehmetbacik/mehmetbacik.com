"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentId: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentId = section.getAttribute("id");
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-transparent p-4 z-50 md:w-64">
      {/* Mobile menu button */}
      <button
        className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300 md:hidden"
        onClick={handleMenuClick}
      >
        <Icon icon="mdi:menu" width="24" height="24" />
      </button>

      {/* Mobile menu dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-full text-white transition-transform duration-300 md:relative md:w-64 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0`}
      >
        {/* Mobile close button */}
        <button
          className="absolute top-4 right-4 text-gray-800 text-2xl md:hidden"
          onClick={handleMenuClick}
        >
          <Icon icon="mdi:close" width="24" height="24" />
        </button>

        <ul className="space-y-4 p-4 mt-12 md:mt-0">
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
              className={`relative p-3 rounded-full cursor-pointer group transition-all duration-300 ${
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
                <span className="ml-2 hidden md:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
