export type DifficultyLevels = 'easy' | 'hard';

export type NounVerb = Record<DifficultyLevels, string[]>;

export type LanguageComponentsJSON = Record<string, string[]> & {
   preposition: string[];
   conjunction: string[];
   article: string[];
   modalVerb: string[];
   auxiliaryVerb: string[];
   pronoun: string[];
   adverb: string[];
   adjective: string[];
};

export type NounsVerbsJSON = Record<string, NounVerb> & {
   noun: NounVerb;
   verb: NounVerb;
};
