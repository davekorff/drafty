import React from 'react'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import transformDate from '../helpers/transformDate'

class ForecastTile extends React.Component {

  state = {
    forecasts: null
  }

  componentDidMount() {
    const weatherperson = this.props.weatherperson
    const contestStart = this.props.currentContest.start_date
    const contestEnd = this.props.currentContest.end_date
    const forecasts = weatherperson.forecasts.filter(forecast => {
      return forecast.date >= contestStart && forecast.date <= contestEnd
    })
    this.setState({ forecasts })
  }

  renderWeatherString = index => {
    return this.state.forecasts[index].predicted_weather.toLowerCase()
  }

  renderTemp = index => {
    return this.state.forecasts[index].predicted_temp
  }

  renderDate = index => {
    const date = transformDate(this.state.forecasts[index].date)
    return date.slice(0, -5)
  }

  renderDay = index => {
    return ['mon', 'tue', 'wed', 'thu', 'fri'][index]
  }

  renderWeatherIcon = index => {
    switch (this.state.forecasts[index].predicted_weather) {
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
    return (
      this.state.forecasts

      ?

      <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
        <div className='forecast-box'>
        {this.renderWeatherIcon(this.props.index)}
        </div>
        {this.renderWeatherString(this.props.index)}<br/>
        {this.renderTemp(this.props.index)}℉ <br/>
        {this.renderDay(this.props.index)} <br/>
        {this.renderDate(this.props.index)}
      </div>

      :

      <div>LOADING...</div>
    )
  }
}


export default ForecastTile
