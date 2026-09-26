import { useEffect, useRef } from 'react';

const COLOURS = ['#5b7cf0', '#ff7a59', '#ffc93c', '#3ddc97', '#a78bfa', '#38bdf8'];
const RADIUS = 170; // how far the mouse reaches
const SPACING = 96; // one dot or star per this many px, roughly

// Small seeded random so the dots land in the same places on every load.
const rng = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// A field of little coloured dots and stars behind the About Us page. It sticks to the viewport inside the page
// wrapper, so it never reaches the footer. Dots near the mouse pointer swell and drift away, then settle back.
export default function AboutDots() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const fine = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dots = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let mouse = null;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.parentElement.clientWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const rand = rng(7);
      const cols = Math.ceil(w / SPACING);
      const rows = Math.ceil(h / SPACING);
      dots = [];
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          if (rand() < 0.28) continue; // leave gaps so it feels scattered
          dots.push({
            x: (c + rand()) * SPACING,
            y: (r + rand()) * SPACING,
            ox: 0,
            oy: 0,
            size: 1.5 + rand() * 1.9,
            colour: COLOURS[Math.floor(rand() * COLOURS.length)],
            star: rand() < 0.22,
          });
        }
      }
      draw();
    };

    const star = (x, y, s) => {
      ctx.beginPath();
      for (let i = 0; i < 8; i += 1) {
        const a = (Math.PI / 4) * i;
        const len = i % 2 === 0 ? s * 2.4 : s * 0.7;
        const px = x + Math.cos(a) * len;
        const py = y + Math.sin(a) * len;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    };

    function draw() {
      ctx.clearRect(0, 0, w, h);
      let moving = false;
      for (const d of dots) {
        let tx = 0;
        let ty = 0;
        let grow = 1;
        if (mouse) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS) {
            const f = 1 - dist / RADIUS;
            const push = f * f * 64;
            const len = dist || 1;
            tx = (dx / len) * push;
            ty = (dy / len) * push;
            grow = 1 + f * 2.4;
          }
        }
        d.ox += (tx - d.ox) * 0.16;
        d.oy += (ty - d.oy) * 0.16;
        if (Math.abs(tx - d.ox) > 0.05 || Math.abs(ty - d.oy) > 0.05) moving = true;
        const scale = grow;
        ctx.globalAlpha = grow > 1 ? 0.95 : 0.7;
        ctx.fillStyle = d.colour;
        if (d.star) star(d.x + d.ox, d.y + d.oy, d.size * scale * 0.9);
        else {
          ctx.beginPath();
          ctx.arc(d.x + d.ox, d.y + d.oy, d.size * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = moving || mouse ? requestAnimationFrame(draw) : 0;
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const move = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      kick();
    };
    const leave = () => {
      mouse = null;
      kick();
    };

    build();
    window.addEventListener('resize', build);
    if (fine) {
      window.addEventListener('pointermove', move, { passive: true });
      document.addEventListener('pointerleave', leave);
    }
    return () => {
      window.removeEventListener('resize', build);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="ab-dots" aria-hidden="true" />;
}
