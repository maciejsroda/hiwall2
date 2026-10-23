import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/site/PageHero";
import { Image } from "@/components/ui/image";
import { KITCHEN_FAQ, KITCHEN_PROJECTS, IMAGES } from "@/lib/content";
import FaqSection from "@/components/site/sections/FaqSection";
import CtaBand from "@/components/site/CtaBand";
import ProjectGrid from "@/components/site/ProjectGrid";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

export const Route = createFileRoute("/_site/kuchnie-na-wymiar")({
  head: () => ({
    meta: [
      { title: "Kuchnie na Wymiar Wrocław – HiWall" },
      {
        name: "description",
        content:
          "Kuchnie na wymiar we Wrocławiu — przemyślane układy, zabudowa do sufitu i materiały dopasowane do wnętrza. Porozmawiaj z HiWall o swoim projekcie.",
      },
      { property: "og:title", content: "Kuchnie na Wymiar Wrocław – HiWall" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: KitchensPage,
});

const CONSIDERATIONS = [
  {
    title: "Układ i ergonomia",
    description:
      "Strefy pracy, odległości i wysokości dopasowane do pomieszczenia oraz sposobu gotowania.",
  },
  {
    title: "Przechowywanie",
    description:
      "Szuflady, nisze, cargo i zabudowa do sufitu — tak, aby każdy centymetr miał swoje zadanie.",
  },
  {
    title: "Materiały i fronty",
    description:
      "Naturalny dąb, matowe powierzchnie, kamień — dobór pod charakter wnętrza i codzienne użytkowanie.",
  },
  {
    title: "Detale i światło",
    description:
      "Oświetlenie blatu, uchwyty, listwy i wykończenia, które porządkują całą kompozycję.",
  },
];

function KitchensPage() {
  return (
    <>
      <PageHero
        eyebrow="Kuchnie na wymiar · Wrocław"
        title="Kuchnie na wymiar we Wrocławiu"
        description="Projektujemy kuchnie dopasowane do pomieszczenia, sposobu gotowania i charakteru wnętrza — od układu, przez materiały, po ostatni detal wykończenia."
        image={IMAGES.kuchnie_hero}
        imageAlt="Kuchnia na wymiar w szałwiowej zieleni z dębowymi szafkami, marmurowym pasem i zlewem pod oknem"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-oak">Projekt</p>
            <h2 className="mt-5 text-[1.9rem] font-light leading-[1.14] tracking-[-0.025em] text-charcoal sm:text-[2.4rem]">
              Kuchnia, w której wszystko ma swoje miejsce.
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-graphite">
              Kuchnia to przestrzeń, w której spędzasz czas każdego dnia. Dlatego
              projekt zaczynamy od rozmowy o Twoich nawykach: co gotujesz, gdzie
              przechowujesz sprzęty i jak chcesz poruszać się po pomieszczeniu.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-graphite">
              Dopiero na tej podstawie ustalamy układ zabudowy, proporcje frontów
              i materiały. Szczegóły — od wysokości blatu po sposób otwierania
              szafek — omawiamy indywidualnie dla każdego wnętrza.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <figure>
              <div className="aspect-[5/4] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.kuchnie_story}
                  alt="Kuchnia na wymiar w układzie L z matowymi frontami, drewnianym blatem i kamienną okładziną"
                  className="h-full w-full object-cover"
                  originWidth={1452}
                  originHeight={1452}
                />
              </div>
              <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-graphite/70">
                Realizacja HiWall
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-surface py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <SectionIntro
            eyebrow="Zakres rozmowy"
            title="Co uwzględniamy w projekcie kuchni"
            description="Każdy z tych elementów omawiamy indywidualnie — zakres prac zależy od konkretnego pomieszczenia i Twoich potrzeb."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {CONSIDERATIONS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07} className="border-t border-oak/40 pt-6">
                <span className="font-display text-[1.6rem] leading-none text-oak/80">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-[1.02rem] font-normal text-charcoal">{item.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-graphite">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <SectionIntro eyebrow="Realizacje" title="Kuchnie w naszej galerii" />
          <Reveal delay={0.1} className="mt-12">
            <ProjectGrid projects={KITCHEN_PROJECTS} />
          </Reveal>
        </div>
      </section>

      <FaqSection items={KITCHEN_FAQ} eyebrow="FAQ" title="Pytania o kuchnie na wymiar" />

      <CtaBand
        title="Twoja kuchnia zaczyna się od rozmowy."
        description="Napisz, jakiej zabudowy potrzebujesz i jakie masz pomieszczenie — ustalimy kolejne kroki."
      />
    </>
  );
}