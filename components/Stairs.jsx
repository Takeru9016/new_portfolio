import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            className="relative h-full w-full bg-white"
            key={index}
            variants={stairAnimation}
            initial="intial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
}
