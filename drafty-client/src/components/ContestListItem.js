import React from 'react'

class ContestListItem extends React.Component {

  render() {
    return (
      <div className='contest-list-item'>
        <div className='contest-list-item-col'>
          Contest name: <br/>
          {this.props.contest.name}
        </div>
        <div className='contest-list-item-col'>
          Prize: <br/>
          {this.props.contest.prize} Flatcoin
        </div >
        <div className='contest-list-item-col'>
          Starts: <br/>
          {this.props.contest.start_date} <br/>
          Ends: <br/>
          {this.props.contest.end_date} <br/>
        </div>
        {/* user clicks enter contest button =>
          1. set selectedContest in store
          2. render contest entry container
          3. ?
          */}
        <button className='contest-list-item-col' onClick={() => this.props.setCurrentContest(this.props.contest)}>
          Enter draft
        </button>

      </div>
    )
  }
}

export default ContestListItem
