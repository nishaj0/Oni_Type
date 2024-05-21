import { useTheme } from '../hooks';
import IconButton from './IconButton';

function Header() {
   const { getTheme } = useTheme();
   const currentThemeInfo = getTheme();

   return (
      <div
         className="w-full flex justify-between items-center text-center"
         style={{ color: currentThemeInfo.tertiaryText }}
      >
         <h1 className="text-3xl">OniType</h1>
         <IconButton
            iconName="About"
            link="https://github.com/nishaj0/Oni_Type"
            className="text-4xl cursor-pointer"
         />
      </div>
   );
}

export default Header;
