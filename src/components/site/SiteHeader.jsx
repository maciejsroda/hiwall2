import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV, SITE, isFilled, telHref, waHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Wordmark from "./Wordmark";
import ButtonLink from "./ButtonLink";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 220 && y > lastY + 4);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-charcoal focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-ivory"
      >
        Przejdź do treści
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled || open
            ? "border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[74px] w-full max-w-[1500px] items-center justify-between px-6 md:px-10 lg:h-[92px] lg:px-16">
          <Link to="/" aria-label="HiWall — strona główna" className="flex flex-col items-start gap-1">
            <Wordmark />
            <span className="hidden text-[0.58rem] font-medium uppercase tracking-[0.28em] text-graphite/70 sm:block">
              Meble na wymiar · Wrocław
            </span>
          </Link>

          <nav aria-label="Nawigacja główna" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[0.8rem] font-medium tracking-[0.02em] text-graphite transition-colors duration-300 hover:text-charcoal"
                activeProps={{ className: "text-charcoal" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {isFilled(SITE.phone) ? (
              <div className="hidden items-center gap-3 xl:flex">
                <a
                  href={telHref(SITE.phone)}
                  className="text-[0.8rem] font-medium text-charcoal transition-opacity hover:opacity-70"
                >
                  {SITE.phone}
                </a>
                <a
                  href={waHref(SITE.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Napisz na WhatsApp"
                  className="text-charcoal transition-opacity hover:opacity-70"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            ) : null}
            <ButtonLink to="/kontakt" className="hidden h-11 px-6 text-[0.68rem] sm:inline-flex">
              Zapytaj o wycenę
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Otwórz menu"
              aria-expanded={open}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal transition-opacity hover:opacity-60 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ivory px-6 pb-10 pt-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zamknij menu"
                className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal"
                autoFocus
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label="Nawigacja mobilna" className="mt-14 flex flex-col">
              {NAV.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, duration: 0.45 }}
                  className="border-b border-charcoal/10"
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-heading text-[1.6rem] font-light tracking-[-0.01em] text-charcoal"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-10">
              <ButtonLink to="/kontakt" onClick={() => setOpen(false)} className="w-full">
                Zapytaj o wycenę
              </ButtonLink>
              {isFilled(SITE.phone) ? (
                <div className="space-y-3">
                  <a
                    href={telHref(SITE.phone)}
                    className="block text-center text-sm tracking-[0.06em] text-graphite"
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={waHref(SITE.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal underline decoration-oak/70 underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </div>
              ) : (
                <p className="text-center text-[0.7rem] uppercase tracking-[0.2em] text-graphite/70">
                  {SITE.area}
                </p>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}