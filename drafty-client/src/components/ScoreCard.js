import React from 'react'

class Scorecard extends React.Component {

  thisWeeksPredictedForecasts = this.props.weatherperson.length !== 0 ? this.props.weatherperson[0].forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null

  monForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].predicted_weather : null
  tueForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].predicted_weather : null
  wedForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].predicted_weather : null
  thuForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].predicted_weather : null
  friForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].predicted_weather : null

  monTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].predicted_temp : null
  tueTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].predicted_temp : null
  wedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].predicted_temp : null
  thuTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].predicted_temp : null
  friTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].predicted_temp : null

  monDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].date.slice(5) : null
  tueDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].date.slice(5) : null
  wedDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].date.slice(5) : null
  thuDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].date.slice(5) : null
  friDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].date.slice(5) : null

  render() {
    console.log(this.props.weatherperson);
    return (
      this.props.weatherperson.length !== 0

      ?


      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.weatherperson[0].name} <br/>
          {this.props.weatherperson[0].station} <br/>
          {this.props.weatherperson[0].city}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.monTemp}℉ <br/>
          mon <br/>
          {this.monDate}
        </div >
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.tueForecast}
          </div>
          {this.tueTemp}℉ <br/>
          tue <br/>
          {this.tueDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.wedForecast}
          </div>
          {this.wedTemp}℉ <br/>
          wed <br/>
          {this.wedDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.thuForecast}
          </div>
          {this.thuTemp}℉ <br/>
          thu <br/>
          {this.thuDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.friForecast}
          </div>
          {this.friTemp}℉ <br/>
          fri <br/>
          {this.friDate}
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

export default Scorecard
