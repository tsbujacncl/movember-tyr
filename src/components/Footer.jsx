import movemberLogo from '../assets/images/logos/movember_moustache+text.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-team">Part of UoL Tri Team</p>
        <a
          href="https://uk.movember.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo-link"
        >
          <img
            src={movemberLogo}
            alt="Movember"
            className="footer-logo"
          />
        </a>
        <p className="footer-year">Movember {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
