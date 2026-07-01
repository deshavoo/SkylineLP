"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="fixed w-75 h-75 pointer-events-none
                 bg-blue-500/20 blur-[120px] rounded-full
                 -translate-x-1/2 -translate-y-1/2 z-0"
    />
  );
}