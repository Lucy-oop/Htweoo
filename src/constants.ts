import { asset } from './lib/images';

export const VIDEO_ASSETS = {
  left: 'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
  right: 'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
};

// Local gallery assets — files live in public/images/ and are served from /images/
// encodeURI (not encodeURIComponent) escapes the spaces but leaves the commas literal;
// Vite's static middleware does not resolve %2C and falls through to index.html.
const GALLERY_FILENAMES: string[] = [
  'ChatGPT Image Aug 31, 2026, 10_47_25 AM.png',
  'ChatGPT Image Aug 31, 2026, 10_51_39 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_03_10 AM.png',
  'ChatGPT Image Aug 31, 2026, 10_58_16 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_00_38 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_05_16 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_41_55 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_42_01 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_47_20 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_47_33 AM.png',
];

export const GALLERY_IMAGES: string[] = GALLERY_FILENAMES.map((name) =>
  encodeURI(asset(`images/${name}`))
);

export const SYMBOLS = ['8', '$', '^^', '%', '/'];

export const EASE_BEZIER: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let imgIdx = 0;
  let r = 0;
  while (imgIdx < count) {
    const row = new Array(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = imgIdx;
    imgIdx++;

    if (r % 3 === 0 && imgIdx < count) {
      let b = (a + 2) % cols;
      if (b === a) {
        b = (a + 1) % cols;
      }
      row[b] = imgIdx;
      imgIdx++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}

/**
 * Curtain stage that opens at the top of the gallery panel. Drop the artwork
 * into `public/images/theater/` under these names and it is picked up
 * automatically; until then each layer falls back to a CSS stand-in, so the
 * section reads correctly before the files exist.
 *
 *  closing_curtain.png  full closed red curtain, drawn edge to edge. It is split
 *                      down the middle at runtime, so supply ONE closed image
 *                      rather than two halves.
 *  valance.png         gold pelmet/swag. Transparent PNG, anchored top.
 *  stage.jpg           dark wooden stage revealed behind the curtain.
 */
export const CURTAIN_ASSETS = {
  curtain: asset('images/theater/closing_curtain.png'),
  valance: asset('images/theater/valance.png'),
  stage: asset('images/theater/stage.jpg'),
};

/**
 * The two puppet clips, scrubbed by cursor position and never played, so each
 * must start head-on at t=0 and reach a full turn on its final frame.
 *
 * Served from public/ rather than a remote host on purpose: seeking is the
 * entire animation here, and a cross-origin video can stall on every seek.
 * asset() resolves them against the Vite base so they survive the /Htweoo/
 * subpath on Pages.
 *
 * These exact paths are what the stage loads. Replacing a render means
 * overwriting the file at the same path; nothing else needs editing.
 */
export const CURTAIN_VIDEOS = {
  lookLeft: asset('videos/theater/turn_left.mp4'),
  lookRight: asset('videos/theater/turn_right.mp4'),
};
