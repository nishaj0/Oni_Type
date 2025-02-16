import { useTheme } from '../../hooks';

interface CharProps {
   char: string;
   typedText: string;
   charIndex: number;
}

function Char({ char, typedText, charIndex }: CharProps) {
   const { getTheme } = useTheme();
   const currentThemeInfo = getTheme();

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
}

export default Char;
