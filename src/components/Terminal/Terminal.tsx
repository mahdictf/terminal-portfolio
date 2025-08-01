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
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-green-400/30 pb-2 mb-4">
        <div>
          <h1 className="text-green-400 text-xl font-bold">Mahdi Rahimi</h1>
          <p className="text-gray-400 text-sm">Hacker | Develeper</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto space-y-1 mb-4 cursor-text"
        onClick={handleTerminalClick}
      >
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
        <span className="text-blue-400 mr-2">gatere@portfolio:~$</span>
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
        <span className="text-green-400 animate-pulse">|</span>
      </div>
    </div>
  );
}
