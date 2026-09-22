import { memo, useEffect, useRef, useState } from 'react';

// The code strip at the bottom of the home page tablet: a small editor that never stops typing. One
// endless script is typed out character by character, snippet after snippet (one per programme),
// scrolling up like a real editor as it fills. It is never cleared: when the section scrolls out of
// view the typing pauses and picks up exactly where it left off. Line width is kept to ~34
// characters so it fits the tablet screen at every size.
const SNIPPETS = [
  {
    file: 'career.js',
    code: `// skill it education
const career = {
  learn: "hands-on labs",
  build: "real projects",
  intern: "2 months live",
  hired: "interview ready",
};

for (const step in career) {
  console.log(step, career[step]);
}`,
  },
  {
    file: 'recon.py',
    code: `# cyber security: recon
import socket

def scan(host, ports):
  found = []
  for p in ports:
    s = socket.socket()
    s.settimeout(0.4)
    addr = (host, p)
    if s.connect_ex(addr) == 0:
      found.append(p)
    s.close()
  return found

print(scan("10.0.0.5", [22, 80]))`,
  },
  {
    file: 'train.py',
    code: `# ai & ml: training loop
model = build_model()
opt = Adam(model.parameters())

for epoch in range(10):
  for x, y in loader:
    loss = loss_fn(model(x), y)
    opt.zero_grad()
    loss.backward()
    opt.step()
  print(epoch, loss.item())`,
  },
  {
    file: 'explore.py',
    code: `# data science: explore
import pandas as pd

df = pd.read_csv("sales.csv")
df = df.dropna()
df["month"] = df["date"].dt.month

top = (df.groupby("region")
  ["revenue"].sum()
  .sort_values(ascending=False))

print(top.head(3))`,
  },
  {
    file: 'triage.sql',
    code: `-- soc analyst: triage alerts
SELECT src_ip,
       COUNT(*) AS hits
FROM auth_logs
WHERE status = 'FAILED'
  AND ts > NOW() - INTERVAL '1h'
GROUP BY src_ip
HAVING COUNT(*) > 20
ORDER BY hits DESC
LIMIT 10;`,
  },
  {
    file: 'report.sql',
    code: `-- data analytics: monthly report
WITH monthly AS (
  SELECT DATE_TRUNC('month', d) m,
         SUM(amount) AS total
  FROM orders
  GROUP BY 1
)
SELECT m, total,
  total - LAG(total) OVER (
    ORDER BY m) AS growth
FROM monthly;`,
  },
].map((s) => ({ ...s, lines: s.code.split('\n') }));

// The code editor now fills the whole tablet screen (2026-09-22 — it used to be a short strip under
// typed marketing copy). Rows are bottom-aligned with overflow clipped above (.code-body's
// flex-end + overflow:hidden), so any screen height just shows however many of the last VISIBLE_ROWS
// actually fit — this only needs to be "large enough for the tallest tablet", not exact.
const VISIBLE_ROWS = 60;

const KEYWORDS = new Set([
  'import', 'from', 'def', 'for', 'in', 'if', 'return', 'const', 'let', 'not', 'true', 'false', 'null',
  'select', 'as', 'where', 'and', 'group', 'by', 'having', 'order', 'limit', 'with', 'over', 'desc', 'interval',
]);
// comment | string (may still be open while typing) | number | function call | identifier
const TOKEN_RE = /(#.*|--.*|\/\/.*)|("(?:[^"\\]|\\.)*(?:"|$)|'(?:[^'\\]|\\.)*(?:'|$))|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)(?=\()|([A-Za-z_]\w*)/g;

function highlight(text) {
  const out = [];
  let last = 0;
  TOKEN_RE.lastIndex = 0;
  let m = TOKEN_RE.exec(text);
  while (m) {
    if (m.index > last) out.push(['', text.slice(last, m.index)]);
    let cls = '';
    if (m[1]) cls = 'c';
    else if (m[2]) cls = 's';
    else if (m[3]) cls = 'n';
    else if (m[4]) cls = 'f';
    else if (KEYWORDS.has(m[5].toLowerCase())) cls = 'k';
    out.push([cls, m[0]]);
    last = m.index + m[0].length;
    m = TOKEN_RE.exec(text);
  }
  if (last < text.length) out.push(['', text.slice(last)]);
  return out;
}

const Row = memo(function Row({ n, text, cursor }) {
  return (
    <div className="code-row">
      <span className="code-ln">{n ?? ''}</span>
      <span className="code-text">
        {highlight(text).map(([cls, str], i) => (
          <span className={cls ? `code-${cls}` : undefined} key={i}>
            {str}
          </span>
        ))}
        {cursor && <span className="code-cursor" />}
      </span>
    </div>
  );
});

// The screen starts already full of code, so a tall screen is never empty while the first line types;
// typing then carries on from the first script. Walks backward through the snippets, wrapping around
// as many times as it takes to reach VISIBLE_ROWS — a single lap (the last 3 snippets) isn't enough
// rows to fill the full-height screen any more.
function prefill() {
  const rows = [];
  let id = 0;
  let idx = SNIPPETS.length;
  while (rows.length < VISIBLE_ROWS) {
    idx = (idx - 1 + SNIPPETS.length) % SNIPPETS.length;
    const snip = SNIPPETS[idx];
    const block = snip.lines.map((text, i) => ({ id: 0, n: i + 1, text }));
    block.push({ id: 0, n: null, text: '' });
    rows.unshift(...block);
  }
  rows.forEach((r) => {
    r.id = id++;
  });
  return { rows, nextId: id };
}

export default function CodeStrip({ active, animate = true }) {
  const engine = useRef(null);
  if (!engine.current) {
    const { rows, nextId } = prefill();
    engine.current = { s: 0, l: 0, c: 0, rows, id: nextId, file: SNIPPETS[0].file, timer: null };
  }
  const [view, setView] = useState(() => ({ rows: engine.current.rows.slice(-VISIBLE_ROWS), partial: '', n: 1, file: SNIPPETS[0].file }));

  useEffect(() => {
    if (!animate || !active) return undefined;
    const e = engine.current;

    const publish = () => {
      const line = SNIPPETS[e.s].lines[e.l];
      setView({ rows: e.rows.slice(-VISIBLE_ROWS), partial: line.slice(0, e.c), n: e.l + 1, file: e.file });
    };

    const tick = () => {
      const snip = SNIPPETS[e.s];
      const line = snip.lines[e.l];
      let delay;
      if (e.c === 0) {
        // like an editor's auto-indent: the leading spaces of a line appear at once
        e.c = line.length - line.trimStart().length;
      }
      if (e.c < line.length) {
        e.c += 1;
        const ch = line[e.c - 1];
        delay = 22 + Math.random() * 34 + (',(;{'.includes(ch) ? 60 : 0);
      } else {
        e.rows.push({ id: e.id++, n: e.l + 1, text: line });
        if (e.rows.length > VISIBLE_ROWS * 2) e.rows.splice(0, e.rows.length - VISIBLE_ROWS);
        e.c = 0;
        e.l += 1;
        delay = 90 + Math.random() * 150;
        if (e.l >= snip.lines.length) {
          e.rows.push({ id: e.id++, n: null, text: '' });
          e.s = (e.s + 1) % SNIPPETS.length;
          e.l = 0;
          e.file = SNIPPETS[e.s].file;
          delay = 700;
        }
      }
      publish();
      e.timer = setTimeout(tick, delay);
    };

    e.timer = setTimeout(tick, 250);
    return () => clearTimeout(e.timer);
  }, [active, animate]);

  return (
    <div className="code-editor" aria-hidden="true">
      <div className="code-tabbar">
        <span className="code-tab">{view.file}</span>
      </div>
      <div className="code-body">
        {view.rows.map((r) => (
          <Row key={r.id} n={r.n} text={r.text} />
        ))}
        {animate && <Row key="partial" n={view.n} text={view.partial} cursor />}
      </div>
    </div>
  );
}
