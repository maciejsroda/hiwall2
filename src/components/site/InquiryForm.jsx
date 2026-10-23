import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2, Paperclip, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { base44 } from "@/api/base44Client";
import { submitInquiry } from "@/lib/server-fns";
import { PROJECT_TYPES, SITE, isFilled, telHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-[0.95rem] text-charcoal placeholder:text-graphite/40 transition-colors focus:border-charcoal focus:outline-none";

const labelClass = "text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-graphite";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  project_type: "",
  location: "",
  scope: "",
  message: "",
  website: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Podaj imię.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Podaj poprawny adres e-mail.";
  if (!values.project_type) errors.project_type = "Wybierz rodzaj projektu.";
  if (values.location.trim().length < 2) errors.location = "Podaj miejsce realizacji.";
  if (values.message.trim().length < 10) errors.message = "Napisz kilka słów o projekcie.";
  return errors;
}

export default function InquiryForm() {
  const submit = useServerFn(submitInquiry);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const started = useRef(false);
  const confirmationRef = useRef(null);

  useEffect(() => {
    if (status !== "success") return;
    confirmationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  const update = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onFirstInteraction = () => {
    if (started.current) return;
    started.current = true;
    base44.analytics.track({ eventName: "formularz_start", properties: { form: "zapytanie" } });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(`field-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      let attachment = null;
      if (file) {
        if (file.size > 8 * 1024 * 1024) {
          throw new Error("Załącznik jest zbyt duży — maksymalny rozmiar to 8 MB.");
        }
        const uploaded = await base44.integrations.Core.UploadPrivateFile({ file });
        attachment = { uri: uploaded.file_uri, name: file.name };
      }

      await submit({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          project_type: values.project_type,
          location: values.location,
          scope: values.scope,
          message: values.message,
          attachment_uri: attachment?.uri ?? "",
          attachment_name: attachment?.name ?? "",
          source_path: typeof window !== "undefined" ? window.location.pathname : "",
          consent: true,
          website: values.website,
        },
      });

      base44.analytics.track({ eventName: "formularz_wyslany", properties: { typ: values.project_type } });
      setStatus("success");
      setValues(initialValues);
      setFile(null);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error?.message?.includes("Załącznik")
          ? error.message
          : "Nie udało się wysłać zapytania. Spróbuj ponownie lub napisz do nas bezpośrednio."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        ref={confirmationRef}
        className="flex h-full flex-col justify-center bg-surface px-6 py-14 md:px-10 lg:py-16"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-oak/15">
          <Check className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 text-[1.7rem] font-light tracking-[-0.02em] text-charcoal">
          Dziękujemy za zapytanie.
        </h2>
        <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-graphite">
          Twoja wiadomość została wysłana. Wrócimy do niej, aby ustalić kolejne
          kroki i szczegóły projektu.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {isFilled(SITE.phone) ? (
            <a
              href={telHref(SITE.phone)}
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-charcoal underline decoration-oak/70 underline-offset-[6px]"
            >
              Zadzwoń: {SITE.phone}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-graphite/70 underline underline-offset-[6px]"
          >
            Wyślij kolejne zapytanie
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onFirstInteraction}
      noValidate
      className="bg-surface px-6 py-10 md:px-10 lg:py-12"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="field-name" className={labelClass}>
            Imię *
          </label>
          <input
            id="field-name"
            name="name"
            autoComplete="given-name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={cn(fieldClass, errors.name && "border-destructive")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
            placeholder="Anna"
          />
          {errors.name ? (
            <p id="error-name" className="mt-1.5 text-[0.75rem] text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-email" className={labelClass}>
            Adres e-mail *
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={cn(fieldClass, errors.email && "border-destructive")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            placeholder="anna@przyklad.pl"
          />
          {errors.email ? (
            <p id="error-email" className="mt-1.5 text-[0.75rem] text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-phone" className={labelClass}>
            Telefon (opcjonalnie)
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            placeholder="+48 000 000 000"
          />
        </div>

        <div>
          <label htmlFor="field-project_type" className={labelClass}>
            Rodzaj projektu *
          </label>
          <select
            id="field-project_type"
            name="project_type"
            value={values.project_type}
            onChange={(event) => update("project_type", event.target.value)}
            className={cn(fieldClass, "appearance-none pr-6", errors.project_type && "border-destructive")}
            aria-invalid={Boolean(errors.project_type)}
            aria-describedby={errors.project_type ? "error-project_type" : undefined}
          >
            <option value="">Wybierz…</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type.value} value={type.label}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.project_type ? (
            <p id="error-project_type" className="mt-1.5 text-[0.75rem] text-destructive">
              {errors.project_type}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-location" className={labelClass}>
            Miejsce realizacji *
          </label>
          <input
            id="field-location"
            name="location"
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
            className={cn(fieldClass, errors.location && "border-destructive")}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "error-location" : undefined}
            placeholder="Wrocław, Krzyki"
          />
          {errors.location ? (
            <p id="error-location" className="mt-1.5 text-[0.75rem] text-destructive">
              {errors.location}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-scope" className={labelClass}>
            Zakres prac lub orientacyjne wymiary (opcjonalnie)
          </label>
          <input
            id="field-scope"
            name="scope"
            value={values.scope}
            onChange={(event) => update("scope", event.target.value)}
            className={fieldClass}
            placeholder="np. kuchnia 3,2 × 2,7 m"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-message" className={labelClass}>
            Wiadomość *
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={cn(fieldClass, "resize-none", errors.message && "border-destructive")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
            placeholder="Opisz krótko wnętrze, oczekiwania i termin, który Cię interesuje."
          />
          {errors.message ? (
            <p id="error-message" className="mt-1.5 text-[0.75rem] text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-file" className={labelClass}>
            Załącznik — zdjęcie lub inspiracja (opcjonalnie)
          </label>
          <label
            htmlFor="field-file"
            className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-charcoal/25 px-4 py-3 text-[0.85rem] text-graphite transition-colors hover:border-charcoal/50"
          >
            <Paperclip className="h-4 w-4 text-oak" strokeWidth={1.5} />
            <span className="truncate">
              {file ? file.name : "Dodaj zdjęcie (JPG, PNG, PDF do 8 MB)"}
            </span>
          </label>
          <input
            id="field-file"
            name="attachment"
            type="file"
            accept="image/*,.pdf"
            className="sr-only"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
        </div>
      </div>

      <div className="mt-6 hidden">
        <label htmlFor="field-website">Nie wypełniaj tego pola</label>
        <input
          id="field-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <p className="mt-7 text-[0.72rem] leading-relaxed text-graphite/80">
        Wysyłając formularz, zgadzasz się na kontakt w sprawie zapytania. Dane
        przetwarzamy zgodnie z{" "}
        <Link to="/polityka-prywatnosci" className="underline decoration-oak/70 underline-offset-4">
          polityką prywatności
        </Link>
        . Załączniki przechowywane są prywatnie.
      </p>

      {status === "error" ? (
        <p role="alert" className="mt-4 border-l-2 border-destructive pl-3 text-[0.82rem] text-destructive">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 bg-charcoal px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
            Wysyłanie…
          </>
        ) : (
          "Wyślij zapytanie"
        )}
      </button>
    </form>
  );
}