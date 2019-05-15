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

	state = {
		currentUser: null
	}

	logOut = () => {
		localStorage.removeItem('token')
		this.setState({ currentUser: null }, () => this.props.history.push('/login'))
	}

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
					this.setState({ currentUser: response })
				}
			})
		}
	}

	setCurrentUser = (response) => {
		this.setState({ currentUser: response.user }, () => {
			localStorage.setItem('token', response.token)
			this.props.history.push('/')
		})
	}

	render() {
		console.log(this.props.currentUser);
		return (
			<Grid>
				<Nav currentUser={this.state.currentUser} logOut={this.logOut}/>
					<Switch>
						<Route exact path='/' render={ this.state.currentUser ? routeProps => <MainLobbyContainer {...routeProps} currentUser={this.state.currentUser}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/lobby' render={ this.state.currentUser ? routeProps => <MainLobbyContainer {...routeProps} currentUser={this.state.currentUser}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/login' render={ this.state.currentUser ? null : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
						<Route exact path='/signup' render={ this.state.currentUser ? null : routeProps => <Signup {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
						<Route exact path='/history' render={ this.state.currentUser ? routeProps => <HistoryContainer {...routeProps} setCurrentUser={this.setCurrentUser}/> : null }/>
					</Switch>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
