"use client";

import CountUp from "react-countup";

const stats = [
  {
    title: "Projects",
    value: 16,
  },
  {
    title: "Technologies Mastered",
    value: 8,
  },
  {
    title: "Code Commits",
    value: 250,
  },
  {
    title: "Years of Experience",
    value: 3,
  },
];

export default function Stats() {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.value}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
