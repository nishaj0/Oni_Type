import { themeColors } from '../utils/theme';
import MenuBarItem from './MenuBarItem';

interface MenuBarProps {
   className?: string;
}

function MenuBar({ className }: MenuBarProps) {
   return (
      <div
         style={{
            backgroundColor: themeColors.aura.background.secondary,
            color: themeColors.aura.text.primary,
         }}
         className={`w-fit flex justify-between items-center space-x-4 rounded-lg ${className}`}
      >
         <MenuBarItem items={['word', 'quotes']} borderRight={true} />
         <MenuBarItem items={['easy', 'medium', 'hard']} borderRight={true} />
         <MenuBarItem items={[15, 30, 60]} />
      </div>
   );
}

export default MenuBar;
