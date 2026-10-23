import { createFileRoute } from "@tanstack/react-router";
import { SITE, isFilled } from "@/lib/site-config";

export const Route = createFileRoute("/_site/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności – HiWall" },
      {
        name: "description",
        content:
          "Zasady przetwarzania danych osobowych przekazywanych przez formularz kontaktowy na stronie HiWall.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "1. Administrator danych",
    body: [
      `Administratorem danych osobowych przekazywanych przez formularz kontaktowy jest ${SITE.legal.company}, ${SITE.address}, NIP ${SITE.legal.nip}.`,
      `W sprawach dotyczących danych osobowych można kontaktować się telefonicznie pod numerem ${SITE.phone} lub e-mailem na adres ${SITE.email}.`,
    ],
  },
  {
    title: "2. Zakres przetwarzanych danych",
    body: [
      "Formularz kontaktowy zbiera: imię, adres e-mail, opcjonalny numer telefonu, rodzaj projektu, miejsce realizacji, opcjonalny opis zakresu prac lub wymiarów, treść wiadomości oraz opcjonalny załącznik (zdjęcie lub inspirację).",
      "Podanie danych oznaczonych jako wymagane jest niezbędne do udzielenia odpowiedzi. Pozostałe dane są dobrowolne.",
    ],
  },
  {
    title: "3. Cel i podstawa prawna",
    body: [
      "Dane przetwarzamy wyłącznie w celu obsługi zapytania i przygotowania odpowiedzi — na podstawie art. 6 ust. 1 lit. b oraz lit. f RODO (podjęcie działań na żądanie osoby, której dane dotyczą, oraz prawnie uzasadniony interes polegający na obsłudze korespondencji).",
      "Dane nie są wykorzystywane do profilowania ani do automatycznego podejmowania decyzji.",
    ],
  },
  {
    title: "4. Odbiorcy danych",
    body: [
      "Dane mogą być powierzane wyłącznie podmiotom wspierającym działanie strony i poczty elektronicznej (dostawca hostingu oraz infrastruktury aplikacji) w zakresie niezbędnym do świadczenia tych usług.",
    ],
  },
  {
    title: "5. Okres przechowywania",
    body: [
      "Zapytania przechowujemy przez czas potrzebny do obsługi korespondencji i ewentualnej realizacji zamówienia, a następnie do upływu terminów wynikających z przepisów prawa.",
    ],
  },
  {
    title: "6. Twoje prawa",
    body: [
      "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu. Możesz też wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.",
      "Aby skorzystać z tych praw, skontaktuj się z nami przez formularz kontaktowy.",
    ],
  },
  {
    title: "7. Pliki cookies i analityka",
    body: [
      "Strona nie uruchamia marketingowych ani reklamowych plików cookies wymagających zgody. Wykorzystywane są wyłącznie techniczne mechanizmy niezbędne do poprawnego działania strony.",
      "Jeśli w przyszłości zostaną wdrożone narzędzia analityczne wymagające zgody, informacja o nich pojawi się w tym miejscu wraz z odpowiednim mechanizmem zgody.",
    ],
  },
  {
    title: "8. Bezpieczeństwo",
    body: [
      "Dane przesyłane przez formularz są przekazywane bezpośrednio do właściciela serwisu i dostępne wyłącznie dla osób obsługujących zapytania. Załączniki przechowywane są w sposób prywatny — bez publicznego adresu URL.",
    ],
  },
];

function PrivacyPage() {
  const admin = isFilled(SITE.legal.company)
    ? `${SITE.legal.company}${isFilled(SITE.address) ? `, ${SITE.address}` : ""}${
        isFilled(SITE.legal.nip) ? `, NIP ${SITE.legal.nip}` : ""
      }`
    : null;

  return (
    <section className="bg-ivory pb-20 pt-28 md:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-oak" />
          <p className="eyebrow text-graphite">Dokumenty</p>
        </div>
        <h1 className="mt-6 text-[2.1rem] font-light leading-[1.1] tracking-[-0.03em] text-charcoal sm:text-[2.8rem]">
          Polityka prywatności
        </h1>
        <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-graphite">
          Poniżej opisujemy, jakie dane zbieramy przez formularz kontaktowy, w jakim
          celu je przetwarzamy i jak możesz skorzystać ze swoich praw.
        </p>

        {admin ? (
          <p className="mt-8 border-l-2 border-oak pl-4 text-[0.92rem] leading-relaxed text-graphite">
            Administrator: {admin}
          </p>
        ) : null}

        <div className="mt-14 space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.title} className="border-t border-charcoal/10 pt-7">
              <h2 className="text-[1.15rem] font-medium tracking-[-0.01em] text-charcoal">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[0.95rem] leading-relaxed text-graphite">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}