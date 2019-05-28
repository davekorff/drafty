import React from 'react'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import { transformDate } from './transformDate'

class PredictedWeather extends React.Component {

  renderPredictedWeather = index => {
    if (this.props.forecast.predicted_weather === 'T-storm') {
      return renderThunderstormIcon()
    } else if (this.props.forecast.predicted_weather === 'Sunny') {
      return renderSunnyIcon()
    } else if (this.props.forecast.predicted_weather === 'Cloudy') {
      return renderCloudyIcon()
    } else if (this.props.forecast.predicted_weather === 'Rain') {
      return renderRainIcon()
    }
  }

  renderPredictedWeatherString = index => {
    return this.props.forecast.predicted_weather.toLowerCase()
  }

  renderDayOfWeek = () => {
    return this.props.day
  }

  render() {

    return (
      <div className='scorecard-col'>
        <div id='scorecard-col-forecast'>
        <div className='forecast-box'>
          {this.renderPredictedWeather(this.props.index)}
        </div>
        {this.renderPredictedWeatherString(this.props.index)}<br/>
        {this.state.forecasts[this.props.index].predicted_temp}℉ <br/>
        {this.props.day} <br/>
        {transformDate(this.state.forecasts[this.props.index].date).slice(0, -5)}
        </div>
      </div>
    )
  }
}

export default PredictedWeather
