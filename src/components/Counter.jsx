import { useState, useEffect } from 'react'
import './Counter.css'

function Counter() {
  const [amount, setAmount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-donations')
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        setAmount(data.amount)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching donations:', err)
        setError(true)
        setLoading(false)
      }
    }

    fetchDonations()

    // Refresh every 5 minutes
    const interval = setInterval(fetchDonations, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const formatAmount = (num) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num)
  }

  return (
    <section className="counter">
      <div className="counter-content">
        <div className="counter-label">Tyr has raised</div>
        <div className="counter-amount">
          {loading && <span className="counter-loading">Loading...</span>}
          {error && <span className="counter-error">Check back soon!</span>}
          {!loading && !error && amount !== null && (
            <span className="counter-value">{formatAmount(amount)}</span>
          )}
        </div>
        <p className="counter-message">Help support men's health</p>
      </div>
    </section>
  )
}

export default Counter
