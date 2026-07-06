"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxText({ 
  children, 
  offset = 50, 
  className = "",
  hero = false
}: { 
  children: React.ReactNode, 
  offset?: number,
  className?: string,
  hero?: boolean
}) {
  const { scrollY } = useScroll();

  // For the hero, keep the continuous parallax that is working and liked
  const heroY = useTransform(scrollY, [0, 500], [0, offset * 2]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (hero) {
    return (
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className={className}>
        {children}
      </motion.div>
    );
  }

  // For everything else, use a modern, dramatic reveal effect (like dify.ai)
  // Text starts slightly lower and invisible, then smoothly slides up and fades in
  // when it enters the viewport.
  return (
    <motion.div
      initial={{ opacity: 0, y: Math.min(offset, 60) }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px" }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1], 
        opacity: { duration: 1.2 } 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
