"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle follower ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border border-blue-500/40 transition-all duration-200 ${
            isPointer ? "scale-150 bg-blue-500/10 border-blue-400" : "scale-100"
          }`}
        />
      </div>

      {/* Center pinpoint dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
      </div>
    </>
  );
}
