"use client";

import { useRef, useState } from "react";

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) / 15;
    const rotateY = (e.clientX - centerX) / 15;

    setRotation({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        ref={cardRef}
        className={`relative w-64 h-80 transition-all duration-500 ease-out cursor-pointer
          ${isHovered ? "scale-105" : "scale-100"}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Card Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                        rounded-lg border border-green-400/20 shadow-2xl backdrop-blur-sm
                        overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                   linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.2) 25%, rgba(0,255,0,0.2) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.2) 75%, rgba(0,255,0,0.2) 76%, transparent 77%, transparent),
                   linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.2) 25%, rgba(0,255,0,0.2) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.2) 75%, rgba(0,255,0,0.2) 76%, transparent 77%, transparent)
                 `,
              backgroundSize: "15px 15px",
            }}
          />

          {/* Content Container */}
          <div className="relative p-6 h-full flex flex-col justify-center items-center text-center z-10">
            {/* Profile Image */}
            <div className="relative mb-6">
              <div
                className="w-32 h-32 bg-gray-600 rounded-full border-2 border-green-400/30 
                            flex items-center justify-center relative overflow-hidden"
              >
                {/* Profile Photo Placeholder */}
                <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                  {/* You can replace this with actual image */}
                  <div className="w-28 h-28 bg-gray-600 rounded-full"></div>
                </div>

                {/* Corner Logo */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black text-xs font-bold">G</span>
                </div>
              </div>
            </div>

            {/* Name Badge */}
            <div className="bg-gray-800/80 backdrop-blur border border-green-400/30 rounded px-4 py-2 mb-4">
              <span className="text-green-400 text-sm font-mono">
                mahdirahimi
              </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-3 h-8 border-l-2 border-t-2 border-green-400/30"></div>
            <div className="absolute top-4 right-4 w-3 h-8 border-r-2 border-t-2 border-green-400/30"></div>
            <div className="absolute bottom-4 left-4 w-3 h-8 border-l-2 border-b-2 border-green-400/30"></div>
            <div className="absolute bottom-4 right-4 w-3 h-8 border-r-2 border-b-2 border-green-400/30"></div>
          </div>

          {/* Glow Effect */}
          <div
            className={`absolute inset-0 rounded-lg transition-opacity duration-300
                          bg-gradient-to-br from-green-400/5 to-transparent
                          ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}
