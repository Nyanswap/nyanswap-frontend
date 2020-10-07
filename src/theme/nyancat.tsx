import React from 'react'
// import styled from 'styled-components'
import '../assets/nyancat.scss'

export default function Nyancat() {
  return (
    <div className="nyanWrapper">
      <div className="nyancat">
        <div className="rainbow">
          <span></span>
        </div>
        <div className="feet"></div>
        <div className="tail">
          <span></span>
        </div>
        <div className="body"></div>
        <div className="head"></div>
      </div>
    </div>
  )
}
