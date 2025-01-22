"use client";
import { motion } from "framer-motion";

const MotionDiv = ({ children }: { children: any }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className=" rounded relative w-full"
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
