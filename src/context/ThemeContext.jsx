import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider= ({children})=>{
    const [theme, setTheme] = useState()

    const value ={

    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}