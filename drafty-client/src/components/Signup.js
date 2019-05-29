import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import './LoginAndSignup.css'

class Signup extends React.Component {

	state = {
		username: '',
		password: '',
		passwordConfirmation: '',
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	createUser = () => {
		fetch('http://localhost:3000/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accepts': 'application/json',
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	handleSubmit = () => {
		if (this.state.username === '') {
			alert("Username can't be blank!")
		} else if (this.state.password === this.state.passwordConfirmation) {
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
		return (
			<Form id='signup-form' onSubmit={this.handleSubmit}>

				<img alt='draft-landing-img' src='/drafty-landing.png' height='300px'/>

				<Form.Field>
		      <label id='signup-form-label'> Username </label>
		      <input id='signup-form-input' onChange={this.handleChange} name='username' value={this.state.username} placeholder='username' />
		    </Form.Field>

		    <Form.Field>
		      <label id='signup-form-label'> Password </label>
		      <input id='signup-form-input' onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password' />
		    </Form.Field>

		    <Form.Field>
		      <label id='signup-form-label'> Password Confirmation </label>
		      <input id='signup-form-input' onChange={this.handleChange} type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} placeholder='password... again' />
		    </Form.Field>

		    <Button type='submit' id='signup-form-button'>Sign up</Button>
		  </Form>
		)
	}
}

export default Signup
