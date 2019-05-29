import React from 'react'
import './WeatherIcons.css'

export const renderThunderstormIcon = () => {
  return (
    <div className="icon thunder-storm">
      <div className="cloud"></div>
      <div className="lightning">
        <div className="bolt"></div>
        <div className="bolt"></div>
      </div>
    </div>
  )
}

export const renderSunnyIcon = () => {
  return (
    <div className="icon sunny">
      <div className="sun">
        <div className="rays"></div>
      </div>
    </div>
  )
}

export const renderCloudyIcon = () => {
  return (
    <div className="icon cloudy">
      <div className="cloud"></div>
      <div className="cloud"></div>
    </div>
  )
}

export const renderRainIcon = () => {
  return (
    <div className="icon rainy">
      <div className="cloud"></div>
      <div className="rain"></div>
    </div>
  )
}
