import React from 'react'
import ScoreCard from './ScoreCard'

class HistoryCard extends React.Component {

  render() {

    return (
      <div className="history-card">
        <h3>Contest name - Team name</h3>
        <div className='history-card-row'>
          <div className='history-card-col'>
            <ScoreCard/>
          </div>
          <div className='history-card-col'>
            <ScoreCard/>
          </div>
          <div className='history-card-col'>
            <ScoreCard/>
          </div>
        </div>
        <div className='history-card-row'>
          <div className='history-card-col'>
            Started: 2019-05-01
            <br />
            Ended: 2019-05-06
          </div>
          <div className='history-card-col'>
            Total Score: <br />
            50 points <br />
          <img height='50px' alt='ribbon' src='ribbon-third.png' />
          </div>
          <div className='history-card-col'>
            Prize: <br />
            100 Flatcoin
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryCard
