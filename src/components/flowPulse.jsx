import { useEffect, useState } from 'react';

// Shared pieces of the "power line" animation used by the course-page flow (ModuleFlow) and the
// Our Programmes flow (ProgrammeFlow): a solid cable with data packets riding it in a heartbeat.
//
// Heartbeat timing, in seconds. Every cable carries a "lub" (arrow packet) and a "dub" (round
// packet) once per CYCLE; the lines fire top-to-bottom, STAGGER apart, so the pulse sweeps down
// the fan instead of all cables blinking at once.
export const CYCLE = 3.6;
export const TRAVEL = 1.5;
export const STAGGER = 0.16;
export const DUB_LAG = 0.32;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

// A smooth S-curve from (x1,y1) to (x2,y2) that leaves and arrives horizontally.
export function cablePath(x1, y1, x2, y2) {
  const dx = (x2 - x1) * 0.55;
  const f = (v) => v.toFixed(1);
  return `M${f(x1)} ${f(y1)} C${f(x1 + dx)} ${f(y1)} ${f(x2 - dx)} ${f(y2)} ${f(x2)} ${f(y2)}`;
}

// One data packet riding a cable: a bright head with a fading tail. The same animation clock
// (begin + dur) drives the fade-in, the motion and the arrival, so a packet is never visible
// before it leaves or after it lands. `travel` is how long the ride takes.
export function Packet({ pathId, delay, kind, tailId, travel = TRAVEL }) {
  const frac = travel / CYCLE;
  const common = { dur: `${CYCLE}s`, begin: `${delay.toFixed(2)}s`, repeatCount: 'indefinite' };
  return (
    <g className={`mf-packet mf-packet-${kind}`} opacity="0">
      <animateMotion
        {...common}
        rotate="auto"
        calcMode="spline"
        keyPoints="0;1;1"
        keyTimes={`0;${frac.toFixed(4)};1`}
        keySplines="0.4 0 0.3 1;0 0 1 1"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate
        {...common}
        attributeName="opacity"
        values="0;1;1;0;0"
        keyTimes={`0;0.04;${(frac * 0.9).toFixed(4)};${frac.toFixed(4)};1`}
      />
      <rect className="mf-tail" x={kind === 'arrow' ? -44 : -28} y="-2" width={kind === 'arrow' ? 44 : 28} height="4" rx="2" fill={`url(#${tailId})`} />
      {kind === 'arrow' ? (
        <>
          <circle className="mf-halo" r="13" />
          <polygon className="mf-head" points="9,0 -5.5,-6.6 -1.6,0 -5.5,6.6" />
        </>
      ) : (
        <>
          <circle className="mf-halo" r="10" />
          <circle className="mf-head" r="4.2" />
        </>
      )}
    </g>
  );
}

// An expanding ring: the visible "beat" at a hub and on each socket where a packet lands.
export function Ripple({ cx, cy, from, to, begin }) {
  const dur = `${CYCLE}s`;
  const grow = 0.2;
  return (
    <circle className="mf-ripple" cx={cx} cy={cy} r={from} opacity="0">
      <animate attributeName="r" dur={dur} begin={`${begin.toFixed(2)}s`} repeatCount="indefinite" values={`${from};${to};${to}`} keyTimes={`0;${grow};1`} />
      <animate attributeName="opacity" dur={dur} begin={`${begin.toFixed(2)}s`} repeatCount="indefinite" values="0.75;0;0" keyTimes={`0;${grow};1`} />
    </circle>
  );
}

// The two fading-tail gradients the packets use; render inside the pulse svg's <defs>.
export function TailGradients({ arrowId, dotId }) {
  return (
    <>
      <linearGradient id={arrowId} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0 }} />
        <stop offset="1" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.85 }} />
      </linearGradient>
      <linearGradient id={dotId} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
        <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0.8 }} />
      </linearGradient>
    </>
  );
}
