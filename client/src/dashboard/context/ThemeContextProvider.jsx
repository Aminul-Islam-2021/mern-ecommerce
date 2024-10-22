import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const toogleTheme = () => {
    setTheme(theme === "light" ? 'dark' :'light');
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
