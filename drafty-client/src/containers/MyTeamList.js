import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'
import { connect } from 'react-redux'

class MyTeamList extends React.Component {

  renderMyTeam = () => {
    if (this.props.myTeam) {
      return this.props.myTeam.map(weatherperson => {
        return <MyTeamListItem key={weatherperson.id} weatherperson={weatherperson}/>
      })
    }
  }


  render() {

    return (
      <div className='my-team-list-container'>
        <h1>My Team</h1>
        {this.renderMyTeam()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest,
    drafts: state.drafts.drafts,
    weatherpeople: state.weatherpeople.weatherpeople,
    currentUser: state.user.currentUser,
    teams: state.teams.teams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTeams: teams => dispatch({type: 'SET_TEAMS', payload: teams})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTeamList)
