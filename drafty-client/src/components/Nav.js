// TODO: ADD LOBBY BUTTON ON NAV (CONDITIONALLY RENDERED IF USER IS LOGGED IN)


import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


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

	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu style={{backgroundColor: '#f7951f'}}>
						<Link className='item' to={this.props.currentUser ? '/lobby' : '/login'}>
							<img alt='logo' style={{height: '34px', width: '70px', marginRight: '8px', marginTop: '2px'}} src='/drafty-logo.png' />
						</Link>
						{
							this.props.currentUser

							?

							<Menu.Menu position='right'>
								<Link id='nav-link' className='item' to='/weatherpeople'>
									<span style={{textAlign: 'center'}}>Meet the <br/> Weatherpeople</span>
								</Link>
                <Link id='nav-link' className='item' to={'/history'}>
                  Logged in as: {this.props.currentUser.username} <br/> <br />
								Balance: {this.calculateBalance()} Flatcoin
                </Link>
								<Menu.Item id='nav-link' onClick={this.props.logOut}>
									Log out
								</Menu.Item>
							</Menu.Menu>

							:

							<Menu.Menu position='right' >
								<Link id='nav-link' className='item' to='/login'>
									Login
								</Link>
								<Link id='nav-link' className='item' to='/signup'>
									Sign Up
								</Link>
							</Menu.Menu>

						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
		currentDate: state.date.currentDate,
		contests: state.contests.contests,
		teams: state.teams.teams,
	}
}

export default connect(mapStateToProps)(Nav)
