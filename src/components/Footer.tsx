import { FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { themeColors } from '../utils/theme';

interface FooterProps {
   className?: string;
   children: React.ReactNode;
}

function Footer({ className, children }: FooterProps) {
   return (
      <div
         className={`flex justify-between items-center text-center align-bottom ${className}`}
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
         {children}
      </div>
   );
}

export default Footer;
