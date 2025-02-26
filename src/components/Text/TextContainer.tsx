import { useEffect, useMemo, useState } from 'react';
import { allowedKeyCodeRegex } from '../../utils/constants';
import Char from './Char';

interface TextContainerProps {
   textContent: string;
   className?: string;
}

function TextContainer({ textContent, className }: TextContainerProps) {
   const [isFocused, setIsFocused] = useState<boolean>(false);
   const [typedText, setTypedText] = useState<string>('');

   const splitTextContent = useMemo(
      () => textContent?.split(''),
      [textContent],
   );

   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (isFocused) {
            if (event.key === 'Backspace') {
               setTypedText((prev) => prev.slice(0, -1));
            } else if (allowedKeyCodeRegex.test(event.key)) {
               setTypedText((prev) => prev + event.key);
            }
         }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      };
   }, [isFocused]);

   const handleFocus = () => {
      setIsFocused(true);
   };

   const handleBlur = () => {
      setIsFocused(false);
   };

   return (
      <div
         // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
         tabIndex={0}
         onFocus={handleFocus}
         onBlur={handleBlur}
         className={`flex flex-col justify-center items-center text-left text-2xl relative outline-none ${className}`}
      >
         <p
            className={`transition-opacity  ${!isFocused ? 'blur-sm opacity-70' : ''}`}
         >
            {splitTextContent?.map((char, charIndex) => (
               <Char
                  key={char + Math.random()}
                  char={char}
                  typedText={typedText}
                  charIndex={charIndex}
               />
            ))}
            {isFocused && <span className="blinking-cursor">|</span>}
         </p>
         <p
            className={`absolute font-semibold text-3xl transition-opacity ${isFocused ? 'opacity-0' : ''}`}
         >
            Click here to start typing
         </p>
      </div>
   );
}

export default TextContainer;
