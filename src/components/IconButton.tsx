import { IconType } from 'react-icons';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoHelpCircleOutline } from 'react-icons/io5';
import Tooltip from './Tooltip';

// * Types
type IconName = 'Github' | 'Discord' | 'X' | 'About';

interface IconButtonProps {
   link: string;
   iconName: IconName;
   className?: string;
   target?: '_blank' | '_self' | '_parent' | '_top';
}

type IconMap = { [K in IconName]: IconType };

// ? map the SocialMediaName to the Icon Component
const iconMap: IconMap = {
   Github: FaGithub,
   Discord: FaDiscord,
   X: FaXTwitter,
   About: IoHelpCircleOutline,
};

function IconButton({
   link,
   className,
   iconName,
   target = '_self',
}: IconButtonProps) {
   // ? get the Icon Component
   const IconComponent: IconType = iconMap[iconName!];

   return (
      <Tooltip id={iconName} content={iconName}>
         <a target={target} href={link} className={className}>
            <IconComponent />
         </a>
      </Tooltip>
   );
}

export default IconButton;
