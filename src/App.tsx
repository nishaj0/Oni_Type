import { useEffect, useState } from 'react';
import './App.css';
import { themeColors } from './utils/theme';
import {
   Footer,
   Header,
   MenuBar,
   TextContainer,
   Countdown,
} from './components';
import { useStringGenerator, useCountdown } from './hooks';

function App() {
   const [generatedString, setGeneratedString] = useState<string | null>(null);
   const generateString = useStringGenerator();
   const { startCountdown, resetCountdown, countdown } = useCountdown(15);

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
            <Countdown timeLeft={countdown} />
            <TextContainer Text={generatedString!} />
         </div>
         <Footer />
      </div>
   );
}

export default App;
