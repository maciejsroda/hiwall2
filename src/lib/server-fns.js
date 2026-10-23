import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Adres, na który trafiają powiadomienia o nowych zapytaniach z formularza. */
const INQUIRY_NOTIFY_EMAIL = "maciejsroda@gmail.com";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Podaj imię.").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail.").max(200),
  phone: z.string().trim().max(40).optional().nullable(),
  project_type: z.string().trim().min(1).max(80),
  location: z.string().trim().min(2, "Podaj miejsce realizacji.").max(160),
  scope: z.string().trim().max(2000).optional().nullable(),
  message: z.string().trim().min(10, "Napisz kilka słów o projekcie.").max(4000),
  attachment_uri: z.string().trim().max(600).optional().nullable(),
  attachment_name: z.string().trim().max(200).optional().nullable(),
  source_path: z.string().trim().max(200).optional().nullable(),
  consent: z.literal(true),
  website: z.string().max(0).optional().nullable(),
});

/**
 * Publiczny endpoint formularza kontaktowego.
 * Zapytanie trafia na skrzynkę właściciela; opcjonalny załącznik jest dołączany
 * do wiadomości (plik trzymany jest prywatnie, bez publicznego adresu URL).
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input) => inquirySchema.parse(input))
  .handler(async ({ data, context }) => {
    const linkCount = (data.message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 3) {
      throw new Error("Wiadomość zawiera zbyt wiele linków. Napisz do nas bezpośrednio.");
    }

    const base44 = context.getBase44();

    let attachment = null;
    if (data.attachment_uri) {
      try {
        const { signed_url } = await base44.asServiceRole.integrations.Core.CreateFileSignedUrl({
          file_uri: data.attachment_uri,
          expires_in: 3600,
        });
        attachment = {
          filename: data.attachment_name || "zalacznik",
          file_url: signed_url,
        };
      } catch (error) {
        console.error("Nie udało się przygotować załącznika:", error?.message);
      }
    }

    const lines = [
      "Nowe zapytanie z formularza HiWall",
      "",
      `Imię: ${data.name}`,
      `E-mail: ${data.email}`,
      data.phone ? `Telefon: ${data.phone}` : null,
      `Rodzaj projektu: ${data.project_type}`,
      `Miejsce realizacji: ${data.location}`,
      data.scope ? `Zakres: ${data.scope}` : null,
      "",
      "Wiadomość:",
      data.message,
      data.attachment_name
        ? attachment
          ? `Załącznik: ${data.attachment_name}`
          : `Załącznik: ${data.attachment_name} (nie udało się dołączyć do wiadomości)`
        : null,
      data.source_path ? `Strona: ${data.source_path}` : null,
    ].filter(Boolean);

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: INQUIRY_NOTIFY_EMAIL,
      from_name: "HiWall – formularz",
      subject: `Nowe zapytanie: ${data.project_type} – ${data.name}`,
      body: lines.join("\n"),
      ...(attachment ? { attachments: [attachment] } : {}),
    });

    return { ok: true };
  });