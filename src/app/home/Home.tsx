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
      <div className="text-center px-4 md:px-8">
        <h1 className={`text-4xl md:text-6xl font-bold ${styles.hero_title}`}>
          I&apos;m{" "}
          <span
            className={`text-4xl md:text-6xl font-bold inline-block ${styles.hero_subtitle}`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Photographer")
                  .pauseFor(2000)
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
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Welcome to my personal website. I&apos;m passionate about creating
          innovative solutions and exploring new opportunities. Feel free to
          browse my portfolio and get in touch!
        </p>
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
