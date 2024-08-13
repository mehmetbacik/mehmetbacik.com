"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import styles from "./styles/Home.module.scss";

interface HomeProps {
  id: string;
}

const words = ["Developer", "Freelancer", "Photographer"];

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center text-black ${styles.home}`}
    >
      <div className="text-center px-4 md:px-8 relative z-50">
        <h1 className="text-4xl md:text-6xl font-bold">Mehmet BACIK</h1>
        <h2 className={`text-4xl md:text-6xl font-bold ${styles.hero_title}`}>
          I&apos;m{" "}
          <span
            className={`text-4xl md:text-6xl font-bold inline-block ${styles.hero_subtitle}`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
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
        </h2>
        <div className={`flex gap-4 mt-8 ${styles.socialIcons}`}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" width="24" height="24" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Icon icon="mdi:twitter" width="24" height="24" />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon icon="mdi:instagram" width="24" height="24" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
