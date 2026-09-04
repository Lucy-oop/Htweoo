# Htwe Oo Myanmar

Traditional Burmese marionette theatre — Phnom Penh & Bangkok.

## Live site

**https://lucy-oop.github.io/Htweoo/**

That is the only deployed site. There is an older `Lucy-oop/Htwe-Oo-Myanmar`
repo whose Pages is set to "Deploy from a branch", so it serves raw `.tsx`
source and renders a blank white page. It predates this codebase — ignore it,
or delete it / turn its Pages off to avoid confusion.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks,
builds, and publishes `dist/` via `actions/deploy-pages`.

Pages serves a project site from `/<repo>/`, so the Vite `base` is derived at
build time from `GITHUB_REPOSITORY` rather than hard-coded — a stale hard-coded
name renders a blank page, because `index.html` loads while every asset 404s
under the wrong prefix. The router takes its basename from
`import.meta.env.BASE_URL`, so it follows automatically.

The workflow also copies `index.html` to `404.html` (Pages has no rewrite
rules, so a hard refresh on a route would otherwise 404) and touches
`.nojekyll`.

## Theatre curtain

The homepage curtain lives in `src/components/CurtainStage.tsx`, mounted at the
top of the gallery panel. Scroll drives a single CSS custom property, `--p`
(0 shut, 1 open), written each frame by the loop in `src/pages/HomePage.tsx`;
every layer derives its motion from that. Cursor tracking is in
`src/lib/useCursorHeadTrack.ts`.

Assets — replace in place, no code changes needed:

| Path | Notes |
| --- | --- |
| `public/videos/theater/turn_left.mp4` | Scrubbed, never played. Head-on at t=0, full turn on the last frame. |
| `public/videos/theater/turn_right.mp4` | Same, mirrored. Must match the left clip's duration and frame-0 pose. |
| `public/images/theater/closing_curtain.png` | One *closed* curtain, split down the middle at runtime. |
| `public/images/theater/valance.png` | Trimmed of transparent padding; tiled twice across the width. |
| `public/images/theater/stage.jpg` | Frame 0 of the left clip. Regenerate whenever the clips change. |

Clips are served same-origin on purpose: scrubbing seeks constantly, and a
cross-origin video can stall on every seek.
