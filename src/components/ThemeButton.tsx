import { IoMdColorPalette } from 'react-icons/io';
import Tooltip from './Tooltip';
import { useTheme } from '../hooks';

function ThemeButton() {
   const { updateCurrentTheme } = useTheme();

   const onThemeChange = () => {
      updateCurrentTheme('midnightSurf');
   };

   return (
      <Tooltip id="theme-button" content="Themes">
         <button
            onClick={onThemeChange}
            type="button"
            className="text-2xl flex justify-between items-center text-center"
         >
            <IoMdColorPalette className="mt-1 mr-1" />
            aura
         </button>
      </Tooltip>
   );
}

export default ThemeButton;
