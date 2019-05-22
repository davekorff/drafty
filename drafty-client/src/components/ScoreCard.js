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

  render() {
    const weekScore = this.state.forecasts ? this.state.forecasts.reduce((a, b) => {
      return {
        score: a.score + b.score
      }
    }) : null

    return (
      this.state.forecasts

      ?

      <div className='scorecard-container'>
        <div className='scorecard-row'>
          <div className='scorecard-col'>
            <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
            {this.props.weatherperson.name} <br/>
            {this.props.weatherperson.station} <br/>
            {this.props.weatherperson.city}
          </div>
          <div className='scorecard-col'>
            <div className='forecast-box'>
              {this.state.forecasts[0].predicted_weather}
            </div>
            {this.state.forecasts[0].predicted_temp}℉ <br/>
            mon <br/>
          {this.state.forecasts[0].date.slice(5)}
          </div>
          <div className='scorecard-col'>
            <div className='forecast-box'>
              {this.state.forecasts[1].predicted_weather}
            </div>
            {this.state.forecasts[1].predicted_temp}℉ <br/>
            tue <br/>
          {this.state.forecasts[1].date.slice(5)}
          </div>
          <div className='scorecard-col'>
            <div className='forecast-box'>
              {this.state.forecasts[2].predicted_weather}
            </div>
            {this.state.forecasts[2].predicted_temp}℉ <br/>
            wed <br/>
          {this.state.forecasts[2].date.slice(5)}
          </div>
          <div className='scorecard-col'>
            <div className='forecast-box'>
              {this.state.forecasts[3].predicted_weather}
            </div>
            {this.state.forecasts[3].predicted_temp}℉ <br/>
            thu <br/>
          {this.state.forecasts[3].date.slice(5)}
          </div>
          <div className='scorecard-col'>
            <div className='forecast-box'>
              {this.state.forecasts[4].predicted_weather}
            </div>
            {this.state.forecasts[4].predicted_temp}℉ <br/>
            fri <br/>
          {this.state.forecasts[4].date.slice(5)}
          </div>
        </div>
        <div id='scorecard-score' className='scorecard-row'>
          Score: {weekScore.score}
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

export default Scorecard
