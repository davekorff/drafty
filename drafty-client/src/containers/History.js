import React from 'react'
import HistoryCard from '../components/HistoryCard'
import { connect } from 'react-redux'
import './History.css'


class History extends React.Component {

  state = {
    sortedTeams: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))

    const sortedTeams = this.props.currentUser.past_teams.sort((a, b) => (a.contest.start_date > b.contest.start_date) ? -1 : 1)

    this.setState({sortedTeams})
  }

  renderCards = () => {
    if (this.props.currentUser.past_teams.length !== 0) {
      return (
        <div>
          <div id='team-history-label'>Past teams</div>
          {this.state.sortedTeams.map(team => <HistoryCard team={team} key={team.id}/>)}
        </div>
      )
    } else {
      return <div id='team-history-label'>You don't have any past teams</div>
    }

  }

  render() {
    console.log(this.state.pastTeams);
    return (
      <div style={{backgroundImage: `url('/egg-shell.png')`, width: '100%', height: '3000px'}}>
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
