import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN, ADDRESS } from '../constants.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import LeadForm from '../components/LeadForm.jsx';
import AboutRope from '../components/AboutRope.jsx';
import Icon from '../components/AboutIcons.jsx';

const STORY_SECTIONS = [
  { id: 'why', label: 'Why we exist' },
  { id: 'what-you-get', label: 'What you get' },
  { id: 'how', label: 'How we teach' },
  { id: 'whom', label: "Who we're for" },
  { id: 'where', label: "Where you'll learn" },
  { id: 'promise', label: 'Our promise' },
  { id: 'about-enquire', label: 'Talk to us' },
];

export default function AboutUsPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const storyRef = useRef(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About Skill IT Education',
        description: 'Learn Cyber Security, AI & ML, Data Science and SOC in Madhapur, Hyderabad: live classes, hands-on labs, real projects, internship and placement assistance.',
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
        title="About Skill IT | AI & Cyber Security Training, Hyderabad"
        description="Learn Cyber Security, AI & ML, Data Science and SOC in Madhapur, Hyderabad: live classes, hands-on labs, real projects, internship and placement assistance."
        path="/about-us"
        jsonLd={jsonLd}
      />

      <div className="about-story ab-story" ref={storyRef}>
      <AboutRope storyRef={storyRef} sections={STORY_SECTIONS} />
      <section className="hero about-hero ab-hero">
        <div className="wrap ab-hero-grid">
          <div className="ab-hero-copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <FitHeading maxLines={2} minPx={26}>
              AI &amp; Cyber Security Training in Hyderabad That Gets You Hired
            </FitHeading>
            <p className="hero-lede">
              Skill IT Education is an AI and cyber security academy in Madhapur, Hyderabad. Learn Cyber Security, SOC
              Analysis, AI &amp; ML, Data Science and Data Analytics through live classes, hands-on labs and real projects,
              finish with a real-time internship, and get placement assistance when you&apos;re ready to apply. Study
              online (live) or on campus.
            </p>
            <div className="hero-ctas">
              <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
                Talk to an Advisor
              </button>
              <a className="btn btn-outline" href="/#programmes">
                Explore Our Programmes
              </a>
            </div>
            <ul className="ab-chips">
              <li><Icon name="laptop" size={16} /> Live, instructor-led</li>
              <li><Icon name="flask" size={16} /> Hands-on labs</li>
              <li><Icon name="briefcase" size={16} /> Real-time internship</li>
              <li><Icon name="pin" size={16} /> Madhapur, Hyderabad</li>
            </ul>
          </div>
          <div className="ab-hero-art" aria-hidden="true">
            <div className="ab-photo-panel">
              <img className="ab-photo ab-photo-1" src="/img/fit-photos/hero-plaid-girl.webp" alt="" width="640" height="691" />
              <img className="ab-photo ab-photo-2" src="/img/fit-photos/hero-ai-ml.webp" alt="" width="640" height="768" />
            </div>
          </div>
        </div>
      </section>

        <section id="why" className="ab-sec">
          <div className="wrap">
            <div className="section-head">
              <h2>A Certificate Was Never the Point</h2>
            </div>
            <div className="ab-split">
              <p className="ab-lead">
                Certificates don&apos;t get you hired — skills do. That&apos;s why every Skill IT programme is built around
                doing: hands-on labs, real projects and a real-time internship. Whether you&apos;re a fresher, a working
                professional or switching careers, you finish with work you can show, tools you can use and the
                confidence to walk into a technology interview ready.
              </p>
              <ul className="ab-trio">
                <li><span className="ab-ico"><Icon name="flask" /></span><b>Hands-on work</b><em>Practice in every module</em></li>
                <li><span className="ab-ico"><Icon name="code" /></span><b>Real projects</b><em>Proof you can show</em></li>
                <li><span className="ab-ico"><Icon name="briefcase" /></span><b>Real-world exposure</b><em>An internship, not just theory</em></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="what-you-get" className="ab-sec ab-alt">
          <div className="wrap">
            <div className="section-head">
              <h2>What You Actually Get With Us</h2>
              <p>Every programme — Cyber Security, AI &amp; ML, Data Science, SOC Analyst and Data Analytics — follows the same learn-by-doing structure.</p>
            </div>
            <div className="ab-cards ab-cards-3">
              {[
                ['flask', 'Hands-on labs', 'Practise in your own lab environment in every module. Break it, fix it and build it the way you would on the job.'],
                ['code', 'Portfolio projects', 'Build real, portfolio-ready projects you can walk an interviewer through.'],
                ['tools', 'Industry tools', 'Train on industry-standard tools and platforms, not simplified stand-ins.'],
                ['quiz', 'Assessed every module', 'A knowledge quiz and a practical assessment after each module show you exactly where you stand.'],
                ['briefcase', 'Real-time internship', 'Put it all to work in a real-time internship after the core curriculum.'],
                ['target', 'Placement assistance', 'Resume support, mock interviews and interview opportunities with our hiring partners.'],
              ].map(([icon, title, text]) => (
                <article className="ab-card" key={title}>
                  <span className="ab-ico"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="ab-sec">
          <div className="wrap">
            <div className="section-head">
              <h2>Instructor-Led, Not Self-Paced</h2>
            </div>
            <div className="ab-split">
              <p className="ab-lead">
                Skill IT runs on live, instructor-led batches — not pre-recorded videos. You get a fixed schedule,
                real-time sessions and direct access to faculty, so doubts get cleared the moment they come up. Join
                online (live) from anywhere or attend in person at our Madhapur campus: same curriculum, same labs,
                same faculty.
              </p>
              <div className="ab-modes">
                <div className="ab-mode">
                  <span className="ab-ico"><Icon name="globe" /></span>
                  <b>Online (live)</b>
                  <em>Live sessions, from wherever you are</em>
                </div>
                <div className="ab-mode">
                  <span className="ab-ico"><Icon name="pin" /></span>
                  <b>In person</b>
                  <em>On our campus in Madhapur</em>
                </div>
                <div className="ab-mode ab-mode-wide">
                  <span className="ab-ico"><Icon name="clock" /></span>
                  <b>Fixed batch schedule</b>
                  <em>Live sessions and direct access to faculty for doubt-clearing</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="whom" className="ab-sec ab-alt">
          <div className="wrap">
            <div className="section-head">
              <h2>Who Actually Joins Our Programmes</h2>
              <p>Whatever your starting point, there&apos;s a programme built to take you further.</p>
            </div>
            <div className="ab-cards ab-cards-4">
              {[
                ['cap', 'Graduates', '2025, 2026 and 2027 graduates, from any branch or degree'],
                ['briefcase', 'Working professionals', 'Working professionals looking to move into technology'],
                ['swap', 'Career switchers', 'Career switchers starting from a different field entirely'],
                ['hand', 'Learn-by-doing people', 'Anyone who learns better by doing than by watching'],
              ].map(([icon, title, text]) => (
                <article className="ab-card ab-card-center" key={title}>
                  <span className="ab-ico"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="where" className="ab-sec">
          <div className="wrap">
            <div className="section-head">
              <h2>A Real Campus in Madhapur, Hyderabad</h2>
            </div>
            <div className="ab-where">
              <div className="ab-where-card">
                <span className="ab-ico"><Icon name="pin" /></span>
                <h3>Our campus</h3>
                <p>{ADDRESS}</p>
                <a className="btn btn-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </div>
              <div className="ab-where-card">
                <span className="ab-ico"><Icon name="globe" /></span>
                <h3>Or learn online</h3>
                <p>
                  Not in Hyderabad? Our live online batches run the same curriculum, the same labs and the same faculty
                  access as the campus. Nearby? Come train with us in person.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="promise" className="ab-sec ab-alt">
          <div className="wrap">
            <div className="section-head">
              <h2>We Won't Promise You a Job</h2>
              <p>No genuine training programme can guarantee a job offer, and we'd rather be upfront about that than overclaim.</p>
            </div>
            <div className="ab-promise">
              <span className="ab-promise-shield"><Icon name="shield" size={44} /></span>
              <div>
                <p>
                  What we do commit to is real placement assistance: resume support, mock interviews and interview
                  opportunities with our hiring partners for every student who completes their programme and
                  internship. The work of getting hired is still yours — we make sure you walk in prepared.
                </p>
                <ul className="ab-steps">
                  <li><Icon name="file" size={18} /> Resume support</li>
                  <li><Icon name="mic" size={18} /> Mock interviews</li>
                  <li><Icon name="users" size={18} /> Interviews with hiring partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      <section id="about-enquire" className="ab-sec ab-enquire">
        <div className="wrap ab-enquire-grid">
          <div className="ab-enquire-copy">
            <h2>Ready to Start Your AI &amp; Cyber Security Career?</h2>
            <p>
              Tell us a little about yourself and an advisor will help you match your background and goals to the
              right programme — Cyber Security, AI &amp; ML, Data Science, SOC Analyst or Data Analytics.
            </p>
            <ul className="ab-steps ab-enquire-points">
              <li><Icon name="users" size={18} /> Free one-to-one guidance</li>
              <li><Icon name="target" size={18} /> Programme matched to your goals</li>
              <li><Icon name="file" size={18} /> Brochure after you submit</li>
            </ul>
          </div>
          <LeadForm
            formId="about-us"
            heading="Get Free Career Guidance"
            subheading="Share your details and we'll call you back."
          />
        </div>
      </section>
      </div>

      <AdvisorModal open={advisorOpen} onClose={() => setAdvisorOpen(false)} />
    </main>
  );
}
