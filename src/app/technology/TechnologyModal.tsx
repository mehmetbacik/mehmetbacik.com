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
    null
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
                        {item.title}
                      </h3>
                      <p className={styles.technology_card_description}>
                        {truncateText(item.description, 100)}
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
                            className={`grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${styles.tech_used_list}`}
                          >
                            {item.items.map((tech, i) => (
                              <li
                                key={i}
                                className={styles.tech_used_list_item}
                              >
                                <Icon
                                  icon={tech.icon}
                                  width="18"
                                  height="18"
                                  className="text-blue-500"
                                />
                                <span className={styles.tech_used_item_title}>
                                  {tech.name}
                                </span>
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
