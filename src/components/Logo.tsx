"use client";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 44, className = "" }: LogoProps) {
  return (
    <svg
      width={height * 2.5}
      height={height}
      viewBox="0 0 110 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* PM Monogram */}
      <rect x="0" y="0" width="44" height="44" rx="8" fill="url(#pmGradient)" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fill="#0A0A0F"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="22"
      >
        PM
      </text>

      {/* Brand Text */}
      <text
        x="52"
        y="20"
        fill="#F0EDE6"
        fontFamily="'Playfair Display', serif"
        fontWeight="600"
        fontSize="16"
      >
        Performance
      </text>
      <text
        x="52"
        y="36"
        fill="#C9A84C"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="12"
        letterSpacing="2"
      >
        MEDIA
      </text>

      <defs>
        <linearGradient id="pmGradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A84C" />
          <stop offset="1" stopColor="#7B5EA7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
