import React from 'react'
import { renderThunderstormIcon, renderRainIcon, renderSunnyIcon, renderCloudyIcon } from './WeatherIcons'
import CountUp from 'react-countup';
import ScorecardProfile from './ScorecardProfile'
import transformDate from '../helpers/transformDate'

class Scorecard extends React.Component {

  state = {
    forecasts: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/weatherpeople/' + this.props.weatherperson.id)
      .then(res => res.json())
      .then(weatherperson => this.setState({
        forecasts: weatherperson.forecasts.filter(forecast => {
          return forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date
        })
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
    if (this.state.forecasts[index].predicted_weather === 'T-storm') {
      return renderThunderstormIcon()
    } else if (this.state.forecasts[index].predicted_weather === 'Sunny') {
      return renderSunnyIcon()
    } else if (this.state.forecasts[index].predicted_weather === 'Cloudy') {
      return renderCloudyIcon()
    } else if (this.state.forecasts[index].predicted_weather === 'Rain') {
      return renderRainIcon()
    }
  }

  renderActualWeather = index => {
    if (this.state.forecasts[index].actual_weather === 'T-storm') {
      return renderThunderstormIcon()
    } else if (this.state.forecasts[index].actual_weather === 'Sunny') {
      return renderSunnyIcon()
    } else if (this.state.forecasts[index].actual_weather === 'Cloudy') {
      return renderCloudyIcon()
    } else if (this.state.forecasts[index].actual_weather === 'Rain') {
      return renderRainIcon()
    }
  }

  renderPredictedWeatherString = index => {
    return this.state.forecasts[index].predicted_weather.toLowerCase()
  }

  renderActualWeatherString = index => {
    return this.state.forecasts[index].actual_weather.toLowerCase()
  }

  render() {

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
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(0)}
            </div>
            {this.renderPredictedWeatherString(0)}<br/>
            {this.state.forecasts[0].predicted_temp}℉ <br/>
            mon <br/>
            {transformDate(this.state.forecasts[0].date).slice(0, -5)}
            </div>
          </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(1)}
            </div>
            {this.renderPredictedWeatherString(1)}<br/>
            {this.state.forecasts[1].predicted_temp}℉ <br/>
            tue <br/>
            {transformDate(this.state.forecasts[1].date).slice(0, -5)}
            </div>
          </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(2)}
            </div>
            {this.renderPredictedWeatherString(2)}<br/>
            {this.state.forecasts[2].predicted_temp}℉ <br/>
            wed <br/>
            {transformDate(this.state.forecasts[2].date).slice(0, -5)}
            </div>
          </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(3)}
            </div>
            {this.renderPredictedWeatherString(3)}<br/>
            {this.state.forecasts[3].predicted_temp}℉ <br/>
            thu <br/>
            {transformDate(this.state.forecasts[3].date).slice(0, -5)}
            </div>
          </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(4)}
            </div>
            {this.renderPredictedWeatherString(4)}<br/>
            {this.state.forecasts[4].predicted_temp}℉ <br/>
            fri <br/>
            {transformDate(this.state.forecasts[4].date).slice(0, -5)}
            </div>
          </div>
        </div>
        <br/>
        <div style={{marginTop: '-10px'}} >Actual Weather</div>
        <div id='actual-weather' className='scorecard-row'>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderActualWeather(0)}
            </div>
            {this.renderActualWeatherString(0)}<br/>
            {this.state.forecasts[0].actual_temp}℉ <br/>
        </div>
        </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderActualWeather(1)}
            </div>
            {this.renderActualWeatherString(1)}<br/>
            {this.state.forecasts[1].actual_temp}℉ <br/>
        </div>
        </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderActualWeather(2)}
            </div>
            {this.renderActualWeatherString(2)}<br/>
            {this.state.forecasts[2].actual_temp}℉ <br/>
        </div>
        </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderActualWeather(3)}
            </div>
            {this.renderActualWeatherString(3)}<br/>
            {this.state.forecasts[3].actual_temp}℉ <br/>
        </div>
        </div>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderActualWeather(4)}
            </div>
            {this.renderActualWeatherString(4)}<br/>
            {this.state.forecasts[4].actual_temp}℉ <br/>
        </div>
        </div>
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
