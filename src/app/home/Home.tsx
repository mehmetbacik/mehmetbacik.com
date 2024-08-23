"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import styles from "./styles/Home.module.scss";
import { socialMediaData } from "@/data/socialMediaData";

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
          {socialMediaData.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              <Icon icon={social.icon} width="30" height="30" />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.mouseIcon}>
        <Icon icon="bi:mouse" width="40" height="40" />
      </div>
    </section>
  );
};

export default Home;
