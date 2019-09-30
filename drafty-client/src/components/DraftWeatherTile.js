import React from 'react'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import transformDate from '../helpers/transformDate'

class DraftWeatherTile extends React.Component {

  weeksForecastAt = index => {
    const weatherperson = this.props.weatherperson
    const contestStart = this.props.currentContest.start_date
    const contestEnd = this.props.currentContest.end_date
    return weatherperson.forecasts.filter(forecast => {
      return forecast.date >= contestStart && forecast.date <= contestEnd
    })[index]
  }

  renderWeatherString = index => {
    return this.weeksForecastAt(index).predicted_weather.toLowerCase()
  }

  renderTemp = index => {
    return this.weeksForecastAt(index).predicted_temp
  }

  renderDate = index => {
    const date = transformDate(this.weeksForecastAt(index).date)
    return date.slice(0, -5)
  }

  renderDay = index => {
    return ['mon', 'tue', 'wed', 'thu', 'fri'][index]
  }

  renderWeatherIcon = index => {
    switch (this.weeksForecastAt(index).predicted_weather) {
      case 'T-storm':
        return renderThunderstormIcon()
      case 'Sunny':
        return renderSunnyIcon();
      case 'Cloudy':
        return renderCloudyIcon()
      case 'Rain':
        return renderRainIcon()
      default:
        return 'No data'
    }
  }

  render() {
    console.log(this.props)
    return (
      <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
        <div className='forecast-box'>
        {this.renderWeatherIcon(this.props.index)}
        </div>
        {this.renderWeatherString(this.props.index)}<br/>
        {this.renderTemp(this.props.index)}℉ <br/>
        {this.renderDay(this.props.index)} <br/>
        {this.renderDate(this.props.index)}
      </div>
    )
  }
}


export default DraftWeatherTile
