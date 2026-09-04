import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages serves a project site from /<repo>/, so bundled JS/CSS/asset
    // URLs must be rewritten to that subpath. Dev and other hosts stay at root.
    //
    // Derived from GITHUB_REPOSITORY ("owner/repo", set by Actions) rather than
    // hard-coded: a hard-coded name silently breaks if the repo is renamed or
    // the site is deployed from a fork, and the failure mode is a blank page —
    // index.html loads but every asset 404s under the wrong prefix.
    base: process.env.GITHUB_PAGES
      ? `/${(process.env.GITHUB_REPOSITORY ?? '').split('/')[1] || 'Htweoo'}/`
      : '/',

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
