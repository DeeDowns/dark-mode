 import { useLocalStorage } from './useLocalStorage'
 import { useEffect } from 'react'

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeKey')
    
    return [darkMode, setDarkMode]
}