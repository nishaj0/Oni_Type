import LanguageComponentsData from '../data/words/LanguageComponents.json';
import NounsVerbsData from '../data/words/NounsVerbs.json';
import {
   LanguageComponentsJSON,
   NounsVerbsJSON,
   DifficultyLevels,
} from '../types/words';

// * types
type WordsTemplate = string[];

type StringGenerator = (
   wordsTemplate: WordsTemplate,
   level: DifficultyLevels,
) => string;

// ? global variables
const LanguageComponents: LanguageComponentsJSON = LanguageComponentsData;
const NounsVerbs: NounsVerbsJSON = NounsVerbsData;

const wordsTemplate1: WordsTemplate = [
   'article',
   'adjective',
   'noun',
   'verb',
   'preposition',
   'article',
   'noun',
];

const wordsTemplate2: WordsTemplate = [
   'pronoun',
   'modalVerb',
   'verb',
   'conjunction',
   'pronoun',
   'auxiliaryVerb',
   'adjective',
];

const wordsTemplate3: WordsTemplate = [
   'article',
   'noun',
   'verb',
   'adverb',
   'preposition',
   'article',
   'adjective',
   'noun',
];

const wordsTemplate4: WordsTemplate = [
   'pronoun',
   'verb',
   'preposition',
   'article',
   'adjective',
   'noun',
];

const wordsTemplate5: WordsTemplate = [
   'article',
   'noun',
   'adverb',
   'verb',
   'conjunction',
   'pronoun',
   'verb',
   'adverb',
];

export const wordsTemplates: WordsTemplate[] = [
   wordsTemplate1,
   wordsTemplate2,
   wordsTemplate3,
   wordsTemplate4,
   wordsTemplate5,
];

export const stringGenerator: StringGenerator = (wordsTemplate, level) => {
   let generatedString: string = '';

   wordsTemplate.forEach((wordType) => {
      let randomWord: string = '';

      // ? if wordType is noun or verb, get  word from NounsVerbs.json
      if (wordType === 'noun' || wordType === 'verb') {
         const randomWordIndex = Math.floor(
            Math.random() * NounsVerbs[wordType][level].length,
         );
         randomWord = NounsVerbs[wordType][level][randomWordIndex];
      } else {
         // ? else get word from LanguageComponents.json
         const randomWordIndex = Math.floor(
            Math.random() * LanguageComponents[wordType].length,
         );
         randomWord = LanguageComponents[wordType][randomWordIndex];
      }

      //?  add randomWord to the generatedString with a space
      generatedString = `${generatedString} ${randomWord}`;
   });
   return generatedString.trim();
};
