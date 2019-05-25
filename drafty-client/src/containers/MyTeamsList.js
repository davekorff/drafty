import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'

class MyTeamsList extends React.Component {

  renderMyTeams = () => {
    return this.props.currentUser.current_teams.map(team => {
        return <MyTeamsListItem key={team.id} team={team}/>
    })
  }

  render() {
    return (
      <div className='my-teams-list-container'>
        <h1 id='secular'>My Teams</h1>
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
