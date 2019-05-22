import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'
// import uuid from 'uuid'

class MyTeamsList extends React.Component {

  state = {
    myCurrentTeams: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/' + this.props.currentUser.id)
      .then(res => res.json())
      .then(user => this.setState({myCurrentTeams: user.current_teams}))
  }

  renderMyTeams = () => {
    return this.state.myCurrentTeams.map(team => {
      if (team.weatherpeople.length === 3) {
        return <MyTeamsListItem key={team.id} team={team}/>
      }
      return null
    })
  }

  render() {
    return (
      <div className='my-teams-list-container'>
        <h1>My Teams</h1>
        {this.renderMyTeams()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    teams: state.teams.teams,
    currentDate: state.date.currentDate,
    drafts: state.drafts.drafts,
    contests: state.contests.contests
  }
}

export default connect(mapStateToProps)(MyTeamsList)
