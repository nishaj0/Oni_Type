import { useCallback, useContext } from 'react';
import themes, { ThemeKey } from '../style/themes';
import { ThemeContext } from '../context/ThemeContext';

function useTheme() {
   const themeContext = useContext(ThemeContext);

   // ? If the hook is not used within a ContextProvider, throw an error
   if (!themeContext) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }

   const { currentTheme, updateCurrentTheme } = themeContext;

   // ? Get the theme details
   const getTheme = useCallback(
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

   return { currentTheme, updateCurrentTheme, getTheme };
}

export default useTheme;
