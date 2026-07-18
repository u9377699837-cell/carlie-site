import { createFileRoute } from "@tanstack/react-router";
import cakeYellow from "@/assets/cake-yellow.jpg";
import cakeFrozen from "@/assets/cake-frozen.jpg";
import cakePink from "@/assets/cake-pink.jpg";
import cakeAdam from "@/assets/cake-adam.jpg";
import donuts from "@/assets/donuts.jpg";

const INSTAGRAM_URL = "https://instagram.com/carlie.nouteau";
const WHATSAPP_NUMBER = "33609970411";
const INSTAGRAM_DM = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/creations")({
  head: () => ({
    meta: [
      { title: "Créations — Carlie Nouteau" },
      {
        name: "description",
        content:
          "Galerie d'exemples : gâteaux d'anniversaire sur mesure et pâtisseries gourmandes par Carlie Nouteau. Réservation directement sur Instagram.",
      },
      { property: "og:title", content: "Créations — Carlie Nouteau" },
      {
        property: "og:description",
        content:
          "Quelques exemples de gâteaux et pâtisseries faits maison. Chaque commande est unique.",
      },
      { property: "og:url", content: "https://carlienouteau.fr/creations" },
      { property: "og:image", content: cakePink },
      { name: "twitter:image", content: cakePink },
    ],
    links: [{ rel: "canonical", href: "https://carlienouteau.fr/creations" }],
  }),
  component: Creations,
});

const birthdayCakes = [
  {
    img: cakePink,
    title: "Forêt enchantée",
    desc: "Buttercream rose, petits animaux en pâte d'amande, topper bois doré.",
  },
  {
    img: cakeYellow,
    title: "Envolée de papillons",
    desc: "Crème mangue-passion, papillons dorés faits main, sprinkles arc-en-ciel.",
  },
  {
    img: cakeFrozen,
    title: "Reine des Neiges",
    desc: "Vanille bleutée, perles nacrées, guirlande de sphères pour les petites princesses.",
  },
  {
    img: cakeAdam,
    title: "Gamer",
    desc: "Buttercream gris ardoise, manette en sucre, topper personnalisé prénom + âge.",
  },
];

const pastries = [
  {
    img: donuts,
    title: "Donuts rosés",
    desc: "Glaçage fraise, perles dorées et sprinkles. Vendus par boîte de 6 ou 12.",
  },
];

function Creations() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Header */}
      <header className="max-w-2xl">
        <p className="font-script text-2xl text-primary">Galerie</p>
        <h1 className="mt-2 font-display text-5xl leading-[1.02] sm:text-6xl">
          Quelques <span className="italic text-primary">exemples</span><br />
          de mes créations.
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          Voici un aperçu de ce que j'ai déjà créé. Chaque pièce est{" "}
          <strong className="text-foreground">unique et faite sur commande</strong> —
          ces photos sont là pour vous inspirer. Choisissez un style, ou décrivez-moi
          votre rêve : on imagine ensemble votre gâteau.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={INSTAGRAM_DM("Bonjour Carlie ! J'aimerais commander un gâteau sur mesure ✨")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
          >
            ✨ Créer mon gâteau sur mesure
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/40 bg-card/60 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/5"
          >
            Voir mon Instagram
          </a>
        </div>
      </header>

      {/* Gâteaux d'anniversaire */}
      <section className="mt-20">
        <SectionTitle eyebrow="Catégorie" title="Gâteaux d'anniversaire" />
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {birthdayCakes.map((c) => (
            <CakeCard key={c.title} {...c} category="Gâteau d'anniversaire" />
          ))}
        </div>
      </section>

      {/* Pâtisseries */}
      <section className="mt-24">
        <SectionTitle eyebrow="Catégorie" title="Pâtisseries gourmandes" />
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {pastries.map((p) => (
            <CakeCard key={p.title} {...p} category="Pâtisserie" />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-14 text-center text-primary-foreground shadow-glow sm:px-16">
          <p className="font-script text-2xl opacity-90">Une autre idée ?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Tout est possible — dites-le moi ✨
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm opacity-90">
            Couleur préférée, parfum, thème, photo de référence… envoyez-moi votre
            inspiration en message privé.
          </p>
          <a
            href={INSTAGRAM_DM("Bonjour Carlie, j'ai une idée de gâteau à vous partager ✨")}
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

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-5">
      <div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary/70">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h2>
      </div>
      <p className="hidden text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:block">
        Exemples sur mesure
      </p>
    </div>
  );
}

function CakeCard({
  img,
  title,
  desc,
  category,
}: {
  img: string;
  title: string;
  desc: string;
  category: string;
}) {
  const dm = INSTAGRAM_DM(
    `Bonjour Carlie ! J'aimerais réserver un gâteau dans le style "${title}" ✨`,
  );
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
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
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
          {category}
        </p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <a
          href={dm}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          Réserver ce style
        </a>
      </div>
    </article>
  );
}
