// Small parsing helpers for building JSON-LD from data the site already displays — never invent a
// number; only reformat what a visitor can already see on the page (COPY.heroStats). Each returns
// undefined/[] on anything unexpected rather than guessing, so a malformed source string never turns
// into a silently wrong (or fabricated-looking) schema property.

// "5 Months" -> "P5M" (ISO 8601 duration, what schema.org's `duration` property expects).
export function monthsToIso8601(text) {
  const m = /^(\d+)\s*Months?$/i.exec(String(text ?? '').trim());
  return m ? `P${m[1]}M` : undefined;
}

// "₹45,000 / ₹55,000" -> [45000, 55000] — plain numbers, no currency symbol or thousands separators,
// what schema.org's Offer `price` expects.
export function parseRupeeAmounts(text) {
  const matches = [...String(text ?? '').matchAll(/₹([\d,]+)/g)];
  return matches.map((m) => Number(m[1].replace(/,/g, ''))).filter((n) => Number.isFinite(n) && n > 0);
}
