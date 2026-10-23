import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, isFilled, telHref, waHref } from "@/lib/site-config";
import InquiryForm from "./InquiryForm";
import Reveal from "./Reveal";

export default function ContactSection({ eyebrow = "Kontakt", title = "Zacznijmy od Twojego pomysłu." }) {
  const hasDetails = isFilled(SITE.phone) || isFilled(SITE.email) || isFilled(SITE.address);

  return (
    <section id="kontakt" className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-oak">{eyebrow}</p>
          <h2 className="mt-5 text-[2rem] font-light leading-[1.12] tracking-[-0.025em] text-ivory sm:text-[2.5rem] lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ivory/75">
            Opowiedz nam, jakiej zabudowy potrzebujesz. Przekaż podstawowe
            informacje, a łatwiej będzie nam określić kolejne kroki.
          </p>

          <div className="mt-10 space-y-5 border-t border-ivory/15 pt-8">
            {isFilled(SITE.phone) ? (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={telHref(SITE.phone)}
                  className="flex items-center gap-4 text-ivory/85 transition-colors hover:text-ivory"
                >
                  <Phone className="h-4 w-4 text-oak" strokeWidth={1.5} />
                  <span className="text-[0.95rem] tracking-[0.04em]">{SITE.phone}</span>
                </a>
                <a
                  href={waHref(SITE.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-b border-oak/40 pb-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-oak transition-colors hover:border-ivory hover:text-ivory"
                >
                  WhatsApp
                </a>
              </div>
            ) : null}
            {isFilled(SITE.email) ? (
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 text-ivory/85 transition-colors hover:text-ivory"
              >
                <Mail className="h-4 w-4 text-oak" strokeWidth={1.5} />
                <span className="text-[0.95rem] tracking-[0.04em]">{SITE.email}</span>
              </a>
            ) : null}
            <div className="flex items-center gap-4 text-ivory/85">
              <MapPin className="h-4 w-4 text-oak" strokeWidth={1.5} />
              <span className="text-[0.95rem] tracking-[0.04em]">{SITE.area}</span>
            </div>
          </div>

          {!hasDetails ? (
            <p className="mt-8 max-w-sm text-[0.78rem] leading-relaxed text-ivory/50">
              Preferujesz rozmowę telefoniczną? Zostaw numer w formularzu —
              oddzwonimy, gdy zapoznamy się z Twoim zapytaniem.
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}