/**
 * Każde miejsce ze zdjęciem ma własny wpis i własny adres zdjęcia.
 * Dzięki temu podmiana jednego zdjęcia nie zmienia pozostałych.
 */
const MEDIA = "https://media.base44.com/images/public/6ada23814ca191b088e6074c";

export const IMAGES = {
  // Logo marki — docelowy plik logo (podmień tutaj, aby zmienić logo w całym serwisie)
  logo: "https://media.base44.com/images/public/6ada23814ca191b088e6074c/0f0c6ee41_logo.webp",

  // Strona główna
  home_hero: `${MEDIA}/ba16f2471_792090277_1614687347019961_4250369707302175378_n.jpg`,
  home_brand: `${MEDIA}/c61af5d02_generated_80dd20bf.png`,
  service_kitchen: `${MEDIA}/bc529f7e4_849059130_1650294100125952_1195815505646450953_n.jpg`,
  service_wardrobe: `${MEDIA}/326a30c99_574345839_1362488268906538_5080107212770132872_n2.jpg`,
  service_furniture: `${MEDIA}/d530d06f1_738678122_1558698419285521_8412311436602249127_n.jpg`,
  home_statement: `${MEDIA}/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg`,

  // Kuchnie na wymiar
  kuchnie_hero: `${MEDIA}/a12210257_697120413_1513825807106116_4691554920030265102_n__1_.jpg`,
  kuchnie_story: `${MEDIA}/1088bc40a_849059130_1650294100125952_1195815505646450953_n.jpg`,

  // Meble na wymiar
  meble_hero: `${MEDIA}/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg`,
  meble_story: `${MEDIA}/275eb1db1_772495449_1594548362367193_1683082271444441166_n.jpg`,

  // O firmie
  ofirmie_hero: `${MEDIA}/326a30c99_574345839_1362488268906538_5080107212770132872_n2.jpg`,
  ofirmie_story: `${MEDIA}/06e87a0ce_772889348_1594542979034398_2475049799088168571_n.jpg`,
};

export const SERVICES = [
  {
    number: "01",
    title: "Kuchnie na wymiar",
    description:
      "Przemyślane układy, dopasowana zabudowa i estetyka, która współgra z całym wnętrzem. Kuchnie projektowane z myślą o komforcie codziennego użytkowania.",
  },
  {
    number: "02",
    title: "Szafy i zabudowy",
    description:
      "Indywidualne zabudowy pozwalające lepiej wykorzystać dostępną przestrzeń. Rozwiązania dopasowane do wymiarów pomieszczenia i potrzeb domowników.",
  },
  {
    number: "03",
    title: "Meble na wymiar",
    description:
      "Meble tworzone z myślą o konkretnej przestrzeni, funkcji i estetyce. Rozwiązania, które pomagają zachować spójny charakter wnętrza.",
  },
];

export const VALUES = [
  {
    title: "Indywidualne dopasowanie",
    description:
      "Każda przestrzeń i potrzeby użytkowników są inne. Projekt uwzględnia rzeczywiste wymiary i sposób korzystania z wnętrza.",
  },
  {
    title: "Funkcjonalność na co dzień",
    description:
      "Rozwiązania wspierają wygodę użytkowania i racjonalne zagospodarowanie dostępnego miejsca.",
  },
  {
    title: "Spójna estetyka",
    description:
      "Materiały, proporcje i wykończenia tworzą harmonijną całość z charakterem wnętrza.",
  },
  {
    title: "Dbałość o szczegóły",
    description:
      "Przemyślane detale wpływają na odbiór i codzienną funkcjonalność mebli.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Rozmowa",
    description: "Poznanie potrzeb, oczekiwań i charakteru wnętrza.",
  },
  {
    number: "02",
    title: "Ustalenia projektowe",
    description: "Omówienie rozwiązań, wymiarów, materiałów i zakresu zamówienia.",
  },
  {
    number: "03",
    title: "Realizacja",
    description: "Przygotowanie mebli zgodnie z uzgodnionymi ustaleniami.",
  },
  {
    number: "04",
    title: "Finalizacja",
    description: "Montaż i zakończenie prac, jeśli są częścią zamówienia.",
  },
];

export const HOME_FAQ = [
  {
    question: "Jak rozpocząć współpracę z HiWall?",
    answer:
      "Najprościej: wyślij zapytanie przez formularz kontaktowy lub zadzwoń. Opisz krótko swoje wnętrze i potrzeby — wrócimy do Ciebie, aby ustalić szczegóły i kolejne kroki.",
  },
  {
    question: "Jakie informacje przygotować przed zapytaniem o wycenę?",
    answer:
      "Rodzaj mebli, przybliżone wymiary pomieszczenia, miejsce realizacji oraz zdjęcia lub inspiracje. Jeśli nie masz wymiarów — to nie problem, sposób pomiaru ustalamy indywidualnie.",
  },
  {
    question: "Czy można zamówić meble do nietypowego pomieszczenia?",
    answer:
      "Tak. Meble na wymiar projektujemy właśnie po to, aby dopasować zabudowę do skosów, wnęk, słupów i ograniczonej przestrzeni. Każdy układ ustalamy indywidualnie.",
  },
  {
    question: "Jak wygląda ustalanie wymiarów i zakresu projektu?",
    answer:
      "Zakres prac, sposób pomiaru, materiały i montaż omawiamy bezpośrednio podczas rozmowy o projekcie. Szczegóły ustalamy indywidualnie dla każdego wnętrza.",
  },
  {
    question: "Czy HiWall realizuje zamówienia poza Wrocławiem?",
    answer:
      "Działamy na terenie Wrocławia i okolic. Jeśli Twoja inwestycja znajduje się dalej, napisz — potwierdzimy, czy realizacja jest możliwa.",
  },
  {
    question: "Od czego zależy koszt mebli na wymiar?",
    answer:
      "Na koszt wpływają wymiary i układ zabudowy, wybrane materiały i fronty, okucia oraz zakres prac. Konkretną wycenę ustalamy po poznaniu projektu — skontaktuj się z nami, aby omówić szczegóły.",
  },
];

export const KITCHEN_FAQ = [
  {
    question: "Jak projektowana jest kuchnia na wymiar?",
    answer:
      "Zaczynamy od rozmowy o potrzebach i sposobie gotowania, następnie ustalamy układ, wymiary i materiały. Projekt dopasowujemy do konkretnego pomieszczenia — jego proporcji, okien, przyłączy i wysokości.",
  },
  {
    question: "Czy zabudowa może sięgać sufitu?",
    answer:
      "Tak. Zabudowa do sufitu pozwala wykorzystać pełną wysokość pomieszczenia, ukryć instalacje i zachować spokojną, uporządkowaną linię frontów.",
  },
  {
    question: "Jakie materiały i fronty są dostępne?",
    answer:
      "Zakres materiałów, frontów i okuć ustalamy indywidualnie podczas rozmowy o projekcie — tak, aby wybór odpowiadał charakterowi wnętrza i sposobowi użytkowania kuchni.",
  },
  {
    question: "Czy pomagacie w doborze rozwiązań do wąskiej kuchni?",
    answer:
      "Tak. W małych i nietypowych kuchniach liczy się każdy centymetr — dobieramy układy, głębokości i rozwiązania przechowywania dopasowane do dostępnej przestrzeni.",
  },
  {
    question: "Ile trwa realizacja kuchni?",
    answer:
      "Terminy ustalamy indywidualnie na etapie rozmowy i potwierdzamy w ustaleniach projektowych. Nie podajemy sztywnych terminów, zanim nie poznamy zakresu prac.",
  },
];

export const FURNITURE_FAQ = [
  {
    question: "Jakie meble można wykonać na wymiar?",
    answer:
      "Szafy, garderoby, zabudowy wnęk, meble do salonu i jadalni, biurka, półki oraz inne rozwiązania dopasowane do konkretnego pomieszczenia.",
  },
  {
    question: "Czy meble można dopasować do skosów i wnęk?",
    answer:
      "Tak. Nietypowe kształty pomieszczeń są jednym z głównych powodów, dla których warto wybrać meble na wymiar — zabudowa powstaje dokładnie pod wymiary wnętrza.",
  },
  {
    question: "Czy istnieje możliwość zachowania spójności z istniejącymi meblami?",
    answer:
      "Tak. Kolorystykę, materiały i proporcje nowej zabudowy ustalamy tak, aby współgrały z tym, co już znajduje się we wnętrzu.",
  },
  {
    question: "Jak zamówić meble na wymiar?",
    answer:
      "Wyślij zapytanie przez formularz lub skontaktuj się telefonicznie. Opisz pomieszczenie i oczekiwania, a my wrócimy do Ciebie z kolejnymi krokami.",
  },
];

/** Galeria realizacji — kuchnie. */
export const KITCHEN_PROJECTS = [
  {
    id: "kuchnia-1",
    title: "Kuchnia w dębie i matowej bieli",
    category: "Kuchnie",
    image: `${MEDIA}/026caaf82_848933567_1650287800126582_433413749947085131_n.jpg`,
    alt: "Kuchnia na wymiar w dębie i matowej bieli z czarnymi uchwytami",
  },
  {
    id: "kuchnia-2",
    title: "Kuchnia z otwartą półką i zabudową AGD",
    category: "Kuchnie",
    image: `${MEDIA}/17d0bd563_655127723_1469270118228352_4457180546474638118_n.jpg`,
    alt: "Kuchnia na wymiar z otwartymi dębowymi półkami i zabudowanym piekarnikiem",
  },
  {
    id: "kuchnia-3",
    title: "Kuchnia w układzie L z kamienną okładziną",
    category: "Kuchnie",
    image: `${MEDIA}/1088bc40a_849059130_1650294100125952_1195815505646450953_n.jpg`,
    alt: "Kuchnia na wymiar w układzie L z matowymi frontami, drewnianym blatem i kamienną okładziną",
  },
  {
    id: "kuchnia-4",
    title: "Kuchnia na poddaszu z jadalnią",
    category: "Kuchnie",
    image: `${MEDIA}/4a3561138_792090277_1614687347019961_4250369707302175378_n.jpg`,
    alt: "Kuchnia na wymiar na poddaszu z białą zabudową i jadalnią z dębowym stołem",
  },
  {
    id: "kuchnia-5",
    title: "Kuchnia w szarości z wysoką zabudową",
    category: "Kuchnie",
    image: `${MEDIA}/b473f28bc_722117084_1543936810761682_2627135042759851741_n__1_.jpg`,
    alt: "Kuchnia na wymiar w szarych i białych frontach z wysoką zabudową piekarnika",
  },
  {
    id: "kuchnia-6",
    title: "Kuchnia w szałwii z marmurowym pasem",
    category: "Kuchnie",
    image: `${MEDIA}/a12210257_697120413_1513825807106116_4691554920030265102_n__1_.jpg`,
    alt: "Kuchnia na wymiar w szałwiowej zieleni z dębowymi szafkami i marmurowym pasem",
  },
  {
    id: "kuchnia-7",
    title: "Kuchnia z graficzną taflą nad blatem",
    category: "Kuchnie",
    image: `${MEDIA}/d879c2dd6_642798555_1451522716669759_8611241723310715554_n.jpg`,
    alt: "Kuchnia na wymiar z białymi frontami i szklaną taflą nad blatem",
  },
  {
    id: "kuchnia-8",
    title: "Kuchnia w dębie i kremowej bieli",
    category: "Kuchnie",
    image: `${MEDIA}/04d0a3de2_595230301_1388974782924553_4979737097914204750_n__2_.jpg`,
    alt: "Kuchnia na wymiar z dębowymi szafkami górnymi i kremowymi frontami",
  },
  {
    id: "kuchnia-9",
    title: "Kuchnia w matowym błękicie",
    category: "Kuchnie",
    image: `${MEDIA}/dda6fcc9b_485920415_1186478086507558_7630652606199265509_n__2_.jpg`,
    alt: "Kuchnia na wymiar w matowym błękicie z wzorzystą okładziną i półwyspem",
  },
  {
    id: "kuchnia-10",
    title: "Kuchnia w orzechu i kremowej bieli",
    category: "Kuchnie",
    image: `${MEDIA}/ee0a2ad30_515436245_1264986348656731_7900367905648873819_n__3_.jpg`,
    alt: "Kuchnia na wymiar z orzechowymi szafkami górnymi i kamiennym blatem",
  },
  {
    id: "kuchnia-11",
    title: "Kuchnia z wyspą w dębie",
    category: "Kuchnie",
    image: `${MEDIA}/d923b6377_605538371_1401089091713122_4196144452300650611_n__1_.jpg`,
    alt: "Kuchnia na wymiar z wyspą i dębowym blatem, z połyskującymi białymi szafkami",
  },
  {
    id: "kuchnia-12",
    title: "Kuchnia w oliwkowej zieleni z niszą",
    category: "Kuchnie",
    image: `${MEDIA}/593ffa232_594972792_1388974786257886_3995120944378527056_n__1_.jpg`,
    alt: "Kuchnia na wymiar w oliwkowej zieleni z podświetlaną niszą na sprzęt AGD",
  },
];

