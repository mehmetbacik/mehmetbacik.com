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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {Object.entries(technologyData).map(([group, techList], index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col h-full"
            >
              <h3 className="text-lg font-semibold text-center mb-4">
                {group
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>
              <div className="grid grid-cols-4 gap-4 flex-grow">
                {techList.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center justify-center"
                  >
                    <Icon
                      icon={tech.icon}
                      width={40}
                      height={40}
                      className="text-blue-700 mb-2"
                    />
                    <span className="text-sm text-gray-700 text-center">
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
