import { IoMdColorPalette } from 'react-icons/io';

function ThemeButton() {
   return (
      <button
         type="button"
         className="text-2xl flex justify-between items-center text-center"
      >
         <IoMdColorPalette className="mt-1 mr-1" />
         aura
      </button>
   );
}

export default ThemeButton;
