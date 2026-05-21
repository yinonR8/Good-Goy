/**
 * All supported languages for the app.
 *
 * Sorted alphabetically by ISO code (ABC order) — this is the order
 * they appear in the language picker dropdown.
 *
 * `countryCode` is the ISO 3166-1 alpha-2 country code used by the
 * `flag-icons` CSS library to render a real SVG flag (works on every OS,
 * unlike emoji flags which Windows doesn't support).
 *
 * `nameInLang` holds the language's name in every other language,
 * so when the user picks Hebrew, the dropdown shows all language names
 * in Hebrew, etc.
 */

export type LanguageCode =
  | "ar"
  | "en"
  | "es"
  | "fr"
  | "he"
  | "hi"
  | "id"
  | "pt"
  | "ru"
  | "zh"

export interface Language {
  code: LanguageCode
  countryCode: string                 // ISO 3166-1 alpha-2 for flag-icons (e.g. "us")
  nameNative: string                  // language's own name (e.g. "עברית" for Hebrew)
  direction: "ltr" | "rtl"
  nameInLang: Record<LanguageCode, string>
}

export const DEFAULT_LANGUAGE: LanguageCode = "en"

/**
 * Languages sorted alphabetically by code (ABC order).
 * Add a new entry here when adding a new language —
 * everything else (picker, search, etc.) updates automatically.
 */
export const LANGUAGES: Language[] = [
  {
    code: "ar",
    countryCode: "sa",
    nameNative: "العربية",
    direction: "rtl",
    nameInLang: {
      ar: "العربية",
      en: "Arabic",
      es: "Árabe",
      fr: "Arabe",
      he: "ערבית",
      hi: "अरबी",
      id: "Arab",
      pt: "Árabe",
      ru: "Арабский",
      zh: "阿拉伯语",
    },
  },
  {
    code: "en",
    countryCode: "us",
    nameNative: "English",
    direction: "ltr",
    nameInLang: {
      ar: "الإنجليزية",
      en: "English",
      es: "Inglés",
      fr: "Anglais",
      he: "אנגלית",
      hi: "अंग्रेज़ी",
      id: "Inggris",
      pt: "Inglês",
      ru: "Английский",
      zh: "英语",
    },
  },
  {
    code: "es",
    countryCode: "es",
    nameNative: "Español",
    direction: "ltr",
    nameInLang: {
      ar: "الإسبانية",
      en: "Spanish",
      es: "Español",
      fr: "Espagnol",
      he: "ספרדית",
      hi: "स्पैनिश",
      id: "Spanyol",
      pt: "Espanhol",
      ru: "Испанский",
      zh: "西班牙语",
    },
  },
  {
    code: "fr",
    countryCode: "fr",
    nameNative: "Français",
    direction: "ltr",
    nameInLang: {
      ar: "الفرنسية",
      en: "French",
      es: "Francés",
      fr: "Français",
      he: "צרפתית",
      hi: "फ़्रेंच",
      id: "Prancis",
      pt: "Francês",
      ru: "Французский",
      zh: "法语",
    },
  },
  {
    code: "he",
    countryCode: "il",
    nameNative: "עברית",
    direction: "rtl",
    nameInLang: {
      ar: "العبرية",
      en: "Hebrew",
      es: "Hebreo",
      fr: "Hébreu",
      he: "עברית",
      hi: "हिब्रू",
      id: "Ibrani",
      pt: "Hebraico",
      ru: "Иврит",
      zh: "希伯来语",
    },
  },
  {
    code: "hi",
    countryCode: "in",
    nameNative: "हिन्दी",
    direction: "ltr",
    nameInLang: {
      ar: "الهندية",
      en: "Hindi",
      es: "Hindi",
      fr: "Hindi",
      he: "הינדית",
      hi: "हिन्दी",
      id: "Hindi",
      pt: "Hindi",
      ru: "Хинди",
      zh: "印地语",
    },
  },
  {
    code: "id",
    countryCode: "id",
    nameNative: "Bahasa Indonesia",
    direction: "ltr",
    nameInLang: {
      ar: "الإندونيسية",
      en: "Indonesian",
      es: "Indonesio",
      fr: "Indonésien",
      he: "אינדונזית",
      hi: "इंडोनेशियाई",
      id: "Bahasa Indonesia",
      pt: "Indonésio",
      ru: "Индонезийский",
      zh: "印尼语",
    },
  },
  {
    code: "pt",
    countryCode: "pt",
    nameNative: "Português",
    direction: "ltr",
    nameInLang: {
      ar: "البرتغالية",
      en: "Portuguese",
      es: "Portugués",
      fr: "Portugais",
      he: "פורטוגזית",
      hi: "पुर्तगाली",
      id: "Portugis",
      pt: "Português",
      ru: "Португальский",
      zh: "葡萄牙语",
    },
  },
  {
    code: "ru",
    countryCode: "ru",
    nameNative: "Русский",
    direction: "ltr",
    nameInLang: {
      ar: "الروسية",
      en: "Russian",
      es: "Ruso",
      fr: "Russe",
      he: "רוסית",
      hi: "रूसी",
      id: "Rusia",
      pt: "Russo",
      ru: "Русский",
      zh: "俄语",
    },
  },
  {
    code: "zh",
    countryCode: "cn",
    nameNative: "中文",
    direction: "ltr",
    nameInLang: {
      ar: "الصينية",
      en: "Chinese",
      es: "Chino",
      fr: "Chinois",
      he: "סינית",
      hi: "चीनी",
      id: "Mandarin",
      pt: "Chinês",
      ru: "Китайский",
      zh: "中文",
    },
  },
]

/**
 * Quick lookup by code. Falls back to English if the code is unknown.
 */
export function getLanguage(code: string): Language {
  return (
    LANGUAGES.find((l) => l.code === code) ??
    LANGUAGES.find((l) => l.code === DEFAULT_LANGUAGE)!
  )
}