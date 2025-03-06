import { enTranslations } from "@/dictionaries/en";

export type Dictionary = typeof enTranslations;

export interface DictionaryProp {
  dict: Dictionary
};