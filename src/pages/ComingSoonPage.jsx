import { Helmet } from 'react-helmet-async';

export default function ComingSoonPage({ programme }) {
  return (
    <main className="landing-shell">
      <Helmet>
        <title>{`${programme} — Coming Soon | Skill IT Education`}</title>
      </Helmet>
      <p>{programme} course details are coming soon.</p>
    </main>
  );
}
