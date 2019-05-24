import React from 'react'
import WeatherpeopleListItem from '../components/WeatherpeopleListItem'
import { connect } from 'react-redux'

class WeatherpeopleList extends React.Component {

  // when user clicks 'draft' button, create a new draft unless the current team
  // already has three weatherpeople drafted
  handleClickDraft = wp_id => {
    const team = this.props.teams.find(team => {
      return team.user.id === this.props.currentUser.id && team.contest.id === this.props.currentContest.id
    })

    if (this.props.undraftedWeatherpeople.length > 2) {
      fetch('http://localhost:3000/api/v1/drafts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
        },
        body: JSON.stringify({team_id: team.id, weatherperson_id: wp_id})
      })
      .then(res => res.json())
      .then(draft => this.handleCreateDraft(draft))
    }
  }

  // after draft creation, add the drafted weatherperson to my team list and remove
  // them from weatherpeople list
  handleCreateDraft = draft => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === draft.weatherperson_id)
    this.props.addToMyTeam(weatherperson)
    this.props.removeFromUndrafted(weatherperson.id)
  }


  render() {
    return (
      <div className='weatherpeople-list-container'>
        <h1>Weatherpeople</h1>
        {this.props.undraftedWeatherpeople ? this.props.undraftedWeatherpeople.map(weatherperson => <WeatherpeopleListItem handleClickDraft={this.handleClickDraft} key={weatherperson.id} weatherperson={weatherperson} currentUser={this.props.currentUser} />) : <div>LOADING...</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		weatherpeople: state.weatherpeople.weatherpeople,
    currentContest: state.contests.currentContest,
    teams: state.teams.teams,
    currentTeam: state.teams.currentTeam
	}
}

export default connect(mapStateToProps)(WeatherpeopleList)
