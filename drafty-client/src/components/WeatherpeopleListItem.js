import React from 'react'

class WeatherpeopleListItem extends React.Component {

  render() {

    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          Player 1
        </div>
        <div className='my-teams-li-col'>
          Player 2
        </div >
        <div className='my-teams-li-col'>
          Player 3
        </div>
        <button className='my-teams-li-col'>
          View Team
        </button>

      </div>
    )
  }
}

export default WeatherpeopleListItem
