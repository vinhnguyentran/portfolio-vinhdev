import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleThem = () => {
    if (isDarkTheme) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkTheme(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    }
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    }
  }, []);
  return (
    <button
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-color duration-300 ",
        "focus:outlin-hidden"
      )}
      onClick={toggleThem}
    >
      {isDarkTheme ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 blue-yellow-900" />
      )}
    </button>
  );
};
