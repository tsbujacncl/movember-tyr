import './CallToAction.css'

function CallToAction() {
  const donateUrl = 'https://uk.movember.com/mospace/15524001'

  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">Make a Difference Today</h2>
        <p className="cta-text">
          Your donation helps fund vital research into prostate cancer,
          testicular cancer, and men's mental health.
        </p>

        <div className="cta-button-wrapper">
          <div className="arrow-container arrow-left">
            <span className="arrow">→</span>
            <span className="arrow">→</span>
            <span className="arrow">→</span>
          </div>

          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Donate Now
          </a>

          <div className="arrow-container arrow-right">
            <span className="arrow">←</span>
            <span className="arrow">←</span>
            <span className="arrow">←</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
