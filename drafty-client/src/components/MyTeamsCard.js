import React from 'react'

class MyTeamsCard extends React.Component {

  render() {

    return (
      <div className='my-teams-card'>
        <div className='my-teams-card-col'>
          Player 1
        </div>
        <div className='my-teams-card-col'>
          Player 2
        </div >
        <div className='my-teams-card-col'>
          Player 3
        </div>
        <button className='my-teams-card-col'>
          View Team
        </button>

      </div>
    )
  }
}

export default MyTeamsCard
