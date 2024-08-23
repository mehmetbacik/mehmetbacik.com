"use client";

import React from "react";
import styles from "./styles/Contact.module.scss";
import { Icon } from "@iconify/react";
import { socialMediaData } from "@/data/socialMediaData";

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
