import React, { Component } from "react";
// import { auth, authFunc, doGoogleSignIn, doGoogleAuthInit } from "../GoogleAuth";
import { auth, authFunc } from "../firebase";

export default class SignInButton extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");
    const firebaseScript = document.createElement("script");
    // script.type = "text/javascript";
    script.src = "./app/credentials.js";
    firebaseScript.src = "https://www.gstatic.com/firebasejs/7.6.2/firebase.js";
    // script.src = "https://apis.google.com/js/api.js";
    // script.onload = (e) => {
    //   console.log("reached doGoogleAuthInit");
    //   var apiKey = "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ";
    //   var scopes =
    //     "profile https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/userinfo.email";
    //   var scope = "https://www.googleapis.com/auth/calendar.events.readonly";
    //   var clientId =
    //     "170827625182-81uumu1gsdjfrn3rs9gbm66o472388rs.apps.googleusercontent.com";


//      Apparently gapi is not good for chrome extensions
      // window.gapi.load("auth2", function () {
      //   window.gapi.auth2
      //     .init({
      //       client_id: clientId,
      //       scope: scope,
      //     })
      //     .then(function () {
      //       console.log(window.gapi.auth2.getAuthInstance());
      //     });
      // });

      //

      //       Untested other copied code
      // let config =  {
      //   response_type: 'permission',
      //   scope,
      //   client_id: clientId,
      //   login_hint: credential.id
      // };
      // window.gapi.auth2.authorize(config, function(response) {
      //   // No need to `setToken`, it's done for you by auth2.
      //   let config2 = {discoveryDocs} // only of google calendar
      //   window.gapi.client.init(config2).then(function() {
      //     // then execute a calendar call:
      //     window.gapi.client.calendar.events.list(calConf)
      //   });
      // })

      //    Untested -- now trying some code found for people online
      // window.gapi.load("client", () => {
      //   window.gapi.client.setApiKey(apiKey);
      //   window.gapi.client.load("calendar", "v3", () => {
      //     // this.setState({ gapiReady: true });
      //     console.log("We gucci");
      //   });
      // });
      // window.gapi.load('client:auth2')
      //   gapi.client.init({
      //     'apiKey': 'YOUR_API_KEY',
      //     // clientId and scope are optional if auth is not required.
      //     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      //     'scope': 'profile',
      //   }).then(function() {
      //     // 3. Initialize and make the API request.
      //     return gapi.client.request({
      //       'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
      //     })
      //   }).then(function(response) {
      //     console.log(response.result);
      //   }, function(reason) {
      //     console.log('Error: ' + reason.result.error.message);
      //   });
      //    ______________________

      //    Now trying with firebase
      //    ________________________
      //   window.gapi.load("client:auth2", function() {
      //     console.log("loaded");
      //     window.gapi.client
      //       .init({
      //         apiKey: apiKey,
      //         clientId: clientId,
      //         scope: scopes,
      //       })
      //       .then(function () {
      //         console.log("loaded2");
      //         var googleUser = window.gapi.auth2
      //           .getAuthInstance()
      //           .currentUser.get();
      //         var googleProfile = googleUser.getBasicProfile();
      //         var isSignedIn = window.gapi.auth2
      //           .getAuthInstance()
      //           .isSignedIn.get();
      //         console.log("GoogleProfile");
      //         console.log(googleProfile);
      //         console.log("GoogleUser");
      //         console.log(googleUser);
      //         if (isSignedIn) {
      //           var credential = authFunc.GoogleAuthProvider.credential(
      //             googleUser.getAuthResponse().id_token
      //           );
      //           // we now want to auth in to Firebase with the googleUser credentials
      //           // this function is a bit magic, it will create the user as well - if it does not exist
      //           auth.signInWithCredential(credential).then((user) => {
      //             console.log("Firebase User");
      //             console.log(user);
      //           });
      //         }
      //       });
      //   });
    // };
    document.body.appendChild(script);
    document.body.appendChild(firebaseScript);
  }

  authenticate() {
    // doGoogleSignIn();
    // doGoogleAuthInit();
  }

  render() {
    return <button id="signInButton" onClick={this.authenticate}>Sign in with Google</button>;
  }
}
