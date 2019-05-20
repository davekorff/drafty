import React from 'react'
import HistoryCard from '../components/HistoryCard'
import { connect } from 'react-redux'
import uuid from 'uuid'


class History extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/drafts')
      .then(res => res.json())
      .then(drafts => this.props.setDrafts(drafts))

    fetch('http://localhost:3000/api/v1/weatherpeople')
      .then(res => res.json())
      .then(weatherpeople => this.props.setWeatherpeople(weatherpeople))

    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  //TODO: MOVE THE DATE LOGIC INTO APP AND SET IT IN THE REDUX STORE

  today = new Date()
  dd = String(this.today.getDate()).padStart(2, '0')
  mm = String(this.today.getMonth() + 1).padStart(2, '0')
  yyyy = this.today.getFullYear();

  currentDate = this.yyyy + '-' + this.mm + '-' + this.dd

  render() {
    const currentUsersDrafts = this.props.drafts.filter(draft => draft.user_id === this.props.currentUser.id)

    const currentUsersTeams = this.props.contests.map(contest => {
      let team = []
      currentUsersDrafts.forEach(draft => {
        if (draft.contest_id === contest.id && contest.end_date <= this.currentDate) {
          team.push(draft)
        }
      })
      return team
    })

    return (
      <div className='history-container'>
        <h1>Contest History</h1>
        {currentUsersTeams.map(team => team.length === 3 ? <HistoryCard team={team} key={uuid()}/> : null)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    drafts: state.drafts.drafts,
    weatherpeople: state.weatherpeople.weatherpeople,
    contests: state.contests.contests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setDrafts: drafts => dispatch({type: 'SET_DRAFTS', payload: drafts}),
    setWeatherpeople: weatherpeople => dispatch({type: 'SET_WEATHERPEOPLE', payload: weatherpeople}),
    setContests: contests => dispatch({type: 'SET_CONTESTS', payload: contests})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(History)
