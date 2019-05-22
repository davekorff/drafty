import React from 'react'
import HistoryCard from '../components/HistoryCard'
import uuid from 'uuid'


class History extends React.Component {

  render() {

    return (
      <div className='history-container'>
        <h1>Contest History</h1>
        {this.props.currentUser.past_teams.map(team => <HistoryCard team={team} key={uuid()}/>)}
      </div>
    )
  }
}

export default History
