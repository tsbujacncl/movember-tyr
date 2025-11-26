import { useState, useRef } from 'react'
import moustacheLogo from '../assets/images/logos/movember_moustache_only.png'
import './Hero.css'

function Hero() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const dragStart = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e) => {
    setIsDragging(true)
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setPosition({ x: 0, y: 0 })
  }

  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    setIsDragging(true)
    dragStart.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const touch = e.touches[0]
    setPosition({
      x: touch.clientX - dragStart.current.x,
      y: touch.clientY - dragStart.current.y
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-content">
        <h1 className="hero-title">Tyr's Mo Page</h1>
        <div
          className={`moustache-container ${isDragging ? 'dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          <img
            src={moustacheLogo}
            alt="Movember Moustache"
            className="moustache-logo"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
