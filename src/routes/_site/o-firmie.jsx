import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/site/PageHero";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/content";
import Reveal from "@/components/site/Reveal";
import ValuesSection from "@/components/site/sections/ValuesSection";
import ProcessSection from "@/components/site/sections/ProcessSection";
import CtaBand from "@/components/site/CtaBand";

export const Route = createFileRoute("/_site/o-firmie")({
  head: () => ({
    meta: [
      { title: "O Firmie – HiWall | Meble na Wymiar Wrocław" },
      {
        name: "description",
        content:
          "Poznaj podejście HiWall do projektowania mebli na wymiar: indywidualne dopasowanie, funkcjonalność, spójna estetyka i dbałość o detale.",
      },
      { property: "og:title", content: "O Firmie – HiWall | Meble na Wymiar Wrocław" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Marka · HiWall"
        title="Meble, które powstają wokół Twojego wnętrza."
        description="HiWall to kuchnie i meble na wymiar tworzone dla wnętrz we Wrocławiu i okolicach. Pracujemy tak, aby efekt był spójny z przestrzenią, a nie tylko dobrze wyglądał na zdjęciu."
        image={IMAGES.ofirmie_hero}
        imageAlt="Szafa na wymiar z otwartymi półkami w sypialni"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-oak">Filozofia</p>
            <h2 className="mt-5 text-[1.9rem] font-light leading-[1.14] tracking-[-0.025em] text-charcoal sm:text-[2.4rem]">
              Estetyka, która wynika z funkcji.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-[1.02rem] leading-relaxed text-graphite">
              Nie zaczynamy od katalogu frontów, tylko od pytania, jak ma wyglądać
              codzienność w danym pomieszczeniu. Dobrze zaprojektowana zabudowa
              porządkuje przestrzeń, zwalnia blat i pozwala odłożyć rzeczy dokładnie
              tam, gdzie są potrzebne.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-graphite">
              Dlatego proporcje, podziały i materiały dobieramy do konkretnego
              wnętrza — jego światła, wysokości i charakteru. Dopiero z tego
              połączenia powstaje mebel, który wygląda naturalnie i działa
              bez zastrzeżeń przez lata.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-graphite">
              Zakres prac, materiały i szczegóły realizacji ustalamy indywidualnie.
              Jeśli potrzebujesz informacji, których nie ma na stronie — po prostu
              napisz lub zadzwoń.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-surface py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <Reveal className="lg:col-span-6">
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.ofirmie_story}
                  alt="Zabudowa z pralką w białych frontach przy klatce schodowej"
                  className="h-full w-full object-cover"
                  originWidth={1400}
                  originHeight={1050}
                />
              </div>
              <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-graphite/70">
                Realizacja HiWall
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="eyebrow text-oak">Podejście</p>
            <h2 className="mt-5 text-[1.7rem] font-light leading-[1.16] tracking-[-0.025em] text-charcoal sm:text-[2.1rem]">
              Każda decyzja ma uzasadnienie.
            </h2>
            <dl className="mt-8 space-y-6">
              {[
                [
                  "Rozmowa przed projektem",
                  "Najpierw poznajemy pomieszczenie i sposób, w jaki go używasz.",
                ],
                [
                  "Ustalenia zamiast założeń",
                  "Wymiary, materiały i zakres prac omawiamy wprost — bez domysłów.",
                ],
                [
                  "Detale na końcu, ale nie na ostatnim miejscu",
                  "Uchwyty, listwy i wykończenia decydują o odbiorze całości.",
                ],
              ].map(([term, description]) => (
                <div key={term} className="border-t border-charcoal/10 pt-4">
                  <dt className="text-[0.98rem] font-medium text-charcoal">{term}</dt>
                  <dd className="mt-2 text-[0.93rem] leading-relaxed text-graphite">{description}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <ValuesSection />
      <ProcessSection />

      <CtaBand
        title="Porozmawiajmy o Twoim wnętrzu."
        description="Napisz kilka słów o pomieszczeniu i oczekiwaniach — resztę ustalimy podczas rozmowy."
      />
    </>
  );
}