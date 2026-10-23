import { createFileRoute } from "@tanstack/react-router";

const PAGES = [
  ["/", "1.0"],
  ["/kuchnie-na-wymiar", "0.9"],
  ["/meble-na-wymiar", "0.9"],
  ["/o-firmie", "0.6"],
  ["/kontakt", "0.8"],
  ["/polityka-prywatnosci", "0.3"],
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = PAGES.map(
          ([path, priority]) =>
            `  <url>\n    <loc>${origin}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
        ).join("\n");
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, s-maxage=3600",
          },
        });
      },
    },
  },
});