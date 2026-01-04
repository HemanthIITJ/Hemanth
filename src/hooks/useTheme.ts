/* THEME TOGGLE HOOK - Dark/Light Mode with System Preference */

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        /* Check localStorage first, then system preference */
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as Theme;
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.classList.add('light-theme');
            root.classList.remove('dark-theme');
        } else {
            root.classList.add('dark-theme');
            root.classList.remove('light-theme');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    return { theme, toggleTheme };
};

export default useTheme;
