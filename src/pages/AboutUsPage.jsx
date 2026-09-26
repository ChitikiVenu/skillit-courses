import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN, ADDRESS, EMAIL, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import AboutRope from '../components/AboutRope.jsx';
import { Balloon } from '../components/AboutCartoons.jsx';

const STORY_SECTIONS = [
  { id: 'why', label: 'Why we exist' },
  { id: 'what-you-get', label: 'What you get' },
  { id: 'how', label: 'How we teach' },
  { id: 'whom', label: "Who we're for" },
  { id: 'where', label: "Where you'll learn" },
  { id: 'promise', label: 'Our promise' },
];

// A pair of balloons floating beside a section heading.
const Balloons = ({ n }) => (
  <span className="about-balloons" aria-hidden="true">
    <Balloon colour={n} />
    <Balloon colour={n + 2} />
  </span>
);

// About Us — deliberately kept to real, already-established facts about the organisation (its
// tagline, address, the training model described elsewhere on the site, the honest
// placement-assistance-not-guarantee position from faq.js) rather than a founding story, team
// bios, dates or numbers nobody has supplied. Owner-requested 2026-09-23: at least 6 sections
// covering why/how/what/whom, no course-by-course rundown (the course pages already do that) —
// this page is about the organisation and what a student gets, not a catalogue.
export default function AboutUsPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const storyRef = useRef(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About Skill IT Education',
        url: `${DOMAIN}/about-us`,
        about: { '@type': 'EducationalOrganization', name: 'Skill IT Education', url: DOMAIN },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${DOMAIN}/about-us` },
        ],
      },
    ],
  };

  return (
    <main>
      <Seo
        title="About Us | Skill IT Education"
        description="Skill IT Education is an upskilling academy in Madhapur, Hyderabad, training graduates and professionals in future technologies through hands-on labs, real projects, a real-time internship and honest placement assistance."
        path="/about-us"
        jsonLd={jsonLd}
      />

      <section className="hero about-hero">
        <span className="about-hero-balloons" aria-hidden="true">
          <Balloon colour={0} />
          <Balloon colour={1} />
          <Balloon colour={3} />
        </span>
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">About Us</span>
          </nav>
          <FitHeading maxLines={2} minPx={26}>
            We Build Training That Gets You Hired, Not Just Certified
          </FitHeading>
          <p className="hero-lede">
            Skill IT Education is an upskilling academy based in Madhapur, Hyderabad. We train graduates, working
            professionals and career switchers in future technologies — through hands-on labs, real projects and a
            real-time internship, not lectures alone.
          </p>
          <div className="hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
              Talk to an Advisor
            </button>
            <a className="btn btn-outline" href="/#programmes">
              Explore Our Programmes
            </a>
          </div>
        </div>
      </section>

      <div className="about-story" ref={storyRef}>
        <AboutRope storyRef={storyRef} sections={STORY_SECTIONS} />
      <section id="why">
        <div className="wrap">
          <div className="section-head">
            <Balloons n={0} />
            <span className="eyebrow">Why We Exist</span>
            <h2>A Certificate Was Never the Point</h2>
          </div>
          <p>
            Most technology courses stop at a certificate. We built Skill IT Education around a harder question: what
            does it actually take for someone to walk into a technology role and do the job on day one? Our answer is
            practice — enough hands-on work, real projects, and real-world exposure that what you walk out with is
            proof of ability, not just attendance.
          </p>
        </div>
      </section>

      <section id="what-you-get" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <Balloons n={1} />
            <span className="eyebrow">What You Get</span>
            <h2>What You Actually Get With Us</h2>
            <p>The same structure runs through every programme we teach, whichever one you choose.</p>
          </div>
          <ul className="check-list grid-2">
            <li>Hands-on labs in every module, run in your own practice environment</li>
            <li>Real, portfolio-ready projects you can show in interviews</li>
            <li>Industry-standard tools and platforms, not simplified substitutes</li>
            <li>A knowledge quiz and a practical assessment at the end of every module</li>
            <li>A real-time internship phase after the core curriculum</li>
            <li>Placement assistance — resume support, mock interviews and interview opportunities with hiring partners</li>
          </ul>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-head">
            <Balloons n={2} />
            <span className="eyebrow">How We Teach</span>
            <h2>Instructor-Led, Not Self-Paced</h2>
          </div>
          <p>
            Every programme runs on a fixed batch schedule with live sessions and direct access to faculty for
            doubt-clearing — not a pre-recorded course you work through alone. You can learn online (live) or in
            person, whichever fits how you learn best.
          </p>
        </div>
      </section>

      <section id="whom" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <Balloons n={3} />
            <span className="eyebrow">Who We're For</span>
            <h2>Who Actually Joins Our Programmes</h2>
          </div>
          <ul className="check-list grid-2">
            <li>2025, 2026 and 2027 graduates, from any branch or degree</li>
            <li>Working professionals looking to move into technology</li>
            <li>Career switchers starting from a different field entirely</li>
            <li>Anyone who learns better by doing than by watching</li>
          </ul>
        </div>
      </section>

      <section id="where">
        <div className="wrap">
          <div className="section-head">
            <Balloons n={4} />
            <span className="eyebrow">Where You'll Learn</span>
            <h2>A Real Campus in Madhapur, Hyderabad</h2>
          </div>
          <p>
            Our campus is at {ADDRESS}. If you're nearby, you can train with us in person; if you're not, our live
            online batches run the same curriculum, the same labs, and the same faculty access.
          </p>
        </div>
      </section>

      <section id="promise" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <Balloons n={5} />
            <span className="eyebrow">Our Promise</span>
            <h2>We Won't Promise You a Job</h2>
            <p>No genuine training programme can guarantee a job offer, and we'd rather be upfront about that than overclaim.</p>
          </div>
          <p>
            What we do commit to is real placement assistance: resume support, mock interviews, and interview
            opportunities with our hiring partners for every student who completes their programme and internship.
            The work of getting hired is still yours — we make sure you walk in prepared.
          </p>
        </div>
      </section>
      </div>

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>Ready to see if this is the right fit?</h3>
            <p>Talk to an advisor — they'll help you match your background and goals to the right programme.</p>
          </div>
          <div className="hero-ctas" style={{ margin: 0 }}>
            <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
              Talk to an Advisor
            </button>
            <a className="btn btn-outline" href={`tel:${PHONE.replace(/\s+/g, '')}`}>
              Call {PHONE}
            </a>
            <a className="btn btn-outline" href={`mailto:${EMAIL}`}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <AdvisorModal open={advisorOpen} onClose={() => setAdvisorOpen(false)} />
    </main>
  );
}
