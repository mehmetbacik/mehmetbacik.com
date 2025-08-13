"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "./styles/Experience.module.scss";
import { experienceData, technologyIconMapping } from "@/data/experienceData";

export interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );
  const [showAll, setShowAll] = useState(false);

  const togglePopup = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };


  useEffect(() => {
    if (selectedExperience !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedExperience]);

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  const visibleExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.experience}`}>
      <div className={styles.experience_content}>
        <div className={styles.experience_headline}>
          <h1 className={styles.experience_bigtitle}>Experience</h1>
          <h2 className={styles.experience_title}>Experience</h2>
        </div>
        <div className={styles.experience_list}>
          {visibleExperiences.map((item, index) => (
            <div
              key={index}
              className={styles.experience_list_item}
              onClick={() => togglePopup(index)}
            >
              <div className={styles.experience_card}>
                <div className={styles.experience_card_content}>
                  <Image
                    src={item.logo}
                    alt={`${item.company} Logo`}
                    width={80}
                    height={80}
                  />
                  <div className={styles.experience_card_text}>
                    <h3 className={styles.experience_card_title}>
                      {item.title}
                    </h3>
                    <h4 className={styles.experience_card_company}>
                      {item.company}
                    </h4>
                    <p className={styles.experience_card_date}>{item.date}</p>
                    <p className={styles.experience_card_description}>
                      {truncateText(item.description, 100)}{" "}
                    </p>
                    <ul className={styles.experience_card_technologies}>
                      {(() => {
                        const technologies = item.technology.split(" - ");
                        const visibleTechnologies = technologies.slice(0, 2);
                        const remainingTechnologies = technologies.length - 2;
                        return (
                          <li
                            className={styles.experience_card_technologies_item}
                          >
                            {visibleTechnologies.map((tech, i) => (
                              <span key={i}>
                                {tech}
                                {i < visibleTechnologies.length - 1 && ", "}
                              </span>
                            ))}
                            {remainingTechnologies > 0 && (
                              <span className={styles.remaining_technologies}>
                                and +{remainingTechnologies} skills
                              </span>
                            )}
                          </li>
                        );
                      })()}
                    </ul>
                  </div>
                </div>
                {selectedExperience === index && (
                  <div
                    className={`bg-black bg-opacity-50 ${styles.experience_popup}`}
                    onClick={() => setSelectedExperience(null)}
                  >
                    <div
                      className={`shadow-lg w-11/12 lg:w-6/12 xl:w-4/12 ${styles.experience_popup_content}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={`text-gray-500 hover:text-gray-700 ${styles.close_button}`}
                        onClick={() => setSelectedExperience(null)}
                      >
                        <Icon icon="fa6-solid:xmark" width="24" height="24" />
                      </button>
                      <h3 className={styles.experience_popup_title}>
                        {item.title} @ {item.company}
                      </h3>
                      <p className={styles.experience_popup_description}>
                        {item.description}
                      </p>
                      <div className={styles.experience_popup_tech_used}>
                        <h4 className={styles.tech_used_title}>
                          Technologies Used:
                        </h4>
                        <ul
                          className={`grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${styles.tech_used_list}`}
                        >
                          {item.technology.split(" - ").map((tech, i) => (
                            <li key={i} className={styles.tech_used_list_item}>
                              <Icon
                                icon={
                                  technologyIconMapping[tech] ||
                                  "fa-solid:circle"
                                }
                                width="18"
                                height="18"
                                className="text-blue-500"
                              />
                              <span className={styles.tech_used_item_title}>
                                {tech}
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
          ))}
        </div>
      </div>
      <div className={styles.experience_showall}>
        <button
          onClick={() => setShowAll(!showAll)}
          className={styles.showall_button}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Experience;
