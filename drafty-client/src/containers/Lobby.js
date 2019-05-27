import React from 'react'
import ContestList from './ContestList'
import MyTeamsList from './MyTeamsList'
import { connect } from 'react-redux'
import './Lobby.css'

class Lobby extends React.Component {

  componentDidMount() {
    this.updateUser()
  }

  updateUser = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
      .then(res => res.json())
      .then(user => this.props.setCurrentUser(user))
  }

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

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentUser: user => dispatch({type: 'SET_CURRENT_USER', payload: user})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)
