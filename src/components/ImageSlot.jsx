"use client";
import React from "react";

const placeholderImageMap = [
  { keywords: ["hands holding", "photograph"], url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["vintage family", "snapshot"], url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["first birthday", "cake cutting"], url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["cake cutting"], url: "https://images.unsplash.com/photo-1464349153735-7db519247a32?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["child laughing"], url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["grandparents"], url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["balloons", "decoration"], url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["sunset", "family laughing"], url: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1200" },
  { keywords: ["luxury wedding", "wedding still", "wedding film"], url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["engagement"], url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["newborn", "baby"], url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["birthday celebration", "birthday film"], url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["anniversary"], url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["reunion", "gathering"], url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["graduation"], url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["retirement"], url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["festival", "lights"], url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["corporate", "event"], url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["achievement", "award"], url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["memorial", "tribute"], url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["candid family", "everyday moments"], url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["damaged black", "yellowed", "faded old"], url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800" },
  { keywords: ["restored", "color-graded", "colour-graded"], url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" }
];

export default function ImageSlot({ id, shape = "rounded", radius = 12, placeholder = "", src = "", className = "", style = {} }) {
  // Try to find a matching photo based on placeholder text
  let imageUrl = src;
  
  if (!imageUrl && placeholder) {
    const lowerPlaceholder = placeholder.toLowerCase();
    const match = placeholderImageMap.find(item =>
      item.keywords.some(keyword => lowerPlaceholder.includes(keyword))
    );
    if (match) {
      imageUrl = match.url;
    } else {
      // Fallback unsplash query based on words
      const firstWord = placeholder.split(/[\s·,]+/)[0] || "family";
      imageUrl = `https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800&sig=${id || firstWord}`;
    }
  }

  // Fallback if still empty
  if (!imageUrl) {
    imageUrl = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800";
  }

  // Determine shape styles
  let shapeClass = "";
  if (shape === "circle") {
    shapeClass = "rounded-full";
  } else if (shape === "pill") {
    shapeClass = "rounded-3xl";
  } else if (shape === "rect") {
    shapeClass = "rounded-none";
  } else {
    // rounded
    shapeClass = "rounded-xl";
  }

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${shapeClass} ${className}`}
      style={{ borderRadius: shape === "rounded" ? `${radius}px` : undefined, ...style }}
    >
      <img
        src={imageUrl}
        alt={placeholder || id}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}
