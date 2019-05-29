import React from 'react'
import HistoryCard from '../components/HistoryCard'
import { connect } from 'react-redux'
import './History.css'


class History extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  renderCards = () => {
    if (this.props.currentUser.past_teams.length !== 0) {
      const sortedTeams = this.props.currentUser.past_teams.sort((a, b) => (b.contest.start_date > a.contest.start_date) ? 1 : -1)
      return sortedTeams.map(team => <HistoryCard team={team} key={team.id}/>)
    } else {
      return "You don't have any past teams..."
    }

  }

  render() {
    return (
      <div class='history-background'>
        <div className='history-container'>
          {this.renderCards()}
        </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setContests: contests => dispatch({type: 'SET_CONTESTS', payload: contests})
  }
}

export default connect(null, mapDispatchToProps)(History)
