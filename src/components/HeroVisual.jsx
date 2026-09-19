// Cyber Security and AI & ML use a static program-diagram illustration; SOC Analyst uses an
// inline SVG "live monitor" dashboard mockup instead (see SocDashboardSvg below) since no
// illustration exists for that brochure.
export function ImageHeroVisual({ src, alt, width, height }) {
  return <img className="hero-diagram" src={src} alt={alt} width={width} height={height} loading="eager" />;
}

export function SocDashboardSvg() {
  return (
    <svg
      className="hero-diagram"
      viewBox="0 0 640 620"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SOC live monitoring dashboard mockup showing an alert queue, severity tiers, an events-per-hour trend and kill-chain coverage"
    >
      <rect x="0" y="0" width="640" height="620" rx="16" fill="var(--bg-alt)" />
      <rect x="0" y="0" width="640" height="44" rx="16" fill="var(--surface)" />
      <rect x="0" y="28" width="640" height="16" fill="var(--surface)" />
      <circle cx="24" cy="22" r="5" fill="var(--ink)" />
      <circle cx="42" cy="22" r="5" fill="var(--ink-3)" />
      <circle cx="60" cy="22" r="5" fill="var(--ink-4)" />
      <text x="90" y="27" fontFamily="'IBM Plex Mono',monospace" fontSize="13" fontWeight="700" fill="var(--text)">
        SOC LIVE MONITOR
      </text>
      <text x="624" y="27" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fontWeight="700" fill="var(--ink)" textAnchor="end">
        ● ONLINE
      </text>

      <g fontFamily="'IBM Plex Mono',monospace">
        <rect x="16" y="64" width="192" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <text x="32" y="82" fontSize="10" fontWeight="700" letterSpacing="0.06em" fill="var(--text-faint)">
          OPEN ALERTS
        </text>
        <text x="32" y="102" fontSize="20" fontWeight="700" fill="var(--text)">
          12
        </text>

        <rect x="224" y="64" width="192" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <text x="240" y="82" fontSize="10" fontWeight="700" letterSpacing="0.06em" fill="var(--text-faint)">
          MTTR
        </text>
        <text x="240" y="102" fontSize="20" fontWeight="700" fill="var(--text)">
          18m
        </text>

        <rect x="432" y="64" width="192" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <text x="448" y="82" fontSize="10" fontWeight="700" letterSpacing="0.06em" fill="var(--text-faint)">
          COVERAGE
        </text>
        <text x="448" y="102" fontSize="20" fontWeight="700" fill="var(--ink)">
          24 / 7
        </text>
      </g>

      <g fontFamily="Inter,sans-serif">
        <rect x="16" y="128" width="608" height="56" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="40" cy="156" r="6" fill="var(--danger)" />
        <rect x="58" y="146" width="28" height="18" rx="5" fill="var(--danger)" opacity="0.12" />
        <text x="72" y="159" fontSize="10" fontWeight="700" fill="var(--danger)" textAnchor="middle">
          L2
        </text>
        <text x="98" y="153" fontSize="13" fontWeight="600" fill="var(--text)">
          Suspicious outbound traffic — Finance subnet
        </text>
        <text x="98" y="169" fontSize="10.5" fill="var(--text-faint)">
          Offense #4471 · Firewall + NIDS
        </text>
        <text x="608" y="160" fontSize="10.5" fontFamily="'IBM Plex Mono',monospace" fill="var(--text-faint)" textAnchor="end">
          1m ago
        </text>

        <rect x="16" y="196" width="608" height="56" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="40" cy="224" r="6" fill="var(--warn)" />
        <rect x="58" y="214" width="28" height="18" rx="5" fill="var(--warn)" opacity="0.14" />
        <text x="72" y="227" fontSize="10" fontWeight="700" fill="var(--warn)" textAnchor="middle">
          L1
        </text>
        <text x="98" y="221" fontSize="13" fontWeight="600" fill="var(--text)">
          Phishing email reported — 14 recipients
        </text>
        <text x="98" y="237" fontSize="10.5" fill="var(--text-faint)">
          Offense #4468 · Email Gateway
        </text>
        <text x="608" y="228" fontSize="10.5" fontFamily="'IBM Plex Mono',monospace" fill="var(--text-faint)" textAnchor="end">
          6m ago
        </text>

        <rect x="16" y="264" width="608" height="56" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="40" cy="292" r="6" fill="var(--ink-3)" />
        <rect x="58" y="282" width="28" height="18" rx="5" fill="var(--ink-3)" opacity="0.12" />
        <text x="72" y="295" fontSize="10" fontWeight="700" fill="var(--ink-3)" textAnchor="middle">
          L1
        </text>
        <text x="98" y="289" fontSize="13" fontWeight="600" fill="var(--text)">
          Failed login spike — VPN gateway
        </text>
        <text x="98" y="305" fontSize="10.5" fill="var(--text-faint)">
          Offense #4459 · SIEM Correlation Rule
        </text>
        <text x="608" y="296" fontSize="10.5" fontFamily="'IBM Plex Mono',monospace" fill="var(--text-faint)" textAnchor="end">
          11m ago
        </text>

        <rect x="16" y="332" width="608" height="56" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="40" cy="360" r="6" fill="var(--ink-4)" />
        <rect x="58" y="350" width="28" height="18" rx="5" fill="var(--ink-4)" opacity="0.12" />
        <text x="72" y="363" fontSize="10" fontWeight="700" fill="var(--ink-4)" textAnchor="middle">
          L3
        </text>
        <text x="98" y="357" fontSize="13" fontWeight="600" fill="var(--text)">
          Anomalous DNS query pattern
        </text>
        <text x="98" y="373" fontSize="10.5" fill="var(--text-faint)">
          Threat Hunt · Proxy + DNS Logs
        </text>
        <text x="608" y="364" fontSize="10.5" fontFamily="'IBM Plex Mono',monospace" fill="var(--text-faint)" textAnchor="end">
          24m ago
        </text>
      </g>

      <text x="16" y="412" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="700" letterSpacing="0.06em" fill="var(--text-faint)">
        EVENTS / HR
      </text>
      <g>
        <rect x="16" y="508" width="56" height="40" rx="4" fill="var(--ink)" />
        <rect x="86" y="483" width="56" height="65" rx="4" fill="var(--ink-3)" />
        <rect x="156" y="498" width="56" height="50" rx="4" fill="var(--ink)" />
        <rect x="226" y="458" width="56" height="90" rx="4" fill="var(--ink-3)" />
        <rect x="296" y="478" width="56" height="70" rx="4" fill="var(--ink)" />
        <rect x="366" y="493" width="56" height="55" rx="4" fill="var(--ink-3)" />
        <rect x="436" y="468" width="56" height="80" rx="4" fill="var(--ink)" />
        <rect x="506" y="488" width="56" height="60" rx="4" fill="var(--ink-3)" />
      </g>

      <text x="16" y="576" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="700" letterSpacing="0.06em" fill="var(--text-faint)">
        KILL CHAIN COVERAGE
      </text>
      <g fontFamily="Inter,sans-serif" fontSize="10.5" fontWeight="700">
        <rect x="20" y="584" width="90" height="28" rx="14" fill="none" stroke="var(--border)" />
        <text x="65" y="602" fill="var(--text-dim)" textAnchor="middle">
          Recon
        </text>
        <rect x="122" y="584" width="90" height="28" rx="14" fill="none" stroke="var(--border)" />
        <text x="167" y="602" fill="var(--text-dim)" textAnchor="middle">
          Delivery
        </text>
        <rect x="224" y="584" width="90" height="28" rx="14" fill="var(--ink)" />
        <text x="269" y="602" fill="#ffffff" textAnchor="middle">
          Exploit
        </text>
        <rect x="326" y="584" width="90" height="28" rx="14" fill="none" stroke="var(--border)" />
        <text x="371" y="602" fill="var(--text-dim)" textAnchor="middle">
          C2
        </text>
        <rect x="428" y="584" width="90" height="28" rx="14" fill="none" stroke="var(--border)" />
        <text x="473" y="602" fill="var(--text-dim)" textAnchor="middle">
          Lateral
        </text>
        <rect x="530" y="584" width="90" height="28" rx="14" fill="none" stroke="var(--border)" />
        <text x="575" y="602" fill="var(--text-dim)" textAnchor="middle">
          Exfil
        </text>
      </g>
    </svg>
  );
}
