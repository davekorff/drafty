import React from 'react'
import { connect } from 'react-redux'
import WeatherpeopleList from './WeatherpeopleList'
import MyTeamList from './MyTeamList'
import './ContestEntry.css'

class ContestEntry extends React.Component {

  // Local state to optimistically render weatherpeople as they are being drafted
  state = {
    myWeatherpeople: [],
    undraftedWeatherpeople: []
  }

  // Get the selected contest from API and set it in the Redux store
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests/' + this.props.match.params.contestID)
      .then(res => res.json())
      .then(contest => this.props.setCurrentContest(contest))
      .then(action => {
        this.handleResponse(action)
      })
  }

  // Verify user has a team for the selected contest. If they don't, push them to the lobby
  handleResponse(action) {
    const currentTeam = this.findCurrentTeam(action)
    if (currentTeam) {
      this.props.setCurrentTeam(currentTeam)
      this.setState({
        ...this.state,
        myWeatherpeople: currentTeam.weatherpeople
      }, () => {
        this.filterWeatherpeople()
      })
    } else {
      this.props.history.push('/lobby')
    }
  }

  // Helper to find the current user's team for the selected contest
  findCurrentTeam(action) {
    return this.props.currentUser.current_teams.find(team => team.contest.id === action.payload.id)
  }

  // Create separate lists for undrafted and drafted weatherpeople
  filterWeatherpeople() {
    const myWeatherpeopleIDs = this.state.myWeatherpeople.map(wp => wp.id)
    const undraftedWeatherpeople = this.props.weatherpeople.filter(wp => !myWeatherpeopleIDs.includes(wp.id))
    this.setState({
      ...this.state,
      undraftedWeatherpeople
    })
  }

  // Update local state when user drafts a weatherperson, adding them to the user's team
  addToMyTeam = weatherperson => {
    this.setState({
      ...this.state,
      myWeatherpeople: [...this.state.myWeatherpeople, weatherperson]
    })
  }

  // Update local state when user drafts a weatherperson, removing them from the undrafted list
  removeFromUndrafted = weatherpersonID => {
    const updatedList = this.state.undraftedWeatherpeople.filter(weatherperson => weatherperson.id !== weatherpersonID)
    this.setState({ undraftedWeatherpeople: updatedList })
  }

  render() {
    return (
      this.props.currentContest && this.props.currentTeam

      ?

      <div className='contest-entry-container'>
        <h1><span style={{fontSize: '.8em'}} id='secular'>Contest:</span> <span id='pacifico'>{this.props.currentContest.name}</span></h1>
        <h1><span style={{fontSize: '.8em'}} id='secular'>Team:</span> <span id='pacifico'>{this.props.currentTeam.name}</span></h1>
          <div className='contest-entry-row'>
            <div className='contest-entry-col'>
              <WeatherpeopleList {...this.props.routeProps} undraftedWeatherpeople={this.state.undraftedWeatherpeople} removeFromUndrafted={this.removeFromUndrafted} addToMyTeam={this.addToMyTeam}/>
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
