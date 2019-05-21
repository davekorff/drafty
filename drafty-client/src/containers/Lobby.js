import React from 'react'
import ContestList from './ContestList'
import MyTeamsList from './MyTeamsList'
import { connect } from 'react-redux'

class Lobby extends React.Component {


  render() {

    return (
      <div className='lobby-row'>
        <div className='lobby-col'>
          <ContestList history={this.props.history} />
        </div>
        <div className='lobby-col'>
          <MyTeamsList />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
	return {
		resetCurrentContest: () => dispatch({type: 'SET_CURRENT_CONTEST', payload: null})
	}
}

export default connect(null, mapDispatchToProps)(Lobby)
