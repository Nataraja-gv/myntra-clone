import React, { createContext, useState } from 'react';
import { RiSunLine } from "react-icons/ri";

export  const ThemeContext=createContext();

const ThemeProvider = ({children}) => {

    const [theme,setTheme]=useState("light");

    const handleTheme=()=>{
        setTheme((preTheme)=>(preTheme==="light"?"dark":"light"));
    }
  

    const  themevalue={theme,handleTheme}

    return (

        <ThemeContext.Provider value={themevalue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
