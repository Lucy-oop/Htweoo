import type React from 'react';

/**
 * Last-resort image used when a remote asset 404s/403s. Several of the original
 * lh3.googleusercontent.com links have already expired, so every <img> that
 * points at a remote host should route its onError through here.
 */
export const FALLBACK_IMAGE =
  'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/ChatGPT%20Image%20Aug%2028,%202026,%2002_26_05%20PM.png';

/**
 * onError handler for <img>. Swaps in `data-fallback` (or FALLBACK_IMAGE) once.
 * The dataset flag matters: without it, a fallback that itself fails would
 * re-fire onError against the same src forever.
 */
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === 'true') return;
  img.dataset.fallbackApplied = 'true';
  img.src = img.dataset.fallback || FALLBACK_IMAGE;
}

/** Themed stand-ins so a card never renders as an empty gradient. */
export const CARD_FALLBACKS = {
  stage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&q=80',
  orchestra: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=1200&q=80',
  craft: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  archive: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
} as const;
