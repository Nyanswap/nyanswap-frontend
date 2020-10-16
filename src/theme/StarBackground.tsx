import React from 'react'
import '../assets/nyancat.scss'

export default function StarBackground() {
  return (
    <div className="starBackground">
      <div className="stars">
        {[...Array(350).keys()].map(i => (
          <div className="star" key={i}>
            <span />
          </div>
        ))}
      </div>
    </div>
  )
}
