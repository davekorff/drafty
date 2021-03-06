import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Lobby from './containers/Lobby'
import History from './containers/History'
import ContestEntry from './containers/ContestEntry'
import Weatherpeople from './containers/Weatherpeople'

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

		fetch('http://localhost:3000/api/v1/weatherpeople')
			.then(res => res.json())
			.then(weatherpeople => this.props.setWeatherpeople(weatherpeople))

		this.setCurrentDate()
	}

	setCurrentUser = (response) => {
		this.props.setCurrentUser(response.user)
		localStorage.setItem('token', response.token)
		this.props.history.push('/lobby')
	}

	logOut = () => {
		localStorage.removeItem('token')
		this.props.setCurrentUser(null)
		this.props.history.push('/login')
	}

	// Set date to match format from backend
	setCurrentDate = () => {
		const today = new Date()
		const dd = String(today.getDate()).padStart(2, '0')
		const mm = String(today.getMonth() + 1).padStart(2, '0')
		const yyyy = today.getFullYear()
		const currentDate = yyyy + '-' + mm + '-' + dd
		this.props.setCurrentDate(currentDate)
	}

	render() {
		return (
			<div className="App">
				<Route path='/' render={routeProps => <Nav {...routeProps} logOut={this.logOut}/>} />
					<Switch>
						<Route exact path='/' render={this.props.currentUser ? routeProps => <Lobby {...routeProps}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/lobby' render={this.props.currentUser ? routeProps => <Lobby {...routeProps}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/login' render={this.props.currentUser ? null : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/signup' render={this.props.currentUser ? null : routeProps => <Signup {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/pastteams' render={this.props.currentUser ? routeProps => <History {...routeProps}/> : routeProps => <Login {...routeProps}/>}/>
						<Route exact path='/entry/:contestID' render={this.props.currentUser ? routeProps => <ContestEntry {...routeProps}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
						<Route exact path='/weatherpeople' render={this.props.currentUser ? routeProps => <Weatherpeople {...routeProps} weatherpeople={this.props.weatherpeople}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>}/>
					</Switch>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
		weatherpeople: state.weatherpeople.weatherpeople
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCurrentUser: user => dispatch({type: 'SET_CURRENT_USER', payload: user}),
		setCurrentDate: date => dispatch({type: 'SET_CURRENT_DATE', payload: date}),
		setWeatherpeople: weatherpeople => dispatch({type: 'SET_WEATHERPEOPLE', payload: weatherpeople}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
