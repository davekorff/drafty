import React from 'react'

class ContestListItem extends React.Component {

  selectContest(contestID) {
    this.props.history.push('/entry/' + this.props.contest.id)
  }

  render() {
    return (
      <div className='contest-li'>
        <div className='contest-li-col'>
          Contest name: <br/>
          {this.props.contest.name}
        </div>
        <div className='contest-li-col'>
          Prize: <br/>
          {this.props.contest.prize} Flatcoin
        </div >
        <div className='contest-li-col'>
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
        <button className='contest-li-col' onClick={() => this.selectContest(this.props.contest.id)}>
          Enter draft
        </button>
      </div>
    )
  }
}

export default ContestListItem
