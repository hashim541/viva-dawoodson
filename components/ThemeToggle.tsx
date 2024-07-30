'use client';
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

const themes = ['light', 'dark', 'custom1'];

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handelClick = () => {
    let currentIndex = themes.indexOf(theme)
    let index;
    if(currentIndex == themes.length - 1){
        index = 0
    }else {
        index = currentIndex+1
    }
    setTheme(themes[index])
  }

  const getIcon = (theme: string) => {
    switch (theme) {
      case 'light':
        return <FaSun width={30} height={30} />;
      case 'dark':
        return <FaMoon width={30} height={30} />;
      case 'custom1':
        return <FaPalette width={30} height={30} />;
      default:
        return <FaSun width={30} height={30} />;
    }
  };

  return (
    <div >
        <button className='flex text-text items-center gap-3 px-4 py-1 border-2 border-text rounded-md'
            onClick={() => handelClick()}
        >
          <div>

            {getIcon(theme)}
          </div>
          <p className='text-text'>Theme</p>
        </button>
    </div>
  );
};

export default ThemeToggle;
