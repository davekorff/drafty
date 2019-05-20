import React from 'react'
import { connect } from 'react-redux'


class WeatherpeopleListItem extends React.Component {

  //TODO: PUT THE BELOW LOGIC INTO A FUNCTION

  userID = this.props.currentUser.id
  weatherpersonID = this.props.weatherperson.id
  // contestID = this.props.currentContest.id

  thisWeeksPredictedForecasts = this.props.weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)

  monForecast = this.thisWeeksPredictedForecasts[0].predicted_weather
  tueForecast = this.thisWeeksPredictedForecasts[1].predicted_weather
  wedForecast = this.thisWeeksPredictedForecasts[2].predicted_weather
  thuForecast = this.thisWeeksPredictedForecasts[3].predicted_weather
  friForecast = this.thisWeeksPredictedForecasts[4].predicted_weather

  monTemp = this.thisWeeksPredictedForecasts[0].predicted_temp
  tueTemp = this.thisWeeksPredictedForecasts[1].predicted_temp
  wedTemp = this.thisWeeksPredictedForecasts[2].predicted_temp
  thuTemp = this.thisWeeksPredictedForecasts[3].predicted_temp
  friTemp = this.thisWeeksPredictedForecasts[4].predicted_temp

  monDate = this.thisWeeksPredictedForecasts[0].date.slice(5)
  tueDate = this.thisWeeksPredictedForecasts[1].date.slice(5)
  wedDate = this.thisWeeksPredictedForecasts[2].date.slice(5)
  thuDate = this.thisWeeksPredictedForecasts[3].date.slice(5)
  friDate = this.thisWeeksPredictedForecasts[4].date.slice(5)

  createDraft = () => {

    fetch('http://localhost:3000/api/v1/drafts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accepts': 'application/json',
			},
			body: JSON.stringify({user_id: this.userID, weatherperson_id: this.weatherpersonID, contest_id: this.props.currentContest.id})
		})
		.then(res => res.json())
    .then(draft => this.props.addDraft(draft))
	}

  render() {
    const team = this.props.drafts.filter(draft => draft.user_id === this.props.currentUser.id && draft.contest_id === this.props.currentContest.id)

    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.weatherperson.name} <br/>
          {this.props.weatherperson.station} <br/>
          {this.props.weatherperson.city}
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
        <button className='my-teams-li-col' onClick={team.length < 3 ? this.createDraft : null}>
          Draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    drafts: state.drafts.drafts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDraft: draft => dispatch({type: 'ADD_DRAFT', payload: draft})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherpeopleListItem)
