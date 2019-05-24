import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'

class MyTeamsList extends React.Component {

  renderMyTeams = () => {
    return this.props.currentUser.current_teams.map(team => {
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
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(MyTeamsList)
