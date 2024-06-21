"use client";

import { motion } from "framer-motion";

import { CiInstagram, CiLinkedin, CiMail, CiTwitter } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <CiMail />,
    title: "Email",
    content: "timetocode@gmail.com",
  },
  {
    icon: <FaGithubSquare />,
    title: "Github",
    content: "https://github.com/Takeru9016",
  },
  {
    icon: <CiInstagram />,
    title: "Instagram",
    content: "",
  },
  {
    icon: <CiLinkedin />,
    title: "LinkedIn",
    content: "https://linkedin.in/sahiljadhav",
  },
  {
    icon: <CiTwitter />,
    title: "Twitter",
    content: "",
  },
];

export default function Contact() {
  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I am available for freelance work. Connect with me through email
                or any of my social media handles.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email ID" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="content">Content Writing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type your message here ..."
                className="h-[200px]"
              />

              <Button size="lg" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          <div className="order-1 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl text-white">{item.content}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
