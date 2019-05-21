import React from 'react'
import { connect } from 'react-redux'

class ContestListItem extends React.Component {

  // selectContest(contestID) {
  //   this.props.history.push('/entry/' + this.props.contest.id)
  // }

  createTeam(contestID) {


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
        <button className='contest-li-col' onClick={() => this.createTeam(this.props.contest.id)}>
          Enter draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(ContestListItem)
