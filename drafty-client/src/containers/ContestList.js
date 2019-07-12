import React from 'react'
import ContestListItem from '../components/ContestListItem'
import { connect } from 'react-redux'

class ContestList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  // Find the last contest's date
  lastContestDate() {
    if (this.props.contests[this.props.contests.length - 1]) {
      return this.props.contests[this.props.contests.length - 1].end_date
    }
  }

  // Render all future contests or "No contests" message
  renderContestList() {
    if (this.lastContestDate() && this.lastContestDate() < this.props.currentDate) {
      return <div style={{marginTop: '45px'}}>There are no current contests...</div>
    } else if (this.lastContestDate()) {
      return this.props.contests.map(contest => {
        if (contest.start_date > this.props.currentDate) {
          return <ContestListItem history={this.props.history} setCurrentContest={this.props.setCurrentContest} key={contest.id} contest={contest}/>
        }
        return null
      })
    } else {
      return <div style={{marginTop: '45px'}}>Loading contests...</div>
    }
  }

  render() {
    return (
      <div className='contest-list-container'>
        <h1 id='pacifico'>Contests</h1>
        {this.renderContestList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contests: state.contests.contests,
    currentDate: state.date.currentDate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setContests: contests => dispatch({type: 'SET_CONTESTS', payload: contests})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
