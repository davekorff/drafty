import React from 'react'

class DraftLobbyItem extends React.Component {

  render() {

    return (
      <div className='draft-lobby-card'>
        <div className='draft-lobby-card-col'>
          Contest name
        </div>
        <div className='draft-lobby-card-col'>
          Prize
        </div >
        <div className='draft-lobby-card-col'>
          Dates
        </div>
        <button className='draft-lobby-card-col'>
          Enter
        </button>

      </div>
    )
  }
}

export default DraftLobbyItem
