import { SITE, canonical } from "@/lib/site-config";

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Kuchnie, szafy, zabudowy i meble na wymiar dla wnętrz we Wrocławiu i okolicach.",
    areaServed: {
      "@type": "City",
      name: SITE.city,
    },
    knowsAbout: [
      "kuchnie na wymiar",
      "meble na wymiar",
      "szafy na wymiar",
      "zabudowy na wymiar",
    ],
  };

  if (SITE.url) schema.url = SITE.url;
  if (SITE.phone) schema.telephone = SITE.phone;
  if (SITE.email) schema.email = SITE.email;
  if (SITE.social.length) schema.sameAs = SITE.social.map((item) => item.href);
  if (SITE.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressCountry: "PL",
    };
  }

  return schema;
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(canonical(item.path) ? { item: canonical(item.path) } : {}),
    })),
  };
}