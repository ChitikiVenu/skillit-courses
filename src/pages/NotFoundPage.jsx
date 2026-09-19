import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <main className="landing-shell">
      <Seo
        title="Page Not Found | Skill IT Education"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />
      <p>Page not found.</p>
      <Link className="btn btn-outline" to="/">
        Back to Home
      </Link>
    </main>
  );
}
