import { WHATSAPP_URL } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

// On phones the header is just the logo and Menu button, so the two actions people need most stay
// on screen at all times: Book a free session (left) and a WhatsApp chat button (right).
export default function FloatingActions({ onBook }) {
  return (
    <div className="floating-actions">
      <button type="button" className="floating-book" onClick={onBook}>
        Book a free session
      </button>
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon fill="#fff" />
      </a>
    </div>
  );
}
