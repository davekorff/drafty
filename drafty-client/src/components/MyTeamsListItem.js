import React from 'react'

class MyTeamsListItem extends React.Component {

  render() {

    return (
      <div className='my-teams-list-item'>
        <div className='my-teams-list-item-col'>
          Player 1
        </div>
        <div className='my-teams-list-item-col'>
          Player 2
        </div >
        <div className='my-teams-list-item-col'>
          Player 3
        </div>
        <button className='my-teams-list-item-col'>
          View Team
        </button>

      </div>
    )
  }
}

export default MyTeamsListItem
