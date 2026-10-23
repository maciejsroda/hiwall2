import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-3 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "h-14 bg-charcoal text-ivory hover:bg-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oak focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
  light:
    "h-14 bg-ivory text-charcoal hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oak focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal",
  outline:
    "h-14 border border-charcoal/25 text-charcoal hover:border-charcoal/60 hover:bg-charcoal/[0.04]",
  quiet:
    "h-11 border border-ivory/30 text-ivory hover:border-ivory/70 hover:bg-ivory/10",
  link: "h-auto p-0 text-charcoal underline decoration-oak/70 decoration-1 underline-offset-[6px] hover:decoration-charcoal",
};

export default function ButtonLink({ to, href, variant = "primary", className, children, ...props }) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}