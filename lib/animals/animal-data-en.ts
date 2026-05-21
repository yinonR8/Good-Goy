import type { Animal } from "./types"

export type { Animal }

export const animalData: Animal[] = [

  // ══════════════════════════════════════════════════════════════════
  // MAMMALS
  // ══════════════════════════════════════════════════════════════════

  // --- KOSHER MAMMALS ---
  {
    name: "Cow",
    icon: "🐄",
    isKosher: true,
    family: "Mammals",
    explanation: "Cows have split hooves and chew their cud, meeting both Torah requirements (Leviticus 11:3). They must be slaughtered according to shechita."
  },
  {
    name: "Sheep",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Sheep possess both signs of a kosher land animal: split hooves and cud-chewing. A staple of Jewish cuisine for millennia."
  },
  {
    name: "Goat",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "Goats have cloven hooves and chew their cud. They were commonly offered as sacrifices in the Temple."
  },
  {
    name: "Lamb",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Lambs (young sheep) have split hooves and chew cud. Lamb is traditionally eaten on Passover and other holidays."
  },
  {
    name: "Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Deer have split hooves and chew cud. However, wild deer are difficult to slaughter according to shechita, making kosher venison rare."
  },
  {
    name: "Roe Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Roe deer have split hooves and chew cud. They are mentioned among the permitted animals in Deuteronomy 14:5."
  },
  {
    name: "Fallow Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Fallow deer have split hooves and chew cud. They are among the deer species listed as permitted in the Torah."
  },
  {
    name: "Red Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Red deer have split hooves and chew cud, satisfying both criteria for kosher land animals."
  },
  {
    name: "Sika Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Sika deer have split hooves and chew cud. As ruminants with cloven hooves they meet both Torah requirements."
  },
  {
    name: "Mule Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Mule deer have split hooves and chew cud. They are kosher in principle."
  },
  {
    name: "White-tailed Deer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "White-tailed deer have split hooves and chew cud. A common deer in North America that is kosher in principle."
  },
  {
    name: "Reindeer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Reindeer have split hooves and chew cud like other cervids, making them technically kosher."
  },
  {
    name: "Caribou",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Caribou (a type of reindeer) have split hooves and chew cud. They are kosher when properly slaughtered."
  },
  {
    name: "Elk",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Elk have split hooves and chew cud like other cervids. They must be properly slaughtered according to shechita."
  },
  {
    name: "Moose",
    icon: "🫎",
    isKosher: true,
    family: "Mammals",
    explanation: "Moose have split hooves and chew their cud. As wild animals, proper kosher slaughter is challenging but technically they are permitted."
  },
  {
    name: "Bison",
    icon: "🦬",
    isKosher: true,
    family: "Mammals",
    explanation: "Bison (buffalo) have split hooves and chew their cud, meeting both Torah requirements. Kosher bison meat is available from specialty producers."
  },
  {
    name: "Wisent",
    icon: "🦬",
    isKosher: true,
    family: "Mammals",
    explanation: "European bison (wisent) have split hooves and chew cud. They are kosher like their American cousins."
  },
  {
    name: "Water Buffalo",
    icon: "🐃",
    isKosher: true,
    family: "Mammals",
    explanation: "Water buffalo have split hooves and chew cud. They are kosher when properly slaughtered according to shechita."
  },
  {
    name: "Wildebeest",
    icon: "🐃",
    isKosher: true,
    family: "Mammals",
    explanation: "Wildebeest (gnu) are bovines with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Yak",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Yaks have split hooves and chew cud. They meet the requirements for kosher land animals."
  },
  {
    name: "Zebu",
    icon: "🐄",
    isKosher: true,
    family: "Mammals",
    explanation: "Zebu (humped cattle) are domestic cattle with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Gaur",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Gaur are large wild cattle with split hooves and cud-chewing. They are kosher in principle."
  },
  {
    name: "Banteng",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Banteng are wild cattle with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Kouprey",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Kouprey are rare wild cattle with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Muskox",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Muskoxen have split hooves and chew cud. They are kosher."
  },
  {
    name: "Takin",
    icon: "🐂",
    isKosher: true,
    family: "Mammals",
    explanation: "Takin are large goat-antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Giraffe",
    icon: "🦒",
    isKosher: true,
    family: "Mammals",
    explanation: "Giraffes have split hooves and chew cud, making them technically kosher. However, the location for proper shechita is debated, and they are rarely consumed."
  },
  {
    name: "Ibex",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "Ibex have split hooves and chew cud like goats. They are mentioned in the Torah as a permitted species."
  },
  {
    name: "Mountain Goat",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "North American mountain goats have split hooves and chew cud. They are kosher."
  },
  {
    name: "Chamois",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "Chamois are mountain ungulates with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Markhor",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "Markhors are wild goats with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Tahr",
    icon: "🐐",
    isKosher: true,
    family: "Mammals",
    explanation: "Tahr are wild goats with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Bighorn Sheep",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Bighorn sheep have split hooves and chew cud. They are kosher."
  },
  {
    name: "Dall Sheep",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Dall sheep have split hooves and chew cud. They are kosher."
  },
  {
    name: "Mouflon",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Mouflon are wild sheep with split hooves and cud-chewing. They are a kosher animal."
  },
  {
    name: "Urial",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Urial are wild sheep with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Argali",
    icon: "🐑",
    isKosher: true,
    family: "Mammals",
    explanation: "Argali are the largest wild sheep with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Antelope",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Antelopes have split hooves and chew cud. Various species are mentioned in the Torah as permitted animals."
  },
  {
    name: "Gazelle",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Gazelles have split hooves and chew cud. They are explicitly mentioned as kosher in Deuteronomy 14:5."
  },
  {
    name: "Springbok",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Springbok are antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Impala",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Impalas are antelopes with split hooves and cud-chewing, meeting both Torah requirements."
  },
  {
    name: "Kudu",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Kudu are large antelopes with split hooves and cud-chewing, meeting kosher requirements."
  },
  {
    name: "Eland",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Eland are the largest antelopes. They have split hooves and chew cud, making them kosher."
  },
  {
    name: "Oryx",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Oryx are antelopes with split hooves and cud-chewing. Some authorities believe the oryx may be the re'em of the Torah."
  },
  {
    name: "Gemsbok",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Gemsbok (a type of oryx) have split hooves and chew cud. They are kosher."
  },
  {
    name: "Addax",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Addax are antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Topi",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Topi are antelopes with split hooves and cud-chewing, meeting kosher requirements."
  },
  {
    name: "Hartebeest",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Hartebeest are antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Steenbok",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Steenbok are small antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Dik-dik",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Dik-diks are tiny antelopes with split hooves and cud-chewing, meeting both Torah requirements."
  },
  {
    name: "Duiker",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Duikers are small antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Klipspringer",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Klipspringers are small rock-dwelling antelopes with split hooves and cud-chewing."
  },
  {
    name: "Nyala",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Nyala are spiral-horned antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Bushbuck",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Bushbuck are antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Sitatunga",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Sitatunga are semi-aquatic antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Sable Antelope",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Sable antelopes have split hooves and chew cud, meeting both Torah requirements."
  },
  {
    name: "Roan Antelope",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Roan antelopes have split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Waterbuck",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Waterbuck are large antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Reedbuck",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Reedbuck are antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Pronghorn",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Pronghorn are North American ungulates with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Saiga",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Saiga are steppe antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Nilgai",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Nilgai (blue bull) are large Asian antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Blackbuck",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "Blackbuck are Indian antelopes with split hooves and cud-chewing. They are kosher."
  },
  {
    name: "Four-horned Antelope",
    icon: "🦌",
    isKosher: true,
    family: "Mammals",
    explanation: "The four-horned antelope has split hooves and chews cud. It is kosher."
  },

  // --- NON-KOSHER MAMMALS ---
  {
    name: "Pig",
    icon: "🐷",
    isKosher: false,
    family: "Mammals",
    explanation: "Pigs have split hooves but do not chew their cud. The Torah explicitly forbids pork (Leviticus 11:7)."
  },
  {
    name: "Wild Boar",
    icon: "🐗",
    isKosher: false,
    family: "Mammals",
    explanation: "Wild boars, like pigs, have split hooves but do not chew cud. They are forbidden."
  },
  {
    name: "Warthog",
    icon: "🐗",
    isKosher: false,
    family: "Mammals",
    explanation: "Warthogs are wild pigs with split hooves but do not chew cud. They are not kosher."
  },
  {
    name: "Babirusa",
    icon: "🐗",
    isKosher: false,
    family: "Mammals",
    explanation: "Babirusas are pig relatives with split hooves but do not chew cud. They are not kosher."
  },
  {
    name: "Peccary",
    icon: "🐗",
    isKosher: false,
    family: "Mammals",
    explanation: "Peccaries (javelinas) are pig-like animals with split hooves but do not chew cud. They are not kosher."
  },
  {
    name: "Horse",
    icon: "🐴",
    isKosher: false,
    family: "Mammals",
    explanation: "Horses have neither split hooves nor do they chew cud. They fail both requirements."
  },
  {
    name: "Donkey",
    icon: "🫏",
    isKosher: false,
    family: "Mammals",
    explanation: "Donkeys do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Zebra",
    icon: "🦓",
    isKosher: false,
    family: "Mammals",
    explanation: "Zebras, like horses, lack split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Camel",
    icon: "🐪",
    isKosher: false,
    family: "Mammals",
    explanation: "Camels chew their cud but their hooves are not fully split. The Torah explicitly forbids them (Leviticus 11:4)."
  },
  {
    name: "Llama",
    icon: "🦙",
    isKosher: false,
    family: "Mammals",
    explanation: "Llamas chew cud but do not have fully split hooves like camels. They are not kosher."
  },
  {
    name: "Alpaca",
    icon: "🦙",
    isKosher: false,
    family: "Mammals",
    explanation: "Alpacas, like llamas, chew cud but lack properly split hooves. They are not kosher."
  },
  {
    name: "Rabbit",
    icon: "🐰",
    isKosher: false,
    family: "Mammals",
    explanation: "Rabbits appear to chew cud but do not have split hooves. The Torah specifically forbids them (Leviticus 11:6)."
  },
  {
    name: "Hare",
    icon: "🐇",
    isKosher: false,
    family: "Mammals",
    explanation: "Hares, like rabbits, lack split hooves despite appearing to chew cud. They are explicitly forbidden."
  },
  {
    name: "Pika",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Pikas are lagomorphs related to rabbits without split hooves. They are not kosher."
  },
  {
    name: "Cat",
    icon: "🐈",
    isKosher: false,
    family: "Mammals",
    explanation: "Cats are carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Lion",
    icon: "🦁",
    isKosher: false,
    family: "Mammals",
    explanation: "Lions are carnivorous predators without split hooves or cud-chewing. Predatory mammals are forbidden."
  },
  {
    name: "Tiger",
    icon: "🐅",
    isKosher: false,
    family: "Mammals",
    explanation: "Tigers are predatory carnivores lacking the signs of kosher animals."
  },
  {
    name: "Leopard",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Leopards are predatory cats without kosher characteristics."
  },
  {
    name: "Cheetah",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Cheetahs are predatory cats and do not have kosher characteristics."
  },
  {
    name: "Panther",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Panthers (black leopards/jaguars) are predatory cats, not kosher."
  },
  {
    name: "Jaguar",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Jaguars are predatory cats without split hooves or cud-chewing."
  },
  {
    name: "Cougar",
    icon: "🦁",
    isKosher: false,
    family: "Mammals",
    explanation: "Cougars (mountain lions) are predatory cats, not kosher."
  },
  {
    name: "Lynx",
    icon: "🐈",
    isKosher: false,
    family: "Mammals",
    explanation: "Lynx are wild cats and predators. They are not kosher."
  },
  {
    name: "Snow Leopard",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Snow leopards are predatory big cats without kosher characteristics."
  },
  {
    name: "Clouded Leopard",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Clouded leopards are wild cats and carnivores. They are not kosher."
  },
  {
    name: "Bobcat",
    icon: "🐈",
    isKosher: false,
    family: "Mammals",
    explanation: "Bobcats are wild cats and carnivores without kosher characteristics."
  },
  {
    name: "Puma",
    icon: "🦁",
    isKosher: false,
    family: "Mammals",
    explanation: "Pumas (mountain lions) are predatory cats without split hooves or cud-chewing."
  },
  {
    name: "Serval",
    icon: "🐈",
    isKosher: false,
    family: "Mammals",
    explanation: "Servals are wild cats and carnivores. They are not kosher."
  },
  {
    name: "Ocelot",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Ocelots are wild cats and carnivores without kosher characteristics."
  },
  {
    name: "Margay",
    icon: "🐆",
    isKosher: false,
    family: "Mammals",
    explanation: "Margays are small wild cats and carnivores. They are not kosher."
  },
  {
    name: "Caracal",
    icon: "🐈",
    isKosher: false,
    family: "Mammals",
    explanation: "Caracals are wild cats and carnivores without kosher characteristics."
  },
  {
    name: "Dog",
    icon: "🐕",
    isKosher: false,
    family: "Mammals",
    explanation: "Dogs are carnivorous, do not have split hooves, and do not chew cud. They are not food animals."
  },
  {
    name: "Wolf",
    icon: "🐺",
    isKosher: false,
    family: "Mammals",
    explanation: "Wolves are carnivorous predators without kosher characteristics."
  },
  {
    name: "Fox",
    icon: "🦊",
    isKosher: false,
    family: "Mammals",
    explanation: "Foxes are carnivores without split hooves or cud-chewing."
  },
  {
    name: "Dingo",
    icon: "🐕",
    isKosher: false,
    family: "Mammals",
    explanation: "Dingoes are wild dogs and carnivores. They are not kosher."
  },
  {
    name: "Coyote",
    icon: "🐺",
    isKosher: false,
    family: "Mammals",
    explanation: "Coyotes are carnivorous canids without kosher characteristics."
  },
  {
    name: "Jackal",
    icon: "🐺",
    isKosher: false,
    family: "Mammals",
    explanation: "Jackals are carnivorous canids without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Wild Dog",
    icon: "🐕",
    isKosher: false,
    family: "Mammals",
    explanation: "African wild dogs are carnivores without kosher characteristics."
  },
  {
    name: "Bear",
    icon: "🐻",
    isKosher: false,
    family: "Mammals",
    explanation: "Bears do not have split hooves and do not chew cud. They are omnivorous predators."
  },
  {
    name: "Polar Bear",
    icon: "🐻‍❄️",
    isKosher: false,
    family: "Mammals",
    explanation: "Polar bears are carnivorous predators without kosher characteristics."
  },
  {
    name: "Panda",
    icon: "🐼",
    isKosher: false,
    family: "Mammals",
    explanation: "Pandas are bears and lack the signs of kosher animals despite being herbivorous."
  },
  {
    name: "Badger",
    icon: "🦡",
    isKosher: false,
    family: "Mammals",
    explanation: "Badgers do not have split hooves and do not chew cud."
  },
  {
    name: "Honey Badger",
    icon: "🦡",
    isKosher: false,
    family: "Mammals",
    explanation: "Honey badgers are carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Otter",
    icon: "🦦",
    isKosher: false,
    family: "Mammals",
    explanation: "Otters are carnivores without kosher characteristics."
  },
  {
    name: "Weasel",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Weasels are carnivores explicitly mentioned as forbidden in the Torah (Leviticus 11:29)."
  },
  {
    name: "Ferret",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Ferrets are domesticated weasels and carnivores. They are not kosher."
  },
  {
    name: "Mink",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Mink are carnivorous mustelids without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Stoat",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Stoats (ermines) are carnivorous mustelids. They are not kosher."
  },
  {
    name: "Wolverine",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Wolverines are large carnivorous mustelids without kosher characteristics."
  },
  {
    name: "Civet",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Civets are carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Binturong",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Binturongs are carnivorous viverrids without kosher characteristics."
  },
  {
    name: "Genet",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Genets are carnivorous viverrids without kosher characteristics."
  },
  {
    name: "Fossa",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Fossas are carnivorous Madagascan mammals without kosher characteristics."
  },
  {
    name: "Hyena",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Hyenas are carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Striped Hyena",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Striped hyenas are carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Aardwolf",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Aardwolves are hyena relatives without kosher characteristics."
  },
  {
    name: "Meerkat",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Meerkats are small carnivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Mongoose",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Mongooses are carnivores without kosher characteristics."
  },
  {
    name: "Monkey",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Monkeys do not have split hooves and do not chew cud. They are not permitted."
  },
  {
    name: "Gorilla",
    icon: "🦍",
    isKosher: false,
    family: "Mammals",
    explanation: "Gorillas lack the signs of kosher animals. Primates are not kosher."
  },
  {
    name: "Chimpanzee",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Chimpanzees are primates without kosher characteristics."
  },
  {
    name: "Orangutan",
    icon: "🦧",
    isKosher: false,
    family: "Mammals",
    explanation: "Orangutans are primates without split hooves or cud-chewing."
  },
  {
    name: "Mandrill",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Mandrills are primates without kosher characteristics."
  },
  {
    name: "Baboon",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Baboons are primates without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Gibbon",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Gibbons are primates without kosher characteristics."
  },
  {
    name: "Lemur",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Lemurs are primates without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Loris",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Lorises are primates without kosher characteristics."
  },
  {
    name: "Tarsier",
    icon: "🐒",
    isKosher: false,
    family: "Mammals",
    explanation: "Tarsiers are primates without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Elephant",
    icon: "🐘",
    isKosher: false,
    family: "Mammals",
    explanation: "Elephants do not have split hooves and do not chew cud in the required manner."
  },
  {
    name: "Rhinoceros",
    icon: "🦏",
    isKosher: false,
    family: "Mammals",
    explanation: "Rhinoceroses do not have split hooves and do not chew cud."
  },
  {
    name: "Hippopotamus",
    icon: "🦛",
    isKosher: false,
    family: "Mammals",
    explanation: "Hippos do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Tapir",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Tapirs are odd-toed ungulates without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Baird's Tapir",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Baird's tapirs, like all tapirs, lack split hooves and cud-chewing. They are not kosher."
  },
  {
    name: "Okapi",
    icon: "🦒",
    isKosher: false,
    family: "Mammals",
    explanation: "Despite being related to giraffes, okapi status is debated. They chew cud but hoof structure is uncertain."
  },
  {
    name: "Kangaroo",
    icon: "🦘",
    isKosher: false,
    family: "Mammals",
    explanation: "Kangaroos do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Koala",
    icon: "🐨",
    isKosher: false,
    family: "Mammals",
    explanation: "Koalas do not have split hooves and are not ruminants. They are not kosher."
  },
  {
    name: "Wallaby",
    icon: "🦘",
    isKosher: false,
    family: "Mammals",
    explanation: "Wallabies are marsupials without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Quokka",
    icon: "🦘",
    isKosher: false,
    family: "Mammals",
    explanation: "Quokkas are marsupials without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Wombat",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Wombats are marsupials without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Opossum",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Opossums are marsupials without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Tasmanian Devil",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Tasmanian devils are carnivorous marsupials without kosher characteristics."
  },
  {
    name: "Platypus",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Platypuses are monotremes without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Echidna",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Echidnas are monotremes without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Sloth",
    icon: "🦥",
    isKosher: false,
    family: "Mammals",
    explanation: "Sloths do not have split hooves and do not chew cud."
  },
  {
    name: "Raccoon",
    icon: "🦝",
    isKosher: false,
    family: "Mammals",
    explanation: "Raccoons are omnivores without split hooves or cud-chewing."
  },
  {
    name: "Skunk",
    icon: "🦨",
    isKosher: false,
    family: "Mammals",
    explanation: "Skunks lack the signs of kosher animals."
  },
  {
    name: "Hedgehog",
    icon: "🦔",
    isKosher: false,
    family: "Mammals",
    explanation: "Hedgehogs do not have split hooves and do not chew cud."
  },
  {
    name: "Porcupine",
    icon: "🦔",
    isKosher: false,
    family: "Mammals",
    explanation: "Porcupines are rodents without kosher characteristics."
  },
  {
    name: "Bat",
    icon: "🦇",
    isKosher: false,
    family: "Mammals",
    explanation: "Bats are explicitly listed as forbidden in the Torah (Leviticus 11:19)."
  },
  {
    name: "Aardvark",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Aardvarks do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Anteater",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Anteaters do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Armadillo",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Armadillos do not have split hooves and do not chew cud. They are not kosher."
  },
  {
    name: "Pangolin",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Pangolins are scale-covered mammals without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Mole",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Moles are insectivores without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Shrew",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Shrews are small insectivorous mammals mentioned among the forbidden swarming creatures."
  },
  {
    name: "Tenrec",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Tenrecs are insectivores without kosher characteristics."
  },
  {
    name: "Desman",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Desmans are aquatic mole-like creatures without kosher characteristics."
  },
  {
    name: "Squirrel",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Squirrels are rodents without split hooves or cud-chewing."
  },
  {
    name: "Mouse",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Mice are swarming creatures explicitly forbidden in the Torah (Leviticus 11:29)."
  },
  {
    name: "Rat",
    icon: "🐀",
    isKosher: false,
    family: "Mammals",
    explanation: "Rats are swarming creatures forbidden under kosher law."
  },
  {
    name: "Hamster",
    icon: "🐹",
    isKosher: false,
    family: "Mammals",
    explanation: "Hamsters are rodents without kosher characteristics."
  },
  {
    name: "Guinea Pig",
    icon: "🐹",
    isKosher: false,
    family: "Mammals",
    explanation: "Guinea pigs are rodents and do not meet kosher requirements."
  },
  {
    name: "Beaver",
    icon: "🦫",
    isKosher: false,
    family: "Mammals",
    explanation: "Beavers are rodents without split hooves or cud-chewing."
  },
  {
    name: "Capybara",
    icon: "🐾",
    isKosher: false,
    family: "Mammals",
    explanation: "Capybaras are the world's largest rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Nutria",
    icon: "🦫",
    isKosher: false,
    family: "Mammals",
    explanation: "Nutria (coypu) are large rodents without kosher characteristics."
  },
  {
    name: "Marmot",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Marmots are large ground squirrels without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Prairie Dog",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Prairie dogs are rodents without kosher characteristics."
  },
  {
    name: "Groundhog",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Groundhogs (woodchucks) are rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Gopher",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Gophers are burrowing rodents without kosher characteristics."
  },
  {
    name: "Vole",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Voles are small rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Lemming",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Lemmings are small rodents without kosher characteristics."
  },
  {
    name: "Gerbil",
    icon: "🐹",
    isKosher: false,
    family: "Mammals",
    explanation: "Gerbils are rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Chinchilla",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Chinchillas are rodents without kosher characteristics."
  },
  {
    name: "Degu",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Degus are South American rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Springhare",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Springhares are rodents that resemble small kangaroos. They lack kosher characteristics."
  },
  {
    name: "Jerboa",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Jerboas are hopping desert rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Flying Squirrel",
    icon: "🐿️",
    isKosher: false,
    family: "Mammals",
    explanation: "Flying squirrels are rodents without kosher characteristics."
  },
  {
    name: "Naked Mole Rat",
    icon: "🐭",
    isKosher: false,
    family: "Mammals",
    explanation: "Naked mole rats are rodents without split hooves or cud-chewing. They are not kosher."
  },
  {
    name: "Whale",
    icon: "🐋",
    isKosher: false,
    family: "Mammals",
    explanation: "Whales are mammals without fins or scales. Marine mammals are not kosher."
  },
  {
    name: "Dolphin",
    icon: "🐬",
    isKosher: false,
    family: "Mammals",
    explanation: "Dolphins are marine mammals lacking fins and scales. They are not kosher."
  },
  {
    name: "Seal",
    icon: "🦭",
    isKosher: false,
    family: "Mammals",
    explanation: "Seals are marine mammals without fins or scales. They are not kosher."
  },
  {
    name: "Sea Lion",
    icon: "🦭",
    isKosher: false,
    family: "Mammals",
    explanation: "Sea lions are marine mammals without kosher characteristics."
  },
  {
    name: "Walrus",
    icon: "🦭",
    isKosher: false,
    family: "Mammals",
    explanation: "Walruses are marine mammals without fins or scales."
  },
  {
    name: "Manatee",
    icon: "🦭",
    isKosher: false,
    family: "Mammals",
    explanation: "Manatees are marine mammals without kosher characteristics."
  },

  // ══════════════════════════════════════════════════════════════════
  // BIRDS
  // ══════════════════════════════════════════════════════════════════

  // --- KOSHER BIRDS ---
  {
    name: "Chicken",
    icon: "🐔",
    isKosher: true,
    family: "Birds",
    explanation: "Chickens are among the traditional kosher birds. They are not predatory and must be slaughtered by shechita."
  },
  {
    name: "Turkey",
    icon: "🦃",
    isKosher: true,
    family: "Birds",
    explanation: "Turkey is accepted as kosher by most communities. It shares characteristics with other kosher birds and has been accepted by tradition."
  },
  {
    name: "Duck",
    icon: "🦆",
    isKosher: true,
    family: "Birds",
    explanation: "Ducks are kosher birds according to Jewish tradition. They must be properly slaughtered and certain parts removed."
  },
  {
    name: "Muscovy Duck",
    icon: "🦆",
    isKosher: true,
    family: "Birds",
    explanation: "Muscovy ducks are accepted as kosher in most communities with a tradition of eating them."
  },
  {
    name: "Goose",
    icon: "🪿",
    isKosher: true,
    family: "Birds",
    explanation: "Geese are kosher birds. Goose fat (schmaltz) was traditionally used in Ashkenazi cooking."
  },
  {
    name: "Dove",
    icon: "🕊️",
    isKosher: true,
    family: "Birds",
    explanation: "Doves are kosher birds with a long history in Jewish tradition. They were offered as sacrifices in the Temple."
  },
  {
    name: "Pigeon",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Pigeons are kosher birds, related to doves. They were also offered as sacrifices in the Temple."
  },
  {
    name: "Quail",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Quail are kosher birds mentioned in the Torah as food provided to the Israelites in the wilderness (Numbers 11:31-32)."
  },
  {
    name: "Pheasant",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Pheasants are considered kosher by most authorities as they are not predatory and share characteristics with accepted birds."
  },
  {
    name: "Guinea Fowl",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Guinea fowl are accepted as kosher in communities with a tradition of eating them. They are similar to chickens."
  },
  {
    name: "Partridge",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Partridges are considered kosher in communities with an established tradition. They are ground-dwelling birds like quail."
  },
  {
    name: "Francolin",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Francolins are ground birds related to partridges. Communities with a tradition of eating them consider them kosher."
  },
  {
    name: "Grouse",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Grouse are ground-dwelling birds related to pheasants. They are considered kosher in many communities."
  },
  {
    name: "Black Grouse",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Black grouse are game birds related to other kosher grouse species."
  },
  {
    name: "Hazel Grouse",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Hazel grouse are small European game birds considered kosher in communities with a tradition."
  },
  {
    name: "Ptarmigan",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Ptarmigans are grouse-like birds. They share the characteristics of other kosher game birds."
  },
  {
    name: "Cornish Hen",
    icon: "🐔",
    isKosher: true,
    family: "Birds",
    explanation: "Cornish hens are a variety of chicken and are fully kosher when properly slaughtered."
  },
  {
    name: "Capon",
    icon: "🐔",
    isKosher: true,
    family: "Birds",
    explanation: "Capons are castrated roosters and are kosher like other chickens when properly slaughtered."
  },
  {
    name: "Jungle Fowl",
    icon: "🐔",
    isKosher: true,
    family: "Birds",
    explanation: "Red jungle fowl are the wild ancestors of chickens. They are kosher like chickens."
  },
  {
    name: "Peahen",
    icon: "🦚",
    isKosher: true,
    family: "Birds",
    explanation: "Peahens (female peacocks) were eaten in some communities with a tradition. Some authorities consider them kosher."
  },
  {
    name: "Snipe",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Snipe are wading birds. Some authorities include them among the kosher birds."
  },
  {
    name: "Woodcock",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Woodcocks are wading birds. Some Sephardic communities have a tradition of eating them."
  },
  {
    name: "Sparrow",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Sparrows are small non-predatory birds with an established tradition of being eaten. They are kosher."
  },
  {
    name: "Finch",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Finches are small seed-eating birds. They are non-predatory and considered kosher in communities with a tradition."
  },
  {
    name: "Canary",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Canaries are small finches and non-predatory. They have the signs of a kosher bird."
  },
  {
    name: "Robin",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Robins are small thrushes and non-predatory. They have the characteristics of a kosher bird."
  },
  {
    name: "Thrush",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Thrushes are non-predatory birds not listed as forbidden in the Torah."
  },
  {
    name: "Blackbird",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Blackbirds (thrushes) are non-predatory birds not listed as forbidden. They are considered kosher by many authorities."
  },
  {
    name: "Swallow",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Swallows are small insectivorous birds not listed as forbidden. Some authorities permit them."
  },
  {
    name: "Swift",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Swifts are aerial birds not listed among the forbidden species."
  },
  {
    name: "Wren",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Wrens are small non-predatory birds not listed as forbidden."
  },
  {
    name: "Starling",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Starlings are not among the forbidden birds and have the signs of a kosher bird."
  },
  {
    name: "Lark",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Larks are small non-predatory birds with a tradition of being eaten in some communities."
  },
  {
    name: "Bunting",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Buntings are seed-eating birds similar to sparrows. They are considered kosher."
  },
  {
    name: "Warbler",
    icon: "🐦",
    isKosher: true,
    family: "Birds",
    explanation: "Warblers are small insectivorous birds not listed as forbidden."
  },

  // --- NON-KOSHER BIRDS ---
  {
    name: "Eagle",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Eagles are birds of prey explicitly listed as forbidden in the Torah (Leviticus 11:13)."
  },
  {
    name: "Hawk",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Hawks are predatory birds forbidden under kosher law."
  },
  {
    name: "Falcon",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Falcons are birds of prey and are not kosher."
  },
  {
    name: "Peregrine Falcon",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Peregrine falcons are birds of prey and not kosher."
  },
  {
    name: "Gyrfalcon",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Gyrfalcons are the largest falcons and birds of prey. They are not kosher."
  },
  {
    name: "Kestrel",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Kestrels are small falcons and birds of prey. They are not kosher."
  },
  {
    name: "Merlin",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Merlins are small falcons and birds of prey. They are not kosher."
  },
  {
    name: "Hobby",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Hobbies are falcons and birds of prey. They are not kosher."
  },
  {
    name: "Osprey",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Ospreys are fish-eating birds of prey listed among the forbidden birds."
  },
  {
    name: "Kite",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Kites are birds of prey listed as forbidden in the Torah (Leviticus 11:14)."
  },
  {
    name: "Harrier",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Harriers are birds of prey and not kosher."
  },
  {
    name: "Goshawk",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Goshawks are large birds of prey. They are not kosher."
  },
  {
    name: "Sparrowhawk",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Sparrowhawks are small birds of prey. They are not kosher."
  },
  {
    name: "Buzzard",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Buzzards are birds of prey. They are not kosher."
  },
  {
    name: "Secretary Bird",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Secretary birds are predatory birds without a kosher tradition."
  },
  {
    name: "Vulture",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Vultures are scavenger birds that eat carrion. They are forbidden."
  },
  {
    name: "Condor",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Condors are large New World vultures and scavengers. They are not kosher."
  },
  {
    name: "Lammergeier",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Lammergeiers (bearded vultures) are listed as forbidden in Leviticus 11:13."
  },
  {
    name: "Egyptian Vulture",
    icon: "🦅",
    isKosher: false,
    family: "Birds",
    explanation: "Egyptian vultures are scavengers listed among the forbidden birds."
  },
  {
    name: "Owl",
    icon: "🦉",
    isKosher: false,
    family: "Birds",
    explanation: "Owls are predatory birds mentioned in the Torah as forbidden (Leviticus 11:16-17)."
  },
  {
    name: "Nightjar",
    icon: "🦉",
    isKosher: false,
    family: "Birds",
    explanation: "Nightjars are nocturnal birds mentioned in some forbidden bird lists."
  },
  {
    name: "Frogmouth",
    icon: "🦉",
    isKosher: false,
    family: "Birds",
    explanation: "Frogmouths are nocturnal birds without a kosher tradition."
  },
  {
    name: "Potoo",
    icon: "🦉",
    isKosher: false,
    family: "Birds",
    explanation: "Potoos are nocturnal South American birds without a kosher tradition."
  },
  {
    name: "Nighthawk",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Nighthawks are listed in some traditions as among the forbidden birds."
  },
  {
    name: "Raven",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Ravens are explicitly listed as forbidden in Leviticus 11:15."
  },
  {
    name: "Crow",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Crows are forbidden birds. The raven is explicitly listed as non-kosher in the Torah."
  },
  {
    name: "Magpie",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Magpies are corvids (related to ravens) and are not kosher."
  },
  {
    name: "Jackdaw",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Jackdaws are corvids and are not kosher."
  },
  {
    name: "Rook",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Rooks are corvids. Like ravens they are not kosher."
  },
  {
    name: "Chough",
    icon: "🐦‍⬛",
    isKosher: false,
    family: "Birds",
    explanation: "Choughs are corvids and are not kosher."
  },
  {
    name: "Jay",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Jays are corvids and, like ravens, are considered non-kosher."
  },
  {
    name: "Nutcracker",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Nutcrackers are corvids and are not kosher."
  },
  {
    name: "Clark's Nutcracker",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Clark's nutcracker is a corvid and is not kosher."
  },
  {
    name: "Stork",
    icon: "🦩",
    isKosher: false,
    family: "Birds",
    explanation: "Storks are listed as forbidden in the Torah (Leviticus 11:19)."
  },
  {
    name: "Heron",
    icon: "🦢",
    isKosher: false,
    family: "Birds",
    explanation: "Herons are listed among the forbidden birds in Leviticus."
  },
  {
    name: "Flamingo",
    icon: "🦩",
    isKosher: false,
    family: "Birds",
    explanation: "Flamingos do not have an established kosher tradition and are not eaten."
  },
  {
    name: "Swan",
    icon: "🦢",
    isKosher: false,
    family: "Birds",
    explanation: "Swans do not have an established kosher tradition and are generally considered forbidden."
  },
  {
    name: "Pelican",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Pelicans are listed among the forbidden birds in the Torah."
  },
  {
    name: "Cormorant",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Cormorants are listed among the forbidden birds in Leviticus 11:17."
  },
  {
    name: "Anhinga",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Anhingas are water birds without an established kosher tradition."
  },
  {
    name: "Darter",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Darters are water birds related to anhingas without a kosher tradition."
  },
  {
    name: "Ibis",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Ibises have no established kosher tradition and are not eaten in Jewish communities."
  },
  {
    name: "Spoonbill",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Spoonbills are wading birds without a kosher tradition."
  },
  {
    name: "Shoebill",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Shoebills are large predatory birds without a kosher tradition."
  },
  {
    name: "Hamerkop",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Hamerkops are African water birds without a kosher tradition."
  },
  {
    name: "Crane",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Cranes have no established kosher tradition and are not eaten."
  },
  {
    name: "Moorhen",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Moorhens are water birds without an established kosher tradition."
  },
  {
    name: "Coot",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Coots are water birds without an established kosher tradition."
  },
  {
    name: "Rail",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Rails are water birds without an established kosher tradition."
  },
  {
    name: "Sungrebe",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Sungrebes are water birds without a kosher tradition."
  },
  {
    name: "Sunbittern",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Sunbitterns are tropical birds without a kosher tradition."
  },
  {
    name: "Limpkin",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Limpkins are wading birds without a kosher tradition."
  },
  {
    name: "Bustard",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Bustards have no established kosher tradition."
  },
  {
    name: "Trumpeter",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Trumpeters are South American birds without a kosher tradition."
  },
  {
    name: "Plover",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Plovers are wading shorebirds without an established kosher tradition."
  },
  {
    name: "Lapwing",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Lapwings are shorebirds without an established kosher tradition."
  },
  {
    name: "Sandpiper",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Sandpipers are shorebirds without an established kosher tradition."
  },
  {
    name: "Curlew",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Curlews are large wading birds without an established kosher tradition."
  },
  {
    name: "Godwit",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Godwits are shorebirds without an established kosher tradition."
  },
  {
    name: "Turnstone",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Turnstones are shorebirds without a kosher tradition."
  },
  {
    name: "Phalarope",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Phalaropes are shorebirds without a kosher tradition."
  },
  {
    name: "Avocet",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Avocets are wading birds without a kosher tradition."
  },
  {
    name: "Stilt",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Stilts are wading birds without a kosher tradition."
  },
  {
    name: "Oystercatcher",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Oystercatchers are shorebirds that eat shellfish. They have no kosher tradition."
  },
  {
    name: "Seagull",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Seagulls are scavenger birds without a kosher tradition."
  },
  {
    name: "Albatross",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Albatrosses have no established kosher tradition and are ocean-going seabirds not eaten in Jewish communities."
  },
  {
    name: "Gannet",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Gannets are seabirds without a kosher tradition. They are not eaten in Jewish communities."
  },
  {
    name: "Booby",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Boobies are seabirds without a kosher tradition."
  },
  {
    name: "Frigatebird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Frigatebirds are seabirds that steal food from others. They have no kosher tradition."
  },
  {
    name: "Tropicbird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Tropicbirds are seabirds without a kosher tradition."
  },
  {
    name: "Skua",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Skuas are predatory seabirds that steal from others. They are not kosher."
  },
  {
    name: "Tern",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Terns are seabirds without an established kosher tradition."
  },
  {
    name: "Puffin",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Puffins are seabirds without an established kosher tradition."
  },
  {
    name: "Auk",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Auks are seabirds without a kosher tradition."
  },
  {
    name: "Guillemot",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Guillemots are seabirds without a kosher tradition."
  },
  {
    name: "Razorbill",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Razorbills are seabirds without a kosher tradition."
  },
  {
    name: "Murre",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Murres are seabirds without a kosher tradition."
  },
  {
    name: "Petrel",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Petrels are ocean seabirds without a kosher tradition."
  },
  {
    name: "Shearwater",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Shearwaters are ocean seabirds without a kosher tradition."
  },
  {
    name: "Storm Petrel",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Storm petrels are tiny seabirds without a kosher tradition."
  },
  {
    name: "Diving Petrel",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Diving petrels are seabirds without a kosher tradition."
  },
  {
    name: "Grebe",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Grebes are diving water birds without a kosher tradition."
  },
  {
    name: "Loon",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Loons are diving water birds without a kosher tradition."
  },
  {
    name: "Ostrich",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Ostriches are explicitly listed as forbidden in the Torah (Leviticus 11:16)."
  },
  {
    name: "Emu",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Emus, like ostriches, are large flightless birds without a kosher tradition."
  },
  {
    name: "Cassowary",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Cassowaries are large flightless birds without a kosher tradition."
  },
  {
    name: "Rhea",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Rheas are large South American flightless birds without a kosher tradition."
  },
  {
    name: "Kiwi",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Kiwis are small New Zealand flightless birds without a kosher tradition."
  },
  {
    name: "Penguin",
    icon: "🐧",
    isKosher: false,
    family: "Birds",
    explanation: "Penguins have no established kosher tradition and are not considered kosher."
  },
  {
    name: "Parrot",
    icon: "🦜",
    isKosher: false,
    family: "Birds",
    explanation: "Parrots have no established kosher tradition. They are not eaten in Jewish communities."
  },
  {
    name: "Peacock",
    icon: "🦚",
    isKosher: false,
    family: "Birds",
    explanation: "Peacocks have no clear kosher tradition and are generally avoided."
  },
  {
    name: "Toucan",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Toucans have no established kosher tradition."
  },
  {
    name: "Hoopoe",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "While the hoopoe (duchifat) is Israel's national bird, it has no established kosher tradition and is not eaten."
  },
  {
    name: "Kingfisher",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Kingfishers are fish-eating birds without a kosher tradition."
  },
  {
    name: "Bee-eater",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Bee-eaters are insectivorous birds without a kosher tradition."
  },
  {
    name: "Roller",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Rollers are colorful birds without an established kosher tradition."
  },
  {
    name: "Cuckoo",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Cuckoos are listed among the forbidden birds in some interpretations of Leviticus 11."
  },
  {
    name: "Roadrunner",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Roadrunners are cuckoo relatives without a kosher tradition. They are predatory."
  },
  {
    name: "Woodpecker",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Woodpeckers are not among the traditionally accepted kosher birds and have no established eating tradition."
  },
  {
    name: "Mockingbird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Mockingbirds have no established kosher tradition and are not eaten."
  },
  {
    name: "Catbird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Catbirds have no established kosher tradition."
  },
  {
    name: "Thrasher",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Thrashers have no established kosher tradition."
  },
  {
    name: "Lyrebird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Lyrebirds are Australian birds without a kosher tradition."
  },
  {
    name: "Bird of Paradise",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Birds of paradise have no established kosher tradition."
  },
  {
    name: "Bowerbird",
    icon: "🐦",
    isKosher: false,
    family: "Birds",
    explanation: "Bowerbirds are Australian birds without a kosher tradition."
  },

  // ══════════════════════════════════════════════════════════════════
  // REPTILES
  // ══════════════════════════════════════════════════════════════════

  // --- NON-KOSHER REPTILES & AMPHIBIANS ---
  {
    name: "Snake",
    icon: "🐍",
    isKosher: false,
    family: "Reptiles",
    explanation: "Snakes are swarming creatures forbidden under Jewish dietary law."
  },
  {
    name: "Sea Snake",
    icon: "🐍",
    isKosher: false,
    family: "Reptiles",
    explanation: "Sea snakes are reptiles without fins or scales. They are not kosher."
  },
  {
    name: "Lizard",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Lizards are swarming creatures forbidden in the Torah (Leviticus 11:29-30)."
  },
  {
    name: "Gecko",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Geckos are lizards and are forbidden as swarming creatures."
  },
  {
    name: "Iguana",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Iguanas are reptiles and are not kosher."
  },
  {
    name: "Chameleon",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Chameleons are lizards explicitly mentioned as forbidden in Leviticus."
  },
  {
    name: "Crocodile",
    icon: "🐊",
    isKosher: false,
    family: "Reptiles",
    explanation: "Crocodiles are reptiles without kosher characteristics."
  },
  {
    name: "Alligator",
    icon: "🐊",
    isKosher: false,
    family: "Reptiles",
    explanation: "Alligators are reptiles and are not kosher."
  },
  {
    name: "Turtle",
    icon: "🐢",
    isKosher: false,
    family: "Reptiles",
    explanation: "Turtles are reptiles without kosher characteristics."
  },
  {
    name: "Tortoise",
    icon: "🐢",
    isKosher: false,
    family: "Reptiles",
    explanation: "Tortoises are reptiles and are not kosher."
  },
  {
    name: "Sea Turtle",
    icon: "🐢",
    isKosher: false,
    family: "Reptiles",
    explanation: "Sea turtles are reptiles without fins or scales. They are not kosher."
  },
  {
    name: "Salamander",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Salamanders are amphibians and are not kosher."
  },
  {
    name: "Newt",
    icon: "🦎",
    isKosher: false,
    family: "Reptiles",
    explanation: "Newts are amphibians and are not kosher."
  },
  {
    name: "Frog",
    icon: "🐸",
    isKosher: false,
    family: "Reptiles",
    explanation: "Frogs are swarming creatures explicitly forbidden in the Torah (Leviticus 11:29-30)."
  },
  {
    name: "Toad",
    icon: "🐸",
    isKosher: false,
    family: "Reptiles",
    explanation: "Toads are amphibians and are not kosher."
  },

  // ══════════════════════════════════════════════════════════════════
  // FISH
  // ══════════════════════════════════════════════════════════════════

  // --- KOSHER FISH ---
  {
    name: "Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Salmon has both fins and scales, the two requirements for kosher fish (Leviticus 11:9). Fish do not require shechita."
  },
  {
    name: "Atlantic Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Atlantic salmon have fins and scales. They are one of the most popular kosher fish."
  },
  {
    name: "Chinook Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Chinook (king) salmon have fins and scales. They are kosher."
  },
  {
    name: "Sockeye Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sockeye salmon have fins and scales. They are kosher."
  },
  {
    name: "Coho Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Coho salmon have fins and scales. They are kosher."
  },
  {
    name: "Pink Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pink salmon have fins and scales. They are kosher."
  },
  {
    name: "Chum Salmon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Chum salmon have fins and scales. They are kosher."
  },
  {
    name: "Trout",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Trout has fins and easily visible scales, making it clearly kosher."
  },
  {
    name: "Rainbow Trout",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Rainbow trout have fins and scales. They are a very popular kosher fish."
  },
  {
    name: "Brown Trout",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Brown trout have fins and scales. They are kosher."
  },
  {
    name: "Brook Trout",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Brook trout have fins and scales. They are kosher."
  },
  {
    name: "Lake Trout",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Lake trout have fins and scales. They are kosher."
  },
  {
    name: "Arctic Char",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Arctic char have fins and scales. They are a kosher salmonid."
  },
  {
    name: "Grayling",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Grayling are salmonids with fins and scales. They are kosher."
  },
  {
    name: "Taimen",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Taimen are large salmonids with fins and scales. They are kosher."
  },
  {
    name: "Huchen",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Huchen (Danube salmon) are salmonids with fins and scales. They are kosher."
  },
  {
    name: "Lenok",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Lenok are Asian salmonids with fins and scales. They are kosher."
  },
  {
    name: "Vendace",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Vendace are freshwater salmonids with fins and scales. They are kosher."
  },
  {
    name: "Cisco",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Cisco (lake herring) have fins and scales. They are kosher."
  },
  {
    name: "Inconnu",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Inconnu (sheefish) are large salmonids with fins and scales. They are kosher."
  },
  {
    name: "Tuna",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Tuna possesses both fins and scales. The scales may be small but they are present."
  },
  {
    name: "Yellowfin Tuna",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Yellowfin tuna have fins and scales. They are kosher."
  },
  {
    name: "Bluefin Tuna",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bluefin tuna have fins and scales. They are kosher, though sustainability is a separate concern."
  },
  {
    name: "Bigeye Tuna",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bigeye tuna have fins and scales. They are kosher."
  },
  {
    name: "Ahi",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Ahi (bigeye and yellowfin tuna) have fins and scales. They are kosher."
  },
  {
    name: "Albacore",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Albacore tuna have fins and scales. They are kosher."
  },
  {
    name: "Skipjack",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Skipjack tuna have fins and scales. They are kosher."
  },
  {
    name: "Bonito",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bonito have fins and scales. They are kosher and related to tuna."
  },
  {
    name: "Mackerel",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Mackerel has fins and very small scales, which are sufficient for kosher status."
  },
  {
    name: "Kingfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Kingfish (king mackerel) has fins and scales. It is a kosher fish."
  },
  {
    name: "Wahoo",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Wahoo has fins and scales. This fast-swimming fish is kosher."
  },
  {
    name: "Ono",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Ono (wahoo) have fins and scales. They are kosher."
  },
  {
    name: "Carp",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Carp has clear fins and scales. It is the traditional fish used to make gefilte fish in Ashkenazi cuisine."
  },
  {
    name: "Herring",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Herring has both fins and scales. Pickled herring is a beloved traditional food, especially on Shabbat."
  },
  {
    name: "Pacific Herring",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pacific herring have fins and scales. They are kosher."
  },
  {
    name: "Round Herring",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Round herring have fins and scales. They are kosher."
  },
  {
    name: "Sardine",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sardines have fins and scales. Canned sardines are a convenient kosher protein."
  },
  {
    name: "Pilchard",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pilchards (European sardines) have fins and scales. They are kosher."
  },
  {
    name: "Sprat",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sprats have fins and scales. They are kosher and often sold canned like sardines."
  },
  {
    name: "Anchovy",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Anchovies have fins and scales. They are kosher though often found in non-kosher preparations."
  },
  {
    name: "Smelt",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Smelt has fins and scales. These small fish are kosher."
  },
  {
    name: "Capelin",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Capelin are small smelt-like fish with fins and scales. They are kosher."
  },
  {
    name: "Eulachon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Eulachon (candlefish) are smelt with fins and scales. They are kosher."
  },
  {
    name: "Alewife",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Alewife are herring-like fish with fins and scales. They are kosher."
  },
  {
    name: "Shad",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Shad have fins and scales. American shad is a kosher fish with a traditional following."
  },
  {
    name: "Menhaden",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Menhaden have fins and scales. They are kosher though rarely eaten directly."
  },
  {
    name: "Cod",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Cod has fins and scales. It is a popular kosher fish used in many dishes."
  },
  {
    name: "Atlantic Cod",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Atlantic cod have fins and scales. They are a classic kosher fish."
  },
  {
    name: "Pacific Cod",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pacific cod have fins and scales. They are kosher."
  },
  {
    name: "Haddock",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Haddock has fins and scales. This cod relative is kosher."
  },
  {
    name: "Pollock",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pollock has fins and scales. It is often used in processed fish products."
  },
  {
    name: "Whiting",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Whiting have fins and scales. They are kosher and popular in traditional Jewish cooking."
  },
  {
    name: "Blue Whiting",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Blue whiting have fins and scales. They are kosher."
  },
  {
    name: "Hake",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Hake have fins and scales. They are a popular kosher fish in Sephardic cuisine."
  },
  {
    name: "Silver Hake",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Silver hake have fins and scales. They are kosher."
  },
  {
    name: "Ling",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Ling (a cod relative) have fins and scales. They are kosher."
  },
  {
    name: "Burbot",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Burbot are freshwater cod relatives with fins and scales. They are kosher."
  },
  {
    name: "Halibut",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Halibut has fins and scales, meeting kosher requirements. It is a flatfish but still has the required characteristics."
  },
  {
    name: "Pacific Halibut",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pacific halibut have fins and scales. They are kosher."
  },
  {
    name: "Atlantic Halibut",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Atlantic halibut have fins and scales. They are kosher."
  },
  {
    name: "Flounder",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Flounder has fins and scales despite being a flatfish. It is kosher."
  },
  {
    name: "Witch Flounder",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Witch flounder are flatfish with fins and scales. They are kosher."
  },
  {
    name: "Yellowtail Flounder",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Yellowtail flounder have fins and scales. They are kosher."
  },
  {
    name: "Sole",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sole has fins and scales. This flatfish is kosher and commonly enjoyed."
  },
  {
    name: "Dover Sole",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Dover sole have fins and scales. They are kosher."
  },
  {
    name: "Lemon Sole",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Lemon sole are flatfish with fins and scales. They are kosher."
  },
  {
    name: "Pacific Sole",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pacific sole have fins and scales. They are kosher."
  },
  {
    name: "Plaice",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Plaice are flatfish with fins and scales. They are kosher and popular in European Jewish cooking."
  },
  {
    name: "Dab",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Dab are flatfish with fins and scales. They are kosher."
  },
  {
    name: "Turbot",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Turbot are flatfish with fins and scales. They are kosher."
  },
  {
    name: "Tilapia",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Tilapia has fins and clearly visible scales, making it a popular kosher fish."
  },
  {
    name: "Bass",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Most bass species have fins and scales and are kosher. Sea bass and striped bass are common kosher varieties."
  },
  {
    name: "Perch",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Perch has fins and scales. It is a kosher freshwater fish."
  },
  {
    name: "Yellow Perch",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Yellow perch have fins and scales. They are a popular kosher freshwater fish."
  },
  {
    name: "Zander",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Zander (pikeperch) have fins and scales. They are a popular kosher freshwater fish in Europe."
  },
  {
    name: "Walleye",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Walleye have fins and scales. This popular North American fish is kosher."
  },
  {
    name: "Sauger",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sauger are freshwater fish related to walleye with fins and scales. They are kosher."
  },
  {
    name: "Pike",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pike has fins and scales. It is traditionally used in gefilte fish along with carp."
  },
  {
    name: "Whitefish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Whitefish has fins and scales. It is a classic kosher fish, often smoked or used in salads."
  },
  {
    name: "Roach",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Roach are freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Rudd",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Rudd are freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Tench",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Tench are freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Chub",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Chub are freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Dace",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Dace are small freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Gudgeon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Gudgeon are small freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Barbel",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Barbel are freshwater fish with fins and scales. They are kosher."
  },
  {
    name: "Bream (freshwater)",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Freshwater bream have fins and scales. They are used in traditional Ashkenazi gefilte fish."
  },
  {
    name: "Crappie",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Crappie have fins and scales. These freshwater panfish are kosher."
  },
  {
    name: "Bluegill",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bluegill are sunfish with fins and scales. They are kosher."
  },
  {
    name: "Sunfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sunfish have fins and scales. Freshwater sunfish are kosher."
  },
  {
    name: "Snapper",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Snapper has fins and scales. Red snapper and other varieties are kosher."
  },
  {
    name: "Opakapaka",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Opakapaka (Hawaiian pink snapper) have fins and scales. They are kosher."
  },
  {
    name: "Grouper",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Grouper has fins and scales. This popular reef fish is kosher."
  },
  {
    name: "Sea Bream",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sea bream has fins and scales. It is commonly eaten in Mediterranean Jewish cuisine."
  },
  {
    name: "Red Sea Bream",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Red sea bream (tai) has fins and scales. It is kosher."
  },
  {
    name: "Bream",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bream has fins and scales. Various bream species are kosher."
  },
  {
    name: "Porgy",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Porgy has fins and scales. It is a kosher fish."
  },
  {
    name: "Porgee",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Porgee are related to porgy and have fins and scales. They are kosher."
  },
  {
    name: "Sheepshead",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Sheepshead have fins and scales. They are a kosher fish."
  },
  {
    name: "Drum",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Drum fish have fins and scales. Red drum (redfish) and black drum are kosher."
  },
  {
    name: "Croaker",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Croaker have fins and scales. They are kosher."
  },
  {
    name: "Weakfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Weakfish (sea trout) have fins and scales. They are kosher."
  },
  {
    name: "Spot",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Spot fish have fins and scales. They are kosher."
  },
  {
    name: "Grunt",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Grunt fish have fins and scales. They are kosher."
  },
  {
    name: "Mahi-Mahi",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Mahi-mahi (dolphinfish) has fins and scales. Despite its name, it is a fish, not a mammal, and is kosher."
  },
  {
    name: "Pompano Dolphinfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pompano dolphinfish (not the mammal) have fins and scales. They are kosher."
  },
  {
    name: "Amberjack",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Amberjack has fins and scales. It is a kosher fish."
  },
  {
    name: "Greater Amberjack",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Greater amberjack have fins and scales. They are kosher."
  },
  {
    name: "Almaco Jack",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Almaco jack have fins and scales. They are kosher."
  },
  {
    name: "Crevalle Jack",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Crevalle jack have fins and scales. They are kosher."
  },
  {
    name: "Yellowtail",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Yellowtail (Japanese amberjack) has fins and scales. It is kosher."
  },
  {
    name: "Blue Runner",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Blue runner (hardtail) have fins and scales. They are kosher."
  },
  {
    name: "Lookdown",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Lookdown fish have fins and scales. They are kosher."
  },
  {
    name: "Permit",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Permit (a pompano relative) have fins and scales. They are kosher."
  },
  {
    name: "Pompano",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Pompano has fins and scales. This prized fish is kosher."
  },
  {
    name: "Bluefish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bluefish has fins and scales, meeting both kosher requirements."
  },
  {
    name: "Barramundi",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Barramundi has fins and scales. This Australian fish is kosher."
  },
  {
    name: "Barracuda",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Barracuda have fins and scales. They are kosher, though large specimens may have ciguatoxin concerns unrelated to kosher status."
  },
  {
    name: "Mullet",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Mullet has fins and scales. It is a kosher fish found in many waters."
  },
  {
    name: "Mullet (striped)",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Striped mullet have fins and scales. They are kosher."
  },
  {
    name: "Swordfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Swordfish has fins and loses its scales as an adult, but Sephardic tradition accepts it as kosher since it has scales when young."
  },
  {
    name: "Cobia",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Cobia has fins and small scales. It is considered kosher."
  },
  {
    name: "Opah",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Opah (moonfish) have fins and scales. They are kosher."
  },
  {
    name: "Tripletail",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Tripletail have fins and scales. They are kosher."
  },
  {
    name: "Tarpon",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Tarpon have fins and scales. They are technically kosher though rarely eaten."
  },
  {
    name: "Ladyfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Ladyfish have fins and scales. They are kosher."
  },
  {
    name: "Bonefish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Bonefish have fins and scales. They are kosher though rarely eaten due to their bony nature."
  },
  {
    name: "Needlefish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Needlefish have fins and scales. They are kosher."
  },
  {
    name: "Flying Fish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Flying fish have fins and scales. They are kosher."
  },
  {
    name: "Garfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Garfish (not freshwater gar) have fins and scales. The sea garfish is kosher."
  },
  {
    name: "Triggerfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Triggerfish have fins and scales. They are kosher."
  },
  {
    name: "Filefish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Filefish have fins and small scales. They are considered kosher."
  },
  {
    name: "Wrasse",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Wrasse have fins and scales. They are kosher reef fish."
  },
  {
    name: "Parrotfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Parrotfish have fins and scales. They are kosher."
  },
  {
    name: "Surgeonfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Surgeonfish (tang) have fins and scales. They are kosher."
  },
  {
    name: "Angelfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Marine angelfish have fins and scales. They are kosher."
  },
  {
    name: "Butterflyfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Butterflyfish have fins and scales. They are kosher reef fish."
  },
  {
    name: "Damselfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Damselfish have fins and scales. They are kosher."
  },
  {
    name: "Cardinalfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Cardinalfish have fins and scales. They are kosher."
  },
  {
    name: "Goatfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Goatfish have fins and scales. They are a kosher fish."
  },
  {
    name: "Butterfish",
    icon: "🐟",
    isKosher: true,
    family: "Fish",
    explanation: "Butterfish has fins and scales. It is a kosher fish."
  },

  // --- NON-KOSHER FISH, SHELLFISH & INVERTEBRATES ---
  {
    name: "Catfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Catfish lack scales. While they have fins, both fins AND scales are required."
  },
  {
    name: "Eel",
    icon: "🐍",
    isKosher: false,
    family: "Fish",
    explanation: "Eels lack removable scales. They are not kosher."
  },
  {
    name: "Ray",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Rays (including stingrays and manta rays) lack proper scales. They are not kosher."
  },
  {
    name: "Skate",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Skates are related to rays and lack kosher scales."
  },
  {
    name: "Freshwater Gar",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Freshwater gar have ganoid scales, not the type of true scales required for kosher status."
  },
  {
    name: "Sturgeon",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Sturgeon have scutes rather than true scales. Most Ashkenazi authorities consider them non-kosher, though Sephardic opinion differs."
  },
  {
    name: "Paddlefish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Paddlefish are related to sturgeon and similarly lack true removable scales."
  },
  {
    name: "Lamprey",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Lampreys are jawless fish without fins or true scales. They are not kosher."
  },
  {
    name: "Hagfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Hagfish are jawless fish without fins or scales. They are not kosher."
  },
  {
    name: "Pufferfish",
    icon: "🐡",
    isKosher: false,
    family: "Fish",
    explanation: "Pufferfish lack true scales and are considered non-kosher."
  },
  {
    name: "Sunfish (ocean)",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Ocean sunfish (Mola mola) lack true scales. They are not kosher."
  },
  {
    name: "Oarfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Oarfish lack true scales. They are not kosher."
  },
  {
    name: "Swordfish (Ashkenazi)",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "By Ashkenazi tradition, swordfish is not kosher as the adult fish has no scales, which most authorities require to remain present."
  },
  {
    name: "Sea Horse",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Seahorses lack fins and scales in the traditional sense. They are not kosher."
  },
  {
    name: "Pipefish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Pipefish are relatives of seahorses without proper scales. They are not kosher."
  },
  {
    name: "Stonefish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Stonefish lack proper scales. They are not kosher."
  },
  {
    name: "Frogfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Frogfish lack proper scales. They are not kosher."
  },
  {
    name: "Monkfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Monkfish (anglerfish) lack scales. They are not kosher."
  },
  {
    name: "Anglerfish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Anglerfish lack true scales. They are not kosher."
  },
  {
    name: "Wolffish",
    icon: "🐟",
    isKosher: false,
    family: "Fish",
    explanation: "Wolffish lack scales. They are not kosher."
  },
  {
    name: "Shark",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Sharks do not have proper scales. Their dermal denticles are not true scales."
  },
  {
    name: "Spiny Dogfish",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Spiny dogfish are small sharks without true scales. They are not kosher."
  },
  {
    name: "Nurse Shark",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Nurse sharks, like all sharks, lack true scales. They are not kosher."
  },
  {
    name: "Whale Shark",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Whale sharks are fish but lack true scales. They are not kosher."
  },
  {
    name: "Hammerhead Shark",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Hammerhead sharks lack true scales. They are not kosher."
  },
  {
    name: "Bull Shark",
    icon: "🦈",
    isKosher: false,
    family: "Fish",
    explanation: "Bull sharks lack true scales. They are not kosher."
  },
  {
    name: "Shrimp",
    icon: "🦐",
    isKosher: false,
    family: "Fish",
    explanation: "Shrimp lack both fins and scales. All shellfish are forbidden (Leviticus 11:10-12)."
  },
  {
    name: "Shrimp (any variety)",
    icon: "🦐",
    isKosher: false,
    family: "Fish",
    explanation: "All shrimp varieties — tiger, white, pink — lack fins and scales. All are forbidden."
  },
  {
    name: "Lobster",
    icon: "🦞",
    isKosher: false,
    family: "Fish",
    explanation: "Lobsters are shellfish without fins or scales. They are forbidden."
  },
  {
    name: "Spiny Lobster",
    icon: "🦞",
    isKosher: false,
    family: "Fish",
    explanation: "Spiny lobsters are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Slipper Lobster",
    icon: "🦞",
    isKosher: false,
    family: "Fish",
    explanation: "Slipper lobsters are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Crabs lack fins and scales. All crustaceans are forbidden."
  },
  {
    name: "Blue Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Blue crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "King Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "King crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Snow Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Snow crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Dungeness Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Dungeness crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Stone Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Stone crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Fiddler Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Fiddler crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Hermit Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Hermit crabs are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Horseshoe Crab",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Horseshoe crabs are arthropods without fins or scales. Despite the name, they are not true crabs."
  },
  {
    name: "Crawfish",
    icon: "🦞",
    isKosher: false,
    family: "Fish",
    explanation: "Crawfish (crayfish) are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Krill",
    icon: "🦐",
    isKosher: false,
    family: "Fish",
    explanation: "Krill are small crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Barnacle",
    icon: "🦀",
    isKosher: false,
    family: "Fish",
    explanation: "Barnacles are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Mantis Shrimp",
    icon: "🦐",
    isKosher: false,
    family: "Fish",
    explanation: "Mantis shrimp are crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Crab Louse",
    icon: "🦟",
    isKosher: false,
    family: "Fish",
    explanation: "Parasitic crustaceans without fins or scales. They are not kosher."
  },
  {
    name: "Water Flea",
    icon: "🦟",
    isKosher: false,
    family: "Fish",
    explanation: "Water fleas (daphnia) are tiny crustaceans. They must be filtered out of drinking water to avoid forbidden creatures."
  },
  {
    name: "Pill Bug",
    icon: "🐛",
    isKosher: false,
    family: "Fish",
    explanation: "Pill bugs (woodlice) are crustaceans that live on land. They are not kosher."
  },
  {
    name: "Oyster",
    icon: "🦪",
    isKosher: false,
    family: "Fish",
    explanation: "Oysters are mollusks without fins or scales. All shellfish are forbidden."
  },
  {
    name: "Clam",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Clams are mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Razor Clam",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Razor clams are bivalve mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Geoduck",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Geoducks are large clams without fins or scales. They are not kosher."
  },
  {
    name: "Mussel",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Mussels are mollusks and lack the kosher requirements for sea creatures."
  },
  {
    name: "Scallop",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Scallops are mollusks without fins or scales. They are forbidden."
  },
  {
    name: "Octopus",
    icon: "🐙",
    isKosher: false,
    family: "Fish",
    explanation: "Octopus has neither fins nor scales. Cephalopods are forbidden."
  },
  {
    name: "Squid",
    icon: "🦑",
    isKosher: false,
    family: "Fish",
    explanation: "Squid lacks fins and scales. Cephalopods are not kosher."
  },
  {
    name: "Cuttlefish",
    icon: "🦑",
    isKosher: false,
    family: "Fish",
    explanation: "Cuttlefish are cephalopods without fins or scales. They are not kosher."
  },
  {
    name: "Nautilus",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Nautiluses are cephalopod mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Abalone",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Abalone are gastropod mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Periwinkle",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Periwinkles are small sea snails without fins or scales. They are not kosher."
  },
  {
    name: "Whelk",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Whelks are sea snails without fins or scales. They are not kosher."
  },
  {
    name: "Conch",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Conchs are sea snails without fins or scales. They are not kosher."
  },
  {
    name: "Limpet",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Limpets are gastropod mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Chiton",
    icon: "🐚",
    isKosher: false,
    family: "Fish",
    explanation: "Chitons are mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Sea Slug",
    icon: "🐌",
    isKosher: false,
    family: "Fish",
    explanation: "Sea slugs (nudibranchs) are mollusks without fins or scales. They are not kosher."
  },
  {
    name: "Jellyfish",
    icon: "🪼",
    isKosher: false,
    family: "Fish",
    explanation: "Jellyfish have neither fins nor scales. They are not kosher."
  },
  {
    name: "Sea Urchin",
    icon: "🪸",
    isKosher: false,
    family: "Fish",
    explanation: "Sea urchins are echinoderms without fins or scales. They are not kosher."
  },
  {
    name: "Starfish",
    icon: "⭐",
    isKosher: false,
    family: "Fish",
    explanation: "Starfish are echinoderms without fins or scales."
  },
  {
    name: "Sea Cucumber",
    icon: "🥒",
    isKosher: false,
    family: "Fish",
    explanation: "Sea cucumbers are echinoderms without fins or scales."
  },
  {
    name: "Sea Anemone",
    icon: "🪸",
    isKosher: false,
    family: "Fish",
    explanation: "Sea anemones are cnidarians without fins or scales. They are not kosher."
  },
  {
    name: "Coral",
    icon: "🪸",
    isKosher: false,
    family: "Fish",
    explanation: "Coral are colonial cnidarians without fins or scales. They are not kosher."
  },
  {
    name: "Sea Sponge",
    icon: "🪸",
    isKosher: false,
    family: "Fish",
    explanation: "Sea sponges are simple animals without fins or scales. They are not kosher."
  },
  {
    name: "Sea Worm",
    icon: "🪱",
    isKosher: false,
    family: "Fish",
    explanation: "Marine worms are swarming creatures without fins or scales. They are not kosher."
  },
]