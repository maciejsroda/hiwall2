import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/content";
import ButtonLink from "../ButtonLink";
import Reveal from "../Reveal";

export default function BrandIntro() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:col-start-1">
            <p className="eyebrow text-oak">Podejście</p>
            <h2 className="mt-5 text-[2rem] font-light leading-[1.15] tracking-[-0.025em] text-charcoal sm:text-[2.4rem] lg:text-[2.9rem]">
              Dobrze zaprojektowana przestrzeń zaczyna się od{" "}
              <span className="display-italic">detali</span>.
            </h2>
            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-graphite">
              Każde wnętrze ma inne potrzeby. Dlatego stawiamy na rozwiązania
              dopasowane do konkretnej przestrzeni, codziennych przyzwyczajeń
              i oczekiwań. Od kuchni po indywidualne zabudowy — liczy się dla nas
              połączenie estetyki, ergonomii i przemyślanego wykorzystania miejsca.
            </p>
            <div className="mt-9">
              <ButtonLink to="/o-firmie" variant="link">
                Poznaj nasze podejście
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <figure className="relative">
              <div className="absolute -left-5 -top-5 hidden h-32 w-32 border-l border-t border-oak/40 lg:block" />
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.home_brand}
                  alt="Front meblowy w terakocie z mosiężnym uchwytem"
                  className="h-full w-full object-cover"
                  originWidth={1400}
                  originHeight={1050}
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.18em] text-graphite/70">
                <span>Precyzja wykonania</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}