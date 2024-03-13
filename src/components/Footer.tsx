import { FaGithub, FaDiscord } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { themeColors } from '../utils/theme';

function Footer() {
   return (
      <div
         className="w-full text-2xl flex justify-between items-center text-center align-bottom"
         style={{ color: themeColors.aura.text.tertiary }}
      >
         <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/nishaj0/Oni_Type">
               <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://github.com/nishaj0/Oni_Type">
               <FaDiscord className="cursor-pointer" />
            </a>
            <a href="https://github.com/nishaj0/Oni_Type">
               <FaXTwitter className="cursor-pointer" />
            </a>
         </div>
         <button
            type="button"
            className="text-2xl flex justify-between items-center text-center"
         >
            <IoMdColorPalette className="mt-1 mr-1" />
            aura
         </button>
      </div>
   );
}

export default Footer;
