/* THEME TOGGLE HOOK - Dark/Light Mode with System Preference */

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
    // FORCED DARK MODE ONLY - No light theme support
    const [theme] = useState<Theme>('dark');

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('dark-theme');
        root.classList.remove('light-theme');
    }, []);

    // No toggle functionality - dark mode only
    return { theme };
};

export default useTheme;
