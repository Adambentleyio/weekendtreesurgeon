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

## Creating additional service pages

Treat `src/pages/hedge-cutting.astro` as the reference implementation for new service pages such as tree removal, tree reduction and garden clearance. Match its standard of content, responsiveness, accessibility and finish, but adapt the story and photography to the specific service rather than producing a near-duplicate page.

Before implementation:

1. Confirm that genuine photographs exist for the service and identify which images belong to the same project.
2. Inspect `src/pages/hedge-cutting.astro`, `BeforeAfterSlider.astro`, `ProjectGallery.astro`, `Header.astro`, `Footer.astro` and the global tokens in `root.less`.
3. Gather verified project facts. If a detail such as location, time on site or scope has not been confirmed, label it clearly as `To be confirmed` or omit it. Never infer facts from an image alone.
4. Define the page title, meta description, H1 and supporting copy around the actual service and locations served. Avoid keyword stuffing and interchangeable SEO copy.

Use this page structure unless the available content gives a clear reason to vary it:

1. Reuse the current minimal header and its prominent quote CTA.
2. Add an image-led service hero with one H1, a concise value proposition, three factual benefits and primary and secondary CTAs.
3. Add a recent-project section describing the customer's problem, the work carried out and the outcome.
4. Display structured job details beside the project narrative on desktop and below it on mobile.
5. Use `BeforeAfterSlider.astro` only with two aligned photographs of the same view and project. The before view belongs on the left and the after view on the right.
6. Use `ProjectGallery.astro` for additional genuine photographs from that same project.
7. Finish with a clear quote CTA using contact information from `src/data/client.json`.

Implementation requirements:

- Keep page-specific content in a structured data object near the top of the page so it can later be extracted into a shared service-page model.
- Reuse and extend existing components before creating replacements. Improvements to shared components must remain compatible with existing service pages.
- Use Astro's `Image` or `Picture` component with imported assets, responsive widths, accurate `sizes`, modern formats and appropriate eager or lazy loading.
- Write alt text that describes the visible work. Do not repeat adjacent copy or use phrases such as "image of".
- Preserve a consistent crop and aspect ratio in before-and-after comparisons so the images remain aligned while the divider moves.
- Keep comparison controls usable by mouse, touch and keyboard, with an accessible name and visible focus state.
- Use semantic landmarks, one H1, logical heading levels and descriptive CTA text.
- Start with the mobile layout. Check that hero copy remains legible, buttons are comfortably tappable, cards stack cleanly and photographs remain useful at narrow widths.
- Reuse the colours, typography, spacing and radius variables in `root.less`. Do not introduce a separate visual language for each service.
- Keep JavaScript lightweight and local to the component. Do not add a dependency for interactions that can be implemented with native controls and a small script.
- Respect `prefers-reduced-motion` for any non-essential animation.

Content and conversion standards:

- Write for homeowners first and search engines second. Explain what the service solves, what the work involves and what the customer can expect.
- Keep claims specific, plain and supportable. Do not invent certifications, response times, waste removal, project duration or guarantees.
- State qualifications on conditional services precisely. For example, say green waste is removed only where it is included in the quote.
- Link the primary CTA to the established quote-enquiry route. Use the secondary hero CTA to move visitors to the genuine project evidence.
- Include relevant local place names naturally in the title, introduction, project context and metadata without repeating them mechanically.

Before considering a service page complete:

1. Test the page at mobile, tablet and desktop widths.
2. Exercise interactive components with pointer, touch emulation and keyboard controls.
3. Check focus visibility, colour contrast, heading order and alternative text.
4. Confirm that every photograph is genuine and belongs to the project it claims to show.
5. Verify the canonical URL and page entry in the generated sitemap.
6. Run `pnpm build` and resolve all build or image-pipeline errors.

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
