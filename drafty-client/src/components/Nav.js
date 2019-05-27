import React from 'react'
// import { Grid, Menu } from 'semantic-ui-react'
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

				<li id='center-logo'>
					<Link to={'/lobby'}>
						<img height="75px" alt='drafty-logo' src='/drafty-logo.png'/>
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' to={'/lobby'}>
						Lobby
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' to={'/pastteams'}>
						Past teams
					</Link>
				</li>

			  <li>
					<Link id='nav-bar-link' to={'/weatherpeople'}>
						Meet the Weatherpeople
					</Link>
				</li>



			  <li id='li-right'>
					<Link id='nav-bar-link' to={'/login'} onClick={this.props.logOut}>
						Logout
					</Link>
				</li>

				<li id='li-right'>
					<span id='nav-bar-link'>
						Balance:
						<span style={{color: '#fbde4a', marginLeft: '5px'}}>
							{this.calculateBalance()}
						</span>
					</span>
				</li>

				<li id='li-right'>
					<span id='nav-bar-link'>
						Logged in as:
						<span style={{color: '#fbde4a', marginLeft: '5px'}}>
							{this.props.currentUser.username}
						</span>
					</span>
				</li>
			</ul>

			:

			<ul className='nav-ul' id='secular'>
				<li id='li-right'>
					<Link id='nav-bar-link' to={'/signup'}>
						Signup
					</Link>
				</li>

				<li id='li-right'>
					<Link id='nav-bar-link' to={'/login'}>
						Login
					</Link>
				</li>

			</ul>
		)
	}

	// render(){
	// 	return (
	// 		<Grid.Row>
	// 			<Grid.Column width={16}>
	// 				<Menu style={{backgroundColor: '#5188B1'}}>
	// 					<Link className='item' to={this.props.currentUser ? '/lobby' : '/login'}>
	// 						<img alt='logo' style={{height: '34px', width: '70px', marginRight: '8px', marginTop: '2px'}} src='/drafty-logo.png' />
	// 					</Link>
	// 					{
	// 						this.props.currentUser
	//
	// 						?
	//
	// 						<Menu.Menu position='right'>
	// 							<Link id='nav-link' className='item' to='/weatherpeople'>
	// 								<span style={{textAlign: 'center'}}>Meet the <br/> Weatherpeople</span>
	// 							</Link>
  //               <Link id='nav-link' className='item' to={'/history'}>
  //                 Logged in as: {this.props.currentUser.username} <br/> <br />
	// 							Balance: {this.calculateBalance()} Flatcoin
  //               </Link>
	// 							<Menu.Item id='nav-link' onClick={this.props.logOut}>
	// 								Log out
	// 							</Menu.Item>
	// 						</Menu.Menu>
	//
	// 						:
	//
	// 						<Menu.Menu position='right' >
	// 							<Link id='nav-link' className='item' to='/login'>
	// 								Login
	// 							</Link>
	// 							<Link id='nav-link' className='item' to='/signup'>
	// 								Sign Up
	// 							</Link>
	// 						</Menu.Menu>
	//
	// 					}
	// 				</Menu>
	// 			</Grid.Column>
	// 		</Grid.Row>
	// 	)
	// }




}

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser
	}
}

export default connect(mapStateToProps)(Nav)
