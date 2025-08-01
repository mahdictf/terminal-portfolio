import Terminal from "@/components/Terminal/Terminal";
import ProfileCard from "@/components/3D/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Background Pattern */}
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

      {/* Matrix Rain Effect (CSS only) */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent
                        animate-pulse"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-screen">
        {/* Left Panel - Profile Card */}
        <div className="w-2/5 flex items-center justify-center p-4 border-r border-green-400/20">
          <ProfileCard />
        </div>

        {/* Right Panel - Terminal */}
        <div className="w-3/5 p-6">
          <div
            className="h-full bg-black/50 backdrop-blur-sm border border-green-400/30 
                          rounded-lg p-6 shadow-2xl shadow-green-400/10"
          >
            <Terminal />
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-green-400/30 
                      backdrop-blur-sm p-2 z-20"
      >
        <div className="flex justify-between items-center text-xs text-green-400/70">
          <span>[Interactive 3D Card]</span>
          <span className="font-mono">gatere@portfolio:~$</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </main>
  );
}
