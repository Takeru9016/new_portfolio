"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    title: "Web Development",
    value: "01",
    description: "",
    href: "",
  },
  {
    title: "UI/UX Design",
    value: "02",
    description: "",
    href: "",
  },
  {
    title: "Content Writing",
    value: "03",
    description: "",
    href: "",
  },
  {
    title: "SEO",
    value: "04",
    description: "",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.value}
                  </div>
                  <Link
                    href={service.href}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {service.title}
                </h2>

                <p className="text-white/60">{service.description}</p>

                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
