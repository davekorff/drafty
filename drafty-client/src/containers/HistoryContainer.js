import React from 'react'
import HistoryCard from '../components/HistoryCard'


class HistoryContainer extends React.Component {

  render() {

    return (
      <div className='history-container'>
        <h1>Draft History</h1>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    )
  }
}

export default HistoryContainer