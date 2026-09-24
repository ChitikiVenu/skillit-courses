import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { setHome } from './homeModule.js';
import { initAnalytics } from './utils/analytics.js';
import './styles/style.css';

// scripts/prerender-meta.mjs bakes a real, route-specific <title>/description/canonical/OG tag set
// into each page's static HTML (for link-preview bots, which never run this script). Real browsers
// load this same HTML, then this file runs — so before react-helmet-async mounts and starts managing
// its own copies of those tags, drop the prerendered ones. Otherwise every hydrated page would carry
// two of each meta/link tag: the static one and Helmet's.
document.querySelectorAll('[data-prerendered]').forEach((el) => el.remove());

initAnalytics();

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isHome = window.location.pathname === '/';

// Everything the first screen needs is ready before anything is drawn, so the site fades in once
// instead of flashing through stages (blank, header alone, fallback-font text, then the real fonts,
// then pop-in images). Each wait has a timeout so a slow network can never leave the page blank.
// - the home page is a lazy chunk: fetch it now and hand it to the route so the first render doesn't suspend
// - the web fonts, so headline fitting and text don't reflow when they arrive
// - the two hero photos on the home page
const homeReady = isHome ? import('./pages/LandingPage.jsx').then((m) => setHome(m.default)).catch(() => {}) : Promise.resolve();
const fontsReady = document.fonts
  ? Promise.race([Promise.all(['400 16px Inter', '600 16px Inter', '700 16px Inter', '800 16px Inter', '600 16px Figtree'].map((f) => document.fonts.load(f))).catch(() => {}), wait(1500)])
  : Promise.resolve();
const imagesReady = isHome
  ? Promise.race([
      Promise.all(['/img/fit-photos/hero-plaid-girl.webp', '/img/fit-photos/hero-ai-ml.webp', '/img/skill-it-logo.png'].map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode().catch(() => {});
      })),
      wait(1500),
    ])
  : Promise.resolve();

Promise.all([homeReady, fontsReady, imagesReady]).then(() => {
  const root = document.getElementById('root');
  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  );
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      root.classList.add('is-ready');
      // page-to-page fades only apply from here on, not on top of the first load fade
      setTimeout(() => document.documentElement.classList.add('app-loaded'), 700);
    }),
  );
});