/** Galeria realizacji — szafy, zabudowy i meble na wymiar. */
export const FURNITURE_PROJECTS = [
  {
    id: "meble-1",
    title: "Garderoba z zabudową do sufitu",
    category: "Szafy i zabudowy",
    image: `${MEDIA}/fb924e034_773580838_1594556379033058_5476347865145775015_n.jpg`,
    alt: "Garderoba na wymiar z białą zabudową do sufitu i czarnymi uchwytami",
  },
  {
    id: "meble-2",
    title: "Ściana meblowa z podświetlaną niszą",
    category: "Meble na wymiar",
    image: `${MEDIA}/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg`,
    alt: "Zabudowa ściany w salonie z podświetlaną niszą i szufladami",
  },
  {
    id: "meble-3",
    title: "Szafa w sypialni z otwartymi półkami",
    category: "Szafy i zabudowy",
    image: `${MEDIA}/326a30c99_574345839_1362488268906538_5080107212770132872_n2.jpg`,
    alt: "Szafa na wymiar z otwartymi półkami w sypialni",
  },
  {
    id: "meble-4",
    title: "Meble łazienkowe na wymiar",
    category: "Meble na wymiar",
    image: `${MEDIA}/275eb1db1_772495449_1594548362367193_1683082271444441166_n.jpg`,
    alt: "Meble łazienkowe na wymiar z dębowymi obrzeżami i otwartą półką",
  },
  {
    id: "meble-5",
    title: "Zabudowa łazienkowa w terakocie",
    category: "Meble na wymiar",
    image: `${MEDIA}/442c3a7d1_697095009_1513825950439435_3990732475043632697_n.jpg`,
    alt: "Zabudowa łazienkowa na wymiar w matowej terakocie z mosiężnym uchwytem",
  },
  {
    id: "meble-6",
    title: "Zabudowa przedpokoju z podświetleniem",
    category: "Szafy i zabudowy",
    image: `${MEDIA}/8558b1980_697112549_1513825953772768_7416641211726081607_n.jpg`,
    alt: "Zabudowa przedpokoju na wymiar z matowymi frontami i podświetlaną wnęką",
  },
  {
    id: "meble-7",
    title: "Łóżko piętrowe z biurkiem i szafą",
    category: "Meble na wymiar",
    image: `${MEDIA}/f4771019b_573052051_1362494178905947_7016794148815359697_n__1_.jpg`,
    alt: "Łóżko piętrowe na wymiar z biurkiem i szafą w pokoju dziecięcym",
  },
  {
    id: "meble-8",
    title: "Ściana meblowa z niszą na telewizor",
    category: "Meble na wymiar",
    image: `${MEDIA}/e5f2be64d_773687026_1594516745703688_4087577785876447106_n.jpg`,
    alt: "Ściana meblowa na wymiar z niszą na telewizor i otwartymi półkami",
  },
  {
    id: "meble-9",
    title: "Szafa z lustrem w pełnej wysokości",
    category: "Szafy i zabudowy",
    image: `${MEDIA}/efb0e13f6_515801728_1264990105323022_3030313331526254728_n2.jpg`,
    alt: "Zabudowa szafy na wymiar od podłogi do sufitu z lustrem i mosiężnymi gałkami",
  },
  {
    id: "meble-10",
    title: "Zabudowa łazienkowa z pralką",
    category: "Meble na wymiar",
    image: `${MEDIA}/f1d87ef1d_514359628_1271884397966926_1195527315531330388_n1.jpg`,
    alt: "Zabudowa łazienkowa na wymiar z miejscem na pralkę i wysuwanym koszem",
  },
  {
    id: "meble-11",
    title: "Zabudowa sypialni z zagłówkiem",
    category: "Meble na wymiar",
    image: `${MEDIA}/2e6cc2484_541824290_1309599374195428_1534813189177750907_n2.jpg`,
    alt: "Zabudowa sypialni na wymiar z tapicerowanym zagłówkiem i nocnymi szafkami",
  },
  {
    id: "meble-12",
    title: "Szafa z podświetlanym wnętrzem",
    category: "Szafy i zabudowy",
    image: `${MEDIA}/3e280c7c8_696480494_1513825797106117_4545283706061705997_n.jpg`,
    alt: "Szafa na wymiar z podświetlanym wnętrzem i pięcioma półkami",
  },
];