import { PROCESS_STEPS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";

export default function ProcessSection() {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <SectionIntro eyebrow="Proces" title="Od pomysłu do mebli dopasowanych do Ciebie." />

        <ol className="mt-14 grid gap-y-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 0.08}
              className="relative border-t border-charcoal/15 pt-7 lg:border-t-0 lg:pt-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[2.6rem] leading-none text-oak/80">
                  {step.number}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-oak/30 lg:mt-0" />
              </div>
              <h3 className="mt-5 text-[1.05rem] font-normal text-charcoal">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[0.93rem] leading-relaxed text-graphite">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}