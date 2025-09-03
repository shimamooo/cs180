"use client";

import { useRef } from "react";

type BoopButtonProps = {
  className?: string;
  label?: string;
  soundUrl?: string;
};

export function BoopButton({
  className,
  label = "boop me!",
  soundUrl = "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
}: BoopButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleClick() {
    if (!audioRef.current) {
      const a = new Audio(soundUrl);
      a.preload = "auto";
      audioRef.current = a;
    }
    void audioRef.current.play().catch(() => {});
  }

  return (
    <button
      onClick={handleClick}
      className={
        className ??
        "rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/10 hover:text-white"
      }
    >
      {label}
    </button>
  );
}
