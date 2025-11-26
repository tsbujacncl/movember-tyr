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
      text: 'Movember is about starting conversations that can save lives — whether it\'s prostate cancer, testicular cancer, or mental health. Too many men suffer in silence. This November, our cycling and triathlon club took on a 24-hour spin challenge. Four bikes, running non-stop. When I heard about it, I knew I had to be part of it.',
      reverse: false
    },
    {
      id: 'mypart',
      src: spinBike,
      alt: 'Tyr cycling on spin bike',
      title: 'My Part',
      text: 'I signed up for a 3-hour slot starting at 9am. Honestly, it felt way too early for my legs to be spinning that fast. But once I got going, the energy in the room kept me pushing. By the end, I was absolutely knackered — but proud. It\'s the longest I\'ve been on a stationary bike in over 6 years.',
      reverse: true
    },
    {
      id: 'result',
      src: leaderboard,
      alt: 'Final leaderboard showing results',
      title: 'The Result',
      text: 'We set ourselves a goal of 2,000km as a team. I managed to clock 68km in my 3 hours. And together? We absolutely smashed it — 2,580km total. Seeing that number on the leaderboard made every sore muscle worth it.',
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
