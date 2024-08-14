"use client";

import React from "react";
import Image from "next/image";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen py-16 container mx-auto px-4 ">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center" data-aos="fade-up">
          <div>
            <h2 className="text-4xl font-bold mb-4">About</h2>
          </div>
        </div>
        <div className="px-4 py-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center gap-8">
            <div>
              <Image
                src="/img/hero-bg-1.jpg"
                alt="Profile"
                className="w-full rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>
            <div>
              <p className="mt-6">
                As a Frontend Developer with over 6 years of experience, I have
                dedicated my career to crafting user-centric digital solutions
                across various industries, including E-commerce, Localization,
                Technology, Advertising, and Insurance. My journey in these
                fields has allowed me to gain a comprehensive understanding of
                how to design and implement intuitive, responsive, and visually
                appealing interfaces that cater to diverse user needs.
              </p>
              <p>
                With a strong foundation in modern frontend technologies, I
                specialize in creating seamless user experiences that prioritize
                both functionality and aesthetic appeal. My technical expertise
                is matched by a commitment to accessibility, performance
                optimization, and staying current with the latest industry
                trends and best practices. This ensures that the solutions I
                deliver are not only cutting-edge but also reliable and
                efficient.
              </p>
              <p>
                Continuous learning and professional development are key drivers
                in my career. I am constantly exploring new tools, frameworks,
                and methodologies to refine my skills and stay ahead in a
                rapidly evolving industry. This passion for growth enables me to
                bring innovative ideas to the table and contribute meaningfully
                to every project I undertake.
              </p>
              <p>
                My goal is to enhance each project with the knowledge and
                experience I have accumulated, ensuring that the final product
                exceeds client expectations and delivers exceptional value. I
                thrive in collaborative environments where creative
                problem-solving and shared expertise lead to outstanding
                results. I am excited about the opportunity to contribute to
                future projects and help turn innovative visions into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
