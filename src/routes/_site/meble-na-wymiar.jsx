import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/site/PageHero";
import { Image } from "@/components/ui/image";
import { FURNITURE_FAQ, FURNITURE_PROJECTS, IMAGES } from "@/lib/content";
import FaqSection from "@/components/site/sections/FaqSection";
import ProjectGrid from "@/components/site/ProjectGrid";
import SectionIntro from "@/components/site/SectionIntro";
import Reveal from "@/components/site/Reveal";
import ContactSection from "@/components/site/ContactSection";

export const Route = createFileRoute("/_site/meble-na-wymiar")({
  head: () => ({
    meta: [
      { title: "Meble na Wymiar Wrocław – Szafy i Zabudowy | HiWall" },
      {
        name: "description",
        content:
          "Meble na wymiar we Wrocławiu: szafy, garderoby, zabudowy wnęk i meble do salonu. Rozwiązania dopasowane do wymiarów pomieszczenia i potrzeb domowników.",
      },
      { property: "og:title", content: "Meble na Wymiar Wrocław – Szafy i Zabudowy | HiWall" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: FurniturePage,
});

const SOLUTIONS = [
  {
    title: "Szafy i garderoby",
    description: "Zabudowa od podłogi do sufitu z podziałem wnętrza pod konkretne rzeczy.",
  },
  {
    title: "Zabudowy wnęk i skosów",
    description: "Wykorzystanie miejsc, których nie da się zagospodarować gotowymi meblami.",
  },
  {
    title: "Meble do salonu",
    description: "Kompozycje zamykane i otwarte, które porządkują przestrzeń dzienną.",
  },
  {
    title: "Meble do jadalni",
    description: "Kredensy, witryny i zabudowy dopasowane do proporcji pomieszczenia.",
  },
  {
    title: "Strefy pracy",
    description: "Biurka i półki wbudowane w ścianę lub wnękę, bez utraty metra powierzchni.",
  },
  {
    title: "Przedpokoje",
    description: "Szafy, siedziska i schowki na rzeczy, które codziennie zostawiasz przy wejściu.",
  },
];

function FurniturePage() {
  return (
    <>
      <PageHero
        eyebrow="Meble na wymiar · Wrocław"
        title="Meble na wymiar we Wrocławiu"
        description="Szafy, garderoby, zabudowy i meble, które powstają pod wymiary konkretnego wnętrza — tak, aby przestrzeń była uporządkowana i spójna."
        image={IMAGES.meble_hero}
        imageAlt="Zabudowa meblowa na wymiar w salonie z podświetlaną niszą"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <SectionIntro
            eyebrow="Rozwiązania"
            title="Zakres dostępnych rozwiązań"
            description="Poniższe przykłady pokazują typowe zastosowania. Ostateczny zakres ustalamy indywidualnie po poznaniu pomieszczenia."
          />
          <div className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {SOLUTIONS.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="border-t border-charcoal/10 py-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[1.05rem] font-normal text-charcoal">{item.title}</h3>
                  <span className="font-display text-[0.95rem] text-oak/80">0{index + 1}</span>
                </div>
                <p className="mt-3 max-w-xs text-[0.92rem] leading-relaxed text-graphite">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-sand/60 py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <Reveal className="lg:col-span-6 lg:order-2">
            <p className="eyebrow text-oak">Dopasowanie</p>
            <h2 className="mt-5 text-[1.9rem] font-light leading-[1.14] tracking-[-0.025em] text-charcoal sm:text-[2.4rem]">
              Nietypowe wnętrza to nasz punkt wyjścia.
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-graphite">
              Skosy, słupy, wnęki, krótkie ściany, nietypowa wysokość — meble na
              wymiar powstają właśnie po to, aby wykorzystać to, co w pomieszczeniu
              jest nieregularne, zamiast omijać te miejsca.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Zabudowa dopasowana do rzeczywistych wymiarów pomieszczenia.",
                "Wnętrza szaf projektowane pod konkretne rzeczy i nawyki.",
                "Materiały i kolorystyka spójne z tym, co już jest we wnętrzu.",
              ].map((line) => (
                <li key={line} className="flex gap-4 text-[0.95rem] leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-oak" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:order-1">
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.meble_story}
                  alt="Meble łazienkowe na wymiar z dębowymi obrzeżami i otwartą półką"
                  className="h-full w-full object-cover"
                  originWidth={1200}
                  originHeight={1600}
                />
              </div>
              <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-graphite/70">
                Realizacja HiWall
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <SectionIntro eyebrow="Galeria" title="Przykłady rozwiązań" />
          <Reveal delay={0.1} className="mt-12">
            <ProjectGrid projects={FURNITURE_PROJECTS} />
          </Reveal>
        </div>
      </section>

      <FaqSection items={FURNITURE_FAQ} eyebrow="FAQ" title="Pytania o meble na wymiar" />

      <ContactSection eyebrow="Zapytanie" title="Opowiedz nam o pomieszczeniu." />
    </>
  );
}