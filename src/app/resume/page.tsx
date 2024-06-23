"use client";

import { motion } from "framer-motion";
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDocker,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "I am a full stack developer passionate about creating web applications. I have experience with various technologies including React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sahil Jadhav",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "timetocode22@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have worked as a full stack developer for 2+ years. I have experience with a variety of technologies including React, Node.js, Express, and MongoDB.",
  items: [
    {
      title: "Full Stack Developer",
      subtitle: "Freelancer",
      date: "2021-present",
    },
    {
      title: "Intern Frontend Developer",
      subtitle: "Innoquad",
      date: "2023 (3 months)",
    },
    {
      title: "Video Editor",
      subtitle: "Goregaon Sports Club",
      date: "2023-present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I have a Bachelor's degree in Computer Science from the University of Mumbai.",
  items: [
    {
      title: "Bachelor's Degree",
      subtitle: "Artificial Intelligence and Machine Learning",
      date: "2021-2024",
    },
    {
      title: "Diploma",
      subtitle: "Computer Engineering",
      date: "2018-2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have experience with a variety of technologies including React, Node.js, Express, and MongoDB.",
  skillList: [
    {
      title: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      title: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "Github",
      icon: <FaGithub />,
    },
    {
      title: "Python",
      icon: <SiPython />,
    },
    {
      title: "Figma",
      icon: <FaFigma />,
    },
    {
      title: "Docker",
      icon: <SiDocker />,
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
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
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <h4 className="text-accent">{item.date}</h4>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.subtitle}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <h4 className="text-accent">{item.date}</h4>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.subtitle}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-4 sm:*:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((info, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-accent">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
