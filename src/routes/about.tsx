import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/carlie-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Carlie Nouteau" },
      {
        name: "description",
        content:
          "Carlie Nouteau, pâtissière formée à Ferrandi. Cinq ans en palace avant d'ouvrir son atelier de pâtisserie artisanale à Paris.",
      },
      { property: "og:title", content: "À propos — Carlie Nouteau" },
      {
        property: "og:description",
        content:
          "L'histoire de Carlie, pâtissière formée à Ferrandi et passée par les palaces parisiens.",
      },
      { property: "og:url", content: "https://carlienouteau.fr/about" },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: "https://carlienouteau.fr/about" }],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <img
            src={portrait}
            alt="Portrait de Carlie Nouteau, pâtissière"
            width={896}
            height={1152}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>

        <article>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">
            Portrait
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1] sm:text-6xl">
            Bonjour, je suis<br />
            <span className="italic text-primary">Carlie</span>.
          </h1>

          <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-foreground/85">
            <p>
              J'ai grandi entre les casseroles de ma grand-mère, en Vendée. C'est elle
              qui m'a montré qu'un gâteau, ce n'est pas qu'un dessert — c'est une façon
              de dire "je pense à toi" sans avoir besoin des mots.
            </p>
            <p>
              À 18 ans, je suis entrée à l'École Ferrandi à Paris. Cinq ans plus tard,
              après être passée par les cuisines du Bristol et du Plaza Athénée, j'ai
              décidé de poser mes mains chez moi, dans mon propre atelier.
            </p>
            <p>
              Aujourd'hui, je crée des pâtisseries sur commande pour celles et ceux qui
              veulent un gâteau qui leur ressemble. Pas un truc standard sorti d'une
              vitrine. Quelque chose qui raconte vous, votre moment, votre histoire.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            <Belief title="Le geste avant la machine">
              Tout est fait main, dans un seul atelier, par moi. Pas de batch industriel.
            </Belief>
            <Belief title="La saison, toujours">
              Fraises en juin, marrons en novembre. Les produits dictent la carte.
            </Belief>
            <Belief title="Le goût avant l'instagram">
              Joli, oui — mais d'abord bon. Le sucre se mérite.
            </Belief>
            <Belief title="Petites séries">
              Je n'accepte qu'un nombre limité de commandes par semaine, pour garder le soin.
            </Belief>
          </div>

          <div className="mt-14 rounded-[1.75rem] border border-primary/20 bg-accent/30 p-8">
            <p className="font-display text-2xl italic leading-snug text-primary">
              "Un bon gâteau, c'est celui qu'on se souvient d'avoir mangé,
              même des années après."
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              — Carlie
            </p>
          </div>

          <div className="mt-12">
            <a
              href="https://instagram.com/carlie.nouteau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Réserver sur Instagram
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

function Belief({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-soft">
      <p className="font-display text-lg text-primary">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
