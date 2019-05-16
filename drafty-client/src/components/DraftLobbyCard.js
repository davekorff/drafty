import React from 'react'

class DraftLobbyItem extends React.Component {

  render() {

    return (
      <div className='draft-lobby-card'>
        <div className='draft-lobby-card-col'>
          Contest name: <br/>
          {this.props.contest.name}
        </div>
        <div className='draft-lobby-card-col'>
          Prize: <br/>
          {this.props.contest.prize} Flatcoin
        </div >
        <div className='draft-lobby-card-col'>
          Starts: <br/>
          {this.props.contest.start_date} <br/>
          Ends: <br/>
          {this.props.contest.end_date} <br/>
        </div>
        <button className='draft-lobby-card-col'>
          Enter draft
        </button>

      </div>
    )
  }
}

export default DraftLobbyItem
