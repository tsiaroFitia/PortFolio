import React from "react";

export default function AnimationWaves() {
  return (
    <div className="absolute bottom-0 w-full hidden lg:block">
      <svg
        viewBox="0 0 1440 280"
        className="wave w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="waveGradient"
            x1="0%"
            x2="100%"
            y1="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#592af3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,197.3,960,192C1120,192,1280,160,1440,128L1440,280L0,280Z"
        ></path>
      </svg>
    </div>
  );
}
