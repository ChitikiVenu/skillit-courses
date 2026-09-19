import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <Link to="/blog">Blog</Link>
      </div>
    </footer>
  );
}
