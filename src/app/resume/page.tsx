"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Experience, Skills, About, Education } from "../../../sanity.types";
import Image from "next/image";

export default function Resume() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [about, setAbout] = useState<About | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [currentTab, setCurrentTab] = useState("experience");

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const experienceQuery = `*[_type == "experience"] | order(duration desc)`;
        const skillsQuery = `*[_type == "skills"]`;
        const aboutQuery = `*[_type == "about"][0]`;
        const educationQuery = `*[_type == "education"] | order(date desc)`;

        const [
          fetchedExperiences,
          fetchedSkills,
          fetchedAbout,
          fetchedEducation,
        ] = await Promise.all([
          client.fetch<Experience[]>(experienceQuery),
          client.fetch<Skills[]>(skillsQuery),
          client.fetch<About>(aboutQuery),
          client.fetch<Education[]>(educationQuery),
        ]);

        setExperiences(fetchedExperiences);
        setSkills(fetchedSkills);
        setAbout(fetchedAbout);
        setEducation(fetchedEducation);
      } catch (error) {
        console.error("Failed to fetch resume data:", error);
      }
    };

    fetchResumeData();
  }, []);

  return (
    <motion.section
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Experience</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  I have worked as a full stack developer for several years,
                  gaining experience with various technologies.
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experiences.map((item) => (
                      <li
                        key={item._id}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <h4 className="text-accent">{item.duration}</h4>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">My Skills</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    I have experience with a variety of technologies including
                    React, Node.js, Express, and MongoDB.
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-4 sm:*:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.map((skill) => (
                    <li key={skill._id} className="flex items-center gap-3">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {skill.icon && skill.icon.asset && (
                                <Image
                                  src={urlForImage(skill.icon)}
                                  // alt={skill.title}
                                  alt="Skill Icon"
                                  className="h-16 w-16 object-contain"
                                />
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              {about && (
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {about.description}
                  </p>
                  {about.info && about.info.length > 0 && (
                    <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                      {about.info.map((info, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center gap-4 xl:justify-start"
                        >
                          <span className="text-accent">{info.fieldName}</span>
                          <span className="text-xl">{info.fieldValue}</span>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Education</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  My educational background in computer science and related
                  fields.
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.map((item) => (
                      <li
                        key={item._id}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <h4 className="text-accent">{item.date}</h4>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.specialization}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
