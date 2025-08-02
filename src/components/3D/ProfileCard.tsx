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
        className={`relative w-72 h-96 transition-all duration-500 ease-out cursor-pointer
          ${isHovered ? "scale-105" : "scale-100"}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Outer Frame */}
        <div
          className="absolute inset-0 border-2 border-green-400/40 rounded-lg"
          style={{ transform: "translateZ(5px)" }}
        >
          {/* Inner Card Background */}
          <div
            className="absolute inset-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          rounded border border-green-400/30 shadow-2xl backdrop-blur-sm
                          overflow-hidden"
            style={{ transform: "translateZ(0px)" }}
          >
            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                     linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.2) 25%, rgba(0,255,0,0.2) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.2) 75%, rgba(0,255,0,0.2) 76%, transparent 77%, transparent),
                     linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.2) 25%, rgba(0,255,0,0.2) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.2) 75%, rgba(0,255,0,0.2) 76%, transparent 77%, transparent)
                   `,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Content Container */}
            <div className="relative p-8 h-full flex flex-col justify-center items-center text-center z-10">
              {/* Profile Image with Frame */}
              <div className="relative mb-6">
                {/* Outer hexagonal frame */}
                <div className="relative w-40 h-40">
                  {/* Main profile circle */}
                  <div
                    className="w-32 h-32 bg-gray-600 rounded-full border-2 border-green-400/50 
                                flex items-center justify-center relative overflow-hidden mx-auto mt-4"
                  >
                    {/* Profile Photo Placeholder */}
                    <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                      {/* Placeholder image - replace with actual photo */}
                      <div className="w-28 h-28 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-green-400/60"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-green-400/60"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-green-400/60"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-green-400/60"></div>

                  {/* Side brackets */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-8 border-l-2 border-green-400/40"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-8 border-r-2 border-green-400/40"></div>
                </div>
              </div>

              {/* Name Badge - Integrated */}
              <div className="relative">
                {/* Connection lines */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-green-400/30"></div>

                {/* Name container */}
                <div className="bg-gray-800/90 backdrop-blur border border-green-400/40 rounded px-6 py-3 relative">
                  <span className="text-green-400 text-lg font-mono font-bold">
                    MahdiRahimi
                  </span>

                  {/* Connection nodes */}
                  <div className="absolute -top-1 left-3 w-2 h-2 bg-green-400/60 rounded-full"></div>
                  <div className="absolute -top-1 right-3 w-2 h-2 bg-green-400/60 rounded-full"></div>
                </div>

                {/* Additional info line */}
                <div className="mt-2 text-gray-400 text-xs font-mono">
                  [SOFTWARE_ENGINEER]
                </div>
              </div>

              {/* Tech indicators */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-center">
                  <div className="text-green-400/60 text-xs font-mono">
                    ◉ ONLINE
                  </div>
                  <div className="text-green-400/60 text-xs font-mono">
                    AI_POWERED
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded transition-opacity duration-300
                            bg-gradient-to-br from-green-400/5 to-blue-400/5
                            ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          {/* Outer frame corner details */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-green-400/60"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-green-400/60"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-green-400/60"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-green-400/60"></div>
        </div>
      </div>
    </div>
  );
}
