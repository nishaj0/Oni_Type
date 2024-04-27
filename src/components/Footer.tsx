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
         {children}
      </div>
   );
}

export default Footer;
