import React, { createContext, useCallback, useMemo, useState } from 'react';
import themes, { ThemeKey } from '../style/themes';
import { useLocalStorage } from '../hooks';

interface ThemeContextProps {
   currentTheme: ThemeKey;
   updateCurrentTheme: (value: ThemeKey) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
   undefined,
);

const localStorageKey = 'oniTypeTheme';
const defaultTheme = 'aura';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const { getLocalStorage, setLocalStorage } = useLocalStorage();

   // ? Get the current theme from localStorage or use the default theme
   const [currentTheme, setCurrentTheme] = useState<ThemeKey>(() => {
      const storedTheme = getLocalStorage(localStorageKey);
      return storedTheme && Object.keys(themes).includes(storedTheme)
         ? storedTheme
         : defaultTheme;
   });

   // ? Update the current theme and save it to localStorage
   const updateCurrentTheme = useCallback(
      (value: ThemeKey) => {
         setCurrentTheme(value);
         setLocalStorage(localStorageKey, value);
      },
      [setCurrentTheme, setLocalStorage],
   );

   const themeMemoized = useMemo(
      () => ({ currentTheme, updateCurrentTheme }),
      [currentTheme, updateCurrentTheme],
   );

   return (
      <ThemeContext.Provider value={themeMemoized}>
         {children}
      </ThemeContext.Provider>
   );
}
