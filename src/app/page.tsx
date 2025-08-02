import Terminal from "@/components/Terminal/Terminal";
import ProfileCard from "@/components/3D/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Matrix background effect */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 radial-gradient(circle at 1px 1px, rgba(0,255,0,0.3) 1px, transparent 0)
               `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Top Left Logo */}
      <div className="absolute top-4 left-4 z-20">
        <h1 className="text-green-400 text-xl font-bold">Mahdi Rahimi</h1>
        <p className="text-gray-400 text-sm"> Ethical Hacker | Developer</p>
      </div>

      {/* Main Content Container */}
      <div className="flex h-screen">
        {/* Left Panel - Profile Card */}
        <div className="w-1/3 flex flex-col relative">
          {/* Profile Card Container */}
          <div className="flex-1 flex items-center justify-center">
            <ProfileCard />
          </div>

          {/* Bottom Status */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="text-green-400 text-xs">[Interactive 3D Card]</div>
          </div>
        </div>

        {/* Right Panel - Terminal */}
        <div className="w-2/3 p-0 flex flex-col">
          {/* Command Navigation Bar */}
          <div className="border-b border-green-400/30 p-4">
            <div className="flex flex-wrap gap-1 text-sm">
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                help
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                about
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                projects
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                skills
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                experience
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                contact
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                education
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                certifications
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                leadership
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                sudo
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400 cursor-pointer hover:text-green-300">
                clear
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="flex-1 p-6">
            <Terminal />
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-green-400/30 p-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-green-400">[Interactive 3D Card]</span>
          <span className="text-green-400">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}{" "}
            AM
          </span>
        </div>
      </div>
    </main>
  );
}
