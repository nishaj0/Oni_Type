import { IoMdColorPalette } from 'react-icons/io';
import Tooltip from './Tooltip';

function ThemeButton() {
   return (
      <Tooltip id='theme-button' content='Themes'>
         <button
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
