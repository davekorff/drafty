// TODO: FIX THIS


import React from 'react'
import { connect } from 'react-redux'

class MyTeamListItem extends React.Component {


  render() {

    // TODO : REFACTOR - DRY
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)

    const thisWeeksPredictedForecasts = weatherperson ? weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null

    const monForecast = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[0].predicted_weather : null
    const tueForecast = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[1].predicted_weather : null
    const wedForecast = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[2].predicted_weather : null
    const thuForecast = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[3].predicted_weather : null
    const friForecast = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[4].predicted_weather : null

    const monTemp = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[0].predicted_temp : null
    const tueTemp = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[1].predicted_temp : null
    const wedTemp = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[2].predicted_temp : null
    const thuTemp = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[3].predicted_temp : null
    const friTemp = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[4].predicted_temp : null

    const monDate = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[0].date.slice(5) : null
    const tueDate = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[1].date.slice(5) : null
    const wedDate = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[2].date.slice(5) : null
    const thuDate = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[3].date.slice(5) : null
    const friDate = thisWeeksPredictedForecasts ? thisWeeksPredictedForecasts[4].date.slice(5) : null


    return (
      weatherperson

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          {
            weatherperson.name === 'Brick Tamland'
            ?
            <img height='75px' alt='wp-thumb' src={weatherperson.img_url_sm} />
            :
            <img height='75px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' />
          } <br/>
          {weatherperson.name} <br/>
          {weatherperson.station} <br/>
          {weatherperson.city}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {monForecast}
          </div>
          {monTemp}℉ <br/>
          mon <br/>
          {monDate}
        </div >
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {tueForecast}
          </div>
          {tueTemp}℉ <br/>
          tue <br/>
          {tueDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {wedForecast}
          </div>
          {wedTemp}℉ <br/>
          wed <br/>
          {wedDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {thuForecast}
          </div>
          {thuTemp}℉ <br/>
          thu <br/>
          {thuDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {friForecast}
          </div>
          {friTemp}℉ <br/>
          fri <br/>
          {friDate}
        </div>
      </div>

      :
      <div className='my-teams-li'>
        <div>LOADING...</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople
  }
}

export default connect(mapStateToProps)(MyTeamListItem)
