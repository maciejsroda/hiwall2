import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";

export default function CtaBand({
  eyebrow = "Kolejny krok",
  title = "Zacznijmy od rozmowy o Twoim wnętrzu.",
  description = "Opisz krótko, czego potrzebujesz — wrócimy do Ciebie z kolejnymi krokami.",
  secondary,
}) {
  return (
    <section className="border-y border-charcoal/10 bg-sand/70 py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-9 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-oak">{eyebrow}</p>
          <h2 className="mt-4 text-[1.8rem] font-light leading-[1.15] tracking-[-0.025em] text-charcoal sm:text-[2.2rem]">
            {title}
          </h2>
          <p className="mt-4 text-[0.97rem] leading-relaxed text-graphite">{description}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/kontakt">Zapytaj o wycenę</ButtonLink>
          {secondary ? (
            <ButtonLink to={secondary.to} variant="outline">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}