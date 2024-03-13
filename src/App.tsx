import { themeColors } from './utils/theme';
import './App.css';

function App() {
   return (
      <div
         className="px-24 py-8 h-screen flex flex-col justify-between items-center"
         style={{
            backgroundColor: themeColors.aura.background.primary,
            color: themeColors.aura.text.primary,
         }}
      >
         <div>body</div>
      </div>
   );
}

export default App;
