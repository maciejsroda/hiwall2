import { LayoutGrid, Palette, Ruler, Sparkles } from "lucide-react";
import { VALUES } from "@/lib/content";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";

const ICONS = [Ruler, LayoutGrid, Palette, Sparkles];

export default function ValuesSection() {
  return (
    <section className="border-y border-charcoal/10 bg-sand/60 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <SectionIntro
          eyebrow="Wartości"
          title="Przemyślany projekt. Funkcjonalne rozwiązania. Dopracowane detale."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={value.title} delay={index * 0.07} className="border-t border-oak/40 pt-6">
                <Icon className="h-5 w-5 text-oak" strokeWidth={1.2} aria-hidden="true" />
                <h3 className="mt-5 text-[1.05rem] font-normal tracking-[-0.01em] text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-graphite">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}