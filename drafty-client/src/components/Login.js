import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class Login extends React.Component {

	state = {
		username: '',
		password: '',
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = () => {
		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accepts': 'application/json',
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	render(){

		return (
			<Form id='login-form' onSubmit={this.handleSubmit}>
				<img id='drafty-logo-lg' alt='draft-logo-lg' src='/drafty-landing.png' height='300px'/>
				<Form.Field id='styled-form' style={{marginTop: '50px'}}>
		      <label style={{color: '#323042', fontFamily: `'Secular One', sans-serif`}}>Username</label>
		      <input style={{backgroundColor: '#eff5f2'}} onChange={this.handleChange} name='username' value={this.state.username} placeholder='Username' />
		    </Form.Field>
		    <Form.Field id='styled-form'>
		      <label style={{color: '#323042', fontFamily: `'Secular One', sans-serif`}}>Password</label>
		      <input style={{backgroundColor: '#eff5f2'}} onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button type='submit' style={{color: '#eff5f2', backgroundColor: '#323042', fontFamily: `'Secular One', sans-serif`}}>Log in</Button>
		  </Form>
		)
	}
}

export default Login
