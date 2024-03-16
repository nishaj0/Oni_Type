import { Footer, Header, MenuBar } from './components';
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
         <Header />
         <div>
            <MenuBar />
            <div>body</div>
         </div>
         <Footer />
      </div>
   );
}

export default App;
