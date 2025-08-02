"use client";

import { useState, useCallback } from "react";

export interface TerminalLine {
  id: string;
  type: "input" | "output" | "error";
  content: string;
  timestamp: Date;
}

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>([]);

  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addLine = useCallback((type: TerminalLine["type"], content: string) => {
    const newLine: TerminalLine = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setHistory((prev) => [...prev, newLine]);
  }, []);

  const executeCommand = useCallback(
    (command: string) => {
      const trimmedCommand = command.trim().toLowerCase();

      // Add input to history
      addLine("input", `gatere@portfolio:~$ ${command}`);

      // Add to command history
      setCommandHistory((prev) => [...prev, command]);
      setHistoryIndex(-1);

      // Process command
      switch (trimmedCommand) {
        case "help":
          addLine("output", "Available commands:");
          addLine("output", "  help        - Show available commands");
          addLine("output", "  about       - About me");
          addLine("output", "  projects    - View my projects");
          addLine("output", "  skills      - Technical skills");
          addLine("output", "  experience  - Work experience");
          addLine("output", "  contact     - Contact information");
          addLine("output", "  education   - Educational background");
          addLine("output", "  certifications - My certifications");
          addLine("output", "  leadership  - Leadership experience");
          addLine("output", "  clear       - Clear terminal");
          break;

        case "about":
          addLine(
            "output",
            "Software & AI Engineer passionate about building innovative solutions."
          );
          addLine(
            "output",
            "I specialize in modern web technologies and artificial intelligence."
          );
          addLine("output", "Always learning and exploring new technologies.");
          break;

        case "projects":
          addLine("output", "Recent Projects:");
          addLine(
            "output",
            "• Interactive Terminal Portfolio - Next.js, Three.js, TypeScript"
          );
          addLine(
            "output",
            "• AI-Powered Web Applications - React, Python, TensorFlow"
          );
          addLine("output", "• Full-Stack E-commerce Platform - MERN Stack");
          addLine(
            "output",
            "• Real-time Chat Application - Socket.io, Node.js"
          );
          break;

        case "skills":
          addLine("output", "Technical Skills:");
          addLine(
            "output",
            "• Frontend: React, Next.js, TypeScript, Tailwind CSS"
          );
          addLine("output", "• Backend: Node.js, Python, Express, FastAPI");
          addLine("output", "• 3D Graphics: Three.js, WebGL");
          addLine("output", "• AI/ML: TensorFlow, PyTorch, OpenAI APIs");
          addLine("output", "• Database: MongoDB, PostgreSQL, Redis");
          break;

        case "experience":
          addLine("output", "Professional Experience:");
          addLine(
            "output",
            "• Senior Software Engineer - Tech Company (2022-Present)"
          );
          addLine("output", "• Full-Stack Developer - Startup (2020-2022)");
          addLine("output", "• AI Research Assistant - University (2019-2020)");
          break;

        case "contact":
          addLine("output", "Contact Information:");
          addLine("output", "• Email: mahdi@mahdirahimi.me");
          addLine("output", "• LinkedIn: linkedin.com/in/mahdi");
          addLine("output", "• GitHub: github.com/mahdictf");
          addLine("output", "• Portfolio: mahdirahimi.me");
          break;

        case "education":
          addLine("output", "Education:");
          addLine("output", "• Master of Science in Computer Science");
          addLine(
            "output",
            "• Bachelor of Engineering in Software Engineering"
          );
          addLine("output", "• Various online certifications and courses");
          break;

        case "certifications":
          addLine("output", "Certifications:");
          addLine("output", "• AWS Certified Solutions Architect");
          addLine("output", "• Google Cloud Professional Developer");
          addLine("output", "• Microsoft Azure AI Engineer");
          addLine("output", "• MongoDB Certified Developer");
          break;

        case "leadership":
          addLine("output", "Leadership Experience:");
          addLine("output", "• Tech Team Lead - Led team of 5 developers");
          addLine("output", "• Open Source Maintainer - 10k+ GitHub stars");
          addLine("output", "• Community Speaker - 20+ tech conferences");
          addLine("output", "• Mentor - Guided 15+ junior developers");
          break;

        case "sudo":
          addLine(
            "output",
            "Nice try! But this is a portfolio, not a real terminal 😉"
          );
          addLine(
            "output",
            "You have enough permissions to explore my experience though!"
          );
          break;

        case "clear":
          setHistory([]);
          break;

        case "":
          // Empty command, just show new prompt
          break;

        default:
          addLine(
            "error",
            `Command not found: ${trimmedCommand}. Type 'help' for available commands.`
          );
      }

      setCurrentInput("");
    },
    [addLine]
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (commandHistory.length === 0) return;

      if (direction === "up") {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex] || "");
      } else {
        const newIndex =
          historyIndex === -1
            ? -1
            : Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setCurrentInput(newIndex === -1 ? "" : commandHistory[newIndex] || "");
      }
    },
    [commandHistory, historyIndex]
  );

  return {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory,
    addLine,
  };
};
