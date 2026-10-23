import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/content";
import { SITE, isFilled, waHref } from "@/lib/site-config";
import ButtonLink from "../ButtonLink";

export default function Hero() {
  const fade = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative bg-ivory">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 lg:grid-cols-[1.02fr_1fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 pb-12 pt-28 md:px-10 md:pt-36 lg:px-16 lg:pb-20 lg:pt-44">
          <motion.div {...fade(0.05)} className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-oak" />
            <p className="eyebrow text-graphite">Kuchnie i meble na wymiar · {SITE.city}</p>
          </motion.div>

          <motion.h1
            {...fade(0.15)}
            className="mt-7 max-w-[16ch] text-[2.6rem] font-light leading-[1.04] tracking-[-0.035em] text-charcoal sm:text-[3.4rem] lg:text-[4.35rem] xl:text-[4.9rem]"
          >
            Meble na wymiar.
            <span className="mt-2 block display-italic text-[0.92em] leading-[1.05] text-charcoal/90">
              Przestrzeń zaprojektowana dla Ciebie.
            </span>
          </motion.h1>

          <motion.p {...fade(0.28)} className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-graphite">
            Tworzymy kuchnie i meble na wymiar, które łączą dopracowaną estetykę
            z codzienną funkcjonalnością. Projektujemy rozwiązania dopasowane do
            Twojego wnętrza, potrzeb i stylu życia.
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink to="/kontakt">Zapytaj o wycenę</ButtonLink>
            {isFilled(SITE.phone) ? (
              <a
                href={waHref(SITE.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal"
              >
                <MessageCircle className="h-4 w-4 text-oak" strokeWidth={1.5} />
                WhatsApp {SITE.phone}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            ) : null}
          </motion.div>

          <motion.dl
            {...fade(0.52)}
            className="mt-14 grid max-w-lg grid-cols-1 gap-x-8 gap-y-4 border-t border-charcoal/10 pt-6 sm:grid-cols-3"
          >
            {["Projekt", "Wykonanie", "Montaż"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-oak" />
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-graphite">
                  {item}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative min-h-[62vh] overflow-hidden bg-sand lg:min-h-[640px]">
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <Image
              src={IMAGES.home_hero}
              alt="Kuchnia na wymiar w dębie i matowej bieli z czarnymi uchwytami"
              className="h-full w-full object-cover"
              originWidth={1536}
              originHeight={1024}
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/45 to-transparent" />
          <p className="absolute bottom-7 left-6 text-[0.62rem] uppercase tracking-[0.24em] text-ivory/90 md:left-10 lg:left-8">
            dąb · BIEL · czarne uchwyty
          </p>
        </div>
      </div>
    </section>
  );
}