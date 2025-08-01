"use client";

export default function ProfileCard() {
  return (
    <div className="w-64 h-64 bg-gray-800 rounded-lg border border-green-400 flex items-center justify-center">
      <div className="text-center">
        <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4"></div>
        <p className="text-green-400">Mahdi Rahimi</p>
        <p className="text-gray-400 text-sm">Software Engineer</p>
      </div>
    </div>
  );
}
