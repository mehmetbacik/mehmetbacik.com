"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/Project.module.scss";
import { projectsData } from "@/data/projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/swiper.scss";

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const tabs = Object.keys(projectsData);
  const allTags = Array.from(
    new Set(projectsData[activeTab].flatMap((project) => project.tags))
  );

  const handleTagFilter = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
    setCurrentPage(1);
  };

  const filteredProjects = projectsData[activeTab].filter((project) =>
    selectedTags.length
      ? project.tags.some((tag) => selectedTags.includes(tag))
      : true
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.project}`}>
      <div className={styles.project_content}>
        <div className={styles.project_headline}>
          <h1 className={styles.project_bigtitle}>Project</h1>
          <h2 className={styles.project_title}>Project</h2>
        </div>
        <div className={styles.project_tab}>
          <div className={styles.project_tab_headline}>
          <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2,
                },
                "@0.75": {
                  slidesPerView: 2,
                },
                "@1.00": {
                  slidesPerView: 4,
                },
                "@1.50": {
                  slidesPerView: 4,
                },
              }}
              freeMode={true}
              modules={[Navigation]}
              navigation={true}
              className="tabSwiper"
            >
              {tabs.map((tab) => (
                <SwiperSlide key={tab}>
                  <button
                    className={`${styles.project_tab_title} ${
                      activeTab === tab ? styles.active : styles.inactive
                    }`}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedTags([]);
                      setCurrentPage(1);
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.project_tags}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 3,
                },
                "@0.75": {
                  slidesPerView: 4,
                },
                "@1.00": {
                  slidesPerView: 5,
                },
                "@1.50": {
                  slidesPerView: 10,
                },
              }}
              freeMode={true}
              modules={[Navigation]}
              navigation={true}
              className="tagSwiper"
            >
              {allTags.map((tag) => (
                <SwiperSlide key={tag}>
                  <button
                    className={`${styles.project_tags_button} ${
                      selectedTags.includes(tag)
                        ? styles.active
                        : styles.inactive
                    }`}
                    title={tag}
                    onClick={() => handleTagFilter(tag)}
                  >
                    {tag.length > 10 ? `${tag.slice(0, 10)}...` : tag}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className={`grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${styles.project_card}`}
          >
            {paginatedProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project_card_item}
              >
                <div className={styles.project_card_item_img}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.project_card_item_content}>
                  <h3
                    className={styles.project_card_title}
                    title={project.title}
                  >
                    {project.title.length > 25
                      ? `${project.title.slice(0, 25)}...`
                      : project.title}
                  </h3>
                  <p
                    className={styles.project_card_decription}
                    title={project.description}
                  >
                    {project.description.length > 50
                      ? `${project.description.slice(0, 50)}...`
                      : project.description}
                  </p>
                  <div className={styles.project_card_tags}>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      breakpoints={{
                        "@0.00": {
                          slidesPerView: 2,
                        },
                        "@0.75": {
                          slidesPerView: 3,
                        },
                        "@1.00": {
                          slidesPerView: 3,
                        },
                      }}
                      freeMode={true}
                      modules={[Navigation]}
                      navigation={true}
                      className="cardTagsSwiper"
                    >
                      {project.tags.map((tag) => (
                        <SwiperSlide key={tag}>
                          <div
                            className={styles.project_card_tags_title}
                            title={tag}
                          >
                            {tag.length > 9 ? `${tag.slice(0, 9)}...` : tag}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {totalPages > 0 && (
            <div className={styles.project_pagination}>
              <button
                className={`${styles.project_pagination_controls} ${
                  currentPage === 1
                    ? styles.project_pagination_controls_disabled
                    : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`${styles.project_pagination_pages} ${
                    currentPage === i + 1 ? styles.active : styles.inactive
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                  disabled={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className={`${styles.project_pagination_controls} ${
                  currentPage === totalPages
                    ? styles.project_pagination_controls_disabled
                    : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
