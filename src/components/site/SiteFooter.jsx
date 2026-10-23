import { Link } from "@tanstack/react-router";
import { SITE, isFilled, telHref, waHref } from "@/lib/site-config";
import SocialIcon from "./SocialIcon";
import Wordmark from "./Wordmark";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="HiWall — strona główna">
              <Wordmark />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite">
              Kuchnie, szafy i meble na wymiar. Projektujemy i wykonujemy zabudowy
              dopasowane do wnętrza, potrzeb i sposobu życia.
            </p>
            <p className="eyebrow mt-6 text-graphite/60">{SITE.area}</p>

            {SITE.social.length ? (
              <ul className="mt-6 flex items-center gap-3">
                {SITE.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center border border-charcoal/15 text-charcoal transition-colors hover:border-charcoal/50 hover:bg-charcoal/5"
                    >
                      <SocialIcon label={item.label} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Usługi">
            <h2 className="eyebrow text-charcoal">Usługi</h2>
            <ul className="mt-5 space-y-3 text-sm text-graphite">
              <li>
                <Link to="/kuchnie-na-wymiar" className="transition-colors hover:text-charcoal">
                  Kuchnie na wymiar
                </Link>
              </li>
              <li>
                <Link to="/meble-na-wymiar" className="transition-colors hover:text-charcoal">
                  Meble na wymiar
                </Link>
              </li>
              <li>
                <Link to="/meble-na-wymiar" className="transition-colors hover:text-charcoal">
                  Szafy i zabudowy
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Informacje">
            <h2 className="eyebrow text-charcoal">Informacje</h2>
            <ul className="mt-5 space-y-3 text-sm text-graphite">
              <li>
                <Link to="/o-firmie" className="transition-colors hover:text-charcoal">
                  O firmie
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="transition-colors hover:text-charcoal">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" className="transition-colors hover:text-charcoal">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-charcoal">Kontakt</h2>
            <ul className="mt-5 space-y-3 text-sm text-graphite">
              {isFilled(SITE.phone) ? (
                <li>
                  <a href={telHref(SITE.phone)} className="transition-colors hover:text-charcoal">
                    {SITE.phone}
                  </a>
                </li>
              ) : null}
              {isFilled(SITE.phone) ? (
                <li>
                  <a
                    href={waHref(SITE.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-charcoal"
                  >
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {isFilled(SITE.email) ? (
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-charcoal">
                    {SITE.email}
                  </a>
                </li>
              ) : null}
              {isFilled(SITE.hours) ? <li>{SITE.hours}</li> : null}
              <li>
                <Link
                  to="/kontakt"
                  className="underline decoration-oak/70 decoration-1 underline-offset-4 transition-colors hover:text-charcoal"
                >
                  Wyślij zapytanie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal/10 pt-6 text-[0.7rem] tracking-[0.06em] text-graphite/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}
          </p>
          <nav aria-label="Linki prawne" className="flex gap-6">
            <Link to="/polityka-prywatnosci" className="transition-colors hover:text-charcoal">
              Polityka prywatności
            </Link>
            <Link to="/kontakt" className="transition-colors hover:text-charcoal">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}