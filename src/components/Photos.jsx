import spinBike from '../assets/images/photos/tyr_on_spin_bike.jpg'
import tyrBrother from '../assets/images/photos/tyr_and_brother.jpg'
import leaderboard from '../assets/images/photos/leaderboard.jpg'
import './Photos.css'

function Photos() {
  const sections = [
    {
      src: spinBike,
      alt: 'Spin bike session at the Sports Centre',
      title: 'LUCTC Movember 2025',
      text: '24-HOUR SPIN — 4 bikes, non-stop, for 24 hours. Come down to the Sports Centre any time to cheer us on, donate, or hop on a bike!',
      reverse: false
    },
    {
      src: tyrBrother,
      alt: 'Tyr and brother from last year',
      title: 'Brothers in Mo',
      text: 'Growing moustaches and raising awareness for men\'s health — it runs in the family.',
      reverse: true
    },
    {
      src: leaderboard,
      alt: 'Results board showing 68km in 3 hours',
      title: '68km in 3 Hours',
      text: 'On 25th November I cycled for 3 hours on a spin bike. This is the longest I have sat on a stationary bike in more than 6 years.',
      reverse: false
    }
  ]

  return (
    <section className="photos">
      <h2 className="photos-title">The Journey</h2>
      <div className="scrapbook">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`scrapbook-row ${section.reverse ? 'reverse' : ''}`}
          >
            <div className="scrapbook-image">
              <img src={section.src} alt={section.alt} />
            </div>
            <div className="scrapbook-text">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photos
