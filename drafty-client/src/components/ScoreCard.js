import React from 'react'

class ScoreCard extends React.Component {

  render() {

    return (
      <div className='score-card'>
        <div className='score-card-col'>
          WP
        </div>
        <div className='score-card-col'>
          Mon <br />
          ✅
        </div >
        <div className='score-card-col'>
          Tue <br />
          ✅
        </div>
        <div className='score-card-col'>
          Wed <br />
          ❌
        </div>
        <div className='score-card-col'>
          Thur <br />
          ✅
        </div>
        <div className='score-card-col'>
          Fri <br />
          ❌
        </div>
          Score: 50
      </div>
    )
  }
}

export default ScoreCard
