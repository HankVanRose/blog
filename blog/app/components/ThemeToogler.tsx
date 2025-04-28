'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-theme-kit';
import { LuMoon, LuSun } from 'react-icons/lu';

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
      }}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <LuMoon className="mr-2" />
      ) : (
        <LuSun className="mr-2" />
      )}
      <span style={{ marginLeft: 5 }}>
        {theme === 'dark' ? 'Сделать светло' : 'Сделать Темно'}
      </span>
    </div>
  );
};

export default ThemeToggler;
