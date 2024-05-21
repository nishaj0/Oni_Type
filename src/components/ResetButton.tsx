import { MdRefresh } from 'react-icons/md';
import Tooltip from './Tooltip';
import { useTheme } from '../hooks';

interface ResetButtonProps {
   className?: string;
   size?: number;
   onClick: () => void;
}

function ResetButton({ className, size, onClick }: ResetButtonProps) {
   const { getTheme } = useTheme();
   const currentThemeInfo = getTheme();

   return (
      <Tooltip id="reset-button" content="Reset" place="bottom">
         <button className={`cursor-pointer ${className}`} onClick={onClick}>
            <MdRefresh
               size={size}
               style={{ color: currentThemeInfo.secondaryText }}
            />
         </button>
      </Tooltip>
   );
}

export default ResetButton;
