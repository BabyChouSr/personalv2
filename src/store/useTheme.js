import React, { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';

export default function useTheme(
  defaultTheme = {
       mode: 'light',
       colors: {
        primary: "#000000",
        secondary: "#FFF4D9",
        tertiary: "#F2F2F2",
        text: "#000000",
        background: "#ffffff",
      },
      breakpoints: {
        xs: "480px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
      },
      fonts: {
        primary: "Roboto, Arial, sans-serif",
      },
      borderRadius: "1rem",
      pageWidth: "62.5rem",
      headerHeight: "6.25rem",
      footerHeight: "7.5rem",
    
    }
) {
  const [theme, _setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = storage.getItem('theme');
    return savedTheme
      ? JSON.parse(savedTheme)
      : defaultTheme;
  }

  useEffect(
    () => {
      storage.setItem('theme', JSON.stringify(theme));
    },
    [theme]
  );

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
  };
}
