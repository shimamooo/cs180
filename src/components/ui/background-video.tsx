"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const maxTranslate = 160; // px
    const scale = 1.18;
    const ease = 0.18;

    const onMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetX = nx * maxTranslate;
      targetY = ny * maxTranslate;
    };

    const loop = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div ref={wrapperRef} className="youtube-container will-change-transform">
        <iframe
          className="youtube-iframe pointer-events-none brightness-[0.7] contrast-110 grayscale"
          src="https://www.youtube.com/embed/yzsMETDCja8?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=yzsMETDCja8&start=80"
          title="Background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
