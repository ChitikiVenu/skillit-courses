import { ADDRESS, EMAIL, PHONE } from '../constants.js';

const TEL_HREF = (phone) => 'tel:' + phone.replace(/[^\d+]/g, '');

// The institute's postal address, phone and email — shown last on every Career Insights page,
// directly under the enquiry form.
export default function ContactCard() {
  return (
    <div className="contact-card contact-card-3">
      <div className="contact-card-item">
        <span className="contact-card-label">Address</span>
        <span>{ADDRESS}</span>
      </div>
      <div className="contact-card-item">
        <span className="contact-card-label">Phone</span>
        <a href={TEL_HREF(PHONE)}>{PHONE}</a>
      </div>
      <div className="contact-card-item">
        <span className="contact-card-label">Email</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </div>
  );
}
