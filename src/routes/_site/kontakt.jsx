import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/site/PageHero";
import ContactSection from "@/components/site/ContactSection";
import { SITE, isFilled, telHref, waHref } from "@/lib/site-config";

export const Route = createFileRoute("/_site/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – HiWall | Meble na Wymiar Wrocław" },
      {
        name: "description",
        content:
          "Skontaktuj się z HiWall: wyślij zapytanie o kuchnię lub meble na wymiar we Wrocławiu i okolicach. Opisz projekt, a my wrócimy do Ciebie z kolejnymi krokami.",
      },
      { property: "og:title", content: "Kontakt – HiWall | Meble na Wymiar Wrocław" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt · Wrocław i okolice"
        title="Porozmawiajmy o Twoim projekcie."
        description="Opisz, jakiej zabudowy potrzebujesz — kuchni, szafy, mebli do konkretnego pomieszczenia. Im więcej kontekstu, tym łatwiej określić kolejne kroki."
      />

      <section className="bg-ivory pb-16 pt-12 lg:pb-20">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-6 md:px-10 lg:grid-cols-3 lg:px-16">
          <div className="border-t border-charcoal/10 pt-5">
            <h2 className="eyebrow text-charcoal">Obszar działania</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite">{SITE.area}</p>
          </div>
          {isFilled(SITE.phone) ? (
            <div className="border-t border-charcoal/10 pt-5">
              <h2 className="eyebrow text-charcoal">Telefon</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite">
                <a href={telHref(SITE.phone)} className="transition-colors hover:text-charcoal">
                  {SITE.phone}
                </a>
                <span aria-hidden="true" className="mx-2 text-graphite/40">
                  ·
                </span>
                <a
                  href={waHref(SITE.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-oak/70 underline-offset-4 transition-colors hover:text-charcoal"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          ) : null}
          {isFilled(SITE.email) ? (
            <div className="border-t border-charcoal/10 pt-5">
              <h2 className="eyebrow text-charcoal">E-mail</h2>
              <p className="mt-3 break-words text-[0.95rem] leading-relaxed text-graphite">
                {SITE.email}
              </p>
            </div>
          ) : null}
          <div className="border-t border-charcoal/10 pt-5">
            <h2 className="eyebrow text-charcoal">Zapytanie</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite">
              Wypełnij formularz — to najszybsza droga, aby opisać projekt i otrzymać odpowiedź.
            </p>
          </div>
        </div>
      </section>

      <ContactSection eyebrow="Formularz" title="Zacznijmy od Twojego pomysłu." />

      <section className="bg-ivory py-14">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <p className="max-w-2xl text-[0.85rem] leading-relaxed text-graphite/70">
            Wysyłając zapytanie, przekazujesz dane w celu kontaktu w sprawie
            realizacji. Szczegóły znajdziesz w{" "}
            <Link to="/polityka-prywatnosci" className="underline decoration-oak/70 underline-offset-4">
              polityce prywatności
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}