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

    switch (thisWeeksForecasts[index].predicted_weather) {
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

  findWeatherperson = () => {
    return this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
  }

  weeksForecasts = index => {
    const start = this.props.currentContest.start_date
    const end = this.props.currentContest.end_date
    const weatherperson = this.findWeatherperson()
    return weatherperson.forecasts.filter(forecast => {
      return forecast.date >= start && forecast.date <= end})[index]
  }

  renderWeatherString = index => {
    return this.weeksForecasts(index).predicted_weather.toLowerCase()
  }

  renderTemp = index => {
    return this.weeksForecasts(index).predicted_temp
  }

  renderDate = index => {
    const date = transformDate(this.weeksForecasts(index).date)
    return date.slice(0, -5)
  }

  renderWeatherTile = index => {
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
      </div>
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
        {this.renderWeatherTile(0)}
        {this.renderWeatherTile(1)}
        {this.renderWeatherTile(2)}
        {this.renderWeatherTile(3)}
        {this.renderWeatherTile(4)}
        <button variant="contained" size="small" color="primary" id='draft-button' onClick={() => this.props.handleClickUndraft(this.renderWeatherperson().id, this.props.currentTeam.id)}>
          Undraft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    currentContest: state.contests.currentContest,
    currentTeam: state.teams.currentTeam
  }
}

export default connect(mapStateToProps)(MyTeamListItem)
