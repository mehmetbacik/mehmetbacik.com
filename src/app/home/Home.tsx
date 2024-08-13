"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import styles from "./styles/Home.module.scss";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface HomeProps {
  id: string;
}

const words = ["Developer", "Freelancer", "Photographer"];

const Home: React.FC<HomeProps> = ({ id }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = textRef.current;

    if (el) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      words.forEach((word) => {
        tl.to(el, {
          text: word,
          duration: word.length * 0.2,
          ease: "none",
        })
          .to(el, {
            duration: 2,
            ease: "none",
          })
          .to(el, {
            text: "",
            duration: 1,
            ease: "none",
          });
      });
    }
  }, []);

  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center text-black ${styles.home}`}
    >
      <div className="text-center px-4 md:px-8">
        <h1 className={`text-4xl md:text-6xl font-bold ${styles.hero_title}`}>
          I&apos;m{" "}
          <span
            ref={textRef}
            className={`text-4xl md:text-6xl font-bold inline-block ${styles.hero_subtitle}`}
          >
            {/* GSAP will handle the text */}
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
