"use client";
import React, { useState, useEffect } from "react";

export default function Confetti() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ["#D6B36A", "#B38A42", "#6E5644", "#EFE7DA", "#c98f8f"];
    const tempParticles = [];
    for (let i = 0; i < 30; i++) {
      const size = 6 + Math.random() * 8;
      const isCircle = Math.random() > 0.5;
      tempParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size * (Math.random() > 0.5 ? 1 : 1.6)}px`,
        backgroundColor: colors[i % colors.length],
        borderRadius: isCircle ? "50%" : "2px",
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${5 + Math.random() * 4}s`,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(tempParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute -top-6 animate-confetti opacity-0"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            borderRadius: p.borderRadius,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
