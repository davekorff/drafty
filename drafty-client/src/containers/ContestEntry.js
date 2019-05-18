import React from 'react'
import { connect } from 'react-redux'
import WeatherpeopleList from './WeatherpeopleList'
import MyTeamList from './MyTeamList'

class ContestEntry extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests/' + this.props.match.params.contestID)
      .then(res => res.json())
      .then(contest => this.props.setCurrentContest(contest))
  }

  render() {
    return (
      this.props.currentContest

      ?

      <div className='contest-entry-container'>
        <h1>Contest Entry</h1>
        <h2>{this.props.currentContest.name}</h2>
          <div className='contest-entry-row'>
            <div className='contest-entry-col'>
              <WeatherpeopleList currentContest={this.props.currentContest} />
            </div>
            <div className='contest-entry-col'>
              <MyTeamList />
            </div>
          </div>
      </div>

      :

      <div>BEEF. I mean, LOADING...</div>
    )
  }
}

function mapStateToProps(state) {
	return {
		currentContest: state.contests.currentContest
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentContest: contest => dispatch({type: 'SET_CURRENT_CONTEST', payload: contest})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ContestEntry)
