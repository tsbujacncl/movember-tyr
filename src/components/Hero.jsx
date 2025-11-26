import moustacheLogo from '../assets/images/logos/movember_moustache_only.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="moustache-container">
          <img
            src={moustacheLogo}
            alt="Movember Moustache"
            className="moustache-logo"
          />
        </div>
        <h1 className="hero-title">Tyr's Movember</h1>
        <p className="hero-tagline">Help support men's health</p>
        <div className="whisker-decoration">
          <span className="whisker whisker-left"></span>
          <span className="whisker whisker-right"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
