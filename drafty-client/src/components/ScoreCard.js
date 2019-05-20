import React from 'react'

class Scorecard extends React.Component {

  thisWeeksPredictedForecasts = this.props.weatherperson.length !== 0 ? this.props.weatherperson[0].forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null
  thisWeeksActualWeather = this.props.weatherperson.length !== 0 ? this.props.weatherperson[0].forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null

  monForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].predicted_weather : null
  tueForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].predicted_weather : null
  wedForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].predicted_weather : null
  thuForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].predicted_weather : null
  friForecast = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].predicted_weather : null

  monPredictedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].predicted_temp : null
  tuePredictedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].predicted_temp : null
  wedPredictedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].predicted_temp : null
  thuPredictedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].predicted_temp : null
  friPredictedTemp = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].predicted_temp : null

  monActualWeather = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[0].actual_weather : null
  tueActualWeather = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[1].actual_weather : null
  wedActualWeather = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[2].actual_weather : null
  thuActualWeather = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[3].actual_weather : null
  friActualWeather = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[4].actual_weather : null

  monActualTemp = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[0].actual_temp : null
  tueActualTemp = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[1].actual_temp : null
  wedActualTemp = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[2].actual_temp : null
  thuActualTemp = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[3].actual_temp : null
  friActualTemp = this.thisWeeksActualWeather ? this.thisWeeksActualWeather[4].actual_temp : null

  monDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[0].date.slice(5) : null
  tueDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[1].date.slice(5) : null
  wedDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[2].date.slice(5) : null
  thuDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[3].date.slice(5) : null
  friDate = this.thisWeeksPredictedForecasts ? this.thisWeeksPredictedForecasts[4].date.slice(5) : null

  monTempDiff = Math.abs(this.monPredictedTemp - this.monActualTemp)
  tueTempDiff = Math.abs(this.tuePredictedTemp - this.tueActualTemp)
  wedTempDiff = Math.abs(this.wedPredictedTemp - this.wedActualTemp)
  thuTempDiff = Math.abs(this.thuPredictedTemp - this.thuActualTemp)
  friTempDiff = Math.abs(this.friPredictedTemp - this.friActualTemp)




  // scoring

  score = 0 - this.monTempDiff - this.tueTempDiff - this.wedTempDiff - this.thuTempDiff - this.friTempDiff

  calculateScore(score) {
    if (this.monForecast === this.monActualWeather) {
      score += 100
    } else if (this.monForecast !== this.monActualWeather) {
      score -= 10
    } else if (this.tueForecast === this.tueActualWeather) {
      score += 100
    } else if (this.tueForecast !== this.tueActualWeather) {
      score -= 10
    } else if (this.wedForecast === this.wedActualWeather) {
      score += 100
    } else if (this.wedForecast !== this.wedActualWeather) {
      score -= 10
    } else if (this.thuForecast === this.thuActualWeather) {
      score += 100
    } else if (this.thuForecast !== this.thuActualWeather) {
      score -= 10
    } else if (this.friForecast === this.friActualWeather) {
      score += 100
    } else if (this.friForecast !== this.friActualWeather) {
      score -= 10
    }
    return score
  }

  score = this.calculateScore(this.score)

  render() {
    console.log(this.score);
    return (
      this.props.weatherperson.length !== 0

      ?

      <div className='scorecard-container'>
        <div className='scorecard-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.weatherperson[0].name} <br/>
          {this.props.weatherperson[0].station} <br/>
          {this.props.weatherperson[0].city}
        </div>
        <div className='scorecard-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.monPredictedTemp}℉ <br/>
          mon <br/>
          {this.monDate}
        </div >
        <div className='scorecard-col'>
          <div className='forecast-box'>
            {this.tueForecast}
          </div>
          {this.tuePredictedTemp}℉ <br/>
          tue <br/>
          {this.tueDate}
        </div>
        <div className='scorecard-col'>
          <div className='forecast-box'>
            {this.wedForecast}
          </div>
          {this.wedPredictedTemp}℉ <br/>
          wed <br/>
          {this.wedDate}
        </div>
        <div className='scorecard-col'>
          <div className='forecast-box'>
            {this.thuForecast}
          </div>
          {this.thuPredictedTemp}℉ <br/>
          thu <br/>
          {this.thuDate}
        </div>
        <div className='scorecard-col'>
          <div className='forecast-box'>
            {this.friForecast}
          </div>
          {this.friPredictedTemp}℉ <br/>
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
