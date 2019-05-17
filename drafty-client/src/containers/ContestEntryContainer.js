import React from 'react'
import { connect } from 'react-redux'

class ContestEntryContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/contests/' + this.props.match.params.contestID)
      .then(res => res.json())
      .then(contest => this.props.setCurrentContest(contest))
  }

  render() {
    return (
      this.props.currentContest

      ?

      <div>
        {this.props.currentContest.name}
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


export default connect(mapStateToProps, mapDispatchToProps)(ContestEntryContainer)
