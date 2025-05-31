import React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // You can use Heroicons or any

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Try to load from localStorage or use system preference
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow transition"
      title="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
