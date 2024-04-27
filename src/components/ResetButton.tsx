import { MdRefresh } from 'react-icons/md';
import { themeColors } from '../utils/theme';
import Tooltip from './Tooltip';

interface ResetButtonProps {
   className?: string;
   size?: number;
   onClick: () => void;
}

function ResetButton({ className, size, onClick }: ResetButtonProps) {
   return (
      <Tooltip id="reset-button" content="Reset" place="bottom" >
         <button className={`cursor-pointer ${className}`} onClick={onClick}>
            <MdRefresh
               size={size}
               style={{ color: themeColors.aura.text.secondary }}
            />
         </button>
      </Tooltip>
   );
}

export default ResetButton;
