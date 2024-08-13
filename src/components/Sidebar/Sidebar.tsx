"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./styles/Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>("home");
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
      let currentId: string | null = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentId = section.getAttribute("id");
        }
      });

      setActiveId(currentId || "home");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.sidebar}>
      <button className={styles.mobile_menu_button} onClick={handleMenuClick}>
        <Icon icon="mdi:menu" width="24" height="24" />
      </button>
      <div
        className={`${styles.sidebar_menu} ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0`}
      >
        <button
          className={styles.mobile_close_button}
          onClick={handleMenuClick}
        >
          <Icon icon="mdi:close" width="24" height="24" />
        </button>
        <ul className={styles.menu_content}>
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
              className={`${styles.menu_item} ${
                activeId === item.name.toLowerCase()
                  ? styles.active
                  : styles.inactive
              }`}
            >
              <Link
                href={`#${item.name.toLowerCase()}`}
                className={styles.menu_item_content}
                data-tooltip-id={item.name}
                data-tooltip-content={item.name}
              >
                <Icon icon={item.icon} width="24" height="24" />
              </Link>
              <Tooltip id={item.name} place="right" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
