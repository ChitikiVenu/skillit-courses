import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

// A page that is linked from the footer but whose content has not been written yet. It is kept out of search
// engines (noindex) until the content is added.
export default function PlaceholderPage({ title, path }) {
  return (
    <main className="landing-shell">
      <Seo title={`${title} | Skill IT Education`} description={`${title} at Skill IT Education.`} path={path} noindex />
      <h1 className="placeholder-title">{title}</h1>
      <p>This page is being prepared.</p>
      <Link className="btn btn-outline" to="/">
        Back to Home
      </Link>
    </main>
  );
}
