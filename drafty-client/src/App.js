import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Lobby from './containers/Lobby'
import History from './containers/History'
import ContestEntry from './containers/ContestEntry'
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
			.then(user => user.errors ? alert(user.errors) : this.props.setCurrentUser(user))
		}

		this.setCurrentDate()
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

	setCurrentDate = () => {
		let today = new Date()
		let dd = String(today.getDate()).padStart(2, '0')
		let mm = String(today.getMonth() + 1).padStart(2, '0')
		let yyyy = today.getFullYear()
		let currentDate = yyyy + '-' + mm + '-' + dd
		this.props.setCurrentDate(currentDate)
	}

	render() {

		return (
			<Grid>
				<Nav currentUser={this.props.currentUser} logOut={this.logOut}/>
					<Switch>
						<Route exact path='/' render={this.props.currentUser ? routeProps => <Lobby {...routeProps} /> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/lobby' render={this.props.currentUser ? routeProps => <Lobby {...routeProps} /> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/login' render={this.props.currentUser ? null : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/signup' render={this.props.currentUser ? null : routeProps => <Signup {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/history' render={this.props.currentUser ? routeProps => <History {...routeProps}/> : null}/>
						<Route exact path='/entry/:contestID' render={routeProps => <ContestEntry {...routeProps}/>}/>
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
		setCurrentUser: user => dispatch({type: 'SET_CURRENT_USER', payload: user}),
		setCurrentDate: date => dispatch({type: 'SET_CURRENT_DATE', payload: date})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
