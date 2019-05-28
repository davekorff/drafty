import React from 'react'
import { connect } from 'react-redux'
import transformDate from '../helpers/transformDate';

class ContestListItem extends React.Component {

  // when user clicks 'enter draft' button, create a new team unless the current user already has a team for the selected contest
  // set current team in redux store
  // reroute user to contest entry
  handleClickEnterDraft(contestID) {
    if (!this.props.currentUser.current_teams.find(team => team.contest.id === contestID)) {
      fetch('http://localhost:3000/api/v1/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
        },
        body: JSON.stringify({user_id: this.props.currentUser.id, contest_id: contestID})
      })
      .then(res => res.json())
      .then(team => {
        this.props.addTeam(team)
        this.props.setCurrentTeam(team)
        this.props.history.push('/entry/' + contestID)
      })
    } else {
      const currentTeam = this.props.currentUser.current_teams.find(team => team.contest.id === contestID)
      this.props.setCurrentTeam(currentTeam)
      this.props.history.push('/entry/' + contestID)
    }
  }

  render() {
    return (
      <div className='contest-li' id='secular'>
        <div className='contest-li-col'>
          Contest name: <br/>
        {this.props.contest.name}
        </div>
        <div className='contest-li-col'>
          Starts: {transformDate(this.props.contest.start_date)} <br/>
          Ends: {transformDate(this.props.contest.end_date)} <br/>
        </div>
        <div className='contest-li-col'>
            Prize: <br/>
          {this.props.contest.prize} Flatcoin
        </div >
        <button variant="contained" size="small" color="primary" id='view-draft-button' onClick={() => this.handleClickEnterDraft(this.props.contest.id)}>
          View Draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTeam: team => dispatch({type: 'ADD_TEAM', payload: team}),
    setCurrentTeam: team => dispatch({type: 'SET_CURRENT_TEAM', payload: team})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestListItem)
