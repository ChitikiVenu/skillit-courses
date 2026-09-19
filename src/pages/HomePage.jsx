import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import H1Wave from '../components/H1Wave.jsx';

// Placeholder home page — routing and header nav are wired up; the real section design
// comes later.
export default function HomePage() {
  return (
    <main>
      <Seo
        title="Skill IT Education | Cyber Security, AI & ML, Data Science Training in Hyderabad"
        description="Job-ready technology training in Hyderabad — Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics, with hands-on labs, real projects and a real-time internship."
        path="/"
      />

      <section className="hero">
        <div className="wrap">
          <h1>Skill IT Education</h1>
          <H1Wave />
          <h2 className="hero-kicker">Job-ready tech training in Hyderabad</h2>
          <p className="hero-lede">
            Cyber Security, AI &amp; ML, Data Science, SOC Analyst and Data Analytics — five hands-on
            programmes built around real labs, real projects and a real-time internship.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/programmes">
              View Our Programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
