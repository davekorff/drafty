import React from 'react'
import { connect } from 'react-redux'
import WeatherpeopleList from './WeatherpeopleList'
import MyTeamList from './MyTeamList'
// import ReactAnimatedWeather from 'react-animated-weather';
import './ContestEntry.css'
class ContestEntry extends React.Component {

  state = {
    myWeatherpeople: [],
    undraftedWeatherpeople: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests/' + this.props.match.params.contestID)
      .then(res => res.json())
      .then(contest => this.props.setCurrentContest(contest))
      .then(action => {
        const currentTeam = this.props.currentUser.current_teams.find(team => team.contest.id === action.payload.id)
        this.props.setCurrentTeam(currentTeam)
        this.setState({
          ...this.state,
          myWeatherpeople: currentTeam.weatherpeople
        }, () => {
          const myWeatherpeopleIDs = this.state.myWeatherpeople.map(wp => wp.id)
          const undraftedWeatherpeople = this.props.weatherpeople.filter(wp => !myWeatherpeopleIDs.includes(wp.id))
          this.setState({
            ...this.state,
            undraftedWeatherpeople
          })
        })
      })
  }

  addToMyTeam = weatherperson => {
    this.setState({
      ...this.state,
      myWeatherpeople: [...this.state.myWeatherpeople, weatherperson]
    })
  }

  removeFromUndrafted = weatherpersonID => {
    const updatedList = this.state.undraftedWeatherpeople.filter(weatherperson => weatherperson.id !== weatherpersonID)
    this.setState({ undraftedWeatherpeople: updatedList })
  }

  render() {

    return (
      this.props.currentContest && this.props.currentTeam

      ?

      <div className='contest-entry-container'>
        <h1><span style={{fontSize: '.8em'}} id='secular'>Drafting for:</span> <span id='pacifico'>{this.props.currentContest.name}</span></h1>
        <h1 id='pacifico'>Team {this.props.currentTeam.name}</h1>
          <div className='contest-entry-row'>
            <div className='contest-entry-col'>
              <WeatherpeopleList {...this.props.routeProps} undraftedWeatherpeople={this.state.undraftedWeatherpeople} removeFromUndrafted={this.removeFromUndrafted} addToMyTeam={this.addToMyTeam} currentUser={this.props.currentUser}/>
            </div>
            <div className='contest-entry-col'>
              <MyTeamList currentContest={this.props.currentContest} myWeatherpeople={this.state.myWeatherpeople} />
            </div>
          </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

function mapStateToProps(state) {
	return {
		currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    currentTeam: state.teams.currentTeam,
    weatherpeople: state.weatherpeople.weatherpeople
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentContest: contest => dispatch({type: 'SET_CURRENT_CONTEST', payload: contest}),
    setCurrentTeam: team => dispatch({type: 'SET_CURRENT_TEAM', payload: team})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ContestEntry)
