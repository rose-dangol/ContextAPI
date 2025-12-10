import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  const currentTheme = localStorage.getItem("theme");

  return (
    <div className="flex items-center gap-2 fixed top-4 right-4">
      <Sun />
      <div class="relative inline-block w-11 h-5">
        <input
          id="switch-component"
          type="checkbox"
          class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-800 cursor-pointer transition-colors duration-300"
          onChange={toggleTheme}
        />
        <label
          for="switch-component"
          class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-blue-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
      <Moon />
      {currentTheme}
    </div>
  );
}
export default ThemeSwitcher;
