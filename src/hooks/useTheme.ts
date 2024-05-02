import { useState, useEffect, useCallback } from 'react';
import themes from '../style/themes';
import { ThemeKey } from '../style/themes';
import useLocalStorage from './useLocalStorage';

const localStorageKey = 'oniTypeTheme';
const defaultTheme = 'aura';

function useTheme() {
   const { getLocalStorage, setLocalStorage } = useLocalStorage();

   const [currentTheme, setCurrentTheme] = useState<ThemeKey>(() => {
      const storedTheme = getLocalStorage(localStorageKey);
      return storedTheme && Object.keys(themes).includes(storedTheme)
         ? storedTheme
         : defaultTheme;
   });

   const setTheme = useCallback(
      (value: ThemeKey) => {
         setCurrentTheme(value);
         setLocalStorage(localStorageKey, value);
      },
      [setCurrentTheme, setLocalStorage],
   );

   // ? Show all theme names
   const getThemeNames = useCallback(() => {
      let themeNames: string[] = [];

      // ? Get the theme name
      Object.keys(themes).map((themeKey) => {
         const themeName = themes[themeKey as ThemeKey].name;
         themeNames.push(themeName);
      });
      return themeNames;
   }, [themes, currentTheme]);

   // ? get current theme's colors
   const getThemeColors = useCallback(
      (themeKey: ThemeKey = currentTheme) => {
         const theme = themes[themeKey];
         return {
            themeName: theme.name,
            primaryBg: theme.background.primary,
            secondaryBg: theme.background.secondary,
            primaryText: theme.text.primary,
            secondaryText: theme.text.secondary,
            tertiaryText: theme.text.tertiary,
            errorText: theme.text.error,
         };
      },
      [currentTheme],
   );
   return {
      getThemeNames,
      getThemeColors,
      currentTheme,
      setTheme,
   };
}

export default useTheme;
