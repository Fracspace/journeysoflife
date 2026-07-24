"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function CountUp({ end, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const domRef = useRef(null);
  const hasAnimated = useRef(false);

  const animateCount = useCallback(() => {
    const duration = 1600; // ms
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const value = end * easeProgress;
      
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateCount]);

  return (
    <span ref={domRef}>
      {decimals ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}
