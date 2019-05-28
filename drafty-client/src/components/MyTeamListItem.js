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

  render() {
    return (
      <div className='my-team-li' >
        <div id='my-team-list-wp-info' className='my-team-li-col' style={{fontSize: '14px'}}>
          <img height='75px' alt='wp-thumb' src={this.renderWeatherperson().img_url_sm} /><br/>
          {this.renderWeatherperson().name} <br/>
          {this.renderWeatherperson().station} <br/>
          {this.renderWeatherperson().city}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(0)}
          </div>
          {this.renderWeatherString(0)}<br/>
          {this.renderTemp(0)}℉ <br/>
          mon <br/>
        {this.renderDate(0)}
        </div >
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(1)}
          </div>
          {this.renderWeatherString(1)}<br/>
          {this.renderTemp(1)}℉ <br/>
          tue <br/>
        {this.renderDate(1)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(2)}
          </div>
          {this.renderWeatherString(2)}<br/>
          {this.renderTemp(2)}℉ <br/>
          wed <br/>
        {this.renderDate(2)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(3)}
          </div>
          {this.renderWeatherString(3)}<br/>
          {this.renderTemp(3)}℉ <br/>
          thu <br/>
        {this.renderDate(3)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(4)}
          </div>
          {this.renderWeatherString(4)}<br/>
          {this.renderTemp(4)}℉ <br/>
          fri <br/>
        {this.renderDate(4)}
        </div>
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
