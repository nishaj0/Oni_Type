import { IoHelpCircleOutline } from 'react-icons/io5';
import { themeColors } from '../utils/theme';

function Header() {
   return (
      <div
         className="w-full flex justify-between items-center text-center"
         style={{ color: themeColors.aura.text.tertiary }}
      >
         <h1 className="text-3xl">OniType</h1>
         <IoHelpCircleOutline className="text-4xl cursor-pointer" />
      </div>
   );
}

export default Header;
