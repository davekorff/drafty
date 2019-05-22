import React from 'react'
import { connect } from 'react-redux'

class MyTeamListItem extends React.Component {


  render() {
    // const this.props.weatherperson = this.props.weatherpeople.filter(wp => wp.id === this.props.draft.this.props.weatherperson_id)[0]

    // const thisWeeksPredictedForecasts = this.props.weatherperson ? this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date) : null
    //
    // const monForecast = this.props.weatherperson ? thisWeeksPredictedForecasts[0].predicted_weather : null
    // const tueForecast = this.props.weatherperson ? thisWeeksPredictedForecasts[1].predicted_weather : null
    // const wedForecast = this.props.weatherperson ? thisWeeksPredictedForecasts[2].predicted_weather : null
    // const thuForecast = this.props.weatherperson ? thisWeeksPredictedForecasts[3].predicted_weather : null
    // const friForecast = this.props.weatherperson ? thisWeeksPredictedForecasts[4].predicted_weather : null
    //
    // const monTemp = this.props.weatherperson ? thisWeeksPredictedForecasts[0].predicted_temp : null
    // const tueTemp = this.props.weatherperson ? thisWeeksPredictedForecasts[1].predicted_temp : null
    // const wedTemp = this.props.weatherperson ? thisWeeksPredictedForecasts[2].predicted_temp : null
    // const thuTemp = this.props.weatherperson ? thisWeeksPredictedForecasts[3].predicted_temp : null
    // const friTemp = this.props.weatherperson ? thisWeeksPredictedForecasts[4].predicted_temp : null
    //
    // const monDate = this.props.weatherperson ? thisWeeksPredictedForecasts[0].date.slice(5) : null
    // const tueDate = this.props.weatherperson ? thisWeeksPredictedForecasts[1].date.slice(5) : null
    // const wedDate = this.props.weatherperson ? thisWeeksPredictedForecasts[2].date.slice(5) : null
    // const thuDate = this.props.weatherperson ? thisWeeksPredictedForecasts[3].date.slice(5) : null
    // const friDate = this.props.weatherperson ? thisWeeksPredictedForecasts[4].date.slice(5) : null


    return (
      this.props.weatherperson

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.weatherperson.name} <br/>
        {this.props.weatherperson.station} <br/>
      {this.props.weatherperson.city}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            monForecast
          </div>
          monTemp℉ <br/>
          mon <br/>
          monDate
        </div >
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            tueForecast
          </div>
          tueTemp℉ <br/>
          tue <br/>
          tueDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            wedForecast
          </div>
          wedTemp℉ <br/>
          wed <br/>
          wedDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            thuForecast
          </div>
          thuTemp℉ <br/>
          thu <br/>
          thuDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            friForecast
          </div>
          friTemp℉ <br/>
          fri <br/>
          friDate
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
