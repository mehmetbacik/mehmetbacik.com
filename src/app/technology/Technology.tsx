"use client";

import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles/Technology.module.scss";
import { technologyData } from "@/data/technologyData";

interface TechnologyProps {
  id: string;
}

const Technology: React.FC<TechnologyProps> = ({ id }) => {
  return (
    <section id={id} className={`container mx-auto px-4 ${styles.technology}`}>
      <div className={styles.technology_content}>
        <div className={styles.technology_headline}>
          <h1 className={styles.technology_bigtitle}>TechStack</h1>
          <h2 className={styles.technology_title}>Tech Stack</h2>
        </div>
        <div className={`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${styles.technology_list}`}>
          {Object.entries(technologyData).map(([group, techList], index) => (
            <div key={index} className={styles.technology_card}>
              <h3 className={styles.technology_card_title}>
                {group
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>
              <div className={styles.technology_card_icons}>
                {techList.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={styles.technology_card_icons_content}
                  >
                    <Icon
                      icon={tech.icon}
                      width={40}
                      height={40}
                      className="text-blue-700"
                    />
                    <span>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
