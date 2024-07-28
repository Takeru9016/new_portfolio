"use client";

import { useState } from "react";
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
    content: "timetocode22@gmail.com",
    url: "mailto:timetocode22@gmail.com",
  },
  {
    icon: <FaGithubSquare />,
    title: "Github",
    content: "Takeru9016",
    url: "https://github.com/Takeru9016",
  },
  {
    icon: <CiInstagram />,
    title: "Instagram",
    content: "Dev_with_Takeru",
    url: "https://instagram.com/dev_with_takeru/",
  },
  {
    icon: <CiLinkedin />,
    title: "LinkedIn",
    content: "Sahil Jadhav",
    url: "https://linkedin.com/in/sahiljadhav",
  },
  {
    icon: <CiTwitter />,
    title: "Twitter",
    content: "@dev_takeru",
    url: "https://x.com/dev_takeru",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I am available for freelance work. Connect with me through email
                or any of my social media handles.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
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
                    <SelectItem value="other">
                      Other. Describe it below!
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Type your message here ..."
                className="h-[200px]"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <Button
                type="submit"
                size="lg"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="order-1 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6"
                  >
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl text-white">{item.content}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
