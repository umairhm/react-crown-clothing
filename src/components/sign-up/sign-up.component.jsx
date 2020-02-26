import React from 'react';

import FormInput from './../form-input/form-input.component';
import CoolButton from './../cool-button/cool-button.component';

import { auth, createUserProfileDoc } from './../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  render () {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          id="displayName"
          name="displayName"
          value={displayName}
          handleChange={this.handleChange}
          label="Display Name"
          required />
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          handleChange={this.handleChange}
          label="Email"
          required />
        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          handleChange={this.handleChange}
          label="Password"
          required />
        <FormInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={this.handleChange}
          label="Confirm Password"
          required />
        <CoolButton type="submit">SIGN UP</CoolButton>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      
    } catch (error) {
      console.error(error);
    }
  }
}

export default SignUp;