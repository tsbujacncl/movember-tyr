import spinBike from '../assets/images/photos/tyr_on_spin_bike.jpg'
import tyrBrother from '../assets/images/photos/tyr_and_brother.jpg'
import leaderboard from '../assets/images/photos/leaderboard.jpg'
import './Photos.css'

function Photos() {
  const photos = [
    {
      src: spinBike,
      alt: 'Spin bike group shot',
      caption: 'Pushing the limits'
    },
    {
      src: tyrBrother,
      alt: 'Tyr and brother from last year',
      caption: 'Brothers in Mo'
    },
    {
      src: leaderboard,
      alt: 'Results board showing 68km in 3 hours',
      caption: '68km in 3 hours'
    }
  ]

  return (
    <section className="photos">
      <h2 className="photos-title">The Journey</h2>
      <div className="photos-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.alt} />
            </div>
            <p className="photo-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photos
