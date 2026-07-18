import { createFileRoute, Link } from "@tanstack/react-router";
import cakeYellow from "@/assets/cake-yellow.jpg";
import cakePink from "@/assets/cake-pink.jpg";
import cakeFrozen from "@/assets/cake-frozen.jpg";
import donuts from "@/assets/donuts.jpg";
import themePringles from "@/assets/theme-pringles.jpg";
import themeFrozen from "@/assets/theme-frozen.jpg";
import themeHaribo from "@/assets/theme-haribo.jpg";

const INSTAGRAM_URL = "https://instagram.com/carlie.nouteau";
const WHATSAPP_NUMBER = "33609970411";
const INSTAGRAM_DM = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlie Nouteau — Pâtisserie artisanale & gâteaux sur mesure" },
      {
        name: "description",
        content:
          "Gâteaux d'anniversaire, pièces sur mesure et pâtisseries gourmandes faits à la main. Réservez votre création directement sur Instagram.",
      },
      { property: "og:title", content: "Carlie Nouteau — Pâtisserie artisanale" },
      {
        property: "og:description",
        content:
          "Gâteaux sur mesure et pâtisseries gourmandes. Chaque création est unique.",
      },
      { property: "og:url", content: "https://carlienouteau.fr/" },
      { property: "og:image", content: cakePink },
      { name: "twitter:image", content: cakePink },
    ],
    links: [{ rel: "canonical", href: "https://carlienouteau.fr/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Pâtissière artisanale
            </span>
            <h1 className="mt-5 font-display text-[3rem] leading-[1.02] text-foreground sm:text-[4.2rem] md:text-[5rem]">
              Des douceurs<br />
              <span className="italic text-primary">faites avec amour</span>.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Moi c'est Carlie. Je crée à la main des gâteaux d'anniversaire et des
              pâtisseries gourmandes pour vos petits et grands moments — chaque
              création est unique, pensée pour vous.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_DM("Bonjour Carlie ! J'aimerais réserver un gâteau ✨")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
              >
                Réserver un gâteau
              </a>
              <Link
                to="/creations"
                className="rounded-full border border-primary/30 bg-card/60 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/5"
              >
                Voir mes créations
              </Link>
            </div>

            <p className="mt-5 flex items-center gap-2 text-[12px] text-muted-foreground">
              <span>✨</span> Réservations par message direct sur Instagram
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={cakePink}
              alt="Gâteau d'anniversaire rose avec décor animaux et topper Happy Birthday"
              width={1024}
              height={1365}
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-card"
            />
            <div className="absolute -bottom-5 left-4 hidden rounded-2xl border border-border/60 bg-card/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-script text-lg text-primary">"Trop beau, trop bon."</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                — Léa, maman comblée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trio repères */}
      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <div className="grid gap-3 rounded-[2rem] border border-border/60 bg-card/60 p-5 backdrop-blur sm:grid-cols-3 sm:p-6">
          <Repere n="01" t="Choisissez un style" d="Inspirez-vous de la galerie ou décrivez votre rêve." />
          <Repere n="02" t="On échange en DM" d="Parfum, taille, thème, couleurs — on personnalise tout." />
          <Repere n="03" t="Je crée pour vous" d="Une pièce unique livrée fraîche le jour J." />
        </div>
      </section>

      {/* Aperçu créations */}
      <section className="bg-gradient-soft py-24 mt-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-script text-2xl text-primary">Aperçu</p>
              <h2 className="mt-1 font-display text-4xl leading-[1.05] sm:text-5xl">
                Quelques douceurs<br />faites maison.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Ce ne sont que des exemples — chaque commande est pensée et créée
                rien que pour vous.
              </p>
            </div>
            <Link
              to="/creations"
              className="text-[12px] uppercase tracking-[0.25em] text-primary hover:underline"
            >
              Voir toute la galerie →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Preview img={cakeYellow} title="Gâteau papillons" tag="Anniversaire" />
            <Preview img={cakeFrozen} title="Reine des Neiges" tag="Anniversaire" />
            <Preview img={donuts} title="Donuts gourmands" tag="Pâtisserie" />
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={INSTAGRAM_DM("Bonjour Carlie ! J'aimerais créer un gâteau sur mesure ✨")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Créer mon gâteau sur mesure
            </a>
          </div>
        </div>
      </section>

      {/* Anniversaires à thème */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={themeHaribo}
              alt="Sachets Haribo personnalisés"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover shadow-soft"
            />
            <img
              src={themePringles}
              alt="Pringles personnalisés 1·2·3"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-[1.5rem] object-cover shadow-soft"
            />
            <img
              src={themeFrozen}
              alt="Décor Reine des Neiges"
              loading="lazy"
              className="col-span-2 aspect-[16/10] w-full rounded-[1.5rem] object-cover shadow-soft"
            />
          </div>

          <div>
            <p className="font-script text-2xl text-primary">Nouveau</p>
            <h2 className="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl">
              J'organise aussi vos<br />
              <span className="italic text-primary">anniversaires à thème</span>.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Sweet table coordonné, goodies personnalisés, décor complet — Winnie
              l'Ourson, Reine des Neiges ou un thème rien que pour vous. Je m'occupe
              de tout, vous profitez de la fête.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/themes"
                className="rounded-full bg-primary px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
              >
                Découvrir les thèmes
              </Link>
              <a
                href={INSTAGRAM_DM("Bonjour Carlie ! J'aimerais organiser un anniversaire à thème ✨")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/30 bg-card/60 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/5"
              >
                Réserver un thème
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-16 text-center text-primary-foreground shadow-glow sm:px-16">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <p className="font-script text-2xl opacity-90">Un événement à venir ?</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Imaginons votre gâteau<br />ensemble.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm opacity-90">
            Anniversaire, baptême, baby shower ou juste une envie de douceur.
            Envoyez-moi un message, on en parle ✨
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-9 inline-flex rounded-full bg-background px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] text-primary transition-transform hover:scale-[1.04]"
          >
            Réserver sur Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

function Repere({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex gap-3 rounded-2xl px-3 py-2">
      <span className="font-script text-2xl leading-none text-primary">{n}</span>
      <div className="min-w-0">
        <p className="font-display text-lg text-foreground">{t}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-muted-foreground">{d}</p>
      </div>
    </div>
  );
}

function Preview({ img, title, tag }: { img: string; title: string; tag: string }) {
  const dm = INSTAGRAM_DM(`Bonjour Carlie ! J'aimerais réserver un "${title}" ✨`);
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
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70">{tag}</p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Exemple — créé sur mesure
        </p>
        <a
          href={dm}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-primary/30 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/5"
        >
          Réserver ce style
        </a>
      </div>
    </article>
  );
}
