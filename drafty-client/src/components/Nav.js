// TODO: ADD LOBBY BUTTON ON NAV (CONDITIONALLY RENDERED IF USER IS LOGGED IN)


import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {

	render(){

		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu style={{backgroundColor: '#f7951f'}}>
						<Link className='item' to={this.props.currentUser ? '/lobby' : '/login'}>
							<img alt='logo' style={{height: '34px', width: '70px', marginRight: '8px', marginTop: '2px'}} src='/drafty-logo.png' />
						</Link>
						{this.props.currentUser
							?
							<Menu.Menu position='right'>
								<Link id='nav-link' className='item' to='/weatherpeople'>
									<span style={{textAlign: 'center'}}>Meet the <br/> Weatherpeople</span>
								</Link>
                <Link id='nav-link' className='item' to={'/history'}>
                  Logged in as: {this.props.currentUser.username} <br/> <br />
									Balance: {this.props.currentUser.balance} flatcoin
                </Link>
								<Menu.Item id='nav-link' onClick={this.props.logOut}>
									Log out
								</Menu.Item>
							</Menu.Menu>
							:
							<Menu.Menu position='right' >
								<Link id='nav-link' className='item' to='/weatherpeople'>
									Meet the Weatherpeople
								</Link>
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

export default Nav
