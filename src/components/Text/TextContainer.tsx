import { useState } from 'react';

interface TextContainerProps {
   textContent: string;
   className?: string;
}

function TextContainer({ textContent, className }: TextContainerProps) {
   const [isFocused, setIsFocused] = useState<boolean>(false);

   let strArray: string[] = [];
   if (textContent) {
      strArray = textContent.split(' ');
   }

   return (
      <div
         // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
         tabIndex={0}
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
         className={`flex flex-col justify-center items-center text-left text-2xl relative ${className}`}
      >
         <p
            className={`transition-opacity  ${!isFocused ? 'blur-sm opacity-70' : ''}`}
         >
            {strArray.map((str, index) => (
               <>
                  <span>
                     {str.split('').map((char) => (
                        <span key={char + Math.random()}>{char}</span>
                     ))}
                  </span>
                  {index !== strArray.length - 1 && <span> </span>}
               </>
            ))}
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
