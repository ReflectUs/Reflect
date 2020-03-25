import React, { Component } from 'react'
import { auth, authFunc, doGoogleSignIn } from "../GoogleAuth";

export default class SignInButton extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    doGoogleSignIn();
  }

  render() {
    return (
      <button onClick={this.authenticate}>
        Sign in with Google
      </button>
    )
  }
}

