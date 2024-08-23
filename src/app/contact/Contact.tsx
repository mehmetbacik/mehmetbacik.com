"use client";

import React from "react";
import styles from "./styles/Contact.module.scss";
import { Icon } from "@iconify/react";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className={`container mx-auto px-4 ${styles.contact}`}>
      <div className={styles.contact_content}>
        <div className={styles.contact_headline}>
          <h1 className={styles.contact_bigtitle}>Contact</h1>
          <h2 className={styles.contact_title}>Contact</h2>
        </div>
        <p className={`max-w-xl ${styles.contact_description}`}>
          Feel free to reach out to me through any of the platforms below. I am
          always open to discuss new projects, creative ideas, or opportunities
          to be part of your vision.
        </p>
        <div className={styles.contact_socialIcons}>
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
          <a
            href="mailto:mehmetbacikk@gmail.com"
            aria-label="Email"
          >
            <Icon icon="mdi:at" width="30" height="30" />
          </a>
        </div>
        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Mehmet BACIK. All Rights Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
