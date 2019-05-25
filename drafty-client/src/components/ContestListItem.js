import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

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
        //TODO: NEED addTeam HERE?
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

  transformDate = (date) => {
    let yyyy = date.slice(0,4)
    let mm = date.slice(5,7)
    let dd = date.slice(8,10)

    if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
    } else if (mm.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd}/${yyyy}`
    } else if (dd.slice(0,1) === '0') {
      return `${mm}/${dd.slice(1,2)}/${yyyy}`
    } else {
      return `${mm}/${dd}/${yyyy}`
    }
  }

  render() {
    return (
      <div className='contest-li' id='assistant'>
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
          {this.transformDate(this.props.contest.start_date)} <br/>
          Ends: <br/>
          {this.transformDate(this.props.contest.end_date)} <br/>
        </div>
        <Button variant="contained" size="small" color="primary" id='enter-draft-button' className='contest-li-col' onClick={() => this.handleClickEnterDraft(this.props.contest.id)}>
          Enter draft
        </Button>
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
    //TODO: NEED addTeam HERE?
    addTeam: team => dispatch({type: 'ADD_TEAM', payload: team}),
    setCurrentTeam: team => dispatch({type: 'SET_CURRENT_TEAM', payload: team})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestListItem)
