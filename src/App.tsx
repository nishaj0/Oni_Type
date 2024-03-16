import { Footer, Header, MenuBar, TextContainer } from './components';
import { themeColors } from './utils/theme';
import quotes from './data/sentences/quotes.json';
import './App.css';

function App() {
   return (
      <div
         className="px-24 py-8 w-full h-screen flex flex-col justify-between items-center"
         style={{
            backgroundColor: themeColors.aura.background.primary,
            color: themeColors.aura.text.primary,
         }}
      >
         <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <MenuBar />
         </div>
         <div>
            <TextContainer Text={quotes.large[101]} />
         </div>
         <Footer />
      </div>
   );
}

export default App;
