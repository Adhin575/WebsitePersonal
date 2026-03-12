import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'red' | 'purple' | 'orange' | 'green' | 'blue';

interface ThemeContextType {
  mode: ThemeMode;
  accent: AccentColor;
  toggleMode: () => void;
  setAccent: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'dark';
  });

  const [accent, setAccent] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('theme-accent');
    return (saved as AccentColor) || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('theme-accent', accent);
    document.documentElement.setAttribute('data-accent', accent);
    
    // Update the theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const colors = {
        red: '#ef4444',
        purple: '#a855f7',
        orange: '#f97316',
        green: '#22c55e',
        blue: '#3b82f6'
      };
      metaThemeColor.setAttribute('content', colors[accent]);
    }
  }, [accent]);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ mode, accent, toggleMode, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
