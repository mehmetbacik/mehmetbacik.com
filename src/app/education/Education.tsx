"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles/Education.module.scss";
import { educationData } from "@/data/educationData";

export interface EducationProps {
  id: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <section id={id} className={`container mx-auto px-4 ${styles.education}`}>
      <div className={styles.education_content}>
        <div className={styles.education_headline}>
          <h1 className={styles.education_bigtitle}>Education</h1>
          <h2 className={styles.education_title}>Education</h2>
        </div>
        <div className={styles.education_list}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.education_list_item}>
              <div className={styles.education_card}>
                <div className={styles.education_card_content}>
                  <Image
                    src={item.logo}
                    alt={`${item.school} Logo`}
                    width={80}
                    height={80}
                  />
                  <div className={styles.education_card_text}>
                    <h3 className={styles.education_card_school}>
                      {item.school}
                    </h3>
                    <h4 className={styles.education_card_degree}>
                      {item.degree} - {item.study}
                    </h4>
                    <p className={styles.education_card_date}>{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
