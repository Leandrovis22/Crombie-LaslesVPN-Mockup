import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  toggleLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    const rootElement = document.getElementById("root");
    if (rootElement) {
  rootElement.style.backgroundColor = theme === "dark" ? "#151515" : "#fff";}
  }, []);

  const toggleLightTheme = useCallback(() => {
    setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
