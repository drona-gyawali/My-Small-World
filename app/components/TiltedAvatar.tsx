'use client';

import Image from 'next/image';
import { useState } from 'react';

export function TiltedAvatar() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-[120px] h-[120px]">
      {/* Ghost frame layers for depth */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-neutral-300 dark:border-neutral-700"
        style={{ transform: 'rotate(6deg)' }}
      />
      <div
        className="absolute inset-0 rounded-2xl border border-neutral-200 dark:border-neutral-800"
        style={{ transform: 'rotate(3deg)' }}
      />

      {/* Avatar */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        style={{
          transform: hovered
            ? 'rotate(0deg) scale(1.05)'
            : 'rotate(-3deg) scale(1)',
          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/170401554?v=4"
          alt="Drona Raj Gyawali"
          width={120}
          height={120}
          className="size-[120px] object-cover"
        />
      </div>
    </div>
  );
}
