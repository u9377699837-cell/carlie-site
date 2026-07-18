import { createFileRoute } from "@tanstack/react-router";
import themeHaribo from "@/assets/theme-haribo.jpg";
import themePringles from "@/assets/theme-pringles.jpg";
import themeFrozen from "@/assets/theme-frozen.jpg";
import themeBubbles from "@/assets/theme-bubbles.jpg";
import themeKinder from "@/assets/theme-kinder.jpg";
import themeJuice from "@/assets/theme-juice.jpg";

const INSTAGRAM_URL = "https://instagram.com/carlie.nouteau";
const WHATSAPP_NUMBER = "33609970411";
const INSTAGRAM_DM = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Anniversaires à thème — Carlie Nouteau" },
      {
        name: "description",
        content:
          "Organisation d'anniversaires personnalisés : décoration, sweet table et goodies sur mesure (Winnie l'Ourson, Reine des Neiges et bien plus). Réservation sur Instagram.",
      },
      { property: "og:title", content: "Anniversaires à thème — Carlie Nouteau" },
      {
        property: "og:description",
        content:
          "Sweet tables, goodies personnalisés et décor sur mesure pour des anniversaires inoubliables.",
      },
      { property: "og:url", content: "https://carlienouteau.fr/themes" },
      { property: "og:image", content: themeHaribo },
      { name: "twitter:image", content: themeHaribo },
    ],
    links: [{ rel: "canonical", href: "https://carlienouteau.fr/themes" }],
  }),
  component: Themes,
});

const themedItems = [
  {
    img: themeHaribo,
    title: "Sachets Haribo personnalisés",
    theme: "Winnie l'Ourson",
    desc: "Sachets de bonbons habillés sur mesure avec la photo du petit héros et le thème de la fête.",
  },
  {
    img: themePringles,
    title: "Pringles d'anniversaire « 1·2·3 »",
    theme: "Chiffres & sprinkles",
    desc: "Boîtes Pringles relookées avec dôme de sprinkles arc-en-ciel et l'âge du roi du jour.",
  },
  {
    img: themeJuice,
    title: "Bouteilles de jus customisées",
    theme: "Miel & abeilles",
    desc: "Étiquettes faites main avec la photo de l'enfant. Coordonnées avec le reste du sweet table.",
  },
  {
    img: themeBubbles,
    title: "Bulles à savon souvenirs",
    theme: "Winnie l'Ourson",
    desc: "Petits cadeaux à offrir aux invités, personnalisés au prénom et au thème de la fête.",
  },
  {
    img: themeKinder,
    title: "Kinder Bueno personnalisés",
    theme: "Premier anniversaire",
    desc: "Emballages relookés pour transformer un classique en cadeau d'anniversaire unique.",
  },
  {
    img: themeFrozen,
    title: "Décor Reine des Neiges",
    theme: "Frozen — Elsa & Anna",
    desc: "Mise en scène complète avec boîtes thématiques, guirlandes lumineuses et palette pastel.",
  },
];

const includedFeatures = [
  { label: "Sweet table sur mesure", icon: "🍰" },
  { label: "Goodies personnalisés", icon: "🎁" },
  { label: "Décor & scénographie", icon: "✨" },
  { label: "Coordination du thème", icon: "🎀" },
];

function Themes() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Hero */}
      <header className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-script text-2xl text-primary">Nouveau</p>
          <h1 className="mt-2 font-display text-5xl leading-[1.02] sm:text-6xl">
            Anniversaires<br />
            <span className="italic text-primary">à thème</span>.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Bien plus qu'un gâteau — Carlie imagine et orchestre la fête entière.
            Sweet table coordonné, goodies à offrir, bouteilles, bonbons et déco :
            tout est <strong className="text-foreground">personnalisé au prénom,
            à la photo et au thème de l'enfant</strong>.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_DM(
                "Bonjour Carlie ! J'aimerais réserver un anniversaire à thème ✨",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              🎀 Réserver un anniversaire à thème
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/40 bg-card/60 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/5"
            >
              Voir l'Instagram
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-primary opacity-25 blur-3xl" />
          <img
            src={themeFrozen}
            alt="Anniversaire à thème Reine des Neiges"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[2.5rem] object-cover shadow-card"
          />
        </div>
      </header>

      {/* Inclus */}
      <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {includedFeatures.map((f) => (
          <div
            key={f.label}
            className="rounded-2xl border border-primary/15 bg-card p-5 text-center shadow-soft"
          >
            <p className="text-3xl">{f.icon}</p>
            <p className="mt-2 font-display text-lg text-foreground">{f.label}</p>
          </div>
        ))}
      </section>

      {/* Galerie d'exemples */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary/70">
              Galerie
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Quelques fêtes déjà organisées
            </h2>
          </div>
          <p className="hidden text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:block">
            Exemples
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {themedItems.map((it) => (
            <ThemeCard key={it.title} {...it} />
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="mt-24 rounded-[2rem] bg-accent/30 p-8 sm:p-12">
        <p className="font-script text-2xl text-primary">Comment ça marche</p>
        <h2 className="mt-1 font-display text-3xl sm:text-4xl">En 3 étapes simples</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          <Step n="1" title="On en parle">
            Vous m'écrivez sur Instagram avec le thème, l'âge et la date. On affine ensemble.
          </Step>
          <Step n="2" title="Je vous propose">
            Je vous envoie une mise en scène, une liste de goodies et un devis sur mesure.
          </Step>
          <Step n="3" title="Le jour J">
            Je prépare et livre l'ensemble. Vous n'avez plus qu'à profiter de la fête ✨
          </Step>
        </ol>
      </section>

      {/* CTA final */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-14 text-center text-primary-foreground shadow-glow sm:px-16">
          <p className="font-script text-2xl opacity-90">Une date en tête ?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            On crée la fête de vos rêves
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm opacity-90">
            Réservation au moins 3 semaines à l'avance pour les anniversaires à thème.
          </p>
          <a
            href={INSTAGRAM_DM(
              "Bonjour Carlie ! J'aimerais organiser un anniversaire à thème ✨",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-background px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary transition-transform hover:scale-[1.04]"
          >
            Réserver sur Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

function ThemeCard({
  img,
  title,
  theme,
  desc,
}: {
  img: string;
  title: string;
  theme: string;
  desc: string;
}) {
  const dm = INSTAGRAM_DM(
    `Bonjour Carlie ! J'aimerais réserver un anniversaire à thème "${theme}" ✨`,
  );
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary shadow-soft backdrop-blur">
          Exemple
        </span>
      </div>
      <div className="p-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70">{theme}</p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <a
          href={dm}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          Réserver ce thème
        </a>
      </div>
    </article>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-2xl bg-card p-6 shadow-soft">
      <p className="font-display text-3xl text-primary">{n}.</p>
      <p className="mt-1 font-display text-xl text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </li>
  );
}
