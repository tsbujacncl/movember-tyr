import moustacheLogo from '../assets/images/logos/movember_moustache_only.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Tyr's Mo Page</h1>
        <div className="moustache-container">
          <img
            src={moustacheLogo}
            alt="Movember Moustache"
            className="moustache-logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
