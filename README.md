# Hemanth Kandimalla | Portfolio

A static React, TypeScript, and Vite 5 portfolio for applied AI research,
agent harnesses, open-source systems, and technical writing.

## Local development

Install Node.js and npm, then run from this folder:

```sh
npm ci
npm run dev
```

Use the local address printed by Vite. The server does not open a browser or
expose itself to the network automatically.

## Production build

```sh
npm run type-check
npx tsc -p tsconfig.node.json
npm run build
npm run preview
```

The deployable static files are written to `dist/`. The build uses Vite's
included esbuild minifier; no Terser installation or manual source-file chunks
are required. Only `@/*` is configured as an alias for `src/`.

## Hosting and paths

`VITE_BASE_PATH` controls Vite's public base path. Set it in the build environment
or an untracked `.env.production.local` file:

```dotenv
VITE_BASE_PATH=/
```

- **Custom domain or account-level GitHub Pages:** keep `/`.
- **Repository-level GitHub Pages:** use `/REPOSITORY_NAME/`, then build again.
- **GitHub Pages deployment:** `.github/workflows/deploy.yml` builds and deploys
  every push to `main`, and can also be run manually from GitHub Actions. It
  reads the base path from Pages metadata, so repository URLs and a later custom
  domain use the correct asset and resume paths. The repository's Pages source
  must be set to **GitHub Actions**.
- **Custom domain:** configure the actual domain in Pages settings and DNS when
  it is available. Do not add a placeholder domain or `CNAME` file.

Reference public assets through `import.meta.env.BASE_URL` so they work under
both root and repository paths. The workflow publishes to the repository's Pages
URL. Domain and DNS changes are managed separately.

## Content and public files

Keep project, book, article, and employment content in the portfolio data source;
the React app controls presentation. The public contact area uses email and
profile links. Keep the private phone number out of both the site and the public
resume PDF. Add a portrait only when the candidate supplies a real photograph.

The hero and contact portraits use candidate-supplied photographs in
`src/assets/portraits/`. `Portrait.tsx` and `Portrait.css` control their framing,
captions, and responsive crops. The source JPEGs retain their original pixels;
Vite handles their published asset paths.

`mobile-shell.css` controls the compact introduction and persistent resume/menu
actions. `mobile-content.css` reflows research controls, projects, books, and
career details for screens up to 900px. Import both after the desktop styles;
keep reading text and touch targets usable when extending the mobile layout.

Files in `public/` are copied into the published build. Replace the public resume
with its updated phone-free version when career details change. Do not store
private documents, environment secrets, or development exports there.
