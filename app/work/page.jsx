"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "Fruit and Vegetable ",
    description: "In this project, I developed a user-friendly front-end interface using HTML, CSS, and JavaScript . My focus was on creating a responsive design that makes navigation easy and intuitive. This project highlights my skills in building functional web applications and delivering great user experiences.",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "javascript" }],
    image: "/assets/restoran.png",
    live: "",
    github: "https://github.com/ange-gardien1/fruits-and-vegetables-",
  },
  {
    num: "02",
    category: "fullstack",
    title: "KnowledgeHub",
    description: "I developed Knowledge Hub, an application designed to help users store and share files and documents effectively. This platform facilitates collaboration among users, allowing them to exchange knowledge and manage their resources seamlessly. I integrated AI features to enhance the user experience, making it easier for users to access relevant information and insights from shared resources.",
    stack: [{ name: "next.js" }, { name: "tailwind.css" }, { name: "Typescript" }],
    image: "/assets/two.png",
    live: " https://knowledge-hub-delta.vercel.app",
    github: "https://github.com/ange-gardien1/KnowledgeHub",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Jire clone",
    description: "I cloned the JIRA app using Next.js, focusing on creating a seamless user experience for project management. This project showcases my ability to work on both front-end and back-end aspects, integrating features like task management and collaboration tools. I utilized modern technologies to ensure the application is responsive and efficient.",
    stack: [
      { name: "next.js" },
      { name: "tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/mockup3.jpg",
    live: "/",
    github: "https://github.com/ange-gardien1/KnowledgeHub",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }}
      className="min-h-[8vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p>{project.title}</p>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repoitory</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-p[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 button-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-3 absolute right-0 buttom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none h-[40px]"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[40px] flex justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
