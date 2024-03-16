import { themeColors } from '../utils/theme';
import MenuBarItem from './MenuBarItem';

function MenuBar() {
   return (
      <div
         style={{
            backgroundColor: themeColors.aura.background.secondary,
            color: themeColors.aura.text.primary,
         }}
         className="mt-12 px-4 py-1 w-fit flex justify-between items-center space-x-4 rounded-lg "
      >
         <MenuBarItem items={['word', 'quotes']} borderRight={true} />
         <MenuBarItem items={['easy', 'medium', 'hard']} borderRight={true} />
         <MenuBarItem items={[15, 30, 60]} />
      </div>
   );
}

export default MenuBar;
