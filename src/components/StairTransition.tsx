"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import Stairs from "./Stairs";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed left-0 top-0 z-40 flex h-screen w-screen ring-0">
            <Stairs />
          </div>

          <motion.div
            className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut", delay: 1 },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
}
