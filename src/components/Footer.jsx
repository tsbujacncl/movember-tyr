import movemberLogo from '../assets/images/logos/movember_moustache_only.png'
import luctcLogo from '../assets/images/logos/luctc_logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-team">Part of University of Liverpool Cycling & Triathlon Club</p>
        <a
          href="https://www.instagram.com/livunitri/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo-link"
        >
          <img
            src={luctcLogo}
            alt="Liverpool University Cycling & Triathlon Club"
            className="footer-luctc-logo"
          />
        </a>
        <div className="footer-movember">
          <img
            src={movemberLogo}
            alt="Movember"
            className="footer-mo-logo"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
