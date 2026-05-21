/**
 * Central loader for animal data by language.
 *
 * Usage:
 *   import { getAnimalData } from "@/lib/animals"
 *   const animals = getAnimalData("he")
 *
 * If the language has no data yet (empty file), it falls back to English.
 */

import type { Animal } from "./types"
import { animalData as enData } from "./animal-data-en"
import { animalData as heData } from "./animal-data-he"
// Other languages are not translated yet; they fall back to English
// import { animalData as zhData } from "./animal-data-zh"
// import { animalData as hiData } from "./animal-data-hi"
// import { animalData as esData } from "./animal-data-es"
// import { animalData as arData } from "./animal-data-ar"
// import { animalData as frData } from "./animal-data-fr"
// import { animalData as ptData } from "./animal-data-pt"
// import { animalData as ruData } from "./animal-data-ru"
// import { animalData as idData } from "./animal-data-id"

export type { Animal } from "./types"

const dataByLanguage: Record<string, Animal[]> = {
  en: enData,
  he: heData,
  // Uncomment as each language is translated:
  // zh: zhData,
  // hi: hiData,
  // es: esData,
  // ar: arData,
  // fr: frData,
  // pt: ptData,
  // ru: ruData,
  // id: idData,
}

export function getAnimalData(languageCode: string): Animal[] {
  return dataByLanguage[languageCode] ?? dataByLanguage.en
}

export function hasTranslation(languageCode: string): boolean {
  return languageCode in dataByLanguage
}
