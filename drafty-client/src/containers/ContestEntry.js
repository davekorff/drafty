import React from 'react'
import { connect } from 'react-redux'
import WeatherpeopleList from './WeatherpeopleList'
import MyTeamList from './MyTeamList'
import ReactAnimatedWeather from 'react-animated-weather';

class ContestEntry extends React.Component {

  state = {
    myWeatherpeople: [],
    weatherpeople: [],
    undraftedWeatherpeople: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests/' + this.props.match.params.contestID)
      .then(res => res.json())
      .then(contest => this.props.setCurrentContest(contest))

    // fetch('http://localhost:3000/api/v1/teams')
    //   .then(res => res.json())
    //   .then(teams => this.setState({ teams }, () => {
    //
    //     // REPEATED BELOW
    //     // TODO: REFACTOR INTO A HELPER FUNCTION?
    //     const myTeam = this.state.teams.find(team => {
    //       return team.user.id === this.props.currentUser.id && team.contest.id === this.props.currentContest.id
    //     })
    //     if (myTeam) {
    //       this.setState({myWeatherpeople: myTeam.weatherpeople})
    //     }
    //   }))

    // fetch('http://localhost:3000/api/v1/weatherpeople')
    //   .then(res => res.json())
    //   .then(weatherpeople => this.setState({ weatherpeople }, () => {
    //
    //     const myWeatherpeople = this.props.currentUser.current_teams.find(team => {
    //       return team.contest.id === this.props.currentContest.id
    //     }).weatherpeople
    //
    //     if (myWeatherpeople) {
    //       const myWeatherpeopleIDs = myWeatherpeople.weatherpeople.map(weatherperson => weatherperson.id)
    //       const undraftedWeatherpeople = this.state.weatherpeople.filter(weatherperson => !myWeatherpeopleIDs.includes(weatherperson.id))
    //       this.setState({undraftedWeatherpeople})
    //     } else {
    //       this.setState({ undraftedWeatherpeople: weatherpeople })
    //     }
    //
    //   }))
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
    console.log('in contestentry, props:',this.props)
    console.log('in contestentry, state:',this.state)
    return (
      <div>
        BEEF?
      </div>
    )
  }

  // render() {
  //   console.log(this.state.teams)
  //   return (
  //     this.props.currentContest
  //
  //     ?
  //
  //     <div className='contest-entry-container'>
  //       <h1>Contest Entry</h1>
  //       <h2>{this.props.currentContest.name}</h2>
  //         <div className='contest-entry-row'>
  //           <div className='contest-entry-col'>
  //             <WeatherpeopleList undraftedWeatherpeople={this.state.undraftedWeatherpeople} removeFromUndrafted={this.removeFromUndrafted} addToMyTeam={this.addToMyTeam} currentUser={this.props.currentUser}/>
  //           </div>
  //           <div className='contest-entry-col'>
  //             <MyTeamList currentContest={this.props.currentContest} myWeatherpeople={this.state.myWeatherpeople} />
  //           </div>
  //         </div>
  //     </div>
  //
  //     :
  //
  //     <div>BEEF. I mean, LOADING...</div>
  //   )
  // }

  // const defaults = {
  //   icon: 'CLEAR_DAY',
  //   color: 'goldenrod',
  //   size: 40,
  //   animate: true
  // };

  // <div class="icon thunder-storm">
  //   <div class="cloud"></div>
  //   <div class="lightning">
  //     <div class="bolt"></div>
  //     <div class="bolt"></div>
  //   </div>
  // </div>
  //
  //
  // <ReactAnimatedWeather
  //   icon={defaults.icon}
  //   color={defaults.color}
  //   size={defaults.size}
  //   animate={defaults.animate}
  // />
}

function mapStateToProps(state) {
	return {
		currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    currentTeam: state.teams.currentTeam
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentContest: contest => dispatch({type: 'SET_CURRENT_CONTEST', payload: contest})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ContestEntry)
