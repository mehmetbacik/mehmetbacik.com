"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
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
      </div>
    </section>
  );
};

export default Technology;
