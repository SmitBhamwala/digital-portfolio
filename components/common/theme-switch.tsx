"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle-button"
      className="fixed flex items-center justify-center rounded-full bottom-5 right-5 md:bottom-10 md:right-10 w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105 transition-all
      bg-black dark:bg-gray-300 border-gray-700 dark:border-gray-200"
      style={{
        boxShadow:
          theme === "light"
            ? "0 0 0 4px #9ca3af, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)"
            : "0 0 0 4px #e5e7eb, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)"
      }}
      aria-label="Theme toggle button"
      onClick={toggleTheme}>
      {theme === "light" ? (
        <BsMoon color="white" />
      ) : (
        <BsSun size={20} color="black" />
      )}
    </button>
  );
}

// Old code:

// className="fixed bottom-5 right-5 md:bottom-10 md:right-10
//                        w-[3rem] h-[3rem] rounded-full flex items-center justify-center
//                        transition-all hover:scale-110 active:scale-105
//                        bg-gradient-radial from-[#EAB308] via-[#FACC15] to-[#ffeb51]
//                        text-yellow-100 dark:text-blue-300
//                        border-4 border-[#ffde5a] shadow-[0_0_15px_rgba(245,158,11,0.6)]
//                        dark:bg-[#484ac1] dark:bg-none dark:border-[#5558e1]
//                        dark:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
// 			onClick={toggleTheme}
// 			aria-label="Theme toggle button">
// 			{theme === "light" ? <BsSun size={22} /> : <BsMoon size={22} />}
