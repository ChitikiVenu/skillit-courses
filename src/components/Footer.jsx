import { WHATSAPP_URL } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

// Empty on wide screens (WhatsApp lives in the header there). On phones the footer carries a
// WhatsApp chat button, since the phone header only has the logo and the Menu button.
export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        <span>Chat on WhatsApp</span>
      </a>
    </footer>
  );
}
