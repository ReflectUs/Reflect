// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase

// using Reflectme database
var config = {
  apiKey: "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ",
  databaseURL: "https://reflect-me-mhacks.firebaseio.com",
  storageBucket: "reflect-me-mhacks.appspot.com",
};
firebase.initializeApp(config);

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  // Listen for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      alert("You signed in bro");
    } else {
      alert("you not signed in bro");
    }

    // if (user) {
    // // User is signed in.
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // console.log(user);

    // // save to localStorage
    // localStorage.setItem('name', displayName);
    // localStorage.setItem('uid', uid);

    // [START_EXCLUDE]
    // document.getElementById('quickstart-button').textContent = 'Sign out';
    // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
    // document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
    // [END_EXCLUDE]
    // } else {
    //   // Let's try to get a Google auth token programmatically.
    //   // [START_EXCLUDE]
    //   document.getElementById('quickstart-button').textContent = 'Sign-in with Google';
    //   document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
    //   document.getElementById('quickstart-account-details').textContent = 'null';
    //   // [END_EXCLUDE]
    // }
    // document.getElementById('quickstart-button').disabled = false;
  });
  // [END authstatelistener]

  document
    .getElementById("signInButton")
    .addEventListener("click", startSignIn, false);
}

/**
 * Start the auth flow and authorizes to Firebase.
 * @param{boolean} interactive True if the OAuth flow should request with an interactive mode.
 */
function startAuth(interactive) {
  // Request an OAuth token from the Chrome Identity API.
  chrome.identity.getAuthToken({ interactive: !!interactive }, function (
    token
  ) {
    if (chrome.runtime.lastError && !interactive) {
      console.log("It was not possible to get a token programmatically.");
    } else if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else if (token) {
      // Authorize Firebase with the OAuth Access Token.
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(function (error) {
          // The OAuth token might have been invalidated. Lets' remove it from cache.
          if (error.code === "auth/invalid-credential") {
            chrome.identity.removeCachedAuthToken(
              { token: token },
              function () {
                startAuth(interactive);
              }
            );
          }
        });
      let init = {
        method: "GET",
        async: true,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        contentType: "json",
      };
      let apiKey = "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ";
      let url =
        "https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMax=2020-03-25T10:00:00-00:00&timeMin=2020-03-22T10:00:00-00:00&key=" +
        apiKey;
      fetch(url, init).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
        });
      });
      localStorage.setItem("googleAuthToken", token);
    } else {
      console.error("The OAuth Token was null");
    }
  });
}

/**
 * Starts the sign-in process.
 */
function startSignIn() {
  // document.getElementById('signInButton').disabled = true;
  console.log("StartSignIn");
  // if (firebase.auth().currentUser) {
  //   firebase.auth().signOut();
  //   localStorage.setItem('name', null);
  //   localStorage.setItem('newName', null);
  //   localStorage.setItem('uid', null);
  // } else {
  //   startAuth(true);
  // }
  startAuth(true);
}

window.onload = function () {
  initApp();
};
