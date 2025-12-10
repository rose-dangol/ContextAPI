import { createContext, useContext, useState } from "react";

// const getInitialTheme= {
//  theme : 'light'
// }

const ThemeContext = createContext(null);

export const ThemeProvider= ({children})=>{
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () =>{
        const updatedTheme = theme=='light'?'dark':'light'
        setTheme(updatedTheme)
        localStorage.setItem('theme', updatedTheme)
        // setTheme((prev)=> prev == "light" ? 'dark' : 'light')
    }
    const value ={
        theme,
        toggleTheme,
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext  = () =>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error ('useThemeContext must be used within ThemeProvider')
    }
    return context
}