import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";

export default function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Najczęściej zadawane pytania",
  description,
}) {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <div className="lg:col-span-4">
          <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        </div>

        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full border-t border-charcoal/10">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border-b border-charcoal/10"
              >
                <AccordionTrigger className="py-6 text-left font-heading text-[1.02rem] font-normal text-charcoal hover:no-underline [&>svg]:text-oak">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-[0.95rem] leading-relaxed text-graphite">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}