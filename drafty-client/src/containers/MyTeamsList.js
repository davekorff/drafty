import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'

class MyTeamsList extends React.Component {

  renderMyTeams = () => {
    const myCompleteTeams = this.props.currentUser.current_teams.filter(team => team.weatherpeople.length === 3)

    if (myCompleteTeams.length === 0) {
      return (
        <div className='make-a-team' style={{marginTop: '50px'}}>
          <center>Make a team...</center>
        </div>
      )
    } else {
      return myCompleteTeams.map(team => {
        return <MyTeamsListItem key={team.id} team={team}/>
      })
    }
  }

  render() {
    return (
      <div className='my-teams-list-container'>
        <h1 id='pacifico'>My Teams</h1>
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
