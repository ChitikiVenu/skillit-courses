import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/style.css';

// scripts/prerender-meta.mjs bakes a real, route-specific <title>/description/canonical/OG tag set
// into each page's static HTML (for link-preview bots, which never run this script). Real browsers
// load this same HTML, then this file runs — so before react-helmet-async mounts and starts managing
// its own copies of those tags, drop the prerendered ones. Otherwise every hydrated page would carry
// two of each meta/link tag: the static one and Helmet's.
document.querySelectorAll('[data-prerendered]').forEach((el) => el.remove());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
