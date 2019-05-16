import React from 'react'
import DraftLobbyCard from '../components/DraftLobbyCard'
import { connect } from 'react-redux'

class DraftLobbyContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests')
      .then(res => res.json())
      .then(contests => this.props.setContests(contests))
  }

  renderDraftLobbyCards() {
    return this.props.contests.contests.map(contest => <DraftLobbyCard key={contest.id} contest={contest}/>)
  }


  render() {
    // console.log(this.props.contests);
    return (
      <div className='draft-lobby-container'>
        <h1>Draft Lobby</h1>
        {this.renderDraftLobbyCards()}
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

export default connect(mapStateToProps, mapDispatchToProps)(DraftLobbyContainer)
