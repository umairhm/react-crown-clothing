import React from 'react';

import { signInWithGoogle, auth } from './../../firebase/firebase.utils';
import FormInput from './../form-input/form-input.component';
import CoolButton from './../cool-button/cool-button.component';

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
          <div className="buttons">
            <CoolButton type="submit">Sign in</CoolButton>
            <CoolButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CoolButton>
          </div>
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

    const { email, password } = this.state;

    try {

      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' }); 

    } catch (error) {
      console.error(error);
    }
  }
}

export default SignIn;