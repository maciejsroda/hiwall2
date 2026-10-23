import { Facebook, Instagram } from "lucide-react";

const ICONS = { Facebook, Instagram };

/** Ikona dla wpisu z profili społecznościowych (SITE.social). */
export default function SocialIcon({ label, className }) {
  const Icon = ICONS[label] ?? Facebook;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}