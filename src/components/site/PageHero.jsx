import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, image, imageAlt, children }) {
  return (
    <section className="bg-ivory pt-28 md:pt-36">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-oak" />
            <p className="eyebrow text-graphite">{eyebrow}</p>
          </div>
          <h1 className="mt-6 max-w-4xl text-[2.3rem] font-light leading-[1.08] tracking-[-0.03em] text-charcoal sm:text-[3rem] lg:text-[3.9rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-graphite">{description}</p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </div>

      {image ? (
        <div className="mt-12 w-full overflow-hidden bg-sand lg:mt-16">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[21/8]">
            <Image
              src={image}
              alt={imageAlt || title}
              className="h-full w-full object-cover"
              originWidth={2000}
              originHeight={860}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}