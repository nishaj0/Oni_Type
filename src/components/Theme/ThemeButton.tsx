import { useState } from 'react';
import { IoMdColorPalette } from 'react-icons/io';
import Tooltip from '../Tooltip';
import { useTheme } from '../../hooks';
import ThemeMenu from './ThemeMenu';

function ThemeButton() {
   const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);
   const { currentTheme } = useTheme();

   const handleThemeButtonClick = () => {
      setIsThemeMenuOpen((prev) => !prev);
   };

   return (
      <>
         <Tooltip id="theme-button" content="Themes">
            <button
               onClick={handleThemeButtonClick}
               type="button"
               className="text-2xl flex justify-between items-center text-center"
            >
               <IoMdColorPalette className="mt-1 mr-1" />
               {currentTheme}
            </button>
         </Tooltip>
         {isThemeMenuOpen && <ThemeMenu />}
      </>
   );
}

export default ThemeButton;
