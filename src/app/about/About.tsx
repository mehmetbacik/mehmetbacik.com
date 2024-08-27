"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/About.module.scss";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.about}`}>
      <div className={styles.about_content}>
        <div className={styles.about_headline}>
          <h1 className={styles.about_bigtitle}>About</h1>
          <h2 className={styles.about_title}>About</h2>
        </div>
        <div className={styles.about_paragraph}>
          <div className={styles.about_image}>
            <Image src="/img/mb.jpg" alt="Profile" width={500} height={500} />
          </div>
          <div className={styles.about_showmore}>
            <button
              onClick={() => setShowMore(!showMore)}
              className={styles.showmore_button}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
          <div
            className={`${styles.about_description} ${
              showMore ? styles.show_all : styles.show_less
            }`}
          >
            <p>
              As a Frontend Developer with over 6 years of experience, I have
              dedicated my career to crafting user-centric digital solutions
              across various industries, including E-commerce, Localization,
              Technology, Advertising, and Insurance. My journey in these fields
              has allowed me to gain a comprehensive understanding of how to
              design and implement intuitive, responsive, and visually appealing
              interfaces that cater to diverse user needs.
            </p>
            <p>
              With a strong foundation in modern frontend technologies, I
              specialize in creating seamless user experiences that prioritize
              both functionality and aesthetic appeal. My technical expertise is
              matched by a commitment to accessibility, performance
              optimization, and staying current with the latest industry trends
              and best practices. This ensures that the solutions I deliver are
              not only cutting-edge but also reliable and efficient.
            </p>
            <p>
              Continuous learning and professional development are key drivers
              in my career. I am constantly exploring new tools, frameworks, and
              methodologies to refine my skills and stay ahead in a rapidly
              evolving industry. This passion for growth enables me to bring
              innovative ideas to the table and contribute meaningfully to every
              project I undertake.
            </p>
            <p>
              My goal is to enhance each project with the knowledge and
              experience I have accumulated, ensuring that the final product
              exceeds client expectations and delivers exceptional value. I
              thrive in collaborative environments where creative
              problem-solving and shared expertise lead to outstanding results.
              I am excited about the opportunity to contribute to future
              projects and help turn innovative visions into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
