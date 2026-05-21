/**
 * Unified search engine for animal names.
 *
 * One engine handles all languages. Per-language quirks (Hebrew nikud,
 * Arabic diacritics, etc.) are handled inside `normalizeForSearch`.
 *
 * Why one engine instead of one per language:
 *   - Same core logic (substring/prefix matching)
 *   - One place to fix bugs
 *   - Smaller bundle
 *
 * Usage:
 *   import { findAnimals, findExactAnimal } from "@/lib/search/search-engine"
 *   const matches = findAnimals(animals, "פרה", "he")
 */

import type { Animal } from "@/lib/animals/types"
import type { LanguageCode } from "@/lib/i18n/languages"

/**
 * Filter animals whose name starts with the query (used for autocomplete).
 */
export function findAnimals(
  animals: Animal[],
  query: string,
  language: LanguageCode,
  limit = 8
): Animal[] {
  const normalizedQuery = normalizeForSearch(query, language)
  if (!normalizedQuery) return []

  const matches = animals.filter((animal) =>
    normalizeForSearch(animal.name, language).startsWith(normalizedQuery)
  )

  return matches.slice(0, limit)
}

/**
 * Find an exact match by name (used when the user submits the search).
 * Returns undefined if no match.
 */
export function findExactAnimal(
  animals: Animal[],
  query: string,
  language: LanguageCode
): Animal | undefined {
  const normalizedQuery = normalizeForSearch(query, language)
  if (!normalizedQuery) return undefined

  return animals.find(
    (animal) => normalizeForSearch(animal.name, language) === normalizedQuery
  )
}

/**
 * Normalize a string for searching: lowercase, trim, and strip
 * language-specific marks (Hebrew nikud, Arabic diacritics).
 *
 * Exported so other parts of the app can re-use it if needed.
 */
export function normalizeForSearch(text: string, language: LanguageCode): string {
  let normalized = text.toLowerCase().trim()

  switch (language) {
    case "he":
      normalized = stripHebrewNikud(normalized)
      break
    case "ar":
      normalized = stripArabicDiacritics(normalized)
      break
    // Other languages need no special handling for now.
  }

  return normalized
}

/**
 * Strip Hebrew vowel points (nikud) and cantillation marks.
 * Unicode range U+0591–U+05C7 covers all of them, so a search for
 * "פרה" matches "פָּרָה".
 */
function stripHebrewNikud(text: string): string {
  return text.replace(/[\u0591-\u05C7]/g, "")
}

/**
 * Strip Arabic diacritics (tashkeel) so a search for "كوشر" works
 * regardless of vowel marks in the data.
 */
function stripArabicDiacritics(text: string): string {
  return text.replace(/[\u064B-\u065F\u0670]/g, "")
}
