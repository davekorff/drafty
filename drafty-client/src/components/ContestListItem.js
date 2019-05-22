import React from 'react'
import { connect } from 'react-redux'

class ContestListItem extends React.Component {


  // when user clicks 'enter draft' button, create a new team unless the current user already has a team for the selected contest
  // set current team in redux store
  // reroute user to contest entry
  handleClickEnterDraft(contestID) {
    if (!this.props.teams.find(team => team.user.id === this.props.currentUser.id && team.contest.id === contestID)) {
      fetch('http://localhost:3000/api/v1/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
        },
        body: JSON.stringify({user_id: this.props.currentUser.id, contest_id: contestID})
      })
      .then(res => res.json())
      .then(team => this.props.addTeam(team))
    } else {
      const currentTeam = this.props.teams.find(team => team.user.id === this.props.currentUser.id && team.contest.id === contestID)
      this.props.setCurrentTeam(currentTeam)
    }

    this.props.history.push('/entry/' + contestID)
  }

  render() {
    return (
      <div className='contest-li'>
        <div className='contest-li-col'>
          Contest name: <br/>
          {this.props.contest.name}
        </div>
        <div className='contest-li-col'>
          Prize: <br/>
          {this.props.contest.prize} Flatcoin
        </div >
        <div className='contest-li-col'>
          Starts: <br/>
          {this.props.contest.start_date} <br/>
          Ends: <br/>
          {this.props.contest.end_date} <br/>
        </div>
        <button className='contest-li-col' onClick={() => this.handleClickEnterDraft(this.props.contest.id)}>
          Enter draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    teams: state.teams.teams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTeam: team => dispatch({type: 'ADD_TEAM', payload: team}),
    setCurrentTeam: team => dispatch({type: 'SET_CURRENT_TEAM', payload: team})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestListItem)
