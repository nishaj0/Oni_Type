import { MdRefresh } from 'react-icons/md';
import { themeColors } from '../utils/theme';

interface ResetButtonProps {
   className?: string;
   size?: number;
   onClick: () => void;
}

function ResetButton({ className, size, onClick }: ResetButtonProps) {
   return (
      <button className={`cursor-pointer ${className}`} onClick={onClick}>
         <MdRefresh
            size={size}
            style={{ color: themeColors.aura.text.secondary }}
         />
      </button>
   );
}

export default ResetButton;
