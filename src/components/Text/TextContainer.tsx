import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks';

interface TextContainerProps {
   textContent: string;
   className?: string;
}

function TextContainer({ textContent, className }: TextContainerProps) {
   const [isFocused, setIsFocused] = useState<boolean>(false);
   const [typedText, setTypedText] = useState<string>('');

   const { getTheme } = useTheme();
   const currentThemeInfo = getTheme();

   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (isFocused) {
            setTypedText((prev) => prev + event.key);
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
            {textContent &&
               textContent.split('').map((char, charIndex) => {
                  const typedChar = typedText[charIndex];
                  const isCorrect = char === typedChar;
                  const style = isCorrect ? 'font-medium' : 'underline';
                  const additionalStyle =
                     typedChar && !isCorrect && char === ' '
                        ? { backgroundColor: currentThemeInfo.errorText }
                        : {};
                  return (
                     <span
                        key={char + Math.random()}
                        className={`opacity-50 ${typedChar ? `!opacity-100 ${style}` : ''}`}
                        style={{
                           ...additionalStyle,
                           ...(typedChar && !isCorrect && char !== ' '
                              ? { color: currentThemeInfo.errorText }
                              : {}),
                        }}
                     >
                        {char}
                     </span>
                  );
               })}
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
