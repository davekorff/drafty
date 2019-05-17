import React from 'react'
import ContestListItem from '../components/ContestListItem'
import { connect } from 'react-redux'

class ContestListContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  renderContestListItems() {
    return this.props.contests.contests.map(contest => <ContestListItem setCurrentContest={this.props.setCurrentContest} key={contest.id} contest={contest}/>)
  }


  render() {

    return (
      <div className='draft-lobby-container'>
        <h1>Draft Lobby</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestListContainer)
