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
		    <Form.Field>
		      <label>Username</label>
		      <input onChange={this.handleChange} name='username' value={this.state.username} placeholder='Username' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button type='submit'>Log in</Button>
		  </Form>
		)
	}
}

export default Login
