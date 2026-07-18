import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Commander — Carlie Nouteau" },
      {
        name: "description",
        content:
          "Commandez votre gâteau sur mesure auprès de Carlie Nouteau. Anniversaire, mariage, événement — décrivez votre projet.",
      },
      { property: "og:title", content: "Commander — Carlie Nouteau" },
      {
        property: "og:description",
        content:
          "Décrivez votre projet — Carlie revient vers vous sous 48h.",
      },
      { property: "og:url", content: "https://carlienouteau.fr/contact" },
    ],
    links: [{ rel: "canonical", href: "https://carlienouteau.fr/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <aside>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">
            Contact
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1] sm:text-6xl">
            Parlez-moi de<br />
            <span className="italic text-primary">votre projet</span>.
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Quelques mots suffisent pour commencer. Je réponds à chaque demande
            personnellement, sous 48h en général.
          </p>

          <div className="mt-12 space-y-6">
            <Info label="Email" value="contact@carlienouteau.fr" href="mailto:contact@carlienouteau.fr" />
            <Info label="Téléphone" value="+33 6 09 97 04 11" href="tel:+33609970411" />
            <Info label="Instagram" value="@carlie.nouteau" href="https://instagram.com" />
            <Info label="Atelier" value="Paris 11ème · sur rendez-vous" />
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-accent/30 p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
              Délais
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Pour les pièces sur mesure, comptez <strong className="text-foreground">2 semaines minimum</strong>.
              Pour les petites commandes, <strong className="text-foreground">48h</strong> suffisent.
            </p>
          </div>
        </aside>

        <section className="rounded-[2rem] bg-card p-8 shadow-card sm:p-10">
          {sent ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-6 font-display text-3xl text-primary">Message envoyé !</h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Merci. Je reviens vers vous très vite avec un devis et quelques propositions.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 text-[12px] uppercase tracking-[0.25em] text-primary hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Prénom" name="firstName" required />
                <Field label="Nom" name="lastName" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" type="tel" />

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Type d'événement"
                  name="event"
                  options={["Anniversaire", "Mariage", "Baptême", "Entreprise", "Juste pour le plaisir", "Autre"]}
                />
                <Field label="Date souhaitée" name="date" type="date" />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Votre projet
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre rêve : nombre de personnes, parfums préférés, style…"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-7 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
              >
                Envoyer ma demande
              </button>

              <p className="text-center text-[11px] text-muted-foreground">
                Vos données restent confidentielles. Aucun spam, promis.
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg text-foreground">{value}</p>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-colors hover:text-primary">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
      >
        <option value="" disabled>Choisir…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
