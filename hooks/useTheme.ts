import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type ThemeName = 'default' | 'blue-trust' | 'blue-gulf' | 'blue-classic' | 'blue-coastal';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEMES: ThemeName[] = ['default', 'blue-trust', 'blue-gulf', 'blue-classic', 'blue-coastal'];

const THEME_LABELS: Record<ThemeName, string> = {
  'default': 'Current Green (Default)',
  'blue-trust': 'Corporate Trust',
  'blue-gulf': 'Gulf Coast Modern',
  'blue-classic': 'American Classic',
  'blue-coastal': 'Coastal Premium',
};

export const THEME_DESCRIPTIONS: Record<ThemeName, { name: string; description: string; colors: { primary: string; cta: string; accent: string } }> = {
  'default': {
    name: 'Current Green (Default)',
    description: 'Modern earth-tone palette with sage green',
    colors: { primary: '#059669', cta: '#059669', accent: '#f59e0b' }
  },
  'blue-trust': {
    name: 'Corporate Trust',
    description: 'Deep navy with muted red - traditional, authoritative',
    colors: { primary: '#0A2A43', cta: '#C62828', accent: '#4A90E2' }
  },
  'blue-gulf': {
    name: 'Gulf Coast Modern',
    description: 'Warmer blue with energetic red - regional appeal',
    colors: { primary: '#1E3A5F', cta: '#D32F2F', accent: '#4A90E2' }
  },
  'blue-classic': {
    name: 'American Classic',
    description: 'Rich navy with deep red - heritage, timeless',
    colors: { primary: '#003B6F', cta: '#B71C1C', accent: '#0066CC' }
  },
  'blue-coastal': {
    name: 'Coastal Premium',
    description: 'Coastal blue with balanced red - modern, upscale',
    colors: { primary: '#2C5F8D', cta: '#C1272D', accent: '#546E7A' }
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('gulf-south-theme');
    return (saved as ThemeName) || 'default';
  });

  useEffect(() => {
    // Apply theme to document root
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    
    // Save to localStorage
    localStorage.setItem('gulf-south-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Keyboard shortcut: Ctrl+Shift+T to cycle themes
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        cycleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setThemeState(THEMES[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { THEME_LABELS, THEMES };

