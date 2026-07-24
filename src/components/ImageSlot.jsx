"use client";
import Image from "next/image";

export default function ImageSlot({ id, shape = "rounded", radius = 12, placeholder = "", src, className = "", style = {} }) {
  // If imageUrl is provided via src, use it. Support static image imports by checking if it's an object with a 'src' property.
  const imageUrl = typeof src === "object" && src !== null ? src.src : src;

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

  // If we have an image URL, render the image tag
  if (imageUrl) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden ${shapeClass} ${className}`}
        style={{ borderRadius: shape === "rounded" ? `${radius}px` : undefined, ...style }}
      >
        <Image
          src={imageUrl}
          alt={placeholder || id}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
          fill

        />
      </div>
    );
  }

  // Otherwise, render a clean, modern visual placeholder that displays its purpose (no external URLs loaded)
  return (
    <div
      className={`relative w-full h-full min-h-[140px] bg-gradient-to-br from-bg-cream to-bg-tan/60 border border-dashed border-primary/20 flex flex-col items-center justify-center p-4 text-center select-none ${shapeClass} ${className}`}
      style={{ borderRadius: shape === "rounded" ? `${radius}px` : undefined, ...style }}
    >
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      {id && (
        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary/60 mb-0.5">
          {id}
        </span>
      )}
      {placeholder && (
        <span className="text-[11px] text-text-gray font-medium line-clamp-2 max-w-[85%]">
          {placeholder}
        </span>
      )}
    </div>
  );
}
