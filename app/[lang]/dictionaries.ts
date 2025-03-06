import 'server-only'
import { enTranslations } from '../../dictionaries/en'; 
import { deTranslations } from '@/dictionaries/de';
import { Dictionary } from '@/components/prop-types';

const dictionaries: Record<string, Dictionary> = {
  en: enTranslations,
  de: deTranslations
} as const;
 
export const getDictionary = async (locale: keyof typeof dictionaries): Promise<Dictionary> => dictionaries[locale];