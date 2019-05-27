import React from 'react'

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
    const teamScore = this.state.forecasts ? this.state.forecasts.reduce((a, b) => {
      return {
        score: a.score + b.score
      }
    }) : null

    return teamScore.score
  }


  renderPredictedWeather = index => {
    if (this.state.forecasts[index].predicted_weather === 'T-storm') {
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      )
    } else if (this.state.forecasts[index].predicted_weather === 'Sunny') {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      )
    } else if (this.state.forecasts[index].predicted_weather === 'Cloudy') {
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      )
    } else if (this.state.forecasts[index].predicted_weather === 'Rain') {
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      )
    }
  }

  renderActualWeather = index => {
    if (this.state.forecasts[index].actual_weather === 'T-storm') {
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      )
    } else if (this.state.forecasts[index].actual_weather === 'Sunny') {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      )
    } else if (this.state.forecasts[index].actual_weather === 'Cloudy') {
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      )
    } else if (this.state.forecasts[index].actual_weather === 'Rain') {
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      )
    }
  }

  renderPredictedWeatherString = index => {
    return this.state.forecasts[index].predicted_weather.toLowerCase()
  }

  renderActualWeatherString = index => {
    return this.state.forecasts[index].actual_weather.toLowerCase()
  }

  transformDate = (date) => {
    let yyyy = date.slice(0,4)
    let mm = date.slice(5,7)
    let dd = date.slice(8,10)

    if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
    } else if (mm.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd}/${yyyy}`
    } else if (dd.slice(0,1) === '0') {
      return `${mm}/${dd.slice(1,2)}/${yyyy}`
    } else {
      return `${mm}/${dd}/${yyyy}`
    }
  }


  render() {

    return (
      this.state.forecasts

      ?

      <div className='scorecard-container'>
          <div className='scorecard-col'>
            <img height='85px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm ? this.props.weatherperson.img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } />
            <br/>
            <span id="secular">{this.props.weatherperson.name}</span><br/>
            {this.props.weatherperson.station} - {this.props.weatherperson.city}
          </div>
          <br/>
          <div style={{marginTop: '-10px'}} >5-Day Forecast</div>
          <div className='scorecard-row'>
          <div className='scorecard-col'>
            <div id='scorecard-col-forecast'>
            <div className='forecast-box'>
              {this.renderPredictedWeather(0)}
            </div>
            {this.renderPredictedWeatherString(0)}<br/>
            {this.state.forecasts[0].predicted_temp}℉ <br/>
            mon <br/>
          {this.transformDate(this.state.forecasts[0].date).slice(0, -5)}
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
          {this.transformDate(this.state.forecasts[1].date).slice(0, -5)}
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
          {this.transformDate(this.state.forecasts[2].date).slice(0, -5)}
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
          {this.transformDate(this.state.forecasts[3].date).slice(0, -5)}
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
          {this.transformDate(this.state.forecasts[4].date).slice(0, -5)}
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
          <div style={{marginTop: '-10px'}} >Score: {this.renderTeamScore()}</div>
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

export default Scorecard
