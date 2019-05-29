import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Nav.css'

class Nav extends React.Component {

	calculateBalance = () => {
		if (this.props.currentUser) {
			const winningTeams = this.props.currentUser.past_teams.filter(team => team.score === team.contest.high_score)
			const prizesWon = winningTeams.map(team => team.contest.prize)
			return prizesWon.reduce((partial_sum, a) => partial_sum + a, 0)
		} else {
			return 0
		}
	}

	render() {
		return(
			this.props.currentUser

			?

			<ul className='nav-ul' id='secular'>

				<li id='drafty-nav-logo'>
					<Link to={'/lobby'}>
						<img height="75px" alt='drafty-logo' src='/drafty-logo.png'/>
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' className={this.props.history.location.pathname === '/lobby' ? 'active' : null} to={'/lobby'}>
						Lobby
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' className={this.props.history.location.pathname === '/pastteams' ? 'active' : null} to={'/pastteams'}>
						Past teams
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' className={this.props.history.location.pathname === '/weatherpeople' ? 'active' : null} to={'/weatherpeople'}>
						Meet the Weatherpeople
					</Link>
				</li>

			  <li id='li-right'>
					<Link id='nav-bar-link' to={'/login'} onClick={this.props.logOut}>
						Logout
					</Link>
				</li>

				<li id='li-right'>
					<Link id='nav-bar-link' to={'/pastteams'}>
						Balance:
						<span style={{color: '#fbde4a', marginLeft: '5px'}}>
							{this.calculateBalance()}
						</span>
					</Link>
				</li>

				<li id='li-right'>
					<Link id='nav-bar-link' to={'/pastteams'}>
						Logged in as:
						<span style={{color: '#fbde4a', marginLeft: '5px'}}>
							{this.props.currentUser.username}
						</span>
					</Link>
				</li>
			</ul>

			:

			<ul className='nav-ul' id='secular'>
				<li id='li-right'>
					<Link id='nav-bar-link' to={'/signup'} className={this.props.history.location.pathname === '/signup' ? 'active' : null}>
						Signup
					</Link>
				</li>

				<li id='li-right'>
					<Link id='nav-bar-link' to={'/login'} className={this.props.history.location.pathname === '/login' ? 'active' : null}>
						Login
					</Link>
				</li>

			</ul>
		)
	}

}

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser
	}
}

export default connect(mapStateToProps)(Nav)
