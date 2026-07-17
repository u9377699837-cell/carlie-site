# Carlie Site - Deploiement

Ce dossier est une version autonome du site Carlie Nouteau.

## Hebergement conseille

- Un projet separe dans Vercel ou Netlify.
- Ne pas le mettre dans un projet CaninPro ou AcuPraticien.
- Ne pas reutiliser un ancien domaine temporaire.

## Commandes

```bash
npm install
npm run build
```

## Variables Supabase

Si le site utilise Supabase, definir ces variables dans l'hebergeur :

```bash
SUPABASE_PROJECT_ID=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_URL=
VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
```

## Domaine public

Les URLs SEO du projet pointent sur :

```text
https://carlienouteau.fr
```

Changer cette valeur dans `src/routes/*` et `public/robots.txt` si le domaine final est different.
