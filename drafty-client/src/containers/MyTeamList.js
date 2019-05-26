import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'
import { connect } from 'react-redux'

class MyTeamList extends React.Component {

  renderMyTeam = () => {
    if (this.props.myWeatherpeople) {
      return this.props.myWeatherpeople.map(weatherperson => {
        return <MyTeamListItem currentContest={this.props.currentContest} key={weatherperson.id} weatherperson={weatherperson}/>
      })
    }
  }


  render() {

    return (
      <div className='my-team-list-container'>
        <h1 id='secular'>Your Team</h1>
        {this.renderMyTeam()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
