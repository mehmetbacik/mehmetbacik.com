"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styles from "./styles/TechnologyModal.module.scss";
import { technologyData } from "@/data/technologyModalData";

interface TechnologyProps {
  id: string;
}

const Technology: React.FC<TechnologyProps> = ({ id }) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null,
  );

  const togglePopup = (key: string) => {
    setSelectedTechnology(selectedTechnology === key ? null : key);
  };

  useEffect(() => {
    if (selectedTechnology !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedTechnology]);

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  const entries = Object.entries(technologyData);

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.technology}`}>
      <div className={styles.technology_content}>
        <div className={styles.technology_headline}>
          <h1 className={styles.technology_bigtitle}>Technology</h1>
          <h2 className={styles.technology_title}>Technology</h2>
        </div>

        <div className={styles.technology_list}>
          {entries.map(([key, item]) => {
            const techView = item.items.slice(0, 3);
            const remainingCount = item.items.length - techView.length;

            return (
              <div
                key={key}
                className={styles.technology_list_item}
                onClick={() => togglePopup(key)}
              >
                <div className={styles.technology_card}>
                  <div className={styles.technology_card_content}>
                    <div className={styles.technology_card_text}>
                      <h3 className={styles.technology_card_title}>
                        {truncateText(item.title, 25)}
                      </h3>
                      <p className={styles.technology_card_description}>
                        {truncateText(item.description, 135)}
                      </p>
                      <div className={styles.technology_card_icons}>
                        {techView.map((tech, i) => (
                          <div key={i} className={styles.tech_icon_wrapper}>
                            <Icon icon={tech.icon} width="22" height="22" />
                          </div>
                        ))}
                        {remainingCount > 0 && (
                          <span className={styles.tech_more}>
                            +{remainingCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {selectedTechnology === key && (
                    <div
                      className={`bg-black bg-opacity-50 ${styles.technology_popup}`}
                      onClick={() => setSelectedTechnology(null)}
                    >
                      <div
                        className={`shadow-lg w-11/12 lg:w-6/12 xl:w-4/12 ${styles.technology_popup_content}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className={`text-gray-500 hover:text-gray-700 ${styles.close_button}`}
                          onClick={() => setSelectedTechnology(null)}
                        >
                          <Icon icon="fa6-solid:xmark" width="24" height="24" />
                        </button>

                        <h3 className={styles.technology_popup_title}>
                          {item.title}
                        </h3>
                        <p className={styles.technology_popup_description}>
                          {item.description}
                        </p>

                        <div className={styles.technology_popup_tech_used}>
                          <h4 className={styles.tech_used_title}>
                            Technologies Used:
                          </h4>
                          <ul
                            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 ${styles.tech_used_list}`}
                          >
                            {item.items.map((tech, i) => (
                              <li
                                key={i}
                                className={`${styles.tech_used_list_item} relative group flex flex-col items-center justify-center`}
                              >
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[150px] flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                                  <span className="bg-gray-800 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg text-center leading-tight">
                                    {tech.name}
                                  </span>
                                  <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></span>
                                </div>
                                <Icon
                                  icon={tech.icon}
                                  width="30"
                                  height="30"
                                  className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                                  aria-label={tech.name}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
