import React from 'react'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import CountUp from 'react-countup';
import ScorecardProfile from './ScorecardProfile'
import transformDate from '../helpers/transformDate'
import ForecastTile from './ForecastTile'

class Scorecard extends React.Component {

  state = {
    forecasts: null,
    weatherpeople: []
  }

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/weatherpeople/' + this.props.weatherperson.id)
      .then(res => res.json())
      .then(weatherperson => this.setState({
        forecasts: weatherperson.forecasts.filter(forecast => {
          return forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date
        })
      }))
      .then(weatherperson => this.setState({
        weatherpeople: [...this.state.weatherpeople, weatherperson]
      }))
  }

  renderTeamScore = () => {
    if (this.state.forecasts) {
      const teamScore = this.state.forecasts.reduce((a, b) => {
        return { score: a.score + b.score }
      })
      return teamScore.score
    }
  }

  renderPredictedWeather = index => {
    switch (this.state.forecasts[index].predicted_weather) {
      case 'T-storm':
        return renderThunderstormIcon()
      case 'Sunny':
        return renderSunnyIcon()
      case 'Cloudy':
        return renderCloudyIcon()
      case 'Rain':
        return renderRainIcon()
      default:
        return 'No data'
    }
  }

  renderActualWeather = index => {
    switch (this.state.forecasts[index].actual_weather) {
      case 'T-storm':
        return renderThunderstormIcon()
      case 'Sunny':
        return renderSunnyIcon()
      case 'Cloudy':
        return renderCloudyIcon()
      case 'Rain':
        return renderRainIcon()
      default:
        return 'No data'
    }
  }

  renderPredictedWeatherString = index => {
    return this.state.forecasts[index].predicted_weather.toLowerCase()
  }

  renderActualWeatherString = index => {
    if (this.state.forecasts[index].actual_weather) {
      return this.state.forecasts[index].actual_weather.toLowerCase()
    } else {
      return 'No data'
    }
  }

  renderPredictedWeatherTile = index => {
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri']
    return (
      <div className='scorecard-col'>
        <div id='scorecard-col-forecast'>
          <div className='forecast-box'>
            {this.renderPredictedWeather(index)}
          </div>
          {this.renderPredictedWeatherString(index)}<br/>
          {this.state.forecasts[index].predicted_temp}℉ <br/>
          {daysOfWeek[index]} <br/>
          {transformDate(this.state.forecasts[index].date).slice(0, -5)}
        </div>
      </div>
    )
  }

  renderActualWeatherTile = index => {
    return (
      <div className='scorecard-col'>
        <div id='scorecard-col-forecast'>
          <div className='forecast-box'>
            {this.renderActualWeather(index)}
          </div>
          {this.renderActualWeatherString(index)}<br/>
          {this.state.forecasts[index].actual_temp}℉ <br/>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props.weatherperson)
    return (
      this.state.forecasts

      ?

      <div className='scorecard-container'>
        <ScorecardProfile weatherperson={this.props.weatherperson}/>
        <br/>
        <div style={{marginTop: '-10px'}} >
          5-Day Forecast
        </div>
        <div className='scorecard-row'>
          {/*<ForecastTile index={0} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson} />*/}
          {this.renderPredictedWeatherTile(0)}
          {this.renderPredictedWeatherTile(1)}
          {this.renderPredictedWeatherTile(2)}
          {this.renderPredictedWeatherTile(3)}
          {this.renderPredictedWeatherTile(4)}
        </div>
        <br/>
        <div style={{marginTop: '-10px'}} >Actual Weather</div>
        <div id='actual-weather' className='scorecard-row'>
          {this.renderActualWeatherTile(0)}
          {this.renderActualWeatherTile(1)}
          {this.renderActualWeatherTile(2)}
          {this.renderActualWeatherTile(3)}
          {this.renderActualWeatherTile(4)}
        </div>
        <br/>
        <div className='scorecard-col'>
          <div style={{marginTop: '-10px', fontSize: '15px'}} >5-Day Score: <CountUp style={{fontSize: '20px'}} start={0} end={this.renderTeamScore()} /></div>
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

export default Scorecard
