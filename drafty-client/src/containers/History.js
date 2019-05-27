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

  render() {
    return (
      <div style={{backgroundImage: `url('/egg-shell.png')`, width: '100%', height: '3000px'}}>
        <div className='history-container'>
          <div id='team-history-label'><h4>Team History</h4></div>
          {this.props.currentUser.past_teams.map(team => <HistoryCard team={team} key={team.id}/>)}
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
