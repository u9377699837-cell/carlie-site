import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Quelque chose s'est mal passé. Réessayez ou revenez à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/40"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Carlie Nouteau" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Carlie Nouteau — Pâtisserie" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f7f1e8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Dancing+Script:wght@500;600;700&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "text-[13px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-primary";
  const activeCls = { className: "text-primary" };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl text-primary">Carlie</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Nouteau
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={activeCls}>
            Accueil
          </Link>
          <Link to="/creations" className={linkCls} activeProps={activeCls}>
            Créations
          </Link>
          <Link to="/themes" className={linkCls} activeProps={activeCls}>
            Anniversaires à thème
          </Link>
          <Link to="/about" className={linkCls} activeProps={activeCls}>
            À propos
          </Link>
          <a
            href={`https://wa.me/33609970411?text=${encodeURIComponent("Bonjour Carlie ! J'aimerais réserver ✨")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-[12px] uppercase tracking-[0.22em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.04]"
          >
            Réserver
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {[
              { to: "/", label: "Accueil", exact: true },
              { to: "/creations", label: "Créations" },
              { to: "/themes", label: "Anniversaires à thème" },
              { to: "/about", label: "À propos" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-3 text-[14px] uppercase tracking-[0.2em] text-foreground/80 hover:bg-accent/40"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/33609970411?text=${encodeURIComponent("Bonjour Carlie ! J'aimerais réserver ✨")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-[13px] uppercase tracking-[0.22em] text-primary-foreground"
            >
              Réserver sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="font-display text-2xl text-primary">Carlie Nouteau</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Pâtisserie artisanale, sur commande,<br />avec ce qu'il faut d'amour.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
            <li><Link to="/creations" className="hover:text-primary">Créations</Link></li>
            <li><Link to="/themes" className="hover:text-primary">Anniversaires à thème</Link></li>
            <li><Link to="/about" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Me suivre
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok</a></li>
            <li><a href="mailto:contact@carlienouteau.fr" className="hover:text-primary">contact@carlienouteau.fr</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Carlie Nouteau · Tous droits réservés
      </div>
    </footer>
  );
}
