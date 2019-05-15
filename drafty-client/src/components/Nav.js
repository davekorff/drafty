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
                <Link id='nav-link' className='item' to={'/history'}>
                  {this.props.currentUser.username} - {this.props.currentUser.balance} flatcoin
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

export default Nav
