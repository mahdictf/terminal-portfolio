import Terminal from "@/components/Terminal/Terminal";
import ProfileCard from "@/components/3D/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono">
      <div className="flex h-screen">
        {/* Left side - Profile Card */}
        <div className="w-1/3 flex items-center justify-center">
          <ProfileCard />
        </div>

        {/* Right side - Terminal */}
        <div className="w-2/3 p-4">
          <Terminal />
        </div>
      </div>
    </main>
  );
}
