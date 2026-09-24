import { useEffect, useState } from 'react';

// Owner-supplied (2026-09-24): next batch starts 5 Oct 2026, 5 PM IST.
const BATCH_START = new Date('2026-10-05T17:00:00+05:30').getTime();
const BATCH_LABEL = 'Oct 5, 2026 · 5 PM';

const pad = (n) => String(n).padStart(2, '0');

export default function BatchCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, BATCH_START - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const units = [
    ['Days', Math.floor(totalSeconds / 86400)],
    ['Hours', Math.floor((totalSeconds % 86400) / 3600)],
    ['Minutes', Math.floor((totalSeconds % 3600) / 60)],
    ['Seconds', totalSeconds % 60],
  ];

  return (
    <div className="batch-countdown">
      <p className="batch-countdown-title">
        Our next batch starts <strong>{BATCH_LABEL}</strong>
      </p>
      <div className="batch-countdown-grid" role="timer" aria-label="Time left until the next batch starts">
        {units.map(([label, value]) => (
          <div key={label} className="batch-countdown-unit">
            <span className="batch-countdown-num">{pad(value)}</span>
            <span className="batch-countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
