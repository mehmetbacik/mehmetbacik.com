"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import styles from "./styles/Home.module.scss";

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Mehmet BACIK</h1>
          <span className={styles.hero_subtitle}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                delay: 100,
                deleteSpeed: 100,
                loop: true,
                autoStart: true,
              }}
            />
          </span>
        </div>
        <div className={styles.hero_socialIcons}>
          <a
            href="https://www.linkedin.com/in/mehmetbacik/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="fa6-brands:linkedin" width="30" height="30" />
          </a>
          <a
            href="https://github.com/mehmetbacik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="fa6-brands:github" width="30" height="30" />
          </a>
          <a
            href="https://x.com/mehmetbacikk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="x"
          >
            <Icon icon="fa6-brands:x-twitter" width="30" height="30" />
          </a>
          <a
            href="https://www.instagram.com/mehmetbacik/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon icon="fa6-brands:instagram" width="30" height="30" />
          </a>
        </div>
      </div>
      <div className={styles.mouseIcon}>
          <Icon icon="bi:mouse" width="40" height="40" />
        </div>
    </section>
  );
};

export default Home;
