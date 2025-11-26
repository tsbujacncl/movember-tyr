import instagramPost from '../assets/images/photos/LUCTC_instagram.png'
import spinBike from '../assets/images/photos/tyr_on_spin_bike.jpg'
import leaderboard from '../assets/images/photos/leaderboard.jpg'
import './Story.css'

function Story() {
  const sections = [
    {
      id: 'challenge',
      src: instagramPost,
      alt: 'LUCTC Movember 2025 Instagram post',
      title: 'The Challenge',
      text: 'LUCTC Movember 2025 — 24-hour spin challenge. 4 bikes, non-stop, raising money for men\'s health.',
      reverse: false
    },
    {
      id: 'mypart',
      src: spinBike,
      alt: 'Tyr cycling on spin bike',
      title: 'My Part',
      text: 'Started at 9am. Felt very early for my legs to be spinning so fast. 3 hours later, I was sore but proud.',
      reverse: true
    },
    {
      id: 'result',
      src: leaderboard,
      alt: 'Final leaderboard showing results',
      title: 'The Result',
      text: 'Goal: 2,000km. I achieved 68km in 3 hours. Together we smashed 2,580km!',
      reverse: false
    }
  ]

  return (
    <section className="story">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`story-section ${section.reverse ? 'reverse' : ''}`}
        >
          <div className="story-image">
            <img src={section.src} alt={section.alt} />
          </div>
          <div className="story-text">
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Story
