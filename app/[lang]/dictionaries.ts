import 'server-only'
import { enTranslations } from '../../dictionaries/en';
import { deTranslations } from '@/dictionaries/de';
import { Dictionary } from '@/components/prop-types';

const dictionaries: Record<string, Dictionary> = {
  en: enTranslations,
  de: deTranslations
} as const;

export async function getDictionary(locale: keyof typeof dictionaries): Promise<Dictionary> {
  const normalized = locale.startsWith("en") ? "en" : locale.startsWith("de") ? "de" : "en"
  return dictionaries[normalized]
} 
