import React from 'react'
import { connect } from 'react-redux'


class WeatherpeopleListItem extends React.Component {



  render() {
    // console.log(this.props)
    //TODO: REFACTOR
    // PUT THE BELOW LOGIC INTO A FUNCTION

    const thisWeeksPredictedForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)

    const monForecast = thisWeeksPredictedForecasts[0].predicted_weather
    const tueForecast = thisWeeksPredictedForecasts[1].predicted_weather
    const wedForecast = thisWeeksPredictedForecasts[2].predicted_weather
    const thuForecast = thisWeeksPredictedForecasts[3].predicted_weather
    const friForecast = thisWeeksPredictedForecasts[4].predicted_weather

    const monTemp = thisWeeksPredictedForecasts[0].predicted_temp
    const tueTemp = thisWeeksPredictedForecasts[1].predicted_temp
    const wedTemp = thisWeeksPredictedForecasts[2].predicted_temp
    const thuTemp = thisWeeksPredictedForecasts[3].predicted_temp
    const friTemp = thisWeeksPredictedForecasts[4].predicted_temp

    const monDate = thisWeeksPredictedForecasts[0].date.slice(5)
    const tueDate = thisWeeksPredictedForecasts[1].date.slice(5)
    const wedDate = thisWeeksPredictedForecasts[2].date.slice(5)
    const thuDate = thisWeeksPredictedForecasts[3].date.slice(5)
    const friDate = thisWeeksPredictedForecasts[4].date.slice(5)

    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='75px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm ? this.props.weatherperson.img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } />
          <br/>
          {this.props.weatherperson.name} <br/>
          {this.props.weatherperson.station} <br/>
          {this.props.weatherperson.city}
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
        <button className='my-teams-li-col' onClick={() => this.props.handleClickDraft(this.props.weatherperson.id)}>
          Draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDraft: draft => dispatch({type: 'ADD_DRAFT', payload: draft})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherpeopleListItem)
