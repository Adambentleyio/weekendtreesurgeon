# AGENTS.md

## Project overview

The Weekend Tree Surgeon is a mobile-first Astro website for a UK tree surgery business.

The primary business objective is to generate qualified quote enquiries.

The website consists of:
- A conversion-focused homepage.
- Supporting SEO-oriented service and case-study pages.
- Real project photography, including before-and-after comparisons.

The homepage prioritises phone-number capture. Supporting pages should provide useful information and direct visitors towards requesting a quote.

## Before making design changes

1. Read `docs/design/README.md`.
2. Inspect the relevant mock-ups in `docs/design/mockups/`.
3. Review existing components and design tokens.
4. Preserve visual consistency with the current redesign.
5. Prioritise mobile layouts.

Mock-ups represent visual intent rather than exact specifications.

Never treat AI-generated photographs in mock-ups as actual completed jobs. Use genuine project photographs in the published website.

Do not introduce substantial design changes unrelated to the requested task.

## Development

Package manager: pnpm.

Common commands:

- `pnpm install` — install dependencies.
- `pnpm dev` — start the development server.
- `pnpm build` — build the production website.
- `pnpm preview` — preview the production build.

No dedicated test, lint or typecheck scripts are currently documented.

Run `pnpm build` after meaningful implementation changes.

## Architecture

- Astro v5.
- LESS for styling.
- `src/layouts/BaseLayout.astro` provides the shared HTML document structure and metadata.
- `src/styles/root.less` contains the global design system.
- Use Astro components for reusable interface elements.

Prefer existing project conventions over introducing new frameworks or dependencies.

## Design system

Colours:

- Cream: `#FAF8F2`
- Forest: `#203D2E`
- Deep forest: `#152A20`
- Sage: `#7A9C82`
- Light sage: `#E6EEE4`
- Gold: `#C68A3E`

Typography:

- Headings: Bricolage Grotesque.
- Body and interface text: Inter.

Use the CSS variables defined in `root.less` rather than hardcoding repeated values.

Design principles:

- Mobile-first.
- Clean, approachable and professional.
- Rounded cards.
- Consistent spacing.
- Clear visual hierarchy.
- Prominent quote forms.
- Real photography.
- Accessible, semantic HTML.

## Page design

The homepage should maintain a strong conversion focus.

Service and case-study pages should use consistent layouts and reusable components.

Where appropriate, case studies should include:

- The homeowner's original problem.
- What work was carried out.
- Genuine before-and-after photographs.
- The outcome.
- A clear quote CTA.

Avoid inventing project details, customer testimonials, guarantees or business credentials.

## Images

Prefer Astro's `Picture` component and image assets imported from `src/assets/images/`.

Astro can generate modern image formats such as AVIF and WebP.

Use descriptive alternative text.

Optimise photographs appropriately for mobile and desktop.

Existing image utilities should be inspected before being reused or replaced.

## LESS

Be aware that LESS can attempt to evaluate CSS functions such as `min()`.

Use CSS-compatible escaping when necessary.

Prefer straightforward CSS layouts over unnecessarily complicated calculations.

## Accessibility

- Use semantic HTML.
- Ensure visible keyboard focus.
- Maintain sufficient colour contrast.
- Provide meaningful image descriptions.
- Respect reduced-motion preferences.
- Keep forms accessible and properly labelled.

## SEO

Service and case-study pages should have:

- Unique page titles.
- Relevant meta descriptions.
- Logical heading structures.
- Descriptive image alt text.
- Appropriate internal links.
- Useful, original content.

Avoid creating near-duplicate pages simply to target different search terms.

## Business information

`src/data/client.json` is the central source of
business information.

It is currently used by:
- The footer.
- The legacy contact page, which is no longer active.

When creating new pages or components, reuse
client.json for business information rather
than hardcoding duplicate values.

Do not invent or modify business credentials,
contact details or other factual claims.

The contact page is legacy code. Do not use its
layout as a reference for new pages.

## Deployment

The project is intended for Netlify.

Production output is generated in `dist/`.

Check the current Astro configuration and deployment settings before changing them.

## Working style

Make focused, incremental changes.

Before significant modifications, inspect the relevant existing code and design references.

Explain important architectural or design decisions.

Avoid unnecessary dependencies and unrelated refactoring.

Ask before substantially departing from established design patterns.