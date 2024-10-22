import { useState } from "react";

export const useToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return { theme, toggle };
};
