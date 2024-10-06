"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion here
import "./team.css"; // Import CSS specific to Team component

export const Team: React.FC = () => {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null); // Reference for the observer target

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set inView to true when the component is in view
            observer.disconnect(); // Stop observing once the element is in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDivs = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="container-fluid team vh-100 bg-dark" ref={observerRef}>
      <motion.div
        className="animation1 w-100"
        initial="initial"
        animate={inView ? "animate" : "initial"} // Trigger animation based on inView state
        variants={animationDivs}
        transition={{ duration: 1, delay: 0 }} // No delay for animation1
      ></motion.div>
      <motion.div
        className="animation2 w-100"
        initial="initial"
        animate={inView ? "animate" : "initial"} // Trigger animation based on inView state
        variants={animationDivs}
        transition={{ duration: 1, delay: 0.5 }} // Delay for animation2
      ></motion.div>
      <div className="d-flex justify-content-between align-items-center">
        <motion.h1
          className="text"
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger animation based on inView state
          exit="hidden"
          variants={variants}
          transition={{
            duration: 1.9,
            delay: 1, // Delay for the h1 animation
          }}
        >
          TEAM
        </motion.h1>
        <p></p>
      </div>
    </div>
  );
};
