"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "./styles/Sidebar.module.scss";
import { sidebarData } from "@/data/sidebarData";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = pathname.split("#")[1];
      if (hash) {
        setActiveId(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleHashChange();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentId: string | null = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
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

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
          {sidebarData.map((item) => (
            <li key={item.name} className={`${styles.menu_item}`}>
              <Link
                href={`#${item.name.toLowerCase()}`}
                className={`${styles.menu_item_link} ${
                  activeId === item.name.toLowerCase()
                    ? styles.active
                    : styles.inactive
                }`}
                onClick={handleLinkClick}
              >
                <Icon icon={item.icon} width="24" height="24" />
                <span className={styles.menu_item_name}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
