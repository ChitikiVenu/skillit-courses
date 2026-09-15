import { Helmet } from 'react-helmet-async';

export default function LandingPage() {
  return (
    <main className="landing-shell">
      <Helmet>
        <title>Skill IT Education</title>
      </Helmet>
      <p>Select a programme from the Our Programmes menu above.</p>
    </main>
  );
}
