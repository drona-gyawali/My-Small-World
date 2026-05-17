"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ProgressProvider } from '@bprogress/next/app';

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved || system;
    setTheme(initial);
    setMounted(true);

    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    document.documentElement.style.transition = "background-color 0.3s ease, color 0.3s ease";
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTimeout(() => {
      document.documentElement.style.transition = "";
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ProgressProvider
        height="2px"
        color="#2563eb"
        options={{ 
          showSpinner: false,
          trickleSpeed: 200,
          speed: 300,
          easing: 'ease-in-out'
        }}
        shallowRouting
      >
        <div className={!mounted ? "dark" : ""}>
          {children}
        </div>
      </ProgressProvider>
    </ThemeContext.Provider>
  );
}