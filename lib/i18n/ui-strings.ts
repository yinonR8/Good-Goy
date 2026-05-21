/**
 * UI string translations.
 *
 * These are the static text snippets shown around the app
 * (page title, button labels, error messages, etc.) —
 * NOT the animal names or explanations (those live in lib/animals).
 *
 * Add a new key here when you add new UI text. Every language must
 * provide a value for every key — TypeScript will complain if one is missing.
 */

import type { LanguageCode } from "./languages"

export interface UIStrings {
  appTitle: string
  appTagline: string
  searchPlaceholder: string
  recentSearches: string
  kosher: string
  notKosher: string
  yes: string
  no: string
  animalNotFound: string
  animalNotFoundDescription: string
  emptyStateHint: string
  selectLanguage: string
}

export const UI_STRINGS: Record<LanguageCode, UIStrings> = {
  ar: {
    appTitle: "Good Goy",
    appTagline: "اكتشف إذا كان الحيوان حلالاً للأكل",
    searchPlaceholder: "ابحث عن حيوان...",
    recentSearches: "عمليات البحث الأخيرة",
    kosher: "كوشر",
    notKosher: "غير كوشر",
    yes: "نعم",
    no: "لا",
    animalNotFound: "لم يتم العثور على الحيوان",
    animalNotFoundDescription:
      "تعذر العثور على هذا الحيوان في قاعدة بياناتنا. جرب البحث عن حيوان آخر أو تحقق من التهجئة.",
    emptyStateHint: "ابحث عن حيوان لمعرفة ما إذا كان كوشر",
    selectLanguage: "اختر اللغة",
  },
  en: {
    appTitle: "Good Goy",
    appTagline: "Find out if an animal is kosher to eat",
    searchPlaceholder: "Search for an animal...",
    recentSearches: "Recent Searches",
    kosher: "Kosher",
    notKosher: "Not Kosher",
    yes: "Yes",
    no: "No",
    animalNotFound: "Animal not found",
    animalNotFoundDescription:
      "We couldn't find that animal in our database. Try searching for a different animal or check your spelling.",
    emptyStateHint: "Search for an animal to see if it's kosher",
    selectLanguage: "Select language",
  },
  es: {
    appTitle: "Good Goy",
    appTagline: "Descubre si un animal es kosher para comer",
    searchPlaceholder: "Buscar un animal...",
    recentSearches: "Búsquedas recientes",
    kosher: "Kosher",
    notKosher: "No Kosher",
    yes: "Sí",
    no: "No",
    animalNotFound: "Animal no encontrado",
    animalNotFoundDescription:
      "No pudimos encontrar ese animal en nuestra base de datos. Prueba con otro animal o verifica la ortografía.",
    emptyStateHint: "Busca un animal para ver si es kosher",
    selectLanguage: "Seleccionar idioma",
  },
  fr: {
    appTitle: "Good Goy",
    appTagline: "Découvrez si un animal est casher",
    searchPlaceholder: "Rechercher un animal...",
    recentSearches: "Recherches récentes",
    kosher: "Casher",
    notKosher: "Non Casher",
    yes: "Oui",
    no: "Non",
    animalNotFound: "Animal introuvable",
    animalNotFoundDescription:
      "Nous n'avons pas trouvé cet animal dans notre base de données. Essayez un autre animal ou vérifiez l'orthographe.",
    emptyStateHint: "Recherchez un animal pour voir s'il est casher",
    selectLanguage: "Choisir la langue",
  },
  he: {
    appTitle: "Good Goy",
    appTagline: "גלו אם בעל החיים כשר למאכל",
    searchPlaceholder: "חפש בעל חיים...",
    recentSearches: "חיפושים אחרונים",
    kosher: "כשר",
    notKosher: "לא כשר",
    yes: "כן",
    no: "לא",
    animalNotFound: "בעל החיים לא נמצא",
    animalNotFoundDescription:
      "לא הצלחנו למצוא את בעל החיים במאגר שלנו. נסה לחפש בעל חיים אחר או לבדוק את האיות.",
    emptyStateHint: "חפש בעל חיים כדי לדעת אם הוא כשר",
    selectLanguage: "בחר שפה",
  },
  hi: {
    appTitle: "Good Goy",
    appTagline: "जानें कि कोई जानवर कोषेर है या नहीं",
    searchPlaceholder: "जानवर खोजें...",
    recentSearches: "हाल की खोजें",
    kosher: "कोषेर",
    notKosher: "कोषेर नहीं",
    yes: "हाँ",
    no: "नहीं",
    animalNotFound: "जानवर नहीं मिला",
    animalNotFoundDescription:
      "हम उस जानवर को अपने डेटाबेस में नहीं ढूंढ सके। कोई दूसरा जानवर खोजें या वर्तनी जांचें।",
    emptyStateHint: "यह जानने के लिए जानवर खोजें कि वह कोषेर है या नहीं",
    selectLanguage: "भाषा चुनें",
  },
  id: {
    appTitle: "Good Goy",
    appTagline: "Cari tahu apakah seekor hewan halal kosher",
    searchPlaceholder: "Cari hewan...",
    recentSearches: "Pencarian Terbaru",
    kosher: "Kosher",
    notKosher: "Tidak Kosher",
    yes: "Ya",
    no: "Tidak",
    animalNotFound: "Hewan tidak ditemukan",
    animalNotFoundDescription:
      "Kami tidak dapat menemukan hewan itu di database kami. Coba cari hewan lain atau periksa ejaan.",
    emptyStateHint: "Cari hewan untuk melihat apakah itu kosher",
    selectLanguage: "Pilih bahasa",
  },
  pt: {
    appTitle: "Good Goy",
    appTagline: "Descubra se um animal é kosher",
    searchPlaceholder: "Procurar um animal...",
    recentSearches: "Pesquisas Recentes",
    kosher: "Kosher",
    notKosher: "Não Kosher",
    yes: "Sim",
    no: "Não",
    animalNotFound: "Animal não encontrado",
    animalNotFoundDescription:
      "Não conseguimos encontrar esse animal em nossa base de dados. Tente procurar outro animal ou verifique a ortografia.",
    emptyStateHint: "Procure um animal para ver se é kosher",
    selectLanguage: "Selecionar idioma",
  },
  ru: {
    appTitle: "Good Goy",
    appTagline: "Узнайте, кошерно ли животное для еды",
    searchPlaceholder: "Найти животное...",
    recentSearches: "Недавние поиски",
    kosher: "Кошерно",
    notKosher: "Не кошерно",
    yes: "Да",
    no: "Нет",
    animalNotFound: "Животное не найдено",
    animalNotFoundDescription:
      "Мы не смогли найти это животное в нашей базе данных. Попробуйте поискать другое животное или проверьте написание.",
    emptyStateHint: "Найдите животное, чтобы узнать, кошерно ли оно",
    selectLanguage: "Выберите язык",
  },
  zh: {
    appTitle: "Good Goy",
    appTagline: "查看动物是否符合犹太洁食",
    searchPlaceholder: "搜索动物...",
    recentSearches: "最近搜索",
    kosher: "洁食",
    notKosher: "非洁食",
    yes: "是",
    no: "否",
    animalNotFound: "未找到动物",
    animalNotFoundDescription:
      "我们在数据库中找不到该动物。请尝试搜索其他动物或检查拼写。",
    emptyStateHint: "搜索动物以查看它是否符合洁食",
    selectLanguage: "选择语言",
  },
}

export function getUIStrings(code: LanguageCode): UIStrings {
  return UI_STRINGS[code] ?? UI_STRINGS.en
}
