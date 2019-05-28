import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import transformDate from '../helpers/transformDate'

class WeatherpeopleListItem extends React.Component {

  renderWeather = index => {
    const thisWeeksForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)

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
    const thisWeeksForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    return thisWeeksForecasts[index].predicted_weather.toLowerCase()
  }

  renderTemp = index => {
    const thisWeeksForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    return thisWeeksForecasts[index].predicted_temp
  }

  renderDate = index => {
    const thisWeeksForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    const date = transformDate(thisWeeksForecasts[index].date)
    return date.slice(0, -5)
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
        <div id='weatherpeople-li-weather-col' className='weatherpeople-li-col' style={{marginTop: '25px'}}>
          <div className='forecast-box'>
            {this.renderWeather(0)}
          </div>
          {this.renderWeatherString(0)}<br/>
          {this.renderTemp(0)}℉ <br/>
          mon <br/>
        {this.renderDate(0)}
        </div >
        <div id='weatherpeople-li-weather-col' className='weatherpeople-li-col' style={{marginTop: '25px'}}>
          <div className='forecast-box'>
            {this.renderWeather(1)}
          </div>
          {this.renderWeatherString(1)}<br/>
          {this.renderTemp(1)}℉ <br/>
          tue <br/>
        {this.renderDate(1)}
        </div>
        <div id='weatherpeople-li-weather-col' className='weatherpeople-li-col' style={{marginTop: '25px'}}>
          <div className='forecast-box'>
            {this.renderWeather(2)}
          </div>
          {this.renderWeatherString(2)}<br/>
          {this.renderTemp(2)}℉ <br/>
          wed <br/>
        {this.renderDate(2)}
        </div>
        <div id='weatherpeople-li-weather-col' className='weatherpeople-li-col' style={{marginTop: '25px'}}>
          <div className='forecast-box'>
            {this.renderWeather(3)}
          </div>
          {this.renderWeatherString(3)}<br/>
          {this.renderTemp(3)}℉ <br/>
          thu <br/>
        {this.renderDate(3)}
        </div>
        <div id='weatherpeople-li-weather-col' className='weatherpeople-li-col' style={{marginTop: '25px'}}>
          <div className='forecast-box'>
            {this.renderWeather(4)}
          </div>
          {this.renderWeatherString(4)}<br/>
          {this.renderTemp(4)}℉ <br/>
          fri <br/>
        {this.renderDate(4)}
        </div>
        <Button style={{height: '50px', marginTop: '55px', marginLeft: '20px'}} variant="contained" size="small" color="primary" id='draft-button' className='weatherpeople-li-col' onClick={() => this.props.handleClickDraft(this.props.weatherperson.id)}>
          Draft
        </Button>
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
