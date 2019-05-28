import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'
import { connect } from 'react-redux'

class MyTeamList extends React.Component {

  renderMyTeam = () => {
    if (this.props.myWeatherpeople && this.props.myWeatherpeople.length !== 0) {
      return this.props.myWeatherpeople.map(weatherperson => {
        return <MyTeamListItem currentContest={this.props.currentContest} key={weatherperson.id} weatherperson={weatherperson}/>
      })
    } else if (this.props.myWeatherpeople.length === 0) {
      return <div style={{marginTop: '40px'}}>Draft somebody...</div>
    }
  }


  render() {
    return (
      <div className='my-team-list-container'>
        <h3 id='pacifico'>Your Team</h3>
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
