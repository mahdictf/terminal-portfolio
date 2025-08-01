"use client";

export default function Terminal() {
  return (
    <div className="h-full bg-black border border-green-400 rounded-lg p-4">
      <div className="mb-4">
        <h1 className="text-green-400">Mahdi Rahimi</h1>
        <p className="text-gray-400">Software Engineer</p>
      </div>

      <div className="mb-4">
        <p>Hi, I'm mahdi, a Software Engineer.</p>
        <p>Welcome to my interactive 'AI powered' portfolio terminal!</p>
        <p>Type 'help' to see available commands.</p>
      </div>

      <div className="flex items-center">
        <span className="text-blue-400">Rahimi@portfolio:~$ </span>
        <input
          type="text"
          className="bg-transparent outline-none flex-1 text-green-400"
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
}
