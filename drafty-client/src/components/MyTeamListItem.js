import React from 'react'
import { connect } from 'react-redux'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import transformDate from '../helpers/transformDate'

class MyTeamListItem extends React.Component {

  renderWeatherperson = () => {
    return this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
  }

  renderWeather = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)

    if (thisWeeksForecasts[index].predicted_weather === 'T-storm') {
      return renderThunderstormIcon()
    } else if (thisWeeksForecasts[index].predicted_weather === 'Sunny') {
      return renderSunnyIcon()
    } else if (thisWeeksForecasts[index].predicted_weather === 'Cloudy') {
      return renderCloudyIcon()
    } else if (thisWeeksForecasts[index].predicted_weather === 'Rain') {
      return renderRainIcon()
    }
  }

  renderWeatherString = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    return thisWeeksForecasts[index].predicted_weather.toLowerCase()
  }

  renderTemp = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    return thisWeeksForecasts[index].predicted_temp
  }

  renderDate = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    const date = transformDate(thisWeeksForecasts[index].date)
    return date.slice(0, -5)
  }

  renderWeatherTiles = index => {
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri']
      return (
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
        <div className='forecast-box'>
          {this.renderWeather(index)}
        </div>
        {this.renderWeatherString(index)}<br/>
        {this.renderTemp(index)}℉ <br/>
        {daysOfWeek[index]} <br/>
      {this.renderDate(index)}
      </div >
      )
  }

  render() {
    return (
      <div className='my-team-li' >
        <div id='my-team-list-wp-info' className='my-team-li-col' style={{fontSize: '14px'}}>
          <img height='75px' alt='wp-thumb' src={this.renderWeatherperson().img_url_sm} /><br/>
          {this.renderWeatherperson().name} <br/>
          {this.renderWeatherperson().station} <br/>
          {this.renderWeatherperson().city}
        </div>
        {this.renderWeatherTiles(0)}
        {this.renderWeatherTiles(1)}
        {this.renderWeatherTiles(2)}
        {this.renderWeatherTiles(3)}
        {this.renderWeatherTiles(4)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    currentContest: state.contests.currentContest,
  }
}

export default connect(mapStateToProps)(MyTeamListItem)
