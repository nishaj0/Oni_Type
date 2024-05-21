import { useTheme } from '../hooks';
import MenuBarItem from './MenuBarItem';

interface MenuBarProps {
   className?: string;
}

function MenuBar({ className }: MenuBarProps) {
   const { getTheme } = useTheme();
   const currentThemeInfo = getTheme();

   return (
      <div
         style={{
            backgroundColor: currentThemeInfo.secondaryBg,
            color: currentThemeInfo.primaryText,
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
