import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(event){
    this.setState({email: event.target.value})
  }
  handlePassword(event){
    this.setState({password: event.target.value})
  }
  handleSubmit(event){
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(
      error => {
        console.log('error', error);
        this.setState({error});
      })
    event.preventDefault();
  }
  render() {
    return (
      <div id="container" className="signup">
        <div className="inputError">{this.state.error.message}</div>
        <div className="signupForm">
          <h2>Sign Up</h2>
          <form className="form-group signupFormInner" onSubmit={this.handleSubmit}>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleEmail}/>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handlePassword}/>
            <input
              className="btn btn-primary"
              type="submit"
              value="Sign Up"
              />
          </form>
          <div><Link to={'/signin'} className="signLink">Already have an account?</Link></div>
        </div>
      </div>
    )
  }
}

export default SignUp;
