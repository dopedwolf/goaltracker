import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';



class SignIn extends Component {
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
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(
      error => {
        this.setState({error})
      }
    )
    event.preventDefault();
  }
  render(){
    return(
      <div id="container" className="signin">
        <div className="inputError">{this.state.error.message}</div>
        <div className="signupForm">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit} className="form-group signupFormInner">
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
              value="Log In"/>
          </form>
          <div><Link to={'/signup'} className="signLink">Don't have an account yet?</Link></div>
        </div>
      </div>
    )
  }
}

export default SignIn;
