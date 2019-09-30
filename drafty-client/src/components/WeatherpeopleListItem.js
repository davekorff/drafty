import React from 'react'
import { connect } from 'react-redux'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import transformDate from '../helpers/transformDate'

class WeatherpeopleListItem extends React.Component {

  weeksForecastAt = index => {
    const contestStart = this.props.currentContest.start_date
    const contestEnd = this.props.currentContest.end_date
    return this.props.weatherperson.forecasts.filter(forecast => {
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

  renderWeatherIcon = index => {
    switch(this.weeksForecastAt(index).predicted_weather) {
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

  renderWeatherTile = index => {
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri']
    return (
      <div id='weatherpeople-li-weather-col'>
        <div className='forecast-box'>
          {this.renderWeatherIcon(index)}
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
      <div className='weatherpeople-li'>
        <div id='weatherperson-info' className='weatherpeople-li-col'>
          <img height='75px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm ? this.props.weatherperson.img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } />
          <br/>
          {this.props.weatherperson.name} <br/>
          {this.props.weatherperson.station} <br/>
          {this.props.weatherperson.city}
        </div>
        {this.renderWeatherTile(0)}
        {this.renderWeatherTile(1)}
        {this.renderWeatherTile(2)}
        {this.renderWeatherTile(3)}
        {this.renderWeatherTile(4)}
        <button variant="contained" size="small" color="primary" id='draft-button' onClick={() => this.props.handleClickDraft(this.props.weatherperson.id)}>
          Draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest
  }
}

export default connect(mapStateToProps)(WeatherpeopleListItem)
