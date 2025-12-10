import { createContext, useContext, useEffect, useState } from "react";

// const getInitialTheme= {
//  theme : 'light'
// }

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
    // useEffect(()=>{
    //     const root = document.documentElement;
    //     if (theme == 'dark'){
    //         root.classList.add('dark')
    //     }else{
    //         root.classList.remove('dark')
    //     }
    // },[theme])
  const toggleTheme = () => {
    const updatedTheme = theme == "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    document.documentElement.classList.toggle("dark", updatedTheme=='dark')
    // setTheme((prev)=> prev == "light" ? 'dark' : 'light')
  };
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
};
