import type { Animal } from "./types"

export type { Animal }

export const animalData: Animal[] = [

  // ══════════════════════════════════════════════════════════════════
  // יונקים
  // ══════════════════════════════════════════════════════════════════

  // --- יונקים כשרים ---
  {
    name: "פָּרָה",
    icon: "🐄",
    isKosher: true,
    family: "יונקים",
    explanation: "לפרה פרסות שסועות והיא מעלה גרה – שני התנאים שנדרשים בתורה (ויקרא יא:ג). יש לשוחטה כהלכה."
  },
  {
    name: "כֶּבֶשׂ",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לכבש פרסות שסועות והוא מעלה גרה. עמוד התווך של המטבח היהודי לאורך הדורות."
  },
  {
    name: "עֵז",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "לעז פרסות שסועות והיא מעלה גרה. עזים הוקרבו קרבנות בבית המקדש."
  },
  {
    name: "טָלֶה",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לטלה פרסות שסועות והוא מעלה גרה. בשר הטלה נאכל מסורתית בפסח ובחגים אחרים."
  },
  {
    name: "אַיָּל",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל פרסות שסועות והוא מעלה גרה. עם זאת, שחיטת איל בר כהלכה מאתגרת, ולכן בשר צבי כשר הוא נדיר."
  },
  {
    name: "יַחְמוּר",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "ליחמור פרסות שסועות והוא מעלה גרה. הוא מוזכר בין החיות המותרות בדברים יד:ה."
  },
  {
    name: "דָּם צְבִי",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לדם הצבי פרסות שסועות והוא מעלה גרה. הוא אחד ממיני האיילים המותרים על פי התורה."
  },
  {
    name: "אַיָּל אָדֹם",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל האדום פרסות שסועות והוא מעלה גרה. הוא עומד בשני תנאי הכשרות."
  },
  {
    name: "אַיָּל סִיקָה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל הסיקה פרסות שסועות והוא מעלה גרה. הוא עונה על שני תנאי התורה."
  },
  {
    name: "אַיָּל פֶּרֶד",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל הפרד פרסות שסועות והוא מעלה גרה. הוא כשר מן הדין."
  },
  {
    name: "אַיָּל זְנַב לָבָן",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל זנב הלבן פרסות שסועות והוא מעלה גרה. הוא נפוץ בצפון אמריקה וכשר מן הדין."
  },
  {
    name: "אַיָּל צָפוֹן",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל הצפון פרסות שסועות והוא מעלה גרה כשאר בני משפחת האיילים. הוא כשר מן הדין."
  },
  {
    name: "קָרִיבּוּ",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לקריבו, סוג של אייל צפון, פרסות שסועות והוא מעלה גרה. הוא כשר כשנשחט כהלכה."
  },
  {
    name: "אַיָּל גָּדוֹל",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאיל הגדול פרסות שסועות והוא מעלה גרה כשאר הצביים. יש לשוחטו כהלכה."
  },
  {
    name: "מוּז",
    icon: "🫎",
    isKosher: true,
    family: "יונקים",
    explanation: "למוז פרסות שסועות והוא מעלה גרה. כבעל חיים בר, שחיטתו הכשרה מאתגרת, אך מן הדין הוא מותר."
  },
  {
    name: "בִּיזוֹן",
    icon: "🦬",
    isKosher: true,
    family: "יונקים",
    explanation: "לביזון פרסות שסועות והוא מעלה גרה – שני תנאי התורה. בשר ביזון כשר זמין מיצרנים מיוחדים."
  },
  {
    name: "בִּיזוֹן אֵירוֹפִּי",
    icon: "🦬",
    isKosher: true,
    family: "יונקים",
    explanation: "לביזון האירופי פרסות שסועות והוא מעלה גרה. הוא כשר כמו אחיו האמריקאי."
  },
  {
    name: "תְּאוֹ מַיִם",
    icon: "🐃",
    isKosher: true,
    family: "יונקים",
    explanation: "לתאו המים פרסות שסועות והוא מעלה גרה. הוא כשר כשנשחט כהלכה."
  },
  {
    name: "נוּ",
    icon: "🐃",
    isKosher: true,
    family: "יונקים",
    explanation: "לנו (ווילדביסט) פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "יָאק",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "ליאק פרסות שסועות והוא מעלה גרה. הוא עומד בתנאי חיית היבשה הכשרה."
  },
  {
    name: "זֶבּוּ",
    icon: "🐄",
    isKosher: true,
    family: "יונקים",
    explanation: "לזבו, בקר דבשת ביתי, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "גָּאוּר",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "לגאור, בקר בר גדול, פרסות שסועות והוא מעלה גרה. הוא כשר מן הדין."
  },
  {
    name: "בַּנְטֶנְג",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "לבנטנג, בקר בר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "קוּפְּרֵי",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "לקופרי, בקר בר נדיר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "שׁוֹר רֵיחָנִי",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "לשור הריחני פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "טָקִין",
    icon: "🐂",
    isKosher: true,
    family: "יונקים",
    explanation: "לטאקין, עז-אנטילופה גדולה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "גִּ'ירָפָה",
    icon: "🦒",
    isKosher: true,
    family: "יונקים",
    explanation: "לג'ירפה פרסות שסועות והיא מעלה גרה, ולכן היא כשרה מן הדין. אולם מיקום השחיטה שנוי במחלוקת, ולכן היא נאכלת לעתים נדירות."
  },
  {
    name: "יָעֵל",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "ליעל פרסות שסועות והוא מעלה גרה כמו עזים. הוא מוזכר בתורה כמין מותר."
  },
  {
    name: "עֵז הַר",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "לעז ההר הצפון-אמריקאית פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "שְׁמוּאָה",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "לשמואה, פרסה של הרים, פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "מַרְקוֹר",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "למרקור, עז בר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "טָהְר",
    icon: "🐐",
    isKosher: true,
    family: "יונקים",
    explanation: "לטהר, עז בר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "כֶּבֶשׂ קַרְנַיִם גְּדוֹלוֹת",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לכבש הקרניים הגדולות פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "כֶּבֶשׂ דַּל",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לכבש דל פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "מוּפְלוֹן",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "למופלון, כבש בר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אוּרִיאָל",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לאוריאל, כבש בר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אַרְגָּלִי",
    icon: "🐑",
    isKosher: true,
    family: "יונקים",
    explanation: "לארגלי, הכבש הגדול בעולם, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אַנְטִילוֹפָּה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאנטילופה פרסות שסועות והיא מעלה גרה. מינים שונים מוזכרים בתורה כחיות מותרות."
  },
  {
    name: "צְבִי",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לצבי פרסות שסועות והוא מעלה גרה. הוא מוזכר מפורשות כמותר בדברים יד:ה."
  },
  {
    name: "שְׁפְּרִינְגְבּוֹק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לשפרינגבוק, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אִימְפָּלָה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאימפלה פרסות שסועות והיא מעלה גרה. היא עומדת בשני תנאי התורה."
  },
  {
    name: "קוּדוּ",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לקודו, אנטילופה גדולה, פרסות שסועות והוא מעלה גרה. הוא עומד בדרישות הכשרות."
  },
  {
    name: "אֵילַנְד",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאילנד, האנטילופה הגדולה ביותר, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אוֹרִיקְס",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאוריקס פרסות שסועות והוא מעלה גרה. יש הסבורים שהוא הרְאֵם המוזכר בתורה."
  },
  {
    name: "גֶּמְסְבּוֹק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לגמסבוק, סוג של אוריקס, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אַדַּקְס",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאדקס, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "טוֹפִּי",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לטופי, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא עומד בדרישות הכשרות."
  },
  {
    name: "הַרְטְבִּיסְט",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "להרטביסט, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "שְׂטֵינְבּוֹק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לשטינבוק, אנטילופה קטנה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "דִּיק-דִּיק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לדיק-דיק, אנטילופה זעירה, פרסות שסועות והוא מעלה גרה. הוא עומד בשני תנאי התורה."
  },
  {
    name: "דַּיְיקֵר",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לדייקר, אנטילופה קטנה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "קְלִיפְּשְׁפְּרִינְגֵר",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לקליפשפרינגר, אנטילופה סלעים קטנה, פרסות שסועות והוא מעלה גרה."
  },
  {
    name: "נְיָאלָה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לניאלה, אנטילופה בעלת קרניים מעוקלות, פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "בּוּשְׁבּוּק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לבושבוק, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "סִיטָטוּנְגָה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לסיטאטונגה, אנטילופה למחצה-ימית, פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "אַנְטִילוֹפַּת זָבֵל",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאנטילופת הזבל פרסות שסועות והיא מעלה גרה. היא עומדת בשני תנאי התורה."
  },
  {
    name: "אַנְטִילוֹפַּת רוֹאָן",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאנטילופת הרואן פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "וָּוטֵרְבּוּק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לווטרבוק, אנטילופה גדולה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "רִידְבּוּק",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לרידבוק, אנטילופה, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "פְּרוֹנְגְהוֹרְן",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לפרונגהורן, פרסה צפון-אמריקאית, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "סַיְיגָה",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לסייגה, אנטילופת ערבה, פרסות שסועות והיא מעלה גרה. היא כשרה."
  },
  {
    name: "נִילְגַּאי",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לנילגאי, שור כחול אסייתי גדול, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "צְבִי שָׁחֹר",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לצבי השחור, אנטילופה הודית, פרסות שסועות והוא מעלה גרה. הוא כשר."
  },
  {
    name: "אַנְטִילוֹפַּת אַרְבַּע קְרָנוֹת",
    icon: "🦌",
    isKosher: true,
    family: "יונקים",
    explanation: "לאנטילופת ארבע הקרנות פרסות שסועות והיא מעלה גרה. היא כשרה."
  },

  // --- יונקים לא כשרים ---
  {
    name: "חֲזִיר",
    icon: "🐷",
    isKosher: false,
    family: "יונקים",
    explanation: "לחזיר פרסות שסועות אך הוא אינו מעלה גרה. התורה אוסרת מפורשות את בשרו (ויקרא יא:ז)."
  },
  {
    name: "חֲזִיר בָּר",
    icon: "🐗",
    isKosher: false,
    family: "יונקים",
    explanation: "לחזיר הבר, כמו לחזיר הבית, פרסות שסועות אך הוא אינו מעלה גרה. הוא אסור."
  },
  {
    name: "חֲזִיר יַבָּלוֹת",
    icon: "🐗",
    isKosher: false,
    family: "יונקים",
    explanation: "לחזיר היבלות פרסות שסועות אך הוא אינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "בַּבִּירוּסָה",
    icon: "🐗",
    isKosher: false,
    family: "יונקים",
    explanation: "לבבירוסה, קרוב משפחה של החזיר, פרסות שסועות אך הוא אינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "חֲזִיר גּוּפָה",
    icon: "🐗",
    isKosher: false,
    family: "יונקים",
    explanation: "לחזיר הגופה פרסות שסועות אך הוא אינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "סוּס",
    icon: "🐴",
    isKosher: false,
    family: "יונקים",
    explanation: "לסוס אין פרסות שסועות והוא אינו מעלה גרה. הוא נכשל בשני התנאים."
  },
  {
    name: "חֲמוֹר",
    icon: "🫏",
    isKosher: false,
    family: "יונקים",
    explanation: "לחמור אין פרסות שסועות והוא אינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "זֶבְּרָה",
    icon: "🦓",
    isKosher: false,
    family: "יונקים",
    explanation: "לזברה, כמו לסוס, אין פרסות שסועות והיא אינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "גָּמָל",
    icon: "🐪",
    isKosher: false,
    family: "יונקים",
    explanation: "הגמל מעלה גרה אך פרסותיו אינן שסועות לגמרי. התורה אוסרת אותו מפורשות (ויקרא יא:ד)."
  },
  {
    name: "לָמָה",
    icon: "🦙",
    isKosher: false,
    family: "יונקים",
    explanation: "הלמה מעלה גרה אך אין לה פרסות שסועות כמו הגמל. היא אינה כשרה."
  },
  {
    name: "אַלְפָּקָה",
    icon: "🦙",
    isKosher: false,
    family: "יונקים",
    explanation: "לאלפקה, כמו ללמה, יש עיכול גרה אך אין פרסות שסועות. היא אינה כשרה."
  },
  {
    name: "אַרְנָב",
    icon: "🐰",
    isKosher: false,
    family: "יונקים",
    explanation: "הארנב נראה כמעלה גרה אך אין לו פרסות שסועות. התורה אוסרת אותו מפורשות (ויקרא יא:ו)."
  },
  {
    name: "שָׁפָן",
    icon: "🐇",
    isKosher: false,
    family: "יונקים",
    explanation: "לשפן, כמו לארנב, אין פרסות שסועות למרות שהוא נראה מעלה גרה. הוא אסור מפורשות."
  },
  {
    name: "פִּיקָה",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "הפיקה קרובה לארנב ואין לה פרסות שסועות. היא אינה כשרה."
  },
  {
    name: "חָתוּל",
    icon: "🐈",
    isKosher: false,
    family: "יונקים",
    explanation: "לחתול אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "אַרְיֵה",
    icon: "🦁",
    isKosher: false,
    family: "יונקים",
    explanation: "האריה הוא טורף ללא פרסות שסועות ואינו מעלה גרה. יונקים דורסים אסורים."
  },
  {
    name: "טִיגְרִיס",
    icon: "🐅",
    isKosher: false,
    family: "יונקים",
    explanation: "הטיגריס הוא טורף חסר סימני כשרות."
  },
  {
    name: "נָמֵר",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "הנמר הוא חתול דורס ללא תכונות כשרות."
  },
  {
    name: "גִּ'פָּרְד",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "הג'יפארד הוא חתול דורס וחסר תכונות כשרות."
  },
  {
    name: "פַּנְתֵּר",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "הפנתר (נמר שחור/יגואר) הוא חתול דורס, אינו כשר."
  },
  {
    name: "יָגוּאָר",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "ליגואר, חתול דורס, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "קוּגָר",
    icon: "🦁",
    isKosher: false,
    family: "יונקים",
    explanation: "הקוגר (אריה הרים) הוא חתול דורס, אינו כשר."
  },
  {
    name: "לִינְקְס",
    icon: "🐈",
    isKosher: false,
    family: "יונקים",
    explanation: "הלינקס הוא חתול בר ודורס. הוא אינו כשר."
  },
  {
    name: "נָמֵר שֶׁלֶג",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "נמר השלג הוא חתול גדול ודורס ללא תכונות כשרות."
  },
  {
    name: "נָמֵר עֲנָנִים",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "נמר העננים הוא חתול בר ודורס. הוא אינו כשר."
  },
  {
    name: "בּוֹבְקַט",
    icon: "🐈",
    isKosher: false,
    family: "יונקים",
    explanation: "הבובקט הוא חתול בר ודורס ללא תכונות כשרות."
  },
  {
    name: "פּוּמָה",
    icon: "🦁",
    isKosher: false,
    family: "יונקים",
    explanation: "הפומה (אריה הרים) היא חתול דורסת ללא פרסות שסועות ואינה מעלה גרה."
  },
  {
    name: "סֶרְוָל",
    icon: "🐈",
    isKosher: false,
    family: "יונקים",
    explanation: "הסרוול הוא חתול בר ודורס. הוא אינו כשר."
  },
  {
    name: "אוֹסֶלוֹט",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "האוסלוט הוא חתול בר ודורס ללא תכונות כשרות."
  },
  {
    name: "מַרְגָּי",
    icon: "🐆",
    isKosher: false,
    family: "יונקים",
    explanation: "המרגי הוא חתול בר קטן ודורס. הוא אינו כשר."
  },
  {
    name: "קָרָקַל",
    icon: "🐈",
    isKosher: false,
    family: "יונקים",
    explanation: "הקרקל הוא חתול בר ודורס ללא תכונות כשרות."
  },
  {
    name: "כֶּלֶב",
    icon: "🐕",
    isKosher: false,
    family: "יונקים",
    explanation: "לכלב אין פרסות שסועות ואינו מעלה גרה. הוא אינו בעל חיים למאכל."
  },
  {
    name: "זְאֵב",
    icon: "🐺",
    isKosher: false,
    family: "יונקים",
    explanation: "הזאב הוא טורף ללא תכונות כשרות."
  },
  {
    name: "שׁוּעָל",
    icon: "🦊",
    isKosher: false,
    family: "יונקים",
    explanation: "לשועל אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "דִּינְגּוֹ",
    icon: "🐕",
    isKosher: false,
    family: "יונקים",
    explanation: "הדינגו הוא כלב בר ודורס. הוא אינו כשר."
  },
  {
    name: "קוֹיוֹטֶה",
    icon: "🐺",
    isKosher: false,
    family: "יונקים",
    explanation: "הקויוטה הוא כלבתן טורף ללא תכונות כשרות."
  },
  {
    name: "תַּן",
    icon: "🐺",
    isKosher: false,
    family: "יונקים",
    explanation: "לתן אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "כֶּלֶב בָּר",
    icon: "🐕",
    isKosher: false,
    family: "יונקים",
    explanation: "כלב הבר האפריקאי הוא טורף ללא תכונות כשרות."
  },
  {
    name: "דֹּב",
    icon: "🐻",
    isKosher: false,
    family: "יונקים",
    explanation: "לדב אין פרסות שסועות ואינו מעלה גרה. הוא טורף כל-אוכל."
  },
  {
    name: "דֹּב קֻטְבִּי",
    icon: "🐻‍❄️",
    isKosher: false,
    family: "יונקים",
    explanation: "הדב הקוטבי הוא טורף ללא תכונות כשרות."
  },
  {
    name: "פַּנְדָּה",
    icon: "🐼",
    isKosher: false,
    family: "יונקים",
    explanation: "הפנדה היא דב חסרת סימני כשרות, למרות שהיא אוכלת עשב."
  },
  {
    name: "גִּירִית",
    icon: "🦡",
    isKosher: false,
    family: "יונקים",
    explanation: "לגירית אין פרסות שסועות ואינה מעלה גרה."
  },
  {
    name: "גִּירִית דְּבַשׁ",
    icon: "🦡",
    isKosher: false,
    family: "יונקים",
    explanation: "לגירית הדבש אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "לוּטְרָה",
    icon: "🦦",
    isKosher: false,
    family: "יונקים",
    explanation: "הלוטרה היא טורפת ללא תכונות כשרות."
  },
  {
    name: "חֹלֶד",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "החולד הוא טורף המוזכר מפורשות כאסור בתורה (ויקרא יא:כט)."
  },
  {
    name: "חֹרֶפֶת",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לחורפת, חולד מבויית, אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "מִינְק",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "למינק, קוּנְדָּס, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "חֹלֶד לָבָן",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לחולד הלבן אין תכונות כשרות. הוא אינו כשר."
  },
  {
    name: "גַּרְגְּרָן",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לגרגרן, מוסטלי גדול, אין תכונות כשרות."
  },
  {
    name: "זֶבֶד",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לזבד אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "בִּינְטוּרוֹנְג",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לבינטורונג אין תכונות כשרות. הוא אינו כשר."
  },
  {
    name: "ז'נֶט",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לז'נט, ויברי, אין תכונות כשרות. הוא אינו כשר."
  },
  {
    name: "פוֹסָה",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לפוסה, יונק מדגסקר, אין תכונות כשרות. היא אינה כשרה."
  },
  {
    name: "צָבוּעַ",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לצבוע אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "צָבוּעַ פַּסִּים",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לצבוע הפסים אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "אַרְד-וּוֹלְף",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לארד-וולף, קרוב הצבוע, אין תכונות כשרות."
  },
  {
    name: "מִירְקָט",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "למירקט אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "מַנְגּוּסְטָה",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "למנגוסטה אין תכונות כשרות. היא אינה כשרה."
  },
  {
    name: "קוֹף",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "לקוף אין פרסות שסועות ואינו מעלה גרה. הוא אינו מותר."
  },
  {
    name: "גּוֹרִילָה",
    icon: "🦍",
    isKosher: false,
    family: "יונקים",
    explanation: "לגורילה חסרים סימני כשרות. הפרימטים אינם כשרים."
  },
  {
    name: "שִׁימְפַּנְזֶה",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "לשימפנזה, פרימט, אין תכונות כשרות."
  },
  {
    name: "אוֹרַנְג-אוּטַן",
    icon: "🦧",
    isKosher: false,
    family: "יונקים",
    explanation: "לאורנג-אוטן, פרימט, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "מַנְדְּרִיל",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "למנדריל, פרימט, אין תכונות כשרות."
  },
  {
    name: "קוֹף הַקַּדְמָה",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "לקוף הקדמה אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "גִּיבּוֹן",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "לגיבון, פרימט, אין תכונות כשרות."
  },
  {
    name: "לֵמוּר",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "ללמור, פרימט, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "לוֹרִיס",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "ללוריס, פרימט, אין תכונות כשרות."
  },
  {
    name: "טַרְסִיר",
    icon: "🐒",
    isKosher: false,
    family: "יונקים",
    explanation: "לטרסיר, פרימט, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "פִּיל",
    icon: "🐘",
    isKosher: false,
    family: "יונקים",
    explanation: "לפיל אין פרסות שסועות ואינו מעלה גרה כנדרש."
  },
  {
    name: "קַרְנָף",
    icon: "🦏",
    isKosher: false,
    family: "יונקים",
    explanation: "לקרנף אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "הִיפּוֹפּוֹטָם",
    icon: "🦛",
    isKosher: false,
    family: "יונקים",
    explanation: "להיפופוטם אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "טַפִּיר",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לטפיר, פרסה בעל אצבעות מספר לא-זוגי, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "טַפִּיר בֵּירְד",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לטפיר בירד, כמו לכל הטפירים, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "אוֹקַפִּי",
    icon: "🦒",
    isKosher: false,
    family: "יונקים",
    explanation: "מעמד האוקפי שנוי במחלוקת. הוא מעלה גרה אך מבנה פרסותיו אינו ברור."
  },
  {
    name: "קֶנְגּוּרוּ",
    icon: "🦘",
    isKosher: false,
    family: "יונקים",
    explanation: "לקנגורו אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "קוֹאָלָה",
    icon: "🐨",
    isKosher: false,
    family: "יונקים",
    explanation: "לקואלה אין פרסות שסועות ואינה גרה. היא אינה כשרה."
  },
  {
    name: "וָואלָבִּי",
    icon: "🦘",
    isKosher: false,
    family: "יונקים",
    explanation: "לוואלאבי, יחמורון, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "קְוואוֹקָה",
    icon: "🦘",
    isKosher: false,
    family: "יונקים",
    explanation: "לקוואוקה אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "וּוֹמְבָּט",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לוומבט אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "אוֹפּוֹסוּם",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לאופוסום, כיסאי, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "שֵׁד טַסְמָנִי",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "השד הטסמני הוא כיסאי טורף ללא תכונות כשרות."
  },
  {
    name: "בַּרְבְּזָן",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לברבזן, בעל-חיים מקור-ברווז, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "אֶכִידְנָה",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לאכידנה, בעל-חיים קוצני מטיל ביצים, אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "עַצְלָן",
    icon: "🦥",
    isKosher: false,
    family: "יונקים",
    explanation: "לעצלן אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "רַקוּן",
    icon: "🦝",
    isKosher: false,
    family: "יונקים",
    explanation: "לרקון, אוכל-כול, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "בוֹאַשׁ",
    icon: "🦨",
    isKosher: false,
    family: "יונקים",
    explanation: "לבואש חסרים סימני כשרות."
  },
  {
    name: "קִיפּוֹד",
    icon: "🦔",
    isKosher: false,
    family: "יונקים",
    explanation: "לקיפוד אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "דּוּרְבָּן",
    icon: "🦔",
    isKosher: false,
    family: "יונקים",
    explanation: "לדורבן, מכרסם, אין תכונות כשרות."
  },
  {
    name: "עֲטַלֵּף",
    icon: "🦇",
    isKosher: false,
    family: "יונקים",
    explanation: "העטלף מוזכר מפורשות כאסור בתורה (ויקרא יא:יט)."
  },
  {
    name: "שֶׁנָּבּוּב",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לשנבוב אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "נַמְלָאֵכֶל",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לנמלאכל אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "שִׁרְיוֹנִי",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לשריוני אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "פַּנְגּוֹלִין",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לפנגולין, מכוסה קשקשים, אין פרסות שסועות ואינו מעלה גרה. הוא אינו כשר."
  },
  {
    name: "חֲפַרְפֶּרֶת",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לחפרפרת אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "חֻלְדָּה",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "החולדה מוזכרת בין שרצי האדמה האסורים."
  },
  {
    name: "טֶנְרֶק",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לטנרק אין תכונות כשרות."
  },
  {
    name: "דֶּסְמָן",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לדסמן, יצור דמוי-חפרפרת ימי, אין תכונות כשרות."
  },
  {
    name: "סְנָאִי",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לסנאי, מכרסם, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "עַכְבָּר",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "העכבר הוא שרץ האסור מפורשות בתורה (ויקרא יא:כט)."
  },
  {
    name: "חוּלְדָּה",
    icon: "🐀",
    isKosher: false,
    family: "יונקים",
    explanation: "החולדה היא שרץ האסור על פי דיני הכשרות."
  },
  {
    name: "אוֹגֵר",
    icon: "🐹",
    isKosher: false,
    family: "יונקים",
    explanation: "לאוגר, מכרסם, אין תכונות כשרות."
  },
  {
    name: "שַׁפְּנִינָה",
    icon: "🐹",
    isKosher: false,
    family: "יונקים",
    explanation: "לשפנינה, מכרסם, אין עמידה בדרישות הכשרות."
  },
  {
    name: "בּוֹבֶר",
    icon: "🦫",
    isKosher: false,
    family: "יונקים",
    explanation: "לבובר, מכרסם, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "קָפִּיבָּרָה",
    icon: "🐾",
    isKosher: false,
    family: "יונקים",
    explanation: "לקפיברה, המכרסם הגדול בעולם, אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "נוּטְרִיָּה",
    icon: "🦫",
    isKosher: false,
    family: "יונקים",
    explanation: "לנוטריה, מכרסם גדול, אין תכונות כשרות."
  },
  {
    name: "מַרְמוֹטָה",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "למרמוטה, סנאי אדמה גדול, אין פרסות שסועות ואינה מעלה גרה. היא אינה כשרה."
  },
  {
    name: "כֶּלֶב עֲרָבוֹת",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לכלב הערבות, מכרסם, אין תכונות כשרות."
  },
  {
    name: "חֲזִיר אֲדָמָה",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לחזיר האדמה, מכרסם, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "גוֹפֵר",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לגופר, מכרסם חופר, אין תכונות כשרות."
  },
  {
    name: "עַכְבָּר שָׂדֶה",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "לעכבר השדה, מכרסם קטן, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "לֶמִינְג",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "ללמינג, מכרסם קטן, אין תכונות כשרות."
  },
  {
    name: "גֶּרְבִּיל",
    icon: "🐹",
    isKosher: false,
    family: "יונקים",
    explanation: "לגרביל, מכרסם, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "צִ'ינְצִ'ִילָה",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "לצ'ינצ'ילה, מכרסם, אין תכונות כשרות."
  },
  {
    name: "דֶּגּוּ",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "לדגו, מכרסם דרום-אמריקאי, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "אַרְנָב-קְפִיצָה",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לארנב-הקפיצה, מכרסם, חסרות לו תכונות כשרות."
  },
  {
    name: "יֶרְבּוֹאַ",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "לירבוא, מכרסם מדברי קופץ, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "סְנָאִי מְעוֹפֵף",
    icon: "🐿️",
    isKosher: false,
    family: "יונקים",
    explanation: "לסנאי המעופף, מכרסם, אין תכונות כשרות."
  },
  {
    name: "עַכְבָּר חֲפַרְפֶּרֶת עֵירֹם",
    icon: "🐭",
    isKosher: false,
    family: "יונקים",
    explanation: "לעכבר החפרפרת העירום, מכרסם, אין פרסות שסועות ואינו מעלה גרה."
  },
  {
    name: "לְוִיָּתָן",
    icon: "🐋",
    isKosher: false,
    family: "יונקים",
    explanation: "הלוויתן הוא יונק ללא סנפירים וקשקשים. יונקים ימיים אינם כשרים."
  },
  {
    name: "דּוֹלְפִין",
    icon: "🐬",
    isKosher: false,
    family: "יונקים",
    explanation: "הדולפין הוא יונק ימי חסר סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "כֶּלֶב יָם",
    icon: "🦭",
    isKosher: false,
    family: "יונקים",
    explanation: "כלב הים הוא יונק ימי ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "אֲרִי יָם",
    icon: "🦭",
    isKosher: false,
    family: "יונקים",
    explanation: "ארי הים הוא יונק ימי ללא תכונות כשרות."
  },
  {
    name: "וָּוָלְרוּס",
    icon: "🦭",
    isKosher: false,
    family: "יונקים",
    explanation: "לוולרוס, יונק ימי, אין סנפירים וקשקשים."
  },
  {
    name: "פָּרַת יָם",
    icon: "🦭",
    isKosher: false,
    family: "יונקים",
    explanation: "פרת הים היא יונק ימי ללא תכונות כשרות."
  },

  // ══════════════════════════════════════════════════════════════════
  // עופות
  // ══════════════════════════════════════════════════════════════════

  // --- עופות כשרים ---
  {
    name: "תַּרְנְגֹל",
    icon: "🐔",
    isKosher: true,
    family: "עופות",
    explanation: "התרנגול הוא אחד מעופות הכשרות המסורתיים. הוא אינו דורס ויש לשוחטו כהלכה."
  },
  {
    name: "תַּרְנְגוֹל הוֹדּוּ",
    icon: "🦃",
    isKosher: true,
    family: "עופות",
    explanation: "תרנגול ההודו מקובל כשר ברוב הקהילות. הוא התקבל על פי מסורת."
  },
  {
    name: "בַּרְוָוז",
    icon: "🦆",
    isKosher: true,
    family: "עופות",
    explanation: "הברווז הוא עוף כשר על פי המסורת היהודית. יש לשוחטו ולהסיר ממנו חלקים מסוימים."
  },
  {
    name: "בַּרְוָוז מוּסְקוֹבִי",
    icon: "🦆",
    isKosher: true,
    family: "עופות",
    explanation: "הברווז המוסקובי מקובל כשר ברוב הקהילות שיש להן מסורת אכילתו."
  },
  {
    name: "אַוָּז",
    icon: "🪿",
    isKosher: true,
    family: "עופות",
    explanation: "האווז הוא עוף כשר. שומן האווז (שמאלץ) שימש מסורתית בבישול האשכנזי."
  },
  {
    name: "יוֹנָה",
    icon: "🕊️",
    isKosher: true,
    family: "עופות",
    explanation: "היונה היא עוף כשר בעל היסטוריה ארוכה במסורת היהודית. יונות הוקרבו קרבנות בבית המקדש."
  },
  {
    name: "יוֹנַת עִיר",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "יונת העיר היא עוף כשר, קרובה ליונה. גם היא הוקרבה קרבנות."
  },
  {
    name: "שְׂלָו",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "השלו הוא עוף כשר המוזכר בתורה כמזון שניתן לבני ישראל במדבר (במדבר יא:לא-לב)."
  },
  {
    name: "פַּסְיוֹן",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הפסיון נחשב כשר על פי רוב הפוסקים, שכן אינו דורס ויש לו מאפיינים של עופות מקובלים."
  },
  {
    name: "תַּרְנְגֹל הוֹדּוּ גִינֵאִי",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "תרנגול גינאה מקובל כשר בקהילות שיש להן מסורת אכילתו. הוא דומה לתרנגול."
  },
  {
    name: "חָגְלָה",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "החגלה נחשבת כשרה בקהילות בעלות מסורת מבוססת. היא ציפור קרקע כמו השלו."
  },
  {
    name: "פְּרַנְקוֹלִין",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הפרנקולין הוא ציפור קרקע קרובה לחגלה. קהילות שיש להן מסורת אכילתו רואות בו כשר."
  },
  {
    name: "קוֹרֵא",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הקורא הוא ציפור קרקע קרובה לפסיון. הוא נחשב כשר בקהילות רבות."
  },
  {
    name: "קוֹרֵא שָׁחֹר",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הקורא השחור הוא ציפור ציד הקרובה לקורא הכשר."
  },
  {
    name: "קוֹרֵא אֱגוֹזִים",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "קורא האגוזים, ציפור ציד אירופית קטנה, נחשב כשר בקהילות בעלות מסורת."
  },
  {
    name: "קוֹרֵא אַלְפִּינִי",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הקורא האלפיני חולק מאפיינים עם ציפורי ציד כשרות אחרות."
  },
  {
    name: "תַּרְנְגֹלֶת קוֹרְנִיש",
    icon: "🐔",
    isKosher: true,
    family: "עופות",
    explanation: "תרנגולת קורניש היא זן של תרנגולת וכשרה לחלוטין כשנשחטת כהלכה."
  },
  {
    name: "תַּרְנְגוֹל סָרִיס",
    icon: "🐔",
    isKosher: true,
    family: "עופות",
    explanation: "תרנגול הסריס הוא תרנגול מסורס וכשר כשאר התרנגולים כשנשחט כהלכה."
  },
  {
    name: "תַּרְנְגוֹל בַּר",
    icon: "🐔",
    isKosher: true,
    family: "עופות",
    explanation: "תרנגול הבר הוא אביהם הפראי של התרנגולים הביתיים. הוא כשר כמו התרנגול."
  },
  {
    name: "טַוָּוסִית",
    icon: "🦚",
    isKosher: true,
    family: "עופות",
    explanation: "הטווסית (נקבת הטווס) נאכלה בחלק מהקהילות שיש להן מסורת. יש פוסקים הרואים בה כשרה."
  },
  {
    name: "בֶּקְתָן",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הבקתן הוא ציפור ביצות. חלק מהפוסקים כוללים אותו בין העופות הכשרים."
  },
  {
    name: "בֶּקְתָן יְעָרוֹת",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "בקתן היערות הוא ציפור ביצות. יש לו מסורת אכילה בחלק מקהילות הספרדים."
  },
  {
    name: "דְּרוֹר",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הדרור הוא ציפור קטנה שאינה דורסת ויש לה מסורת אכילה מבוססת. הוא כשר."
  },
  {
    name: "פִּינְצ'",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הפינץ' הוא ציפור אוכלת-זרעים שאינה דורסת. הוא נחשב כשר בקהילות בעלות מסורת."
  },
  {
    name: "כַּנָּרִית",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הכנרית היא פינץ' קטן שאינו דורס. יש לה סימני עוף טהור."
  },
  {
    name: "רוֹבִּין",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הרובין הוא ציפור קטנה שאינה דורסת ויש לה מאפייני עוף כשר."
  },
  {
    name: "קִיכְלִי",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הקיכלי הוא ציפור שאינה דורסת ואינה מופיעה ברשימת האסורים בתורה."
  },
  {
    name: "שַׁחְרוּר",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "השחרור הוא ציפור שאינה דורסת ואינה מופיעה ברשימת האסורים. רבים רואים בו כשר."
  },
  {
    name: "סְנוּנִית",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הסנונית היא ציפור קטנה אוכלת-חרקים שאינה מופיעה ברשימת האסורים. חלק מהפוסקים מתירים אותה."
  },
  {
    name: "סִיס",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הסיס הוא ציפור אווירית שאינה נמנית עם המינים האסורים."
  },
  {
    name: "עֵין-שֶׁמֶשׁ",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "עין-השמש היא ציפור קטנה שאינה דורסת ואינה מופיעה ברשימת האסורים."
  },
  {
    name: "זַרְזִיר",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הזרזיר אינו בין העופות האסורים ויש לו סימני עוף כשר."
  },
  {
    name: "עַפְרוֹנִי",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "העפרוני הוא ציפור קטנה שאינה דורסת ויש לה מסורת אכילה בחלק מהקהילות."
  },
  {
    name: "גָּבְתוֹן",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הגבתון הוא ציפור אוכלת-זרעים הדומה לדרור. הוא נחשב כשר."
  },
  {
    name: "פַּשׁוֹשׁ",
    icon: "🐦",
    isKosher: true,
    family: "עופות",
    explanation: "הפשוש הוא ציפור קטנה אוכלת-חרקים שאינה מופיעה ברשימת האסורים."
  },

  // --- עופות לא כשרים ---
  {
    name: "נֶשֶׁר",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הנשר הוא עוף דורס המוזכר מפורשות כאסור בתורה (ויקרא יא:יג)."
  },
  {
    name: "גַּס",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הגס הוא עוף דורס האסור על פי דיני הכשרות."
  },
  {
    name: "בַּז",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הבז הוא עוף דורס ואינו כשר."
  },
  {
    name: "שַׁחַף נַדְדָן",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "השחף הנדדן הוא עוף דורס ואינו כשר."
  },
  {
    name: "בַּז גָּדוֹל",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הבז הגדול הוא הגדול שבבזזים, דורס, ואינו כשר."
  },
  {
    name: "בָּז אָדֹם",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "בז אדום הוא עוף דורס קטן ואינו כשר."
  },
  {
    name: "מֶרְלִין",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "המרלין הוא בז קטן ודורס. הוא אינו כשר."
  },
  {
    name: "בָּז חוֹבֵב",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הבז החובב הוא עוף דורס ואינו כשר."
  },
  {
    name: "עֵיט דַּיָּג",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "עיט הדייג הוא עוף דורס אוכל-דגים הנמנה עם האסורים."
  },
  {
    name: "דַּיָּה",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הדיה היא עוף דורסת המוזכרת ברשימת האסורים בתורה (ויקרא יא:יד)."
  },
  {
    name: "עֵיטִי",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "העיטי הוא עוף דורס ואינו כשר."
  },
  {
    name: "גּוֹזְנִיָּה",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הגוזניה היא עיט גדולה ודורסת. היא אינה כשרה."
  },
  {
    name: "בַּז דְּרוֹרִים",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "בז הדרורים הוא עוף דורס קטן ואינו כשר."
  },
  {
    name: "עֻזְנִיָּה",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "העוזניה היא עוף דורס ואינה כשרה."
  },
  {
    name: "צִיפּוֹר הַמַּזְכִּיר",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "ציפור המזכיר היא עוף דורסת ללא מסורת כשרות."
  },
  {
    name: "נֶשֶׁר נְבֵלוֹת",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "נשר הנבלות הוא עוף אוכל-פגרים. הוא אסור."
  },
  {
    name: "קוֹנְדוֹר",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הקונדור הוא נשר העולם החדש, אוכל-נבלות. הוא אינו כשר."
  },
  {
    name: "נֶשֶׁר זָקָן",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הנשר הזקן (עיט הזקן) מוזכר ברשימת האסורים בויקרא יא:יג."
  },
  {
    name: "פְּרָעוֹשׁ",
    icon: "🦅",
    isKosher: false,
    family: "עופות",
    explanation: "הפרעוש הוא עוף אוכל-נבלות הנמנה עם האסורים."
  },
  {
    name: "יַנְשׁוּף",
    icon: "🦉",
    isKosher: false,
    family: "עופות",
    explanation: "היַנשוף הוא עוף דורס המוזכר בתורה כאסור (ויקרא יא:טז-יז)."
  },
  {
    name: "סַכְסוּכִיָּה",
    icon: "🦉",
    isKosher: false,
    family: "עופות",
    explanation: "הסכסוכיה היא ציפור לילה המוזכרת ברשימות עופות אסורים."
  },
  {
    name: "פֶּה-צְפַרְדֵּעַ",
    icon: "🦉",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור פה-הצפרדע אין מסורת כשרות."
  },
  {
    name: "פּוֹטוֹ",
    icon: "🦉",
    isKosher: false,
    family: "עופות",
    explanation: "הפוטו הוא ציפור לילית מדרום-אמריקה ללא מסורת כשרות."
  },
  {
    name: "נֵץ לַיְלָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "נץ הלילה נמנה בחלק מהמסורות עם העופות האסורים."
  },
  {
    name: "עוֹרֵב",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "העורב מוזכר מפורשות כאסור בויקרא יא:טו."
  },
  {
    name: "עוֹרֵב שָׁחֹר",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "העורב השחור הוא עוף אסור. העורב מוזכר מפורשות כלא-כשר."
  },
  {
    name: "עַקְעָק",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "העקעק הוא ציפור ממשפחת העורבים ואינה כשרה."
  },
  {
    name: "קַאיָּה",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "הקאיה היא ציפור ממשפחת העורבים ואינה כשרה."
  },
  {
    name: "קָאק",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "הקאק הוא ממשפחת העורבים. כמו העורב, אינו כשר."
  },
  {
    name: "קָאי אָדוֹם-רַגְלַיִם",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "עופות",
    explanation: "הקאי אדום-הרגליים הוא ממשפחת העורבים ואינו כשר."
  },
  {
    name: "עוֹרֵב כָּחֹל",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "העורב הכחול הוא ממשפחת העורבים ונחשב לא-כשר."
  },
  {
    name: "שׁוֹבֵר אֱגוֹזִים",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "שובר האגוזים הוא ממשפחת העורבים ואינו כשר."
  },
  {
    name: "שׁוֹבֵר אֱגוֹזִים קְלַרְק",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "שובר האגוזים של קלארק הוא ממשפחת העורבים ואינו כשר."
  },
  {
    name: "חֲסִידָה",
    icon: "🦩",
    isKosher: false,
    family: "עופות",
    explanation: "החסידה מוזכרת כאסורה בתורה (ויקרא יא:יט)."
  },
  {
    name: "אֲנָפָה",
    icon: "🦢",
    isKosher: false,
    family: "עופות",
    explanation: "האנפה נמנית עם העופות האסורים בויקרא."
  },
  {
    name: "פְּלָמִינְגוֹ",
    icon: "🦩",
    isKosher: false,
    family: "עופות",
    explanation: "לפלמינגו אין מסורת כשרות מבוססת ואינו נאכל."
  },
  {
    name: "בַּרְבּוּר",
    icon: "🦢",
    isKosher: false,
    family: "עופות",
    explanation: "לברבור אין מסורת כשרות מבוססת והוא נחשב בדרך-כלל אסור."
  },
  {
    name: "שָׁלָךְ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "השלך נמנה עם העופות האסורים בתורה."
  },
  {
    name: "קוֹרְמוֹרָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "הקורמורן נמנה עם העופות האסורים בויקרא יא:יז."
  },
  {
    name: "אַנְהִינְגָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לאנהינגה, ציפורת מים, אין מסורת כשרות מבוססת."
  },
  {
    name: "דַּרְטֵר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "הדרטר הוא ציפורת מים קרובה לאנהינגה ללא מסורת כשרות."
  },
  {
    name: "אִיבִּיס",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לאיביס אין מסורת כשרות מבוססת ואינו נאכל בקהילות יהודיות."
  },
  {
    name: "כַּפֶּה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לכפה, ציפור ביצות, אין מסורת כשרות."
  },
  {
    name: "מַקּוֹר-נַעַל",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "למקור-הנעל, ציפור דורסת גדולה, אין מסורת כשרות."
  },
  {
    name: "הַמֶּרְקוֹפּ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "להמרקופ, ציפורת מים אפריקאית, אין מסורת כשרות."
  },
  {
    name: "עָגוּר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לעגור אין מסורת כשרות ואינו נאכל."
  },
  {
    name: "שַׁנַּאי",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשנאי, ציפורת מים, אין מסורת כשרות מבוססת."
  },
  {
    name: "בִּרְכִיָּה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לברכיה, ציפורת מים, אין מסורת כשרות מבוססת."
  },
  {
    name: "זְחָלָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לזחלן, ציפורת מים, אין מסורת כשרות מבוססת."
  },
  {
    name: "שַׁחְלַת שֶׁמֶשׁ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשחלת השמש אין מסורת כשרות."
  },
  {
    name: "שֶׁמֶשׁ-חָגְלָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשמש-החגלה הטרופית אין מסורת כשרות."
  },
  {
    name: "לִימְפְּקִין",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "ללימפקין, ציפור ביצות, אין מסורת כשרות."
  },
  {
    name: "בּוּסְטַרְד",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לבוסטרד אין מסורת כשרות."
  },
  {
    name: "תּוֹקֵעַ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לתוקע, ציפור מדרום-אמריקה, אין מסורת כשרות."
  },
  {
    name: "קִיבִּית",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לקיבית, ציפורת חוף, אין מסורת כשרות מבוססת."
  },
  {
    name: "חֲדָרִית",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לחדרית אין מסורת כשרות מבוססת."
  },
  {
    name: "חוֹפִית",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לחופית, ציפורת חוף, אין מסורת כשרות מבוססת."
  },
  {
    name: "בַּר-קִיּוּ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לבר-קיו, ציפור ביצות גדולה, אין מסורת כשרות מבוססת."
  },
  {
    name: "חֲסִידַת יָם",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לחסידת הים אין מסורת כשרות מבוססת."
  },
  {
    name: "הוֹפֵךְ-אֶבֶן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "להופך-האבן אין מסורת כשרות."
  },
  {
    name: "פַּיִם",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לפַיִם אין מסורת כשרות."
  },
  {
    name: "קַנָּרִית מַיִם",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לקנרית המים אין מסורת כשרות."
  },
  {
    name: "קַדְרוֹן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לקדרון אין מסורת כשרות."
  },
  {
    name: "מַצְדֵּף",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "למצדף, הניזון מרכיכות, אין מסורת כשרות."
  },
  {
    name: "שַׁחַף",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשחף, ציפור ים אוכלת-כול, אין מסורת כשרות."
  },
  {
    name: "אַלְבָּטְרוֹס",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לאלבטרוס אין מסורת כשרות. הוא ציפור ים שאינה נאכלת בקהילות יהודיות."
  },
  {
    name: "גָּנֶט",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לגנט, ציפורת ים, אין מסורת כשרות."
  },
  {
    name: "בּוּבִּי",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לבובי, ציפורת ים, אין מסורת כשרות."
  },
  {
    name: "פְּרִיגָטָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור הפריגטה, הגונבת מזון, אין מסורת כשרות."
  },
  {
    name: "צִיפּוֹר טְרוֹפִּית",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור הטרופית אין מסורת כשרות."
  },
  {
    name: "שׁוֹמֵט",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "השומט הוא ציפורת ים דורסת-גנבת. הוא אינו כשר."
  },
  {
    name: "שְׁחָפִית",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשחפית אין מסורת כשרות מבוססת."
  },
  {
    name: "צִיפּוֹר-תּוּכִי יָם",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור-תוכי הים אין מסורת כשרות."
  },
  {
    name: "אָאוּק",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לאאוק, ציפורת ים, אין מסורת כשרות."
  },
  {
    name: "גִּ'ילְמוֹט",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לג'ילמוט אין מסורת כשרות."
  },
  {
    name: "גִּילָאוֹר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לגילאור אין מסורת כשרות."
  },
  {
    name: "מוּר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "למור, ציפורת ים, אין מסורת כשרות."
  },
  {
    name: "פֶּטְרֵל",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לפטרל, ציפורת אוקיינוס, אין מסורת כשרות."
  },
  {
    name: "גּוֹזִיָּה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לגוזיה, ציפורת אוקיינוס, אין מסורת כשרות."
  },
  {
    name: "סוּפַת יָם",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לסופת-הים, ציפורת ים זעירה, אין מסורת כשרות."
  },
  {
    name: "פֶּטְרֵל צְלִילָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לפטרל הצלילה אין מסורת כשרות."
  },
  {
    name: "שַׁקְנָאי",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשקנאי, ציפורת מים צוללת, אין מסורת כשרות."
  },
  {
    name: "שְׁלוּלָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשלולן, ציפורת מים צוללת, אין מסורת כשרות."
  },
  {
    name: "יַעֲנָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "היענה מוזכרת מפורשות כאסורה בתורה (ויקרא יא:טז)."
  },
  {
    name: "אֵמוּ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "האמו, כמו היענה, הוא ציפור ענקית נטולת-טיסה ללא מסורת כשרות."
  },
  {
    name: "קַסּוּוָר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לקסוואר, ציפור ענקית נטולת-טיסה, אין מסורת כשרות."
  },
  {
    name: "רֵיאָה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לריאה, ציפור ענקית מדרום-אמריקה, אין מסורת כשרות."
  },
  {
    name: "קִיוִּי",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לקיווי, ציפור קטנה נטולת-טיסה מניו-זילנד, אין מסורת כשרות."
  },
  {
    name: "פִּינְגְּוִין",
    icon: "🐧",
    isKosher: false,
    family: "עופות",
    explanation: "לפינגווין אין מסורת כשרות מבוססת ואינו נחשב כשר."
  },
  {
    name: "תּוּכִּי",
    icon: "🦜",
    isKosher: false,
    family: "עופות",
    explanation: "לתוכי אין מסורת כשרות. הוא אינו נאכל בקהילות יהודיות."
  },
  {
    name: "טַוָּוס",
    icon: "🦚",
    isKosher: false,
    family: "עופות",
    explanation: "לטווס אין מסורת כשרות ברורה ובדרך-כלל נמנעים ממנו."
  },
  {
    name: "טוּקָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לטוקן אין מסורת כשרות מבוססת."
  },
  {
    name: "דּוּכִיפַת",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "הדוכיפת, ציפור המדינה של ישראל, אין לה מסורת כשרות ואינה נאכלת."
  },
  {
    name: "שַׁלְדָּג",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשלדג, ציפור אוכלת-דגים, אין מסורת כשרות."
  },
  {
    name: "שַׂרְקְרָק",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לשרקרק אין מסורת כשרות."
  },
  {
    name: "סָנֵה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לסנה, ציפור צבעונית, אין מסורת כשרות מבוססת."
  },
  {
    name: "קוּקִיָּה",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "הקוקיה נמנית עם העופות האסורים בחלק מהפרשנויות לויקרא יא."
  },
  {
    name: "רַץ-כְּבִישׁ",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לרץ-הכביש, קרוב הקוקיה, אין מסורת כשרות. הוא דורסני."
  },
  {
    name: "נַקָּר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "הנקר אינו בין העופות הכשרים המסורתיים ואין לו מסורת אכילה."
  },
  {
    name: "לֵיצָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "ללצן אין מסורת כשרות ואינו נאכל."
  },
  {
    name: "צִיפּוֹר-חָתוּל",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור-החתול אין מסורת כשרות."
  },
  {
    name: "תַּרְשָׁר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לתרשר אין מסורת כשרות."
  },
  {
    name: "צִיפּוֹר-כִּינּוֹר",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור-הכינור האוסטרלית אין מסורת כשרות."
  },
  {
    name: "צִיפּוֹר-גַּן-עֵדֶן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור-גן-העדן אין מסורת כשרות."
  },
  {
    name: "צִיפּוֹר-בֵּיתָן",
    icon: "🐦",
    isKosher: false,
    family: "עופות",
    explanation: "לציפור-הביתן האוסטרלית אין מסורת כשרות."
  },

  // ══════════════════════════════════════════════════════════════════
  // זוחלים
  // ══════════════════════════════════════════════════════════════════

  // --- זוחלים ודו-חיים לא כשרים ---
  {
    name: "נָחָשׁ",
    icon: "🐍",
    isKosher: false,
    family: "זוחלים",
    explanation: "הנחש הוא שרץ האסור על פי דיני הכשרות."
  },
  {
    name: "נְחַשׁ יָם",
    icon: "🐍",
    isKosher: false,
    family: "זוחלים",
    explanation: "נחש הים הוא זוחל ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "לְטָאָה",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "הלטאה היא שרץ האסורה בתורה (ויקרא יא:כט-ל)."
  },
  {
    name: "גֶּקוֹ",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "הגקו הוא לטאה ואסור כשרץ."
  },
  {
    name: "אִיגוָּאנָה",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "האיגואנה היא זוחל ואינה כשרה."
  },
  {
    name: "זִיקִית",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "הזיקית היא לטאה המוזכרת מפורשות כאסורה בויקרא."
  },
  {
    name: "תַּנִּין",
    icon: "🐊",
    isKosher: false,
    family: "זוחלים",
    explanation: "התנין הוא זוחל ללא תכונות כשרות."
  },
  {
    name: "אַלִּיגָטוֹר",
    icon: "🐊",
    isKosher: false,
    family: "זוחלים",
    explanation: "האליגטור הוא זוחל ואינו כשר."
  },
  {
    name: "צָב",
    icon: "🐢",
    isKosher: false,
    family: "זוחלים",
    explanation: "הצב הוא זוחל ללא תכונות כשרות."
  },
  {
    name: "צָב יַבָּשָׁה",
    icon: "🐢",
    isKosher: false,
    family: "זוחלים",
    explanation: "צב היבשה הוא זוחל ואינו כשר."
  },
  {
    name: "צָב יָם",
    icon: "🐢",
    isKosher: false,
    family: "זוחלים",
    explanation: "צב הים הוא זוחל ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַלָּמַנְדְּרָה",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "הסלמנדרה היא דו-חי ואינה כשרה."
  },
  {
    name: "טְרִיטוֹן",
    icon: "🦎",
    isKosher: false,
    family: "זוחלים",
    explanation: "הטריטון הוא דו-חי ואינו כשר."
  },
  {
    name: "צְפַרְדֵּעַ",
    icon: "🐸",
    isKosher: false,
    family: "זוחלים",
    explanation: "הצפרדע היא שרץ האסורה מפורשות בתורה (ויקרא יא:כט-ל)."
  },
  {
    name: "קַרְפַּדָּה",
    icon: "🐸",
    isKosher: false,
    family: "זוחלים",
    explanation: "הקרפדה היא דו-חי ואינה כשרה."
  },

  // ══════════════════════════════════════════════════════════════════
  // דגים
  // ══════════════════════════════════════════════════════════════════

  // --- דגים כשרים ---
  {
    name: "סַלְמוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון סנפירים וקשקשים – שני התנאים לדג כשר (ויקרא יא:ט). דגים אינם טעונים שחיטה."
  },
  {
    name: "סַלְמוֹן אַטְלַנְטִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון האטלנטי סנפירים וקשקשים. הוא אחד מהדגים הכשרים הפופולריים ביותר."
  },
  {
    name: "סַלְמוֹן צִ'ינוּק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון הצ'ינוק (המלך) סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סַלְמוֹן סוֹקַאיי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון הסוקאיי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סַלְמוֹן קוֹהוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון הקוהו סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סַלְמוֹן וָרֹד",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון הוורוד סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סַלְמוֹן צ'אם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסלמון הצ'אם סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פוֹרֵל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורל סנפירים וקשקשים גלויים בבירור, מה שהופך אותו לכשר בלי ספק."
  },
  {
    name: "פוֹרֵל קֶשֶׁת",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורל הקשת סנפירים וקשקשים. הוא דג כשר פופולרי מאוד."
  },
  {
    name: "פוֹרֵל חוּם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורל החום סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פוֹרֵל נְחָלִים",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורל הנחלים סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פוֹרֵל אֲגָם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורל האגם סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "שָׁרִידָן אַרְקְטִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לשרידן הארקטי סנפירים וקשקשים. הוא דג כשר ממשפחת הסלמונים."
  },
  {
    name: "גְּרֵיְלִינְג",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לגריילינג, סלמוניד, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טַיְמֶן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטיימן, סלמוניד גדול, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "הוּכֶן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "להוכן, סלמון הדנובה, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "לֶנוֹק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללנוק, סלמוניד אסייתי, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "וֶנְדָּץ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לוונדץ, סלמוניד מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סִיסְקוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסיסקו, רינגת אגם, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אִינְקוֹנוּ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאינקונו, סלמוניד גדול, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טוּנָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטונה סנפירים וקשקשים. הקשקשים קטנים אך קיימים."
  },
  {
    name: "טוּנָה צְהוּבַת סְנַפִּיר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטונה צהובת הסנפיר סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "טוּנָה כְּחוּלַת סְנַפִּיר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטונה כחולת הסנפיר סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "טוּנָה עֵינַיִם גְּדוֹלוֹת",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטונה עיניים-גדולה סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "אָהִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאהי, טונה ביגאיי ויֶלוֹפִין, סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "אַלְבָּקוֹר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאלבקור, טונה לבנה, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סְקִיפְּג'ַק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסקיפג'ק, טונה, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "בּוֹנִיטוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבוניטו סנפירים וקשקשים. הוא כשר וקרוב לטונה."
  },
  {
    name: "מַקְרֵל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למקרל סנפירים וקשקשים קטנים מאוד שדיים לסטטוס כשרות."
  },
  {
    name: "מֶלֶך-דָּגִים",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למלך-הדגים, מקרל המלך, סנפירים וקשקשים. הוא דג כשר."
  },
  {
    name: "וָּואהוּ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לוואהו סנפירים וקשקשים. דג שחייה מהיר זה כשר."
  },
  {
    name: "אוֹנוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאונו, ווהו, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "קַרְפְּיוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקרפיון סנפירים וקשקשים ברורים. הוא הדג המסורתי לגפילטע-פיש האשכנזית."
  },
  {
    name: "רִינְגָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרינגה סנפירים וקשקשים. רינגה כבושה היא מאכל מסורתי אהוב, במיוחד בשבת."
  },
  {
    name: "רִינְגָה פָּסִיפִית",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרינגה הפסיפית סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "רִינְגָה עֲגֻלָּה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרינגה העגולה סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "סַרְדִּין",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסרדין סנפירים וקשקשים. סרדינים בפחית הם חלבון כשר נוח."
  },
  {
    name: "סַרְדִּין אֵירוֹפִּי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסרדין האירופי (פילצ'רד) סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סְפְּרָט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לספרט סנפירים וקשקשים. הוא כשר ונמכר לרוב בפחיות כמו סרדינים."
  },
  {
    name: "אַנְשׁוֹבִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאנשובי סנפירים וקשקשים. הוא כשר אם כי מוצא לרוב בהכנות שאינן כשרות."
  },
  {
    name: "סְמֶלְט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסמלט סנפירים וקשקשים. דגים קטנים אלה כשרים."
  },
  {
    name: "קָפֶלִין",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקפלין, דג קטן דמוי-סמלט, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אוֹלָאכוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאולאכון, דג נר, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "עֲלוּוִיף",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לעלוויף, דג דמוי-רינגה, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "שַׁד",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לשד סנפירים וקשקשים. שד אמריקאי הוא דג כשר בעל מסורת אכילה."
  },
  {
    name: "מֶנְהָדֶן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למנהדן סנפירים וקשקשים. הוא כשר אם כי נאכל לעתים נדירות ישירות."
  },
  {
    name: "בַּקָּלָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבקלה סנפירים וקשקשים. הוא דג כשר פופולרי בהכנות רבות."
  },
  {
    name: "בַּקָּלָה אַטְלַנְטִית",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבקלה האטלנטית סנפירים וקשקשים. הוא דג כשר קלאסי."
  },
  {
    name: "בַּקָּלָה פָּסִיפִית",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבקלה הפסיפית סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "הַדּוֹק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "להדוק סנפירים וקשקשים. קרוב-משפחה זה של הבקלה כשר."
  },
  {
    name: "פּוֹלוֹק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפולוק סנפירים וקשקשים. הוא משמש לרוב במוצרי דגים מעובדים."
  },
  {
    name: "מַרְלוּזָה לְבָנָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למרלוזה הלבנה סנפירים וקשקשים. היא כשרה ופופולרית בבישול היהודי המסורתי."
  },
  {
    name: "מַרְלוּזָה כְּחֻלָּה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למרלוזה הכחולה סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "מַרְלוּזָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למרלוזה סנפירים וקשקשים. היא דג כשר פופולרי במטבח הספרדי-יהודי."
  },
  {
    name: "מַרְלוּזָה כְּסֻפָּה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למרלוזה הכסופה סנפירים וקשקשים. היא כשרה."
  },
  {
    name: "לִינְג",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללינג, קרוב-משפחה של הבקלה, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "בּוּרְבּוֹט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבורבוט, בקלת מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "הַלִיבּוּט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "להליבוט סנפירים וקשקשים. הוא דג שטוח אך עדיין עומד בתנאי הכשרות."
  },
  {
    name: "הַלִיבּוּט פָּסִיפִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "להליבוט הפסיפי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "הַלִיבּוּט אַטְלַנְטִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "להליבוט האטלנטי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פְּלוּנְדֶּר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפלונדר סנפירים וקשקשים למרות שהוא דג שטוח. הוא כשר."
  },
  {
    name: "פְּלוּנְדֶּר מְכַשֵּׁפָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפלונדר המכשפה, דג שטוח, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פְּלוּנְדֶּר זְנַב צָהֹב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפלונדר זנב הצהוב סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סוֹל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסול סנפירים וקשקשים. דג שטוח זה כשר ואהוב."
  },
  {
    name: "סוֹל דּוֹבֶר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסול דובר סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סוֹל לִימוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסול הלימון, דג שטוח, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סוֹל פָּסִיפִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסול הפסיפי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פְּלַיְיס",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפליאס, דג שטוח, סנפירים וקשקשים. הוא כשר ופופולרי בבישול היהודי האירופי."
  },
  {
    name: "דָּב יָם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדב הים, דג שטוח, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טוּרְבּוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטורבו, דג שטוח, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טִילַפְּיָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטילפיה סנפירים וקשקשים גלויים בבירור. הוא דג כשר פופולרי."
  },
  {
    name: "בַּס",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרוב מיני הבס סנפירים וקשקשים. בס הים ובס הפסים הם זנים כשרים נפוצים."
  },
  {
    name: "אֶפְרָסֶק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאפרסק סנפירים וקשקשים. הוא דג מים-מתוקים כשר."
  },
  {
    name: "אֶפְרָסֶק צָהֹב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאפרסק הצהוב סנפירים וקשקשים. הוא דג מים-מתוקים כשר פופולרי."
  },
  {
    name: "זַנְדֶּר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לזנדר, אמנון נהרות, סנפירים וקשקשים. הוא דג כשר פופולרי באירופה."
  },
  {
    name: "וַּולַאיי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לוולאיי סנפירים וקשקשים. דג מים-מתוקים צפון-אמריקאי זה כשר."
  },
  {
    name: "סוֹגֶר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לסוגר, קרוב-משפחה של הוולאיי, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אֶשׁנָב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאשנב סנפירים וקשקשים. הוא משמש מסורתית לגפילטע-פיש יחד עם הקרפיון."
  },
  {
    name: "לָבְנוּן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללבנון סנפירים וקשקשים. הוא דג כשר קלאסי, מעושן לעתים קרובות."
  },
  {
    name: "רוֹץ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרוץ, דג מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אַדְמַדָּם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאדמדם, דג מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טֶנְץ'",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטנץ', דג מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "חָבוּט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לחבוט, דג מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דָּץ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדץ, דג מים-מתוקים קטן, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "גוּדְג'וֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לגודג'ון, דג מים-מתוקים קטן, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "בַּרְבֵּל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לברבל, דג מים-מתוקים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אַבְרָמִית",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאברמית, דגת מים-מתוקים, סנפירים וקשקשים. היא משמשת לגפילטע-פיש האשכנזית המסורתית."
  },
  {
    name: "קְרַפִּי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקרפי סנפירים וקשקשים. דגים שטוחים אלה כשרים."
  },
  {
    name: "בְּלוּגִיל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבלוגיל, דג שמש, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "מְצִיתָן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למציתן, דג שמש, סנפירים וקשקשים. דגי שמש מים-מתוקים כשרים."
  },
  {
    name: "מַצְלִיף",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למצליף סנפירים וקשקשים. מצליף אדום ומינים אחרים כשרים."
  },
  {
    name: "אוֹפַּקָּפָּקָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאופקפקה, מצליף ורוד הוואי, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "קוֹחֵל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקוחל סנפירים וקשקשים. דג שנית פופולרי זה כשר."
  },
  {
    name: "דֶּנִיס יָם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדניס הים סנפירים וקשקשים. הוא נאכל לרוב במטבח הים-תיכוני היהודי."
  },
  {
    name: "דֶּנִיס יָם אָדֹם",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדניס הים האדום, טאי, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דֶּנִיס",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדניס סנפירים וקשקשים. מינים שונים של דניס כשרים."
  },
  {
    name: "פּוֹרְגִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורגי סנפירים וקשקשים. הוא דג כשר."
  },
  {
    name: "פּוֹרְגִי קָטָן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפורגי הקטן, קרוב הפורגי, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "רֹאשׁ כֶּבֶשׂ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג ראש הכבש סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "תֹּף",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג התוף סנפירים וקשקשים. תוף אדום ותוף שחור כשרים."
  },
  {
    name: "קְרוֹקֵר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקרוקר סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג חָלָשׁ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג החלש, פורל ים, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "סְפּוֹט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לספוט סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "גְּרוּנְט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לגרונט סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "מַהִי-מַהִי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "למהי-מהי, דג דולפין, סנפירים וקשקשים. למרות שמו, הוא דג ולא יונק, וכשר."
  },
  {
    name: "פּוֹמְפָּנוֹ דּוֹלְפִין",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפומפנו הדולפין (לא היונק) סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "אַמְבֵּרְג'ָק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאמברג'ק סנפירים וקשקשים. הוא דג כשר."
  },
  {
    name: "אַמְבֵּרְג'ָק גָּדוֹל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאמברג'ק הגדול סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "גֶ'ק אַלְמָקוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לג'ק האלמקו סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "גֶ'ק קְרֶוָואל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לג'ק הקרוול סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "זָנָב-צָהֹב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לזנב-הצהוב, אמברג'ק יפני, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "רַץ כָּחֹל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לרץ הכחול, hardtail, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "לוּקְדַאוּן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללוקדאון סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פֶּרְמִיט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפרמיט, קרוב הפומפנו, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פּוֹמְפָּנוֹ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפומפנו סנפירים וקשקשים. דג מבוקש זה כשר."
  },
  {
    name: "בְּלוּפִישׁ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבלופיש סנפירים וקשקשים. הוא עומד בשני תנאי הכשרות."
  },
  {
    name: "בַּרָּמוּנְדִּי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לברמונדי סנפירים וקשקשים. דג אוסטרלי זה כשר."
  },
  {
    name: "בַּרָּקוּדָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לברקודה סנפירים וקשקשים. הוא כשר, אם כי פרטים גדולים עשויים להכיל רעלן ציגואטוקסין."
  },
  {
    name: "קַפְּלוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקפלון סנפירים וקשקשים. הוא דג כשר הנמצא במים רבים."
  },
  {
    name: "קַפְּלוֹן פַּסִּים",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקפלון הפסים סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-חֶרֶב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-החרב סנפירים כשצעיר, ועל כן מסורת הספרדים מכשירה אותו. האשכנזים חולקים."
  },
  {
    name: "קוֹבִּיָּה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לקוביה סנפירים וקשקשים קטנים. הוא נחשב כשר."
  },
  {
    name: "אוֹפָּה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לאופה, דג ירח, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "תְּלַת-זָנָב",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג תלת-הזנב סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "טַרְפּוֹן",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לטרפון סנפירים וקשקשים. הוא כשר מן הדין אם כי נאכל לעתים נדירות."
  },
  {
    name: "לֵידִי-פִישׁ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללידי-פיש סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "בּוֹן-פִישׁ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבון-פיש סנפירים וקשקשים. הוא כשר אם כי נאכל לעתים נדירות בשל עצמיותו."
  },
  {
    name: "דַּג-מַחַט",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-המחט סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג מְעוֹפֵף",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג המעופף סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "גַּרְפִישׁ יַמִּי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לגרפיש הימי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-הֶהֶדֶק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-ההדק סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "פַּיְיל-פִישׁ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לפייל-פיש סנפירים וקשקשים קטנים. הוא נחשב כשר."
  },
  {
    name: "לַבְרָק",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "ללברק סנפירים וקשקשים. הוא דג שנית כשר."
  },
  {
    name: "דַּג-תּוּכִּי",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-התוכי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-כִּירוּרְג",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-הכירורג, טנג, סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-מַלְאָךְ",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-המלאך הימי סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-פַּרְפַּר",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-הפרפר סנפירים וקשקשים. הוא דג שנית כשר."
  },
  {
    name: "דָּמוּזֶל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדמוזל סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "דַּג-קַרְדִּינָל",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-הקרדינל סנפירים וקשקשים. הוא כשר."
  },
  {
    name: "בְּנִית",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לבנית סנפירים וקשקשים. היא דגת כשרה."
  },
  {
    name: "דַּג-חֶמְאָה",
    icon: "🐟",
    isKosher: true,
    family: "דגים",
    explanation: "לדג-החמאה סנפירים וקשקשים. הוא דג כשר."
  },

  // --- דגים, סרטנים ויצורי מים לא כשרים ---
  {
    name: "שְׁפַמְנוּן",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לשפמנון אין קשקשים. אם כי יש לו סנפירים, נדרשים גם סנפירים וגם קשקשים."
  },
  {
    name: "צְלוֹפַח",
    icon: "🐍",
    isKosher: false,
    family: "דגים",
    explanation: "לצלופח אין קשקשים ניתנים להסרה. הוא אינו כשר."
  },
  {
    name: "שַׁטְיָח",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לשטיח, כולל שטיח-עוקץ ומנטה, אין קשקשים מתאימים. הוא אינו כשר."
  },
  {
    name: "סְקֵיט",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "הסקיט קרוב לשטיח וחסר קשקשים כשרים."
  },
  {
    name: "גַּר מַיִם-מְתוּקִים",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לגר מים-המתוקים קשקשי גנואיד ולא קשקשים כשרים אמיתיים."
  },
  {
    name: "חַדְקוֹן",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לחדקון שקפים-עצמות ולא קשקשים אמיתיים. רוב הפוסקים האשכנזים אוסרים אותו."
  },
  {
    name: "דַּג-מַשּׁוֹט",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "דג-המשוט קרוב לחדקון וחסר קשקשים אמיתיים ניתנים להסרה."
  },
  {
    name: "סַרְפָּד יָם",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לסרפד-הים אין לסתות, לא סנפירים ולא קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "דַּג-מְכַשֵּׁף",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-המכשף אין לסתות, לא סנפירים ולא קשקשים. הוא אינו כשר."
  },
  {
    name: "נַפָּח",
    icon: "🐡",
    isKosher: false,
    family: "דגים",
    explanation: "לנפח אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "דַּג-יָרֵחַ",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-הירח, מולה-מולה, אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "דַּג-מִפְרָשׂ",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-המפרש אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "דַּג-חֶרֶב (אַשְׁכְּנַזִי)",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לפי מסורת אשכנז, דג-החרב אינו כשר מכיוון שלבוגר אין קשקשים."
  },
  {
    name: "סוּסוֹן יָם",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לסוסון הים אין סנפירים וקשקשים במובן המסורתי. הוא אינו כשר."
  },
  {
    name: "פַּיְיפִישׁ",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לפייפיש, קרוב הסוסון, אין קשקשים מתאימים. הוא אינו כשר."
  },
  {
    name: "דַּג-אֶבֶן",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-האבן אין קשקשים מתאימים. הוא אינו כשר."
  },
  {
    name: "דַּג-צְפַרְדֵּעַ",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-הצפרדע אין קשקשים מתאימים. הוא אינו כשר."
  },
  {
    name: "דַּג-נָזִיר",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-הנזיר, דג מלאך, אין קשקשים. הוא אינו כשר."
  },
  {
    name: "דַּג-זוֹהֵר",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-הזוהר אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "דַּג-זְאֵב",
    icon: "🐟",
    isKosher: false,
    family: "דגים",
    explanation: "לדג-הזאב אין קשקשים. הוא אינו כשר."
  },
  {
    name: "כְּרִישׁ",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "לכריש אין קשקשים ראויים. שיניות העור שלו אינן קשקשים אמיתיים."
  },
  {
    name: "כֶּלֶב-יָם קוֹצָנִי",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "כלב-הים הקוצני הוא כריש קטן ללא קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "כְּרִישׁ מְטַפֵּחַ",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "הכריש המטפח, ככל הכרישים, חסר קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "כְּרִישׁ לִוְיָתָן",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "כריש הלוויתן הוא דג אך חסר קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "כְּרִישׁ-פַּטִּישׁ",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "לכריש-הפטיש אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "כְּרִישׁ שׁוֹר",
    icon: "🦈",
    isKosher: false,
    family: "דגים",
    explanation: "לכריש השור אין קשקשים אמיתיים. הוא אינו כשר."
  },
  {
    name: "שְׁרִימְפּס",
    icon: "🦐",
    isKosher: false,
    family: "דגים",
    explanation: "לשרימפס אין לא סנפירים ולא קשקשים. כל הסרטנים אסורים (ויקרא יא:י-יב)."
  },
  {
    name: "שְׁרִימְפּס (כָּל הַסּוּגִים)",
    icon: "🦐",
    isKosher: false,
    family: "דגים",
    explanation: "לכל סוגי השרימפס – נמרי, לבן, ורוד – אין סנפירים וקשקשים. כולם אסורים."
  },
  {
    name: "לוֹבְּסְטֵר",
    icon: "🦞",
    isKosher: false,
    family: "דגים",
    explanation: "הלובסטר הוא סרטן ללא סנפירים וקשקשים. הוא אסור."
  },
  {
    name: "לוֹבְּסְטֵר קוֹצָנִי",
    icon: "🦞",
    isKosher: false,
    family: "דגים",
    explanation: "הלובסטר הקוצני הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "לוֹבְּסְטֵר נַעַל",
    icon: "🦞",
    isKosher: false,
    family: "דגים",
    explanation: "הלובסטר נעל הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "לסרטן אין סנפירים וקשקשים. כל הסרטנים אסורים."
  },
  {
    name: "סַרְטָן כָּחֹל",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "הסרטן הכחול הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן מֶלֶךְ",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן המלך הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן שֶׁלֶג",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן השלג הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן דַּנְגֶנֶס",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן הדנגנס הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן אֶבֶן",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן האבן הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן כִּנּוֹר",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן הכינור הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן נָזִיר",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן הנזיר הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סַרְטָן פֶּרֶסַת-סוּס",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן פרסת-הסוס הוא פרוקרגל ללא סנפירים וקשקשים. הוא אינו סרטן אמיתי."
  },
  {
    name: "סַרְטַן נָהָר",
    icon: "🦞",
    isKosher: false,
    family: "דגים",
    explanation: "סרטן הנהר הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "קְרִיל",
    icon: "🦐",
    isKosher: false,
    family: "דגים",
    explanation: "הקריל הוא סרטן זעיר ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "צַדְפָן",
    icon: "🦀",
    isKosher: false,
    family: "דגים",
    explanation: "הצדפן הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "שְׁרִימְפּס מַנְטִיס",
    icon: "🦐",
    isKosher: false,
    family: "דגים",
    explanation: "שרימפס המנטיס הוא סרטן ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "כִּינַת עֶרְוָה",
    icon: "🦟",
    isKosher: false,
    family: "דגים",
    explanation: "כינת הערווה היא סרטן טפיל ללא סנפירים וקשקשים. היא אינה כשרה."
  },
  {
    name: "פַּרְעוֹשׁ מַיִם",
    icon: "🦟",
    isKosher: false,
    family: "דגים",
    explanation: "פרעוש המים, דפניה, הוא סרטן זעיר. יש לסנן אותו ממי שתייה."
  },
  {
    name: "גַּלְגְּלִיָּה",
    icon: "🐛",
    isKosher: false,
    family: "דגים",
    explanation: "הגלגליה, כינת-עץ, היא סרטן יבשתי. היא אינה כשרה."
  },
  {
    name: "צֶדֶף",
    icon: "🦪",
    isKosher: false,
    family: "דגים",
    explanation: "הצדף הוא רכיכה ללא סנפירים וקשקשים. כל צדפות האסורות."
  },
  {
    name: "צֶדֶף צְדָפָה",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הצדפה היא רכיכה ללא סנפירים וקשקשים. היא אינה כשרה."
  },
  {
    name: "צֶדֶף תַּעַר",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "צדף התער הוא רכיכה דו-צדפי ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "גִּיאוֹדָק",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הגיאודק הוא צדפה גדולה ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "מִיסְטֵל",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "המיסטל הוא רכיכה חסרת דרישות הכשרות."
  },
  {
    name: "קוֹקִייָה",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הקוקייה היא רכיכה ללא סנפירים וקשקשים. היא אסורה."
  },
  {
    name: "תְּמָנוּן",
    icon: "🐙",
    isKosher: false,
    family: "דגים",
    explanation: "לתמנון אין לא סנפירים ולא קשקשים. ראשרגליים אסורים."
  },
  {
    name: "דְּיוֹנוֹן",
    icon: "🦑",
    isKosher: false,
    family: "דגים",
    explanation: "לדיונון אין סנפירים וקשקשים. ראשרגליים אינם כשרים."
  },
  {
    name: "דְּיוֹנוֹן עֲצָמוֹת",
    icon: "🦑",
    isKosher: false,
    family: "דגים",
    explanation: "לדיונון-העצמות, ראשרגלי, אין סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "נָאוּטִילוּס",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הנאוטילוס הוא ראשרגלי-רכיכה ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "אַבָּלוֹן",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "האבלון הוא חילזון-ים ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "חִלָּזוֹן יָם קָטָן",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "חילזון-הים הקטן הוא ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "וּוֹלָק",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הוולק הוא חילזון-ים ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "חַרְגּוֹל",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "לחרגול, חילזון-ים, אין סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "לִימְפֶּט",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הלימפט הוא רכיכה ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "כִּיטוֹן",
    icon: "🐚",
    isKosher: false,
    family: "דגים",
    explanation: "הכיטון הוא רכיכה ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "שַׁבְּלוּל יָם",
    icon: "🐌",
    isKosher: false,
    family: "דגים",
    explanation: "שבלול-הים, נודיברנץ', הוא רכיכה ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "מֶדוּזָה",
    icon: "🪼",
    isKosher: false,
    family: "דגים",
    explanation: "למדוזה אין לא סנפירים ולא קשקשים. היא אינה כשרה."
  },
  {
    name: "קִיפּוֹד יָם",
    icon: "🪸",
    isKosher: false,
    family: "דגים",
    explanation: "קיפוד הים הוא עוקב-עור ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "כּוֹכַב יָם",
    icon: "⭐",
    isKosher: false,
    family: "דגים",
    explanation: "כוכב-הים הוא עוקב-עור ללא סנפירים וקשקשים."
  },
  {
    name: "מְלָפְפוֹן יָם",
    icon: "🥒",
    isKosher: false,
    family: "דגים",
    explanation: "מלפפון-הים הוא עוקב-עור ללא סנפירים וקשקשים."
  },
  {
    name: "כַּלָּנִית יָם",
    icon: "🪸",
    isKosher: false,
    family: "דגים",
    explanation: "כלנית-הים היא צנית ללא סנפירים וקשקשים. היא אינה כשרה."
  },
  {
    name: "אַלְמוֹג",
    icon: "🪸",
    isKosher: false,
    family: "דגים",
    explanation: "האלמוג הוא צנית קולוניאלית ללא סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "סְפוֹג יָם",
    icon: "🪸",
    isKosher: false,
    family: "דגים",
    explanation: "לספוג-הים אין סנפירים וקשקשים. הוא אינו כשר."
  },
  {
    name: "תּוֹלַעַת יָם",
    icon: "🪱",
    isKosher: false,
    family: "דגים",
    explanation: "תולעת-הים היא שרץ ימי ללא סנפירים וקשקשים. היא אינה כשרה."
  },
]