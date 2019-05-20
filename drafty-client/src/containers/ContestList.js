import React from 'react'
import ContestListItem from '../components/ContestListItem'
import { connect } from 'react-redux'

class ContestList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  today = new Date()
  dd = String(this.today.getDate()).padStart(2, '0')
  mm = String(this.today.getMonth() + 1).padStart(2, '0')
  yyyy = this.today.getFullYear();

  currentDate = this.yyyy + '-' + this.mm + '-' + this.dd;

  renderContestListItems() {
    return this.props.contests.contests.map(contest => {
      if (contest.start_date > this.currentDate) {
        return <ContestListItem history={this.props.history} setCurrentContest={this.props.setCurrentContest} key={contest.id} contest={contest}/>
      }
    })
  }

  render() {

    return (
      <div className='contest-list-container'>
        <h1>Contests</h1>
        {this.renderContestListItems()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contests: state.contests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setContests: contests => dispatch({type: 'SET_CONTESTS', payload: contests})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
