import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import MainLobbyContainer from './containers/MainLobbyContainer'
import HistoryContainer from './containers/HistoryContainer'
import { connect } from 'react-redux'

class App extends Component {

	componentDidMount(){
		const token = localStorage.getItem('token')

		if (token){
			fetch('http://localhost:3000/api/v1/auto_login', {
				headers: {
					'Authorization': token
				}
			})
			.then(res => res.json())
			.then((response) => {
				if (response.errors) {
					alert(response.errors)
				} else {
					this.props.setCurrentUser(response)
				}
			})
		}
	}

	setCurrentUser = (response) => {
		this.props.setCurrentUser(response.user)
		localStorage.setItem('token', response.token)
		this.props.history.push('/')
	}

	logOut = () => {
		localStorage.removeItem('token')
		this.props.setCurrentUser(null)
		this.props.history.push('/login')
	}

	render() {
		return (
			<Grid>
				<Nav currentUser={this.props.currentUser} logOut={this.logOut}/>
					<Switch>
						<Route exact path='/' render={ this.props.currentUser ? routeProps => <MainLobbyContainer {...routeProps} /> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/lobby' render={ this.props.currentUser ? routeProps => <MainLobbyContainer {...routeProps} /> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/login' render={ this.props.currentUser ? null : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
						<Route exact path='/signup' render={ this.props.currentUser ? null : routeProps => <Signup {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
						<Route exact path='/history' render={ this.props.currentUser ? routeProps => <HistoryContainer {...routeProps} setCurrentUser={this.setCurrentUser}/> : null }/>
					</Switch>
			</Grid>
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
		setCurrentUser: response => dispatch({type: 'SET_CURRENT_USER', payload: response})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
