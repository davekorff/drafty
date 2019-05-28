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

				<img alt='draft-landing-img' src='/drafty-landing.png' height='300px'/>

				<Form.Field>
		      <label id='login-form-label'> Username </label>
		      <input style={{backgroundColor: '#eff5f2', width: '15%', marginBottom: '10px'}} onChange={this.handleChange} name='username' value={this.state.username} placeholder='username' />
		    </Form.Field>

		    <Form.Field>
		      <label id='login-form-label'> Password </label>
		      <input style={{backgroundColor: '#eff5f2', width: '15%', marginBottom: '10px'}} onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password' />
		    </Form.Field>

		    <Button type='submit' id='login-form-button'>Log in</Button>

		  </Form>
		)
	}
}

export default Login
