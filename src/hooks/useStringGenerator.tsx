import { useCallback } from 'react';
import { wordsTemplates, stringGenerator } from '../utils/stringGenerator';

// * types
type Lengths = 'short' | 'medium' | 'long';

type GenerateString = (length: Lengths, level: 'easy' | 'hard') => string;

type UseStringGenerator = () => GenerateString;

type LengthMap = { [K in Lengths]: number };

// ? map the "length" to the number of words
const lengthMap: LengthMap = {
   short: 2,
   medium: 4,
   long: 6,
};

const useStringGenerator: UseStringGenerator = () => {
   const generateString: GenerateString = useCallback((length, level) => {
      let completeString: string = '';

      // ? get the number of strings for the length
      const lengthNumber: number = lengthMap[length];

      // ? generate random strings from one of the wordTemplates
      for (let i = 0; i < lengthNumber; i++) {
         const randomIndex: number = Math.floor(
            Math.random() * wordsTemplates.length,
         );
         const newString = stringGenerator(wordsTemplates[randomIndex], level);

         // ? add string to the completeString, add space if not the first string
         completeString += (i > 0 ? ' ' : '') + newString;
      }

      return completeString;
   }, []);

   return generateString;
};

export default useStringGenerator;
