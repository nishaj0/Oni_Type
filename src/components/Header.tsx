import themes from '../style/themes';
import IconButton from './IconButton';

function Header() {
   return (
      <div
         className="w-full flex justify-between items-center text-center"
         style={{ color: themes.aura.text.tertiary }}
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
