'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // 1️⃣ Define o tema inicial apenas uma vez, sem causar re-render em cascata
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = saved || (systemDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
  }, []);

  // 2️⃣ Atualiza o DOM e salva o tema no localStorage com transição suave
  useEffect(() => {
    if (!theme) return;
    const html = document.documentElement;
    html.classList.add('transition-colors', 'duration-500', 'ease-in-out');
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // 3️⃣ Evita renderizar o conteúdo antes de saber o tema (sem piscar)
  if (!theme) {
    return (
      <div className="w-full h-screen bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out" />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
