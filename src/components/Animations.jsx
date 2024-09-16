"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
};

export const FadeIn = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const controls = useAnimation();
  const { ref, isInView } = useInView();

  const directionOffset = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItems = ({ children, staggerDelay = 0.1 }) => {
  const controls = useAnimation();
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            StaggerItems: staggerDelay,
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText = ({ classname, text, delay = 0 }) => {
  const controls = useAnimation();
  const { ref, isInView } = useInView();

  const letters = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + delay },
    }),
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      aria-label={text}
      className={classname}
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letters} custom={index}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export const HoverScale = ({ children }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    {children}
  </motion.div>
);

export const FloatingElement = ({ children, duration = 3, yOffset = 10 }) => (
  <motion.div
    animate={{
      y: [0, yOffset, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
