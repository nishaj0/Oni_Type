import { FaCheck } from 'react-icons/fa6';
import themes, { ThemeKey } from '../../style/themes';
import { useTheme } from '../../hooks';
import ThemeColorBall from './ThemeColorBall';

function ThemeMenu() {
   const { updateCurrentTheme, currentTheme } = useTheme();
   const themeKeys = Object.keys(themes) as ThemeKey[];

   return (
      <div
         className="center-absolute rounded-md p-4 w-[600px]"
         style={{ backgroundColor: themes[currentTheme].background.secondary }}
      >
         <div className="w-full">
            {themeKeys.map((themeKey) => (
               <button
                  key={themeKey}
                  type="button"
                  className="px-10 py-2 m-1 w-full rounded-lg flex justify-between items-center bg-black bg-opacity-0 hover:bg-opacity-10"
                  onClick={() => updateCurrentTheme(themeKey)}
               >
                  <div className="flex justify-between items-center">
                     <FaCheck
                        className={
                           currentTheme === themeKey ? 'visible' : 'invisible'
                        }
                     />
                     <p className="text-lg ml-2">{themes[themeKey].name}</p>
                  </div>
                  <div
                     className="flex justify-between items-center p-2 rounded-full"
                     style={{
                        backgroundColor: themes[themeKey].background.primary,
                     }}
                  >
                     <ThemeColorBall
                        backgroundColor={themes[themeKey].background.secondary}
                     />
                     <ThemeColorBall
                        backgroundColor={themes[themeKey].text.primary}
                        className="ml-2"
                     />
                     <ThemeColorBall
                        backgroundColor={themes[themeKey].text.secondary}
                        className="ml-2"
                     />
                  </div>
               </button>
            ))}
         </div>
      </div>
   );
}

export default ThemeMenu;
