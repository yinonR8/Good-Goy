import type { Animal } from "./types"

export type { Animal }

export const animalData: Animal[] = [

  // ============================================================
  // ثدييات
  // ============================================================

  // --- ثدييات حلال ---
  {
    name: "بقرة",
    icon: "🐄",
    isKosher: true,
    family: "ثدييات",
    explanation: "بقرة له ظلف مشقوق ويجترّ، فيستوفي شرطي التوراة (سفر اللاويين 11:3). يجب ذبحه وفق الشحيطة. هو حلال."
  },
  {
    name: "خروف",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "خروف يملك كلتا علامتي الحيوان البري الحلال: ظلف مشقوق واجترار. غذاء أساسي في المطبخ اليهودي منذ آلاف السنين. هو حلال."
  },
  {
    name: "ماعز",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "ماعز له ظلف مشقوق ويجترّ. كان يُقدَّم عادةً قرباناً في الهيكل. هو حلال."
  },
  {
    name: "حمل",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "حمل (الخروف الصغير) له ظلف مشقوق ويجترّ. يُؤكل تقليدياً في عيد الفصح والأعياد الأخرى. هو حلال."
  },
  {
    name: "غزال",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "غزال له ظلف مشقوق ويجترّ. غير أن الغزال البري صعب الذبح وفق الشحيطة، فلحم الغزال الحلال نادر. هو حلال."
  },
  {
    name: "يحمور",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "يحمور له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "أيل أصفر",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيل أصفر له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "أيل أحمر",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيل أحمر له ظلف مشقوق ويجترّ. مستوفياً شرطي الحيوان البري الحلال. هو حلال."
  },
  {
    name: "أيل سيكا",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيل سيكا له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "أيل بغل",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيل بغل له ظلف مشقوق ويجترّ. وهو حلال من حيث المبدأ."
  },
  {
    name: "أيل أبيض الذيل",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيل أبيض الذيل له ظلف مشقوق ويجترّ. وهو حلال من حيث المبدأ."
  },
  {
    name: "رنة",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "رنة له ظلف مشقوق ويجترّ. وهو حلال من الناحية التقنية."
  },
  {
    name: "كاريبو",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "كاريبو له ظلف مشقوق ويجترّ. وهو حلال. وهو حلال عند ذبحه بشكل صحيح."
  },
  {
    name: "أيقن",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أيقن له ظلف مشقوق ويجترّ. يجب ذبحه وفق الشحيطة. هو حلال."
  },
  {
    name: "موظ",
    icon: "🫎",
    isKosher: true,
    family: "ثدييات",
    explanation: "موظ له ظلف مشقوق ويجترّ. وكونه حيواناً برياً، فإن الذبح الحلال صعب لكنه مسموح من الناحية المبدئية. هو حلال."
  },
  {
    name: "بيسون",
    icon: "🦬",
    isKosher: true,
    family: "ثدييات",
    explanation: "بيسون له ظلف مشقوق ويجترّ. مستوفياً شرطي الحيوان البري الحلال. هو حلال."
  },
  {
    name: "بيسون أوروبي",
    icon: "🦬",
    isKosher: true,
    family: "ثدييات",
    explanation: "بيسون أوروبي له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "جاموس الماء",
    icon: "🐃",
    isKosher: true,
    family: "ثدييات",
    explanation: "جاموس الماء له ظلف مشقوق ويجترّ. وهو حلال. وهو حلال عند ذبحه بشكل صحيح."
  },
  {
    name: "حيوان النو",
    icon: "🐃",
    isKosher: true,
    family: "ثدييات",
    explanation: "حيوان النو له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ياك",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "ياك له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "زيبو",
    icon: "🐄",
    isKosher: true,
    family: "ثدييات",
    explanation: "زيبو له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "غور",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "غور له ظلف مشقوق ويجترّ. وهو حلال من حيث المبدأ."
  },
  {
    name: "بانتنغ",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "بانتنغ له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "كوبري",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "كوبري له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ثور المسك",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "ثور المسك له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "تاكين",
    icon: "🐂",
    isKosher: true,
    family: "ثدييات",
    explanation: "تاكين له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "زرافة",
    icon: "🦒",
    isKosher: true,
    family: "ثدييات",
    explanation: "زرافة له ظلف مشقوق ويجترّ. وهو حلال من الناحية التقنية."
  },
  {
    name: "وعل",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "وعل له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "ماعز الجبال",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "ماعز الجبال له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "شامواه",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "شامواه له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ماخور",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "ماخور له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "تهر",
    icon: "🐐",
    isKosher: true,
    family: "ثدييات",
    explanation: "تهر له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "خروف بقرني كبير",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "خروف بقرني كبير له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "خروف دال",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "خروف دال له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "خروف بري",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "خروف بري له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "أوريال",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "أوريال له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "أرغالي",
    icon: "🐑",
    isKosher: true,
    family: "ثدييات",
    explanation: "أرغالي له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "غزال صحراوي",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "غزال صحراوي له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "سبرينجبوك",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "سبرينجبوك له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "إمبالا",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "إمبالا له ظلف مشقوق ويجترّ. مستوفياً شرطي التوراة. هو حلال."
  },
  {
    name: "كودو",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "كودو له ظلف مشقوق ويجترّ. مستوفياً شروط الحلال. هو حلال."
  },
  {
    name: "إيلاند",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "إيلاند له ظلف مشقوق ويجترّ. هو حلال."
  },
  {
    name: "المها",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "المها له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "غمسبوك",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "غمسبوك له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "أداكس",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "أداكس له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "توبي",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "توبي له ظلف مشقوق ويجترّ. مستوفياً شروط الحلال. هو حلال."
  },
  {
    name: "هارتبيست",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "هارتبيست له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ستينبوك",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ستينبوك له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ديك ديك",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ديك ديك له ظلف مشقوق ويجترّ. مستوفياً شرطي التوراة. هو حلال."
  },
  {
    name: "دويكر",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "دويكر له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "كليبسبرنغر",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "كليبسبرنغر له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "نيالا",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "نيالا له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "بوشبوك",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "بوشبوك له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "سيتاتونغا",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "سيتاتونغا له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي السمور",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي السمور له ظلف مشقوق ويجترّ. مستوفياً شرطي الحيوان البري الحلال. هو حلال."
  },
  {
    name: "ظبي روان",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي روان له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي الماء",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي الماء له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي القصب",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي القصب له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "شوكي القرن",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "شوكي القرن له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "سايغا",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "سايغا له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "نيلجاي",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "نيلجاي له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي أسود",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي أسود له ظلف مشقوق ويجترّ. وهو حلال."
  },
  {
    name: "ظبي رباعي القرون",
    icon: "🦌",
    isKosher: true,
    family: "ثدييات",
    explanation: "ظبي رباعي القرون له ظلف مشقوق ويجترّ. وهو حلال."
  },
  // --- ثدييات غير حلال ---
  {
    name: "خنزير",
    icon: "🐷",
    isKosher: false,
    family: "ثدييات",
    explanation: "خنزير له ظلف مشقوق لكنه لا يجترّ. التوراة تحرّم لحم الخنزير صراحةً (سفر اللاويين 11:7). ليس حلالاً."
  },
  {
    name: "خنزير بري",
    icon: "🐗",
    isKosher: false,
    family: "ثدييات",
    explanation: "خنزير بري له ظلف مشقوق لكنه لا يجترّ. ليس حلالاً."
  },
  {
    name: "خنزير الأرض",
    icon: "🐗",
    isKosher: false,
    family: "ثدييات",
    explanation: "خنزير الأرض من الخنازير البرية، له ظلف مشقوق لكنه لا يجترّ. ليس حلالاً."
  },
  {
    name: "بابيروسا",
    icon: "🐗",
    isKosher: false,
    family: "ثدييات",
    explanation: "بابيروسا من أقارب الخنزير، له ظلف مشقوق لكنه لا يجترّ. ليس حلالاً."
  },
  {
    name: "بيكاري",
    icon: "🐗",
    isKosher: false,
    family: "ثدييات",
    explanation: "بيكاري من الحيوانات الشبيهة بالخنزير، له ظلف مشقوق لكنه لا يجترّ. ليس حلالاً."
  },
  {
    name: "حصان",
    icon: "🐴",
    isKosher: false,
    family: "ثدييات",
    explanation: "حصان ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "حمار",
    icon: "🫏",
    isKosher: false,
    family: "ثدييات",
    explanation: "حمار ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "حمار وحشي",
    icon: "🦓",
    isKosher: false,
    family: "ثدييات",
    explanation: "حمار وحشي، كالحصان، ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "جمل",
    icon: "🐪",
    isKosher: false,
    family: "ثدييات",
    explanation: "جمل يجترّ لكن ظلفه ليس مشقوقاً تماماً. ليس حلالاً."
  },
  {
    name: "لاما",
    icon: "🦙",
    isKosher: false,
    family: "ثدييات",
    explanation: "لاما يجترّ لكن ظلفه ليس مشقوقاً تماماً. ليس حلالاً."
  },
  {
    name: "ألبكة",
    icon: "🦙",
    isKosher: false,
    family: "ثدييات",
    explanation: "ألبكة يجترّ لكن ظلفه ليس مشقوقاً تماماً. ليس حلالاً."
  },
  {
    name: "أرنب",
    icon: "🐰",
    isKosher: false,
    family: "ثدييات",
    explanation: "أرنب يبدو وكأنه يجترّ لكنه لا يملك ظلفاً مشقوقاً. التوراة تحرّمه صراحةً. ليس حلالاً."
  },
  {
    name: "أرنب بري",
    icon: "🐇",
    isKosher: false,
    family: "ثدييات",
    explanation: "أرنب بري يبدو وكأنه يجترّ لكنه لا يملك ظلفاً مشقوقاً. التوراة تحرّمه صراحةً. ليس حلالاً."
  },
  {
    name: "بيكا",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "بيكا من القوارض الأرنبية بلا ظلف مشقوق. ليس حلالاً."
  },
  {
    name: "قط",
    icon: "🐈",
    isKosher: false,
    family: "ثدييات",
    explanation: "قط من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "أسد",
    icon: "🦁",
    isKosher: false,
    family: "ثدييات",
    explanation: "أسد حيوان مفترس بلا ظلف مشقوق ولا اجترار. الثدييات المفترسة محرّمة."
  },
  {
    name: "نمر",
    icon: "🐅",
    isKosher: false,
    family: "ثدييات",
    explanation: "نمر حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "فهد",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "فهد حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "فهد الصياد",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "فهد الصياد حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "بانتر",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "بانتر حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "يغور",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "يغور حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "كوغر",
    icon: "🦁",
    isKosher: false,
    family: "ثدييات",
    explanation: "كوغر حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "وشق",
    icon: "🐈",
    isKosher: false,
    family: "ثدييات",
    explanation: "وشق من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "نمر الثلج",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "نمر الثلج من القطط الكبيرة المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "نمر غائم",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "نمر غائم من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "وشق أحمر",
    icon: "🐈",
    isKosher: false,
    family: "ثدييات",
    explanation: "وشق أحمر من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "بوما",
    icon: "🦁",
    isKosher: false,
    family: "ثدييات",
    explanation: "بوما حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "سرفال",
    icon: "🐈",
    isKosher: false,
    family: "ثدييات",
    explanation: "سرفال من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "أوسيلوت",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "أوسيلوت من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "مارغاي",
    icon: "🐆",
    isKosher: false,
    family: "ثدييات",
    explanation: "مارغاي من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "كاراكال",
    icon: "🐈",
    isKosher: false,
    family: "ثدييات",
    explanation: "كاراكال من القطط البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "كلب",
    icon: "🐕",
    isKosher: false,
    family: "ثدييات",
    explanation: "كلب من الحيوانات المفترسة، ليس له ظلف مشقوق ولا يجترّ. ليس حيواناً للأكل."
  },
  {
    name: "ذئب",
    icon: "🐺",
    isKosher: false,
    family: "ثدييات",
    explanation: "ذئب حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "ثعلب",
    icon: "🦊",
    isKosher: false,
    family: "ثدييات",
    explanation: "ثعلب من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "دينغو",
    icon: "🐕",
    isKosher: false,
    family: "ثدييات",
    explanation: "دينغو من الكلاب البرية والمفترسة. ليس حلالاً."
  },
  {
    name: "ذئب القيوط",
    icon: "🐺",
    isKosher: false,
    family: "ثدييات",
    explanation: "ذئب القيوط من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ابن آوى",
    icon: "🐺",
    isKosher: false,
    family: "ثدييات",
    explanation: "ابن آوى من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "كلب بري",
    icon: "🐕",
    isKosher: false,
    family: "ثدييات",
    explanation: "كلب بري من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "دب",
    icon: "🐻",
    isKosher: false,
    family: "ثدييات",
    explanation: "دب ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "دب قطبي",
    icon: "🐻‍❄️",
    isKosher: false,
    family: "ثدييات",
    explanation: "دب قطبي حيوان مفترس يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "باندا",
    icon: "🐼",
    isKosher: false,
    family: "ثدييات",
    explanation: "باندا من الدببة ويفتقر إلى علامات الحيوانات الحلال رغم كونه عاشباً. ليس حلالاً."
  },
  {
    name: "غرير",
    icon: "🦡",
    isKosher: false,
    family: "ثدييات",
    explanation: "غرير ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "غرير العسل",
    icon: "🦡",
    isKosher: false,
    family: "ثدييات",
    explanation: "غرير العسل من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ثعلب الماء",
    icon: "🦦",
    isKosher: false,
    family: "ثدييات",
    explanation: "ثعلب الماء من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ابن عرس",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ابن عرس من الحيوانات المفترسة المذكورة صراحةً كمحرّمة في التوراة (سفر اللاويين 11:29)."
  },
  {
    name: "نمس",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "نمس من ابن العرس المستأنس والمفترس. ليس حلالاً."
  },
  {
    name: "منك",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "منك من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "قاقم",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "قاقم من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ولفرين",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ولفرين من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "زباد",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "زباد من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "بنترونغ",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "بنترونغ من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "جينيت",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "جينيت من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "فوسا",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "فوسا من ثدييات مدغشقر المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ضبع",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ضبع من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ضبع مخطط",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ضبع مخطط من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ذئب الأرض",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ذئب الأرض من أقارب الضبع بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "سرقاط",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "سرقاط من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "نمس مصري",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "نمس مصري من الحيوانات المفترسة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "قرد",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "قرد ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "غوريلا",
    icon: "🦍",
    isKosher: false,
    family: "ثدييات",
    explanation: "غوريلا يفتقر إلى علامات الحيوانات الحلال. الرئيسيات ليست حلالاً."
  },
  {
    name: "شمبانزي",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "شمبانزي من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "إنسان الغاب",
    icon: "🦧",
    isKosher: false,
    family: "ثدييات",
    explanation: "إنسان الغاب من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "مندريل",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "مندريل من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "بابون",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "بابون من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "جيبون",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "جيبون من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ليمور",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "ليمور من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "لوريس",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "لوريس من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ترسير",
    icon: "🐒",
    isKosher: false,
    family: "ثدييات",
    explanation: "ترسير من الرئيسيات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "فيل",
    icon: "🐘",
    isKosher: false,
    family: "ثدييات",
    explanation: "فيل ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "وحيد القرن",
    icon: "🦏",
    isKosher: false,
    family: "ثدييات",
    explanation: "وحيد القرن ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "فرس النهر",
    icon: "🦛",
    isKosher: false,
    family: "ثدييات",
    explanation: "فرس النهر ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "تابير",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "تابير من ذوات الحوافر فرديّة الأصابع بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "تابير بيرد",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "تابير بيرد، كسائر التابيرات، يفتقر إلى الظلف المشقوق والاجترار. ليس حلالاً."
  },
  {
    name: "أوكابي",
    icon: "🦒",
    isKosher: false,
    family: "ثدييات",
    explanation: "أوكابي وضعه موضع جدل رغم قرابته للزرافة. هو يجترّ لكن بنية ظلفه غير مؤكدة. ليس حلالاً."
  },
  {
    name: "كنغر",
    icon: "🦘",
    isKosher: false,
    family: "ثدييات",
    explanation: "كنغر ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "كوالا",
    icon: "🐨",
    isKosher: false,
    family: "ثدييات",
    explanation: "كوالا ليس له ظلف مشقوق وليس مجترّاً. ليس حلالاً."
  },
  {
    name: "والابي",
    icon: "🦘",
    isKosher: false,
    family: "ثدييات",
    explanation: "والابي من الجرابيات بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "كواكا",
    icon: "🦘",
    isKosher: false,
    family: "ثدييات",
    explanation: "كواكا من الجرابيات بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "ومبت",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "ومبت من الجرابيات بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "أبوسوم",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "أبوسوم من الجرابيات بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "شيطان تسمانيا",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "شيطان تسمانيا من الجرابيات بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "خلد الماء",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "خلد الماء من أحاديات المسلك بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "إكيدنا",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "إكيدنا من أحاديات المسلك بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "كسلان",
    icon: "🦥",
    isKosher: false,
    family: "ثدييات",
    explanation: "كسلان ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "راكون",
    icon: "🦝",
    isKosher: false,
    family: "ثدييات",
    explanation: "راكون ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "ظربان",
    icon: "🦨",
    isKosher: false,
    family: "ثدييات",
    explanation: "ظربان يفتقر إلى علامات الحيوانات الحلال. ليس حلالاً."
  },
  {
    name: "قنفذ",
    icon: "🦔",
    isKosher: false,
    family: "ثدييات",
    explanation: "قنفذ ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "شيهم",
    icon: "🦔",
    isKosher: false,
    family: "ثدييات",
    explanation: "شيهم من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "خفاش",
    icon: "🦇",
    isKosher: false,
    family: "ثدييات",
    explanation: "خفاش مذكور صراحةً كمحرّم في التوراة (سفر اللاويين 11:19)."
  },
  {
    name: "خنزير الأرض الأفريقي",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "خنزير الأرض الأفريقي ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "آكل النمل",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "آكل النمل ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "مدرع",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "مدرع ليس له ظلف مشقوق ولا يجترّ. ليس حلالاً."
  },
  {
    name: "بنغول",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "بنغول ثديي مغطى بالحراشف بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "خلد",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "خلد من آكلات الحشرات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "زبابة",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "زبابة من الثدييات الصغيرة آكلة الحشرات المذكورة بين الزواحف المحرّمة."
  },
  {
    name: "تنرك",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "تنرك من آكلات الحشرات بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "دسمان",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "دسمان مخلوق مائي شبيه بالخلد بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "سنجاب",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "سنجاب من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "فأر",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "فأر من الزواحف المحرّمة صراحةً في التوراة (سفر اللاويين 11:29)."
  },
  {
    name: "جرذ",
    icon: "🐀",
    isKosher: false,
    family: "ثدييات",
    explanation: "جرذ من الزواحف المحرّمة بموجب الشريعة اليهودية."
  },
  {
    name: "هامستر",
    icon: "🐹",
    isKosher: false,
    family: "ثدييات",
    explanation: "هامستر من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "خنزير غينيا",
    icon: "🐹",
    isKosher: false,
    family: "ثدييات",
    explanation: "خنزير غينيا من القوارض ولا يستوفي شروط الحلال. ليس حلالاً."
  },
  {
    name: "قندس",
    icon: "🦫",
    isKosher: false,
    family: "ثدييات",
    explanation: "قندس من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "كابيبارا",
    icon: "🐾",
    isKosher: false,
    family: "ثدييات",
    explanation: "كابيبارا أكبر القوارض في العالم، بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "نوتريا",
    icon: "🦫",
    isKosher: false,
    family: "ثدييات",
    explanation: "نوتريا من القوارض الكبيرة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "مرموط",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "مرموط من السناجب الأرضية الكبيرة بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "كلب البراري",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "كلب البراري من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "مرموط أمريكي",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "مرموط أمريكي من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "غوفر",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "غوفر من القوارض الحافرة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "فأر الحقل",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "فأر الحقل من القوارض الصغيرة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ليمنغ",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "ليمنغ من القوارض الصغيرة بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "يربوع",
    icon: "🐹",
    isKosher: false,
    family: "ثدييات",
    explanation: "يربوع من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "شينشيلا",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "شينشيلا من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "ديغو",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "ديغو من قوارض أمريكا الجنوبية بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "أرنب قافز",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "أرنب قافز من القوارض الشبيهة بالكنغر الصغير. يفتقر إلى علامات الحلال. ليس حلالاً."
  },
  {
    name: "يربوع صحراوي",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "يربوع صحراوي من القوارض الصحراوية القافزة بلا ظلف مشقوق ولا اجترار. ليس حلالاً."
  },
  {
    name: "سنجاب طائر",
    icon: "🐿️",
    isKosher: false,
    family: "ثدييات",
    explanation: "سنجاب طائر من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "فأر الخلد العاري",
    icon: "🐭",
    isKosher: false,
    family: "ثدييات",
    explanation: "فأر الخلد العاري من القوارض بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "حوت",
    icon: "🐋",
    isKosher: false,
    family: "ثدييات",
    explanation: "حوت من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "دلفين",
    icon: "🐬",
    isKosher: false,
    family: "ثدييات",
    explanation: "دلفين من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "فقمة",
    icon: "🦭",
    isKosher: false,
    family: "ثدييات",
    explanation: "فقمة من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "أسد البحر",
    icon: "🦭",
    isKosher: false,
    family: "ثدييات",
    explanation: "أسد البحر من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "فظ",
    icon: "🦭",
    isKosher: false,
    family: "ثدييات",
    explanation: "فظ من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "خروف البحر",
    icon: "🦭",
    isKosher: false,
    family: "ثدييات",
    explanation: "خروف البحر من الثدييات البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
  // ============================================================
  // طيور
  // ============================================================

  // --- طيور حلال ---
  {
    name: "دجاجة",
    icon: "🐔",
    isKosher: true,
    family: "طيور",
    explanation: "دجاجة من الطيور الحلال التقليدية. ليس مفترساً ويجب ذبحه وفق الشحيطة. هو حلال."
  },
  {
    name: "ديك رومي",
    icon: "🦃",
    isKosher: true,
    family: "طيور",
    explanation: "ديك رومي مقبول كحلال في معظم المجتمعات. يشترك في صفات مع طيور حلال أخرى وقُبل بحكم التقليد."
  },
  {
    name: "بطة",
    icon: "🦆",
    isKosher: true,
    family: "طيور",
    explanation: "بطة من الطيور الحلال وفق التقليد اليهودي. يجب ذبحه بشكل صحيح وإزالة بعض الأجزاء. هو حلال."
  },
  {
    name: "بط مسكوفي",
    icon: "🦆",
    isKosher: true,
    family: "طيور",
    explanation: "بط مسكوفي مقبول كحلال في معظم المجتمعات ذات التقليد بأكله. هو حلال."
  },
  {
    name: "إوزة",
    icon: "🪿",
    isKosher: true,
    family: "طيور",
    explanation: "إوزة من الطيور الحلال. كانت دهون الإوز (شمالتس) تُستخدم تقليدياً في المطبخ الأشكنازي. هو حلال."
  },
  {
    name: "حمامة",
    icon: "🕊️",
    isKosher: true,
    family: "طيور",
    explanation: "حمامة من الطيور الحلال ذات التاريخ الطويل في التقليد اليهودي. كان يُقدَّم قرباناً في الهيكل. هو حلال."
  },
  {
    name: "يمامة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "يمامة من الطيور الحلال وهو قريب من الحمام. كان يُقدَّم أيضاً قرباناً في الهيكل. هو حلال."
  },
  {
    name: "سمان",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "سمان من الطيور الحلال المذكورة في التوراة كطعام قُدِّم لبني إسرائيل في البرية (سفر العدد 11:31-32). هو حلال."
  },
  {
    name: "تدرج",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "تدرج يُعتبر حلالاً عند معظم العلماء، إذ ليس مفترساً ويشترك في صفات مع الطيور المقبولة. هو حلال."
  },
  {
    name: "دجاج غينيا",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "دجاج غينيا مقبول كحلال في المجتمعات ذات التقليد بأكله. وهو شبيه بالدجاج. هو حلال."
  },
  {
    name: "حجل",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "حجل يُعتبر حلالاً في المجتمعات ذات التقليد الراسخ. وهو طائر أرضي كالسمان. هو حلال."
  },
  {
    name: "فرانكولين",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "فرانكولين من الطيور الأرضية القريبة من الحجل. المجتمعات ذات التقليد بأكله تعتبره حلالاً. هو حلال."
  },
  {
    name: "طيهوج",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "طيهوج من الطيور الأرضية القريبة من التدرج. يُعتبر حلالاً في كثير من المجتمعات. هو حلال."
  },
  {
    name: "طيهوج أسود",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "طيهوج أسود من طيور الصيد القريبة من أنواع طيهوج حلال أخرى."
  },
  {
    name: "طيهوج البندق",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "طيهوج البندق من طيور الصيد الأوروبية الصغيرة، يُعتبر حلالاً في المجتمعات ذات التقليد. هو حلال."
  },
  {
    name: "طرماغان",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "طرماغان من الطيور الشبيهة بالطيهوج. يشترك في صفات مع طيور صيد حلال أخرى."
  },
  {
    name: "دجاجة كورنيش",
    icon: "🐔",
    isKosher: true,
    family: "طيور",
    explanation: "دجاجة كورنيش نوع من الدجاج وهو حلال تماماً عند ذبحه بشكل صحيح."
  },
  {
    name: "كابون",
    icon: "🐔",
    isKosher: true,
    family: "طيور",
    explanation: "كابون ديوك مخصية وهي حلال كسائر الدجاج عند ذبحها بشكل صحيح."
  },
  {
    name: "دجاج الأدغال",
    icon: "🐔",
    isKosher: true,
    family: "طيور",
    explanation: "دجاج الأدغال الأسلاف البرية للدجاج. هو حلال كالدجاج."
  },
  {
    name: "أنثى الطاووس",
    icon: "🦚",
    isKosher: true,
    family: "طيور",
    explanation: "أنثى الطاووس (إناث الطاووس) كانت تُؤكل في بعض المجتمعات ذات التقليد. وبعض العلماء يعتبرها حلالاً. هو حلال."
  },
  {
    name: "شنقب",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "شنقب من الطيور الخواضة. بعض العلماء يدرجها بين الطيور الحلال. هو حلال."
  },
  {
    name: "دجاج الأرض",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "دجاج الأرض من الطيور الخواضة. بعض المجتمعات السفاردية لديها تقليد بأكلها. هو حلال."
  },
  {
    name: "عصفور",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "عصفور من الطيور الصغيرة غير المفترسة ذات التقليد الراسخ بأكلها. هو حلال."
  },
  {
    name: "عصفور الحسون",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "عصفور الحسون من الطيور الصغيرة آكلة البذور. ليس مفترساً ويُعتبر حلالاً في المجتمعات ذات التقليد. هو حلال."
  },
  {
    name: "كناري",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "كناري من العصافير الصغيرة غير المفترسة. له علامات الطائر الحلال. هو حلال."
  },
  {
    name: "أبو الحناء",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "أبو الحناء من السمنة الصغيرة غير المفترسة. له صفات الطائر الحلال. هو حلال."
  },
  {
    name: "سمنة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "سمنة من الطيور غير المفترسة وليس مدرجاً ضمن المحرّمات في التوراة. هو حلال."
  },
  {
    name: "شحرور",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "شحرور (سمنة) من الطيور غير المفترسة وليس مدرجاً ضمن المحرّمات. يعتبره كثير من العلماء حلالاً. هو حلال."
  },
  {
    name: "سنونو",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "سنونو من الطيور الصغيرة آكلة الحشرات وليس مدرجاً ضمن المحرّمات. بعض العلماء يجيزه. هو حلال."
  },
  {
    name: "سمامة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "سمامة من الطيور الجوية وليس مدرجاً ضمن الأنواع المحرّمة. هو حلال."
  },
  {
    name: "نمنمة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "نمنمة من الطيور الصغيرة غير المفترسة وليس مدرجاً ضمن المحرّمات. هو حلال."
  },
  {
    name: "زرزور",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "زرزور ليس من الطيور المحرّمة وله علامات الطائر الحلال. هو حلال."
  },
  {
    name: "قبرة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "قبرة من الطيور الصغيرة غير المفترسة ذات التقليد بأكلها في بعض المجتمعات. هو حلال."
  },
  {
    name: "درسة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "درسة من الطيور آكلة البذور الشبيهة بالعصفور. يُعتبر حلالاً. هو حلال."
  },
  {
    name: "هازجة",
    icon: "🐦",
    isKosher: true,
    family: "طيور",
    explanation: "هازجة من الطيور الصغيرة آكلة الحشرات وليس مدرجاً ضمن المحرّمات. هو حلال."
  },
  // --- طيور غير حلال ---
  {
    name: "نسر",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "نسر من الطيور الجارحة المحرّمة صراحةً في التوراة (سفر اللاويين 11:13)."
  },
  {
    name: "صقر",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "صقر من الطيور الجارحة المحرّمة بموجب الشريعة اليهودية."
  },
  {
    name: "شاهين",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "شاهين من الطيور الجارحة وليس حلالاً."
  },
  {
    name: "شاهين رحال",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "شاهين رحال من الطيور الجارحة وليس حلالاً."
  },
  {
    name: "صقر الغرفلكون",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "صقر الغرفلكون أكبر الصقور ومن الطيور الجارحة. ليس حلالاً."
  },
  {
    name: "عوسق",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "عوسق من الصقور الصغيرة والطيور الجارحة. ليس حلالاً."
  },
  {
    name: "يؤيؤ",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "يؤيؤ من الصقور الصغيرة والطيور الجارحة. ليس حلالاً."
  },
  {
    name: "هواية",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "هواية من الصقور والطيور الجارحة. ليس حلالاً."
  },
  {
    name: "عقاب نسارية",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "عقاب نسارية من الطيور الجارحة آكلة الأسماك، مدرج ضمن الطيور المحرّمة."
  },
  {
    name: "حدأة",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "حدأة من الطيور الجارحة المحرّمة في التوراة (سفر اللاويين 11:14)."
  },
  {
    name: "مرزة",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "مرزة من الطيور الجارحة. ليس حلالاً."
  },
  {
    name: "باشق شمالي",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "باشق شمالي من الطيور الجارحة الكبيرة. ليس حلالاً."
  },
  {
    name: "باشق",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "باشق من الطيور الجارحة الصغيرة. ليس حلالاً."
  },
  {
    name: "حوام",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "حوام من الطيور الجارحة. ليس حلالاً."
  },
  {
    name: "طائر السكرتير",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "طائر السكرتير من الطيور المفترسة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "عقاب أنوق",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "عقاب أنوق من الطيور آكلة الجيف. محرّم."
  },
  {
    name: "كندور",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "كندور من نسور العالم الجديد الكبيرة وآكلات الجيف. ليس حلالاً."
  },
  {
    name: "نسر ملتح",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "نسر ملتح (نسور ذقناء) مدرجة كمحرّمة في سفر اللاويين 11:13."
  },
  {
    name: "رخمة مصرية",
    icon: "🦅",
    isKosher: false,
    family: "طيور",
    explanation: "رخمة مصرية من آكلات الجيف المدرجة ضمن الطيور المحرّمة."
  },
  {
    name: "بومة",
    icon: "🦉",
    isKosher: false,
    family: "طيور",
    explanation: "بومة من الطيور المفترسة المذكورة في التوراة كمحرّمة (سفر اللاويين 11:16-17)."
  },
  {
    name: "السبد",
    icon: "🦉",
    isKosher: false,
    family: "طيور",
    explanation: "السبد من الطيور الليلية المذكورة في بعض قوائم الطيور المحرّمة."
  },
  {
    name: "طائر فم الضفدع",
    icon: "🦉",
    isKosher: false,
    family: "طيور",
    explanation: "طائر فم الضفدع من الطيور الليلية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "بوتو",
    icon: "🦉",
    isKosher: false,
    family: "طيور",
    explanation: "بوتو من الطيور الليلية في أمريكا الجنوبية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "صقر الليل",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "صقر الليل مدرج في بعض التقاليد ضمن الطيور المحرّمة."
  },
  {
    name: "غراب أسحم",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "غراب أسحم مدرج صراحةً كمحرّم في سفر اللاويين 11:15."
  },
  {
    name: "غراب",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "غراب من الطيور المحرّمة. الغراب الأسحم مذكور صراحةً كغير حلال في التوراة."
  },
  {
    name: "عقعق",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "عقعق من الغرابيات (قرابة الغراب الأسحم) وليس حلالاً."
  },
  {
    name: "زاغ",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "زاغ من الغرابيات (قرابة الغراب الأسحم) وليس حلالاً."
  },
  {
    name: "غراب الزرع",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "غراب الزرع من الغرابيات (قرابة الغراب الأسحم) وليس حلالاً."
  },
  {
    name: "غداف",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "طيور",
    explanation: "غداف من الغرابيات (قرابة الغراب الأسحم) وليس حلالاً."
  },
  {
    name: "قيق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "قيق من الغرابيات (قرابة الغراب الأسحم) وليس حلالاً."
  },
  {
    name: "كاسر الجوز",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كاسر الجوز من الغرابيات وليس حلالاً."
  },
  {
    name: "كاسر جوز كلارك",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كاسر جوز كلارك من الغرابيات وليس حلالاً."
  },
  {
    name: "لقلق",
    icon: "🦩",
    isKosher: false,
    family: "طيور",
    explanation: "لقلق مدرج كمحرّم في التوراة (سفر اللاويين 11:19)."
  },
  {
    name: "بلشون",
    icon: "🦢",
    isKosher: false,
    family: "طيور",
    explanation: "بلشون مدرج ضمن الطيور المحرّمة في سفر اللاويين."
  },
  {
    name: "نحام",
    icon: "🦩",
    isKosher: false,
    family: "طيور",
    explanation: "نحام لا يملك تقليد حلال راسخ ولا يُؤكل. ليس حلالاً."
  },
  {
    name: "بجعة",
    icon: "🦢",
    isKosher: false,
    family: "طيور",
    explanation: "بجعة لا يملك تقليد حلال راسخ ويُعتبر عموماً محرّماً."
  },
  {
    name: "بجع",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بجع مدرج ضمن الطيور المحرّمة في التوراة."
  },
  {
    name: "غاق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "غاق مدرج ضمن الطيور المحرّمة في سفر اللاويين 11:17."
  },
  {
    name: "أنهنغة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "أنهنغة من الطيور المائية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "دارتر",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "دارتر من الطيور المائية القريبة من الأنهنغة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "أبو منجل",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "أبو منجل ليس له تقليد حلال راسخ ولا يُؤكل في المجتمعات اليهودية. ليس حلالاً."
  },
  {
    name: "أبو ملعقة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "أبو ملعقة من الطيور الخواضة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "أبو مركوب",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "أبو مركوب من الطيور المفترسة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "مطرقي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "مطرقي من الطيور المائية الأفريقية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "كركي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كركي ليس له تقليد حلال راسخ ولا يُؤكل. ليس حلالاً."
  },
  {
    name: "دجاجة الماء",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "دجاجة الماء من الطيور المائية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "غرة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "غرة من الطيور المائية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "مرعة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "مرعة من الطيور المائية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "طائر الشمس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر الشمس من الطيور المائية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "بطون الشمس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بطون الشمس من الطيور الاستوائية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "ليمبكين",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "ليمبكين من الطيور الخواضة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "حبارى",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "حبارى ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "بوقي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بوقي من طيور أمريكا الجنوبية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "زقزاق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "زقزاق من الطيور الساحلية الخواضة بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "قطقاط",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "قطقاط من الطيور الساحلية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "طيطوي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طيطوي من الطيور الساحلية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "كروان",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كروان من الطيور الساحلية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "بقويقة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بقويقة من الطيور الساحلية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "قلاب الحجر",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "قلاب الحجر من الطيور الساحلية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "فلاروب",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "فلاروب من الطيور الساحلية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "كاوية",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كاوية من الطيور الخواضة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "كروان الماء",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كروان الماء من الطيور الخواضة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "صائد المحار",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "صائد المحار من الطيور الساحلية التي تأكل الرخويات. ليس له تقليد حلال. ليس حلالاً."
  },
  {
    name: "نورس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نورس من الطيور آكلة الجيف بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "قطرس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "قطرس ليس له تقليد حلال راسخ، وهو من الطيور البحرية التي لا تُؤكل في المجتمعات اليهودية. ليس حلالاً."
  },
  {
    name: "الأطيش",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "الأطيش من الطيور البحرية بلا تقليد حلال. لا يُؤكل في المجتمعات اليهودية. ليس حلالاً."
  },
  {
    name: "بوبي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بوبي من الطيور البحرية بلا تقليد حلال. لا يُؤكل في المجتمعات اليهودية. ليس حلالاً."
  },
  {
    name: "طائر الفرقاطة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر الفرقاطة من الطيور البحرية التي تسرق طعام غيرها. ليس له تقليد حلال. ليس حلالاً."
  },
  {
    name: "طائر استوائي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر استوائي من الطيور البحرية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "كركر",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كركر من الطيور البحرية المفترسة التي تسرق من غيرها. ليس حلالاً."
  },
  {
    name: "خرشنة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "خرشنة من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "بفن",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "بفن من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "أوك",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "أوك من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "غويلموت",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "غويلموت من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "موسي المنقار",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "موسي المنقار من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "مور",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "مور من الطيور البحرية بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "نوء",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نوء من الطيور البحرية المحيطية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "جزار الماء",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "جزار الماء من الطيور البحرية المحيطية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "نوء العاصفة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نوء العاصفة من الطيور البحرية الصغيرة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "نوء غواص",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نوء غواص من الطيور البحرية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "غطاس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "غطاس من الطيور المائية الغوّاصة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "غواص",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "غواص من الطيور المائية الغوّاصة بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "نعامة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نعامة مدرج صراحةً كمحرّم في التوراة (سفر اللاويين 11:16)."
  },
  {
    name: "إيمو",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "إيمو كالنعامة، من الطيور الكبيرة عديمة الطيران بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "شبنم",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "شبنم من الطيور الكبيرة عديمة الطيران بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "ريا",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "ريا من الطيور الكبيرة عديمة الطيران بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "كيوي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "كيوي من الطيور النيوزيلندية الصغيرة عديمة الطيران بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "بطريق",
    icon: "🐧",
    isKosher: false,
    family: "طيور",
    explanation: "بطريق ليس له تقليد حلال راسخ ولا يُعتبر حلالاً. ليس حلالاً."
  },
  {
    name: "ببغاء",
    icon: "🦜",
    isKosher: false,
    family: "طيور",
    explanation: "ببغاء ليس له تقليد حلال راسخ. لا يُؤكل في المجتمعات اليهودية. ليس حلالاً."
  },
  {
    name: "طاووس",
    icon: "🦚",
    isKosher: false,
    family: "طيور",
    explanation: "طاووس ليس له تقليد حلال واضح ويُتجنّب عموماً. ليس حلالاً."
  },
  {
    name: "طوقان",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طوقان ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "هدهد",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "هدهد رغم كونه الطائر الوطني لإسرائيل، فإنه ليس له تقليد حلال راسخ ولا يُؤكل. ليس حلالاً."
  },
  {
    name: "رفراف",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "رفراف من الطيور آكلة السمك بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "وروار",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "وروار من الطيور آكلة الحشرات بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "شقراق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "شقراق من الطيور الملوّنة بلا تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "وقواق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "وقواق مدرج ضمن الطيور المحرّمة في بعض تفسيرات سفر اللاويين 11."
  },
  {
    name: "عداء الطريق",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "عداء الطريق من أقارب الوقواق بلا تقليد حلال. وهو مفترس. ليس حلالاً."
  },
  {
    name: "نقار الخشب",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "نقار الخشب ليس من الطيور الحلال المقبولة تقليدياً وليس له تقليد أكل راسخ. ليس حلالاً."
  },
  {
    name: "محاكي",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "محاكي ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "طائر القط",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر القط ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "دراس",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "دراس ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "طائر القيثارة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر القيثارة من الطيور الأسترالية بلا تقليد حلال. ليس حلالاً."
  },
  {
    name: "طائر الجنة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر الجنة ليس له تقليد حلال راسخ. ليس حلالاً."
  },
  {
    name: "طائر المظلة",
    icon: "🐦",
    isKosher: false,
    family: "طيور",
    explanation: "طائر المظلة من الطيور الأسترالية بلا تقليد حلال. ليس حلالاً."
  },
  // ============================================================
  // زواحف
  // ============================================================

  // --- زواحف وبرمائيات غير حلال ---
  {
    name: "ثعبان",
    icon: "🐍",
    isKosher: false,
    family: "زواحف",
    explanation: "ثعبان من الزواحف المحرّمة بموجب الشريعة الغذائية اليهودية."
  },
  {
    name: "ثعبان البحر",
    icon: "🐍",
    isKosher: false,
    family: "زواحف",
    explanation: "ثعبان البحر من الزواحف بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سحلية",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "سحلية من الزواحف المحرّمة في التوراة (سفر اللاويين 11:29-30)."
  },
  {
    name: "وزغة",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "وزغة من السحالي ومحرّم كزاحف."
  },
  {
    name: "إغوانا",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "إغوانا من الزواحف وليس حلالاً."
  },
  {
    name: "حرباء",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "حرباء من السحالي المذكورة صراحةً كمحرّمة في سفر اللاويين."
  },
  {
    name: "تمساح",
    icon: "🐊",
    isKosher: false,
    family: "زواحف",
    explanation: "تمساح من الزواحف بلا علامات حلال. ليس حلالاً."
  },
  {
    name: "تمساح أمريكي",
    icon: "🐊",
    isKosher: false,
    family: "زواحف",
    explanation: "تمساح أمريكي من الزواحف وليس حلالاً."
  },
  {
    name: "سلحفاة",
    icon: "🐢",
    isKosher: false,
    family: "زواحف",
    explanation: "سلحفاة من الزواحف وليس حلالاً."
  },
  {
    name: "سلحفاة برية",
    icon: "🐢",
    isKosher: false,
    family: "زواحف",
    explanation: "سلحفاة برية من الزواحف وليس حلالاً."
  },
  {
    name: "سلحفاة بحرية",
    icon: "🐢",
    isKosher: false,
    family: "زواحف",
    explanation: "سلحفاة بحرية من الزواحف بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سمندر",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "سمندر من البرمائيات وليس حلالاً."
  },
  {
    name: "سمندل الماء",
    icon: "🦎",
    isKosher: false,
    family: "زواحف",
    explanation: "سمندل الماء من البرمائيات وليس حلالاً."
  },
  {
    name: "ضفدع",
    icon: "🐸",
    isKosher: false,
    family: "زواحف",
    explanation: "ضفدع من الزواحف المحرّمة صراحةً في التوراة (سفر اللاويين 11:29-30)."
  },
  {
    name: "علجوم",
    icon: "🐸",
    isKosher: false,
    family: "زواحف",
    explanation: "علجوم من البرمائيات وليس حلالاً."
  },
  // ============================================================
  // أسماك
  // ============================================================

  // --- أسماك حلال ---
  {
    name: "سلمون",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون له زعانف وقشور، وهما شرطا السمك الحلال (سفر اللاويين 11:9). الأسماك لا تحتاج إلى شحيطة. هو حلال."
  },
  {
    name: "سلمون أطلسي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون أطلسي له زعانف وقشور. وهو من أشهر الأسماك الحلال. هو حلال."
  },
  {
    name: "سلمون شينوك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون شينوك (الملك) له زعانف وقشور. هو حلال."
  },
  {
    name: "سلمون أحمر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون أحمر له زعانف وقشور. هو حلال."
  },
  {
    name: "سلمون كوهو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون كوهو له زعانف وقشور. هو حلال."
  },
  {
    name: "سلمون وردي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون وردي له زعانف وقشور. هو حلال."
  },
  {
    name: "سلمون كيتا",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون كيتا له زعانف وقشور. هو حلال."
  },
  {
    name: "تروتة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تروتة له زعانف وقشور واضحة بسهولة، مما يجعله حلالاً بوضوح. هو حلال."
  },
  {
    name: "تروتة قوس قزح",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تروتة قوس قزح له زعانف وقشور. وهو من الأسماك الحلال الشائعة جداً. هو حلال."
  },
  {
    name: "تروتة بنية",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تروتة بنية له زعانف وقشور. هو حلال."
  },
  {
    name: "تروتة الجداول",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تروتة الجداول له زعانف وقشور. هو حلال."
  },
  {
    name: "تروتة البحيرات",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تروتة البحيرات له زعانف وقشور. هو حلال."
  },
  {
    name: "شار قطبي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "شار قطبي له زعانف وقشور. هو سلموني حلال."
  },
  {
    name: "غريلينغ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "غريلينغ من السلمونيات، له زعانف وقشور. هو حلال."
  },
  {
    name: "تايمن",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تايمن من السلمونيات الكبيرة، له زعانف وقشور. هو حلال."
  },
  {
    name: "سلمون الدانوب",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سلمون الدانوب من السلمونيات، له زعانف وقشور. هو حلال."
  },
  {
    name: "لينوك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لينوك من السلمونيات الآسيوية، له زعانف وقشور. هو حلال."
  },
  {
    name: "فينداس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "فينداس من السلمونيات النهرية، له زعانف وقشور. هو حلال."
  },
  {
    name: "سيسكو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سيسكو له زعانف وقشور. هو حلال."
  },
  {
    name: "إنكونو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "إنكونو من السلمونيات الكبيرة، له زعانف وقشور. هو حلال."
  },
  {
    name: "تونة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تونة يملك زعانف وقشور. القشور قد تكون صغيرة لكنها موجودة. هو حلال."
  },
  {
    name: "تونة صفراء الزعنفة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تونة صفراء الزعنفة له زعانف وقشور. هو حلال."
  },
  {
    name: "تونة زرقاء الزعنفة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تونة زرقاء الزعنفة له زعانف وقشور. هو حلال."
  },
  {
    name: "تونة كبيرة العين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تونة كبيرة العين له زعانف وقشور. هو حلال."
  },
  {
    name: "آهي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "آهي له زعانف وقشور. هو حلال."
  },
  {
    name: "الباكور",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الباكور له زعانف وقشور. هو حلال."
  },
  {
    name: "بونيتو مخطط",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بونيتو مخطط له زعانف وقشور. هو حلال."
  },
  {
    name: "بونيتو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بونيتو له زعانف وقشور. هو حلال."
  },
  {
    name: "إسقمري",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "إسقمري له زعانف وقشور صغيرة جداً، وهي كافية لاعتباره حلالاً. هو حلال."
  },
  {
    name: "كنغفيش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كنغفيش (إسقمري الملك) له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "واهو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "واهو له زعانف وقشور. هذا السمك السريع السباحة حلال."
  },
  {
    name: "أونو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أونو له زعانف وقشور. هو حلال."
  },
  {
    name: "شبوط",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "شبوط له زعانف وقشور واضحة. وهو السمك التقليدي المستخدم في صنع جفلتي فيش في المطبخ الأشكنازي. هو حلال."
  },
  {
    name: "رنجة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "رنجة له زعانف وقشور. الرنجة المخللة طعام تقليدي محبوب، خاصة في السبت. هو حلال."
  },
  {
    name: "رنجة المحيط الهادئ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "رنجة المحيط الهادئ له زعانف وقشور. هو حلال."
  },
  {
    name: "رنجة مدورة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "رنجة مدورة له زعانف وقشور. هو حلال."
  },
  {
    name: "سردين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سردين له زعانف وقشور. السردين المعلب بروتين حلال مريح."
  },
  {
    name: "سردين أوروبي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سردين أوروبي له زعانف وقشور. هو حلال."
  },
  {
    name: "سبرات",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سبرات له زعانف وقشور. هو حلال."
  },
  {
    name: "أنشوجة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أنشوجة له زعانف وقشور. هو حلال."
  },
  {
    name: "سمك الإسبيلين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمك الإسبيلين له زعانف وقشور. هذه الأسماك الصغيرة حلال."
  },
  {
    name: "كابلين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كابلين من الأسماك الصغيرة الشبيهة بالإسبيلين، له زعانف وقشور. هو حلال."
  },
  {
    name: "أولاكون",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أولاكون (سمكة الشمعة) من الإسبيلين، له زعانف وقشور. هو حلال."
  },
  {
    name: "أيلوايف",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أيلوايف من الأسماك الشبيهة بالرنجة، له زعانف وقشور. هو حلال."
  },
  {
    name: "شاد",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "شاد له زعانف وقشور. الشاد الأمريكي سمك حلال ذو تقليد متبع."
  },
  {
    name: "منهادن",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "منهادن له زعانف وقشور. هو حلال."
  },
  {
    name: "قد",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "قد له زعانف وقشور. وهو سمك حلال شائع يُستخدم في أطباق كثيرة."
  },
  {
    name: "قد أطلسي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "قد أطلسي له زعانف وقشور. وهو سمك حلال كلاسيكي."
  },
  {
    name: "قد الهادئ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "قد الهادئ له زعانف وقشور. هو حلال."
  },
  {
    name: "حدوق",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "حدوق له زعانف وقشور. هذا القريب من القد سمك حلال."
  },
  {
    name: "بولوك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بولوك له زعانف وقشور. يُستخدم غالباً في منتجات السمك المعالجة. هو حلال."
  },
  {
    name: "وايتنغ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "وايتنغ له زعانف وقشور. هو حلال."
  },
  {
    name: "وايتنغ أزرق",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "وايتنغ أزرق له زعانف وقشور. هو حلال."
  },
  {
    name: "نازلي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "نازلي له زعانف وقشور. هو سمك حلال شائع في المطبخ السفاردي."
  },
  {
    name: "نازلي فضي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "نازلي فضي له زعانف وقشور. هو حلال."
  },
  {
    name: "لينغ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لينغ له زعانف وقشور. هو حلال."
  },
  {
    name: "بربوط",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بربوط من أقارب القد النهرية، له زعانف وقشور. هو حلال."
  },
  {
    name: "هلبوت",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "هلبوت له زعانف وقشور، مستوفياً شروط الحلال. هو سمك مفلطح لكنه يحمل الصفات المطلوبة. هو حلال."
  },
  {
    name: "هلبوت الهادئ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "هلبوت الهادئ له زعانف وقشور. هو حلال."
  },
  {
    name: "هلبوت أطلسي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "هلبوت أطلسي له زعانف وقشور. هو حلال."
  },
  {
    name: "موسى",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "موسى له زعانف وقشور رغم كونه سمكاً مفلطحاً. هو حلال."
  },
  {
    name: "موسى الساحرة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "موسى الساحرة من الأسماك المفلطحة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "موسى صفراء الذيل",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "موسى صفراء الذيل له زعانف وقشور. هو حلال."
  },
  {
    name: "لسان البحر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لسان البحر له زعانف وقشور. هذا السمك المفلطح حلال ومحبوب."
  },
  {
    name: "لسان البحر الدوفر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لسان البحر الدوفر له زعانف وقشور. هو حلال."
  },
  {
    name: "لسان البحر الليموني",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لسان البحر الليموني من الأسماك المفلطحة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "لسان البحر الهادئ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لسان البحر الهادئ له زعانف وقشور. هو حلال."
  },
  {
    name: "بليس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بليس من الأسماك المفلطحة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "داب",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "داب من الأسماك المفلطحة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "تربوت",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تربوت من الأسماك المفلطحة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "بلطي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بلطي له زعانف وقشور واضحة، مما يجعله سمكاً حلالاً شائعاً. هو حلال."
  },
  {
    name: "قاروص",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "قاروص معظم أنواع القاروص لها زعانف وقشور وهي حلال. قاروص البحر والقاروص المخطط أنواع حلال شائعة."
  },
  {
    name: "فرخ",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "فرخ له زعانف وقشور. هو سمك نهري حلال."
  },
  {
    name: "فرخ أصفر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "فرخ أصفر له زعانف وقشور. هو سمك نهري حلال شائع."
  },
  {
    name: "زاندر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "زاندر له زعانف وقشور. هو سمك نهري حلال شائع في أوروبا."
  },
  {
    name: "والاي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "والاي له زعانف وقشور. هذا السمك الأمريكي الشمالي الشائع حلال."
  },
  {
    name: "سوغر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سوغر من الأسماك النهرية القريبة من الوالاي، له زعانف وقشور. هو حلال."
  },
  {
    name: "كراكي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كراكي له زعانف وقشور. يُستخدم تقليدياً في جفلتي فيش مع الشبوط. هو حلال."
  },
  {
    name: "سمك أبيض",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمك أبيض له زعانف وقشور. هو سمك حلال كلاسيكي، غالباً ما يُدخن أو يُستخدم في السلطات."
  },
  {
    name: "روش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "روش من الأسماك النهرية ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "رود",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "رود من الأسماك النهرية ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "تنش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تنش من الأسماك النهرية ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "شب",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "شب من الأسماك النهرية ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "داس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "داس من الأسماك النهرية الصغيرة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "جدجن",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "جدجن من الأسماك النهرية الصغيرة ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "بربس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بربس من الأسماك النهرية ذات الزعانف والقشور. هو حلال."
  },
  {
    name: "بريم نهري",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بريم نهري له زعانف وقشور. يُستخدم في جفلتي فيش الأشكنازي التقليدي. هو حلال."
  },
  {
    name: "كرابي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كرابي له زعانف وقشور. هذه الأسماك النهرية حلال."
  },
  {
    name: "بلوغيل",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بلوغيل من سمك الشمس له زعانف وقشور. هو حلال."
  },
  {
    name: "سمكة شمس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمكة شمس له زعانف وقشور. سمك الشمس النهري حلال."
  },
  {
    name: "نهاش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "نهاش له زعانف وقشور. النهاش الأحمر وأنواع أخرى حلال."
  },
  {
    name: "أوباكاباكا",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أوباكاباكا له زعانف وقشور. هو حلال."
  },
  {
    name: "هامور",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "هامور له زعانف وقشور. هذا السمك المرجاني الشائع حلال."
  },
  {
    name: "دنيس",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "دنيس له زعانف وقشور. يُؤكل عادةً في المطبخ اليهودي المتوسطي. هو حلال."
  },
  {
    name: "دنيس أحمر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "دنيس أحمر (تاي) له زعانف وقشور. هو حلال."
  },
  {
    name: "بريم بحري",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بريم بحري له زعانف وقشور. أنواع البريم المختلفة حلال."
  },
  {
    name: "بورجي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بورجي له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "بورجي صغير",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بورجي صغير له زعانف وقشور. هو حلال."
  },
  {
    name: "رأس الخروف",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "رأس الخروف له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "درم",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "درم له زعانف وقشور. الدرم الأحمر والدرم الأسود حلال."
  },
  {
    name: "كروكر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كروكر له زعانف وقشور. هو حلال."
  },
  {
    name: "سمك ضعيف",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمك ضعيف له زعانف وقشور. هو حلال."
  },
  {
    name: "سبوت",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سبوت له زعانف وقشور. هو حلال."
  },
  {
    name: "قرنط",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "قرنط له زعانف وقشور. هو حلال."
  },
  {
    name: "دلفين الذهب",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "دلفين الذهب (سمك الدلفين) له زعانف وقشور. رغم اسمه، فهو سمك وليس ثدييّاً، وهو حلال."
  },
  {
    name: "بومبانو الدلفين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بومبانو الدلفين له زعانف وقشور. هو حلال."
  },
  {
    name: "أمبرجاك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أمبرجاك له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "أمبرجاك أكبر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أمبرجاك أكبر له زعانف وقشور. هو حلال."
  },
  {
    name: "ألماكو جاك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "ألماكو جاك له زعانف وقشور. هو حلال."
  },
  {
    name: "كريفال جاك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كريفال جاك له زعانف وقشور. هو حلال."
  },
  {
    name: "صفراء الذيل",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "صفراء الذيل (أمبرجاك ياباني) له زعانف وقشور. هو حلال."
  },
  {
    name: "الراكض الأزرق",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الراكض الأزرق له زعانف وقشور. هو حلال."
  },
  {
    name: "لوكداون",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "لوكداون له زعانف وقشور. هو حلال."
  },
  {
    name: "بيرميت",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بيرميت له زعانف وقشور. هو حلال."
  },
  {
    name: "بومبانو",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بومبانو له زعانف وقشور. هذا السمك الثمين حلال."
  },
  {
    name: "سمك أزرق",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمك أزرق له زعانف وقشور، مستوفياً شرطي الحلال. هو حلال."
  },
  {
    name: "بارامندي",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بارامندي له زعانف وقشور. هذا السمك الأسترالي حلال."
  },
  {
    name: "باركودا",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "باركودا له زعانف وقشور. هو حلال."
  },
  {
    name: "بوري",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بوري له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "بوري مخطط",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بوري مخطط له زعانف وقشور. هو حلال."
  },
  {
    name: "أبو سيف",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أبو سيف له زعانف ويفقد قشوره بالغاً، لكن التقليد السفاردي يقبله كحلال لأن له قشوراً وهو صغير. هو حلال."
  },
  {
    name: "كوبيا",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "كوبيا له زعانف وقشور صغيرة. يُعتبر حلالاً. هو حلال."
  },
  {
    name: "أوبا",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "أوبا له زعانف وقشور. هو حلال."
  },
  {
    name: "ثلاثي الذيل",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "ثلاثي الذيل له زعانف وقشور. هو حلال."
  },
  {
    name: "تربون",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "تربون له زعانف وقشور. هو حلال من الناحية التقنية وإن كان نادراً ما يُؤكل."
  },
  {
    name: "سيدة السمك",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سيدة السمك له زعانف وقشور. هو حلال."
  },
  {
    name: "بونفيش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "بونفيش له زعانف وقشور. هو حلال."
  },
  {
    name: "إبرة البحر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "إبرة البحر له زعانف وقشور. هو حلال."
  },
  {
    name: "سمكة طائرة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمكة طائرة له زعانف وقشور. هو حلال."
  },
  {
    name: "غارفيش",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "غارفيش (وليس غار النهر) له زعانف وقشور. هو حلال."
  },
  {
    name: "الزناد",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الزناد له زعانف وقشور. هو حلال."
  },
  {
    name: "المبرد",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "المبرد له زعانف وقشور صغيرة. يُعتبر حلالاً. هو حلال."
  },
  {
    name: "شفنين",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "شفنين له زعانف وقشور. هو حلال."
  },
  {
    name: "ببغاء البحر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "ببغاء البحر له زعانف وقشور. هو حلال."
  },
  {
    name: "الجراح",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الجراح له زعانف وقشور. هو حلال."
  },
  {
    name: "ملاك البحر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "ملاك البحر له زعانف وقشور. هو حلال."
  },
  {
    name: "فراشة البحر",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "فراشة البحر له زعانف وقشور. هو حلال."
  },
  {
    name: "الوصيفة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الوصيفة له زعانف وقشور. هو حلال."
  },
  {
    name: "الكاردينال",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "الكاردينال له زعانف وقشور. هو حلال."
  },
  {
    name: "السلطان إبراهيم",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "السلطان إبراهيم له زعانف وقشور. هو سمك حلال."
  },
  {
    name: "سمك الزبدة",
    icon: "🐟",
    isKosher: true,
    family: "أسماك",
    explanation: "سمك الزبدة له زعانف وقشور. هو سمك حلال."
  },
  // --- أسماك ورخويات وقشريات غير حلال ---
  {
    name: "سلور",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سلور يفتقر إلى القشور. ورغم وجود الزعانف، فإن الزعانف والقشور كلتيهما مطلوبتان. ليس حلالاً."
  },
  {
    name: "أنقليس",
    icon: "🐍",
    isKosher: false,
    family: "أسماك",
    explanation: "أنقليس يفتقر إلى قشور قابلة للإزالة. ليس حلالاً."
  },
  {
    name: "شفنين بحري",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "شفنين بحري (بما في ذلك الراي اللساع والشيطان البحري) يفتقر إلى قشور صحيحة. ليس حلالاً."
  },
  {
    name: "سكيت",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سكيت قريب من الراي ويفتقر إلى قشور حلال. ليس حلالاً."
  },
  {
    name: "غار النهر",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "غار النهر له قشور غانويدية، وليست القشور الحقيقية المطلوبة للحلال. ليس حلالاً."
  },
  {
    name: "حفش",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "حفش له صفائح بدلاً من القشور الحقيقية. معظم العلماء الأشكناز يعتبرونه غير حلال، وإن اختلف الرأي السفاردي."
  },
  {
    name: "سمك المجداف",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمك المجداف قريب من الحفش ويفتقر مثله إلى قشور حقيقية قابلة للإزالة. ليس حلالاً."
  },
  {
    name: "جلكى",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "جلكى سمك عديم الفك بلا زعانف ولا قشور حقيقية. ليس حلالاً."
  },
  {
    name: "هاغ",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "هاغ سمك عديم الفك بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سمكة منتفخة",
    icon: "🐡",
    isKosher: false,
    family: "أسماك",
    explanation: "سمكة منتفخة يفتقر إلى قشور حقيقية ويُعتبر غير حلال."
  },
  {
    name: "شمس المحيط",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "شمس المحيط (مولا مولا) يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "سمكة المجداف",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمكة المجداف يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "أبو سيف (أشكنازي)",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "أبو سيف (أشكنازي) حسب التقليد الأشكنازي، أبو سيف ليس حلالاً لأن السمك البالغ بلا قشور، ومعظم العلماء يشترطون بقاءها."
  },
  {
    name: "فرس البحر",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "فرس البحر يفتقر إلى الزعانف والقشور بالمعنى التقليدي. ليس حلالاً."
  },
  {
    name: "سمك الأنبوب",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمك الأنبوب قريب من فرس البحر بلا قشور صحيحة. ليس حلالاً."
  },
  {
    name: "سمكة الحجر",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمكة الحجر يفتقر إلى قشور صحيحة. ليس حلالاً."
  },
  {
    name: "سمكة الضفدع",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمكة الضفدع يفتقر إلى قشور صحيحة. ليس حلالاً."
  },
  {
    name: "الراهب",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "الراهب (الصياد) يفتقر إلى القشور. ليس حلالاً."
  },
  {
    name: "الصياد",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "الصياد يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "سمك الذئب",
    icon: "🐟",
    isKosher: false,
    family: "أسماك",
    explanation: "سمك الذئب يفتقر إلى القشور. ليس حلالاً."
  },
  {
    name: "قرش",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش ليس له قشور صحيحة. الأسنين الجلدية ليست قشوراً حقيقية. ليس حلالاً."
  },
  {
    name: "قرش شائك",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش شائك من القروش الصغيرة بلا قشور حقيقية. ليس حلالاً."
  },
  {
    name: "قرش الممرضة",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش الممرضة كسائر القروش، يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "قرش الحوت",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش الحوت سمك لكنه يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "قرش المطرقة",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش المطرقة يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "قرش الثور",
    icon: "🦈",
    isKosher: false,
    family: "أسماك",
    explanation: "قرش الثور يفتقر إلى قشور حقيقية. ليس حلالاً."
  },
  {
    name: "روبيان",
    icon: "🦐",
    isKosher: false,
    family: "أسماك",
    explanation: "روبيان يفتقر إلى الزعانف والقشور كليهما. جميع الرخويات والقشريات محرّمة (سفر اللاويين 11:10-12)."
  },
  {
    name: "روبيان (أي نوع)",
    icon: "🦐",
    isKosher: false,
    family: "أسماك",
    explanation: "روبيان (أي نوع) جميع أنواع الروبيان — النمر، الأبيض، الوردي — تفتقر إلى الزعانف والقشور. كلها محرّمة."
  },
  {
    name: "كركند",
    icon: "🦞",
    isKosher: false,
    family: "أسماك",
    explanation: "كركند من القشريات بلا زعانف ولا قشور. محرّم."
  },
  {
    name: "كركند شائك",
    icon: "🦞",
    isKosher: false,
    family: "أسماك",
    explanation: "كركند شائك من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "كركند النعل",
    icon: "🦞",
    isKosher: false,
    family: "أسماك",
    explanation: "كركند النعل من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان يفتقر إلى الزعانف والقشور. جميع القشريات محرّمة."
  },
  {
    name: "سرطان أزرق",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان أزرق من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان الملك",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان الملك من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان الثلج",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان الثلج من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان دنجنس",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان دنجنس من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان الحجر",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان الحجر من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان الكمان",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان الكمان من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان الناسك",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان الناسك من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "سرطان حدوة الحصان",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "سرطان حدوة الحصان من المفصليات بلا زعانف ولا قشور. رغم اسمه، فهو ليس سرطاناً حقيقياً. ليس حلالاً."
  },
  {
    name: "جراد البحر",
    icon: "🦞",
    isKosher: false,
    family: "أسماك",
    explanation: "جراد البحر من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "كريل",
    icon: "🦐",
    isKosher: false,
    family: "أسماك",
    explanation: "كريل من القشريات الصغيرة بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "بطلينوس",
    icon: "🦀",
    isKosher: false,
    family: "أسماك",
    explanation: "بطلينوس من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "روبيان السرعوف",
    icon: "🦐",
    isKosher: false,
    family: "أسماك",
    explanation: "روبيان السرعوف من القشريات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "قمل العانة",
    icon: "🦟",
    isKosher: false,
    family: "أسماك",
    explanation: "قمل العانة قشريات طفيلية بلا زعانف ولا قشور. ليست حلالاً."
  },
  {
    name: "برغوث الماء",
    icon: "🦟",
    isKosher: false,
    family: "أسماك",
    explanation: "برغوث الماء (دافنيا) قشريات صغيرة جداً. يجب فلترتها من مياه الشرب لتجنّب المخلوقات المحرّمة."
  },
  {
    name: "حشرة الحبوب",
    icon: "🐛",
    isKosher: false,
    family: "أسماك",
    explanation: "حشرة الحبوب (قمل الخشب) قشريات تعيش على اليابسة. ليس حلالاً."
  },
  {
    name: "محار",
    icon: "🦪",
    isKosher: false,
    family: "أسماك",
    explanation: "محار من الرخويات بلا زعانف ولا قشور. جميع الرخويات محرّمة."
  },
  {
    name: "محار صدفي",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "محار صدفي من الرخويات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "محار الموسى",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "محار الموسى من الرخويات الثنائية الصدفة بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "جيوداك",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "جيوداك من المحار الكبير بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "بلح البحر",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "بلح البحر من الرخويات ويفتقر إلى شروط الحلال للمخلوقات البحرية. ليس حلالاً."
  },
  {
    name: "اسكالوب",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "اسكالوب من الرخويات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "أخطبوط",
    icon: "🐙",
    isKosher: false,
    family: "أسماك",
    explanation: "أخطبوط ليس له زعانف ولا قشور. الرأسقدميات محرّمة."
  },
  {
    name: "حبار",
    icon: "🦑",
    isKosher: false,
    family: "أسماك",
    explanation: "حبار يفتقر إلى الزعانف والقشور. الرأسقدميات ليست حلالاً."
  },
  {
    name: "سبيدج",
    icon: "🦑",
    isKosher: false,
    family: "أسماك",
    explanation: "سبيدج من الرأسقدميات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "نوتيلوس",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "نوتيلوس من الرأسقدميات الرخوية بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "أذن البحر",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "أذن البحر من الرخويات البطنقدميّة بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "حلزون بحري صغير",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "حلزون بحري صغير حلزون بحري صغير بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "ولك",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "ولك حلزون بحري بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "محارة",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "محارة حلزون بحري بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "برنقيل",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "برنقيل من الرخويات البطنقدميّة بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "كيتون",
    icon: "🐚",
    isKosher: false,
    family: "أسماك",
    explanation: "كيتون من الرخويات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "بزاقة البحر",
    icon: "🐌",
    isKosher: false,
    family: "أسماك",
    explanation: "بزاقة البحر من الرخويات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "قنديل البحر",
    icon: "🪼",
    isKosher: false,
    family: "أسماك",
    explanation: "قنديل البحر ليس له زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "قنفذ البحر",
    icon: "🪸",
    isKosher: false,
    family: "أسماك",
    explanation: "قنفذ البحر من شوكيات الجلد بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "نجم البحر",
    icon: "⭐",
    isKosher: false,
    family: "أسماك",
    explanation: "نجم البحر من شوكيات الجلد بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "خيار البحر",
    icon: "🥒",
    isKosher: false,
    family: "أسماك",
    explanation: "خيار البحر من شوكيات الجلد بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "شقائق النعمان البحرية",
    icon: "🪸",
    isKosher: false,
    family: "أسماك",
    explanation: "شقائق النعمان البحرية من اللاسعات بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "مرجان",
    icon: "🪸",
    isKosher: false,
    family: "أسماك",
    explanation: "مرجان من اللاسعات المستعمرة بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "إسفنج بحري",
    icon: "🪸",
    isKosher: false,
    family: "أسماك",
    explanation: "إسفنج بحري حيوان بسيط بلا زعانف ولا قشور. ليس حلالاً."
  },
  {
    name: "دودة بحرية",
    icon: "🪱",
    isKosher: false,
    family: "أسماك",
    explanation: "دودة بحرية من الزواحف البحرية بلا زعانف ولا قشور. ليس حلالاً."
  },
]