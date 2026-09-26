import { PHONE, WHATSAPP_URL } from '../constants.js';
import { Boy, Girl } from './AboutCartoons.jsx';

// In-flow versions of the rope story for screens that have no room for the side rope: they sit inside the page
// content, so nothing is ever covered. CSS shows them only when the side rope is hidden (see [data-rope-lane]).

// Top of the About page: the girl holds the rope, Sia rides the plate on it, going up and down and waving.
export function RopeIntro() {
  return (
    <div className="rope-card rope-intro">
      <div className="about-lane rope-scene" aria-hidden="true">
        <div className="rope-scene-inner">
          <div className="about-beam" style={{ left: 52, top: 2 }}>
            <span className="about-pulley" />
          </div>
          <div className="about-char about-girl" style={{ top: 16, left: -2 }}>
            <Girl />
          </div>
          <div className="about-thread rope-thread" style={{ top: 8 }}>
            <span className="about-plate" />
          </div>
          <div className="about-boy-wrap pose-ride rope-boy" style={{ transform: 'translate3d(71px,16px,0)' }}>
            <div className="about-char about-boy">
              <Boy pose="ride" />
            </div>
          </div>
        </div>
      </div>
      <div className="rope-talk">
        <p className="rope-say">
          <b>Sia</b>
          Hi, I&rsquo;m Sia! Scroll down and I&rsquo;ll ride the rope all the way down.
        </p>
        <p className="rope-say rope-say-girl">
          <b>Girl</b>
          Go on, I&rsquo;ll hold the rope!
        </p>
      </div>
    </div>
  );
}

// Above the footer of every page: Sia, hands on hips, offering help with the phone number.
export function SiaHelp() {
  return (
    <div className="rope-card rope-help">
      <div className="rope-sia" aria-hidden="true">
        <Boy pose="stand" />
      </div>
      <div className="rope-talk">
        <strong>Still need anything?</strong>
        <span>I&rsquo;m happy to help &mdash; call me!</span>
        <div className="rope-actions">
          <a className="btn btn-primary" href={`tel:${PHONE.replace(/\s+/g, '')}`}>
            &#9742; {PHONE}
          </a>
          <a className="btn btn-outline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
