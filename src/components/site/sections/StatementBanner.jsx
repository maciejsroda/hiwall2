import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/content";
import ButtonLink from "../ButtonLink";
import Reveal from "../Reveal";

export default function StatementBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.home_statement}
          alt="Zabudowa meblowa na wymiar w salonie z podświetlaną niszą"
          className="h-full w-full object-cover"
          originWidth={2000}
          originHeight={860}
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-oak">Twój projekt</p>
          <h2 className="mt-6 text-[2rem] font-light leading-[1.12] tracking-[-0.025em] text-ivory sm:text-[2.6rem] lg:text-[3.2rem]">
            Twoje wnętrze. Twój styl.
            <span className="display-italic block text-ivory/90">Rozwiązania na wymiar.</span>
          </h2>
          <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-ivory/80">
            Niezależnie od tego, czy urządzasz nowe mieszkanie, planujesz remont
            czy szukasz sposobu na lepsze wykorzystanie przestrzeni, warto zacząć
            od rozmowy o Twoich potrzebach.
          </p>
          <div className="mt-10">
            <ButtonLink to="/kontakt" variant="light">
              Opowiedz nam o swoim projekcie
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}