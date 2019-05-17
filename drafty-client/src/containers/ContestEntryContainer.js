import React from 'react'
import { connect } from 'react-redux'

class ContestEntryContainer extends React.Component {

  

  render() {
    return (
      <div>
        <h1>{this.props.currentContest.name}</h1>


      </div>
    )
  }
}


function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
		currentContest: state.contests.currentContest
	}
}


export default connect(mapStateToProps)(ContestEntryContainer)
