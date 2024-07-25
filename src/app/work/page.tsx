"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PortableText } from "@portabletext/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { portableTextComponents, WorkSlider } from "@/components";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Projects } from "../../../sanity.types";

export default function Work() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [currentProject, setCurrentProject] = useState<Projects | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "projects"]{
          _id,
          title,
          category,
          description,
          imgUrl,
          stack,
          Live,
          Github
        }`;
        const fetchedProjects = await client.fetch<Projects[]>(query);
        setProjects(fetchedProjects);
        if (fetchedProjects.length > 0) {
          setCurrentProject(fetchedProjects[0]);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentSlide = swiper.activeIndex;
    setCurrentProject(projects[currentSlide]);
  };

  if (!currentProject) return null;

  return (
    <motion.section
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {String(projects.indexOf(currentProject) + 1).padStart(2, "0")}
              </div>

              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {currentProject.category} Project
              </h2>

              <div className="text-white/60">
                {currentProject.description && (
                  <PortableText
                    value={currentProject.description}
                    components={portableTextComponents}
                  />
                )}
              </div>

              <ul className="flex gap-4">
                {currentProject.stack?.map((tech, index) => (
                  <li
                    key={index}
                    className="rounded-md bg-white/10 px-2 py-1 text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-6">
                {currentProject.Live && (
                  <Link href={currentProject.Live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {currentProject.Github && (
                  <Link href={currentProject.Github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                          <FaGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project._id} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                    <div className="relative h-full w-full">
                      {project.imgUrl && (
                        <Image
                          src={urlForImage(project.imgUrl)}
                          alt={project.title}
                          fill
                          className="object-fill"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlider
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
