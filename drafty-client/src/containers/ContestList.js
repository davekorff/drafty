import React from 'react'
import ContestListItem from '../components/ContestListItem'
import { connect } from 'react-redux'

class ContestList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  // Render all future contests
  renderContestList() {
    return this.props.contests.map(contest => {
      if (contest.start_date > this.props.currentDate) {
        return <ContestListItem history={this.props.history} setCurrentContest={this.props.setCurrentContest} key={contest.id} contest={contest}/>
      }
      return null
    })
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
