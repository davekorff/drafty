import React from 'react'
import { connect } from 'react-redux'

class MyTeamListItem extends React.Component {


  render() {
    const weatherperson = this.props.weatherpeople.filter(wp => wp.id === this.props.draft.weatherperson_id)[0]

    const thisWeeksPredictedForecasts = weatherperson ? weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null

    const monForecast = weatherperson ? thisWeeksPredictedForecasts[0].predicted_weather : null
    const tueForecast = weatherperson ? thisWeeksPredictedForecasts[1].predicted_weather : null
    const wedForecast = weatherperson ? thisWeeksPredictedForecasts[2].predicted_weather : null
    const thuForecast = weatherperson ? thisWeeksPredictedForecasts[3].predicted_weather : null
    const friForecast = weatherperson ? thisWeeksPredictedForecasts[4].predicted_weather : null

    const monTemp = weatherperson ? thisWeeksPredictedForecasts[0].predicted_temp : null
    const tueTemp = weatherperson ? thisWeeksPredictedForecasts[1].predicted_temp : null
    const wedTemp = weatherperson ? thisWeeksPredictedForecasts[2].predicted_temp : null
    const thuTemp = weatherperson ? thisWeeksPredictedForecasts[3].predicted_temp : null
    const friTemp = weatherperson ? thisWeeksPredictedForecasts[4].predicted_temp : null

    const monDate = weatherperson ? thisWeeksPredictedForecasts[0].date.slice(5) : null
    const tueDate = weatherperson ? thisWeeksPredictedForecasts[1].date.slice(5) : null
    const wedDate = weatherperson ? thisWeeksPredictedForecasts[2].date.slice(5) : null
    const thuDate = weatherperson ? thisWeeksPredictedForecasts[3].date.slice(5) : null
    const friDate = weatherperson ? thisWeeksPredictedForecasts[4].date.slice(5) : null


    return (
      weatherperson

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
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

      <div>LOADING...</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople
  }
}

export default connect(mapStateToProps)(MyTeamListItem)
