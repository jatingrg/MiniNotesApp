import { useColorMode } from '@chakra-ui/react'
import React, { createContext, useEffect } from 'react'

export const  ThemeContext = createContext() 

export function ThemeProvider({children}){
    const {colorMode,setColorMode} = useColorMode();
    useEffect(() =>{
        const saved = localStorage.getItem('theme');
        if(saved) setColorMode(saved);

    },[setColorMode])
    useEffect(()=>{
        localStorage.setItem('theme',colorMode);
    },[colorMode]);
    return children;
}

