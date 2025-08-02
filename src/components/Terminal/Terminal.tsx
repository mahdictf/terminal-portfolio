"use client";

import { useRef, useEffect } from "react";
import { useTerminal } from "@/hooks/useTerminal";

export default function Terminal() {
  const {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory,
  } = useTerminal();

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-focus input and scroll to bottom
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        executeCommand(currentInput);
        break;
      case "ArrowUp":
        e.preventDefault();
        navigateHistory("up");
        break;
      case "ArrowDown":
        e.preventDefault();
        navigateHistory("down");
        break;
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Content Area */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto space-y-1 mb-4 cursor-text bg-black"
        onClick={handleTerminalClick}
      >
        {/* Welcome Message */}
        <div className="mb-4">
          <div className="text-blue-400 mb-2">gatere@portfolio:~$ welcome</div>
          <div className="text-yellow-400 mb-1">
            Hi, I'm Mahdi Rahimi, a Hacker & Developer.
          </div>
          <div className="text-white mb-1">
            Welcome to my interactive 'AI powered' portfolio terminal!!
          </div>
          <div className="text-gray-400 mb-4">
            Type 'help' to see available commands.
          </div>
        </div>

        {/* Command History */}
        {history.map((line) => (
          <div key={line.id} className="flex">
            {line.type === "input" ? (
              <span className="text-blue-400">{line.content}</span>
            ) : line.type === "error" ? (
              <span className="text-red-400">{line.content}</span>
            ) : (
              <span className="text-green-400">{line.content}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input Line */}
      <div className="flex items-center">
        <span className="text-blue-400 mr-1">rahimi@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-1 text-green-400 font-mono"
          spellCheck={false}
          autoComplete="off"
        />
        <span className="text-green-400 animate-pulse ml-1">█</span>
      </div>
    </div>
  );
}
