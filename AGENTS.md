# AGENTS.md

## Quick start
- `npm install` (both `package-lock.json` and `pnpm-lock.yaml` exist, but `package.json` engines/scripts reference npm)
- `npm run dev` → dev server on `localhost:4321`
- `npm run build` → static output in `dist/`
- `npm run preview` → preview the built `dist/`
- No tests, lint, or typecheck scripts configured.

## Architecture
- **Astro v5** static site (`.astro` single-file components: JS frontmatter + HTML + scoped styles).
- **LESS** is the CSS preprocessor. Use `<style lang="less">` in `.astro` files. Standard CSS also works.
- **Global styles**: `src/styles/root.less` (design tokens, buttons, typography) and `src/styles/dark.less` (dark palette). Both are imported by `BaseLayout.astro`.
- **Page layout**: Every page wraps content in `<BaseLayout>` which provides `<head>`, `<Header />`, `<main id="main"><slot /></main>`, `<Footer />`, and the dark-mode inline script.
- **Image handling**: Two approaches coexist:
  - Astro `<Picture>` from `astro:assets` — imports image from `src/assets/images/`, auto-generates avif/webp. Used in `index.astro` SBS sections.
  - Native `<picture>` with manual `<source>` tags — references images in `public/assets/images/`. Used in the gallery on `index.astro`.
  - Do NOT mix them: `getOptimizedImage()` (from `src/js/utils.js`) only works with images imported via ESM from `src/`.

## Key conventions
- **Fonts**: `@fontsource/press-start-2p` imported in `Header.astro` and `Footer.astro`. `@fontsource/shrikhand` is in `package.json` but used via CSS `font-family` only.
- **Site metadata**: `src/data/client.json` drives `<head>` content (domain, OG tags, etc.). Fill it out before deploying.
- **Navigation**: `src/data/navData.json` — array of `{key, url}` objects. Rendered by `Header.astro`.
- **Dark mode**: `body.dark-mode` class toggled via inline `<script is:inline>` in `BaseLayout.astro` (reads localStorage + `prefers-color-scheme`). Toggle button in `DarkModeToggle.astro`. All dark overrides use `body.dark-mode` selector.
- **Preloading**: Pages import a hero image from `src/assets/images/`, optimize it with `getOptimizedImage()`, and pass it as `preloadedImage` prop to `<BaseLayout>` for a `<link rel="preload">` in `<head>`.
- **LESS escape syntax**: CSS functions like `min()`, `clamp()` break LESS parsing. Workaround: `~"min(1.2vw, 1em)"` (escaped string). CSS-only functions inside `clamp()` like `clamp(1rem, 3vw, 2rem)` do NOT need escaping.
- **Layout math**: LESS arithmetic uses `(value/16rem)` patterns for px→rem conversion (e.g., `(50/16rem)` = 50px in rem).

## File roles
| Path | Role |
|---|---|
| `src/layouts/BaseLayout.astro` | Shell: `<head>`, dark-mode init, Header, Footer, slot |
| `src/components/Header.astro` | Fixed nav with mobile hamburger, renders navData.json |
| `src/components/Footer.astro` | Site footer, uses client.json |
| `src/components/Landing.astro` | Interior page hero (receives `title` + `image` props) |
| `src/components/CTA.astro` | Call-to-action block |
| `src/components/DarkModeToggle.astro` | Toggle button with sun/moon icons |
| `src/js/utils.js` | `getOptimizedImage()` via `astro:assets` `getImage()` |
| `src/js/nav.js` | Mobile menu toggle (plain JS, loaded in `<head>` of BaseLayout) |
| `src/data/client.json` | Business info: name, email, phone, address, domain |
| `src/data/navData.json` | Navigation entries |
| `src/styles/root.less` | CSS variables, `.cs-*` global classes, buttons |
| `src/styles/dark.less` | Dark palette variables, `body.dark-mode` overrides |

## Deploy target
- **Netlify**. `astro.config.mjs` has `site: "https://www.weekendtreesurgeon.netlify.app"`. `public/_redirects` and `public/robots.txt` are Netlify-aware.
- Built output goes to `dist/` (in `.gitignore`).
