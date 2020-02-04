import React from 'react';

import FormInput from './../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required />
          <FormInput
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }
}

export default SignIn;