"use client";
import React, { useState, useRef, useEffect } from "react";
import ImageSlot from "./ImageSlot";

export default function BeforeAfterSlider({ id, label, beforePlaceholder, afterPlaceholder }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(2, Math.min(98, position)); // clamp between 2% and 98%
    setSliderPosition(position);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  return (
    <figure className="m-0 select-none">
      <div 
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl user-select-none touch-action-none cursor-ew-resize"
      >
        {/* AFTER (Background) */}
        <div className="absolute inset-0">
          <ImageSlot id={`${id}-after`} shape="rect" placeholder={afterPlaceholder} />
        </div>
        <span className="absolute bottom-[14px] right-[16px] bg-primary/95 text-bg-dark text-[10.5px] tracking-[0.16em] uppercase px-[12px] py-[6px] rounded-full z-10 font-sans font-semibold">
          After
        </span>

        {/* BEFORE (Overlay clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 sepia-[0.5] grayscale-[0.35] brightness-[0.92]">
            <ImageSlot id={`${id}-before`} shape="rect" placeholder={beforePlaceholder} />
          </div>
          <span className="absolute bottom-[14px] left-[16px] bg-bg-dark/75 text-bg-cream text-[10.5px] tracking-[0.16em] uppercase px-[12px] py-[6px] rounded-full z-10 font-sans font-semibold">
            Before
          </span>
        </div>

        {/* HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-bg-cream -translate-x-[1px] z-20 shadow-md pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-bg-cream rounded-full grid place-items-center shadow-lg border border-primary/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.6">
              <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="mt-[14px] font-cormorant italic text-[18px] text-primary-dark">
        {label}
      </figcaption>
    </figure>
  );
}
