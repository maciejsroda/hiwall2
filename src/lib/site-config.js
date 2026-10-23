/**
 * Centralne miejsce z danymi firmy. Puste pola są po prostu ukrywane w serwisie —
 * żadne dane zastępcze nie są publikowane.
 */
export const SITE = {
  name: "HiWall",
  tagline: "Kuchnie i meble na wymiar",
  city: "Wrocław",
  area: "Wrocław i okolice",
  url: "", // np. "https://hiwall.pl" – uzupełnić po podłączeniu domeny (canonical, sitemap)
  phone: "+48 506 169 181",
  email: "meble@hiwall.pl",
  address: "ul. Swojczycka 119, 51-502 Wrocław",
  hours: "",
  social: [{ label: "Facebook", href: "https://www.facebook.com/hiwall.meble" }],
  legal: {
    company: "MSD",
    nip: "7712721834",
    regon: "",
  },
};

export const NAV = [
  { label: "Kuchnie na wymiar", to: "/kuchnie-na-wymiar" },
  { label: "Meble na wymiar", to: "/meble-na-wymiar" },
  { label: "O firmie", to: "/o-firmie" },
  { label: "Kontakt", to: "/kontakt" },
];

export const PROJECT_TYPES = [
  { value: "kuchnia", label: "Kuchnia" },
  { value: "szafa-zabudowa", label: "Szafa lub zabudowa" },
  { value: "inne-meble", label: "Inne meble" },
  { value: "inny-projekt", label: "Inny projekt" },
];

export function isFilled(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Link otwierający rozmowę na WhatsAppie (wa.me wymaga numeru bez spacji). */
export function waHref(phone, message = "Dzień dobry! Chciałbym zapytać o wycenę mebli na wymiar.") {
  const digits = String(phone || "").replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function canonical(path) {
  if (!SITE.url) return undefined;
  const base = SITE.url.replace(/\/$/, "");
  return `${base}${path === "/" ? "/" : path}`;
}