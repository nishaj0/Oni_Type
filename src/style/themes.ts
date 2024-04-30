import { Theme } from '../types';

export type ThemeKey = 'aura' | 'midnightSurf' | 'mistyMoor';

const themes: Record<ThemeKey, Theme> = {
   aura: {
      name: 'Aura',
      background: {
         primary: '#15141b', // Black
         secondary: '#3d375e', // Purple
      },
      text: {
         primary: '#a277ff', // Purple lite
         secondary: '#f694ff', // pink
         tertiary: '#61ffca', // Green
         error: '#ff6767', // red
      },
   },
   midnightSurf: {
      name: 'Midnight Surf',
      background: {
         primary: '#222831', // Dark
         secondary: '#393E46', // gray
      },
      text: {
         primary: '#EEEEEE', // White
         secondary: '#00ADB5', // little dark Blue
         tertiary: '#4dffde', // light blue/green
         error: '#ff6767', // red
      },
   },
   mistyMoor: {
      name: 'Misty Moor',
      background: {
         primary: '#2C3639', // Dark
         secondary: '#3F4E4F', // gray
      },
      text: {
         primary: '#DCD7C9', // White
         secondary: '#A27B5C', // brown
         tertiary: '#ffa050', // lite orange
         error: '#ff6767', // red
      },
   },
};

export default themes;
