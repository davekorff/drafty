import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Lobby from './containers/Lobby'

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

		return (
			<Grid>
				<Nav currentUser={this.state.currentUser} logOut={this.logOut}/>
				<Grid.Row centered>
					<Switch>
						<Route exact path='/' render={ this.state.currentUser ? routeProps => <Lobby {...routeProps} currentUser={this.state.currentUser}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/lobby' render={ this.state.currentUser ? routeProps => <Lobby {...routeProps} currentUser={this.state.currentUser}/> : routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/>  }/>
						<Route exact path='/login' render={ routeProps => <Login {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
						<Route exact path='/signup' render={ routeProps => <Signup {...routeProps} setCurrentUser={this.setCurrentUser}/> }/>
					</Switch>
				</Grid.Row>
			</Grid>
		)
	}
}

export default App
