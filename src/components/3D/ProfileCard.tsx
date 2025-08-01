"use client";

import { useRef, useState } from "react";
import * as THREE from "three";

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (e.clientX - centerX) / 10;

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
    <div className="flex items-center justify-center p-8">
      <div
        ref={cardRef}
        className={`relative w-80 h-96 transition-all duration-300 ease-out cursor-pointer
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
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                        rounded-xl border border-green-400/30 shadow-2xl backdrop-blur-sm
                        transform-gpu"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 rounded-xl transition-opacity duration-300
                          bg-gradient-to-br from-green-400/10 to-blue-400/10
                          ${isHovered ? "opacity-100" : "opacity-0"}`}
          />

          {/* Content */}
          <div className="relative p-8 h-full flex flex-col justify-center items-center text-center z-10">
            {/* Profile Image Placeholder */}
            <div className="relative mb-6">
              <div
                className="w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 
                            rounded-full border-2 border-green-400/50 
                            flex items-center justify-center relative overflow-hidden"
              >
                {/* Placeholder Avatar */}
                <div className="w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-green-400">MG</span>
                </div>

                {/* Rotating Ring */}
                <div
                  className={`absolute inset-0 border-2 border-transparent border-t-green-400 
                               rounded-full transition-all duration-1000
                               ${isHovered ? "animate-spin" : ""}`}
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl font-bold text-green-400 tracking-wide">
                Mahdi Rahimi
              </h2>
              <p className="text-gray-300 text-sm uppercase tracking-widest">
                Hacker | Developer
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-3 w-full">
              <div className="flex justify-center space-x-4">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300
                               ${
                                 isHovered
                                   ? "bg-green-400 shadow-lg shadow-green-400/50"
                                   : "bg-gray-600"
                               }`}
                />
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 delay-100
                               ${
                                 isHovered
                                   ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                                   : "bg-gray-600"
                               }`}
                />
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 delay-200
                               ${
                                 isHovered
                                   ? "bg-purple-400 shadow-lg shadow-purple-400/50"
                                   : "bg-gray-600"
                               }`}
                />
              </div>

              <div className="text-xs text-gray-400 font-mono">
                {isHovered ? "[Interactive 3D Card]" : "Hover to interact"}
              </div>
            </div>
          </div>

          {/* Geometric Decorations */}
          <div
            className="absolute top-4 right-4 w-6 h-6 border border-green-400/30 rotate-45"
            style={{ transform: "translateZ(10px)" }}
          />
          <div
            className="absolute bottom-4 left-4 w-4 h-4 border border-blue-400/30 rotate-45"
            style={{ transform: "translateZ(10px)" }}
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5 rounded-xl"
            style={{
              backgroundImage: `
                   linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.1) 25%, rgba(0,255,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.1) 75%, rgba(0,255,0,0.1) 76%, transparent 77%, transparent),
                   linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.1) 25%, rgba(0,255,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.1) 75%, rgba(0,255,0,0.1) 76%, transparent 77%, transparent)
                 `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
