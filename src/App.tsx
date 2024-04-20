import { Footer, Header, MenuBar, TextContainer } from './components';
import { themeColors } from './utils/theme';
import useStringGenerator from './hooks/useStringGenerator';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
   const [generatedString, setGeneratedString] = useState<string | null>(null);
   const generateString = useStringGenerator();

   useEffect(() => {
      setGeneratedString(generateString('medium', 'hard'));
   }, []);

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
            <TextContainer Text={generatedString!} />
         </div>
         <Footer />
      </div>
   );
}

export default App;
