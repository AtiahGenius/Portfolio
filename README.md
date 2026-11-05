# Geniuz Atiah Portfolio

A React, TypeScript, and Vite portfolio site styled with Tailwind CSS and custom CSS.

## Requirements

- Node.js 22
- pnpm 10 (versions are pinned in `.mise.toml`)

## Run locally

```sh
pnpm install
pnpm dev
```

Vite uses port `8443` by default. To create and preview a production build:

```sh
pnpm build
pnpm preview
```

Run `pnpm format` to format the project.

## Update content

- `src/App.tsx` contains the project and service data, page routes, and page markup.
- Change a project's `image` value in the `projects` array to update its Selected Work image.
- Change a service's `image` value in the `services` array to update its service page image.
- Put local images under `public/images/` and reference them with a URL such as `/images/ui/Anon.png`.
- Service detail routes are `/services/product-ui-ux`, `/services/brand-graphic-design`, and `/services/front-end-development`.
- `src/index.css` contains layout, responsive, and animation styles.

## Site settings and Figma tooling

`site.config.json` supplies the site description, favicon, indexing behavior, and accessibility settings used by `vite.config.ts`.

The `.figma/` workflow directory has been removed. This removes its saved Figma Make and Code Layers workflow configuration; the Vite config still contains its development plugins and virtual Make preview route.
