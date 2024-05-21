import { useEffect, useState } from 'react';
import './App.css';
import {
   Footer,
   Header,
   MenuBar,
   TextContainer,
   Countdown,
   ResetButton,
   ThemeButton,
   SocialMedias,
} from './components';
import { useStringGenerator, useCountdown, useTheme } from './hooks';

function App() {
   const [generatedString, setGeneratedString] = useState<string | null>(null);
   const generateString = useStringGenerator();
   const { startCountdown, resetCountdown, countdown } = useCountdown(15);
   const { currentTheme, getTheme, updateCurrentTheme } = useTheme();

   const currentThemeInfo = getTheme();

   const handleReset = () => {
      console.log('Resetting...');
   };

   useEffect(() => {
      setGeneratedString(generateString('medium', 'hard'));
   }, []);

   return (
      <div
         className="px-24 py-8 w-full h-screen flex flex-col justify-between items-center"
         style={{
            backgroundColor: currentThemeInfo.primaryBg,
            color: currentThemeInfo.primaryText,
         }}
      >
         <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <MenuBar className="mt-12 px-4 py-1" />
         </div>
         <div className="flex flex-col">
            <Countdown timeLeft={countdown} className="mb-2 text-xl" />
            <TextContainer
               textContent={generatedString!}
               className="text-2xl"
            />
            <ResetButton
               onClick={handleReset}
               className="mt-12 self-center"
               size={28}
            />
         </div>
         <Footer className="w-full text-2xl">
            <SocialMedias />
            <ThemeButton />
         </Footer>
      </div>
   );
}

export default App;
