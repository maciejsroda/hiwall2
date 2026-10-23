import { Facebook } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES, SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site-config";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";

// Trzy karty oferty są rozpisane pojedynczo (bez pętli), aby każde zdjęcie
// było osobnym elementem i można było podmieniać je jedno po drugim.
const [kitchenService, wardrobeService, furnitureService] = SERVICES;

const imageClass = "h-full w-full object-cover";
const numberClass =
  "absolute left-4 top-4 bg-ivory/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal";
const titleClass = "mt-6 text-[1.32rem] font-normal tracking-[-0.01em] text-charcoal";
const textClass = "mt-3 text-[0.95rem] leading-relaxed text-graphite";

const facebook = SITE.social.find((item) => item.label === "Facebook");

export default function ServicesSection() {
  return (
    <section id="oferta" className="border-t border-charcoal/10 bg-surface py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Oferta"
            title="Meble dopasowane do Twojego wnętrza"
            description="Projektujemy rozwiązania, które porządkują przestrzeń i podkreślają charakter wnętrza."
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-10">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={IMAGES.service_kitchen}
                alt="Kuchnia na wymiar z otwartymi dębowymi półkami i zabudowanym piekarnikiem"
                className={imageClass}
                originWidth={1200}
                originHeight={1500}
              />
              <span className={numberClass}>{kitchenService.number}</span>
            </div>
            <h3 className={titleClass}>{kitchenService.title}</h3>
            <p className={textClass}>{kitchenService.description}</p>
          </Reveal>

          <Reveal delay={0.08} className="md:mt-14">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={IMAGES.service_wardrobe}
                alt="Garderoba na wymiar z białą zabudową do sufitu"
                className={imageClass}
                originWidth={1200}
                originHeight={1500}
              />
              <span className={numberClass}>{wardrobeService.number}</span>
            </div>
            <h3 className={titleClass}>{wardrobeService.title}</h3>
            <p className={textClass}>{wardrobeService.description}</p>
          </Reveal>

          <Reveal delay={0.16} className="md:mt-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={IMAGES.service_furniture}
                alt="Meble na wymiar — łóżko piętrowe z biurkiem i szafą"
                className={imageClass}
                originWidth={1200}
                originHeight={1500}
              />
              <span className={numberClass}>{furnitureService.number}</span>
            </div>
            <h3 className={titleClass}>{furnitureService.title}</h3>
            <p className={textClass}>{furnitureService.description}</p>
          </Reveal>
        </div>

        {facebook ? (
          <div className="mt-16 flex flex-col gap-5 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-graphite">
              Wszystkie najnowsze realizacje znajdziesz na naszych profilach w social mediach.
            </p>
            <a
              href={facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 border border-charcoal/15 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-charcoal/50 hover:bg-charcoal/5"
            >
              <Facebook className="h-4 w-4 text-oak" strokeWidth={1.5} />
              Facebook
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}