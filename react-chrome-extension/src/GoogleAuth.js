import { db, auth, authFunc } from "./firebase";

export const doGoogleAuthInit = () => {
  console.log("reached doGoogleAuthInit");
  var apiKey = "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ";
  var scopes = "profile https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/userinfo.email"
  var clientId = "170827625182-81uumu1gsdjfrn3rs9gbm66o472388rs.apps.googleusercontent.com"
  gapi.client.init({
    apiKey: apiKey,
    clientId: clientId,
    scope: scopes,
  }).then(function() {
    var googleUser = gapi.auth2.getAuthInstance().currentUser.get();
		var googleProfile = googleUser.getBasicProfile();
    var isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    console.log("GoogleProfile");
    console.log(googleProfile);
    console.log("GoogleUser");
    console.log(googleUser);
		if (isSignedIn) {

			var credential = authFunc.GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
			// we now want to auth in to Firebase with the googleUser credentials
			// this function is a bit magic, it will create the user as well - if it does not exist
			auth.signInWithCredential(credential).then((user) => {
        console.log("Firebase User");
        console.log(user);
      });
    }
  });
};

export const doGoogleSignIn = () => {
  var provider = new authFunc.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/calendar.events.readonly");
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result);
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      var refreshToken = user.refreshToken;
      console.log(user);
      localStorage.setItem("newToken", token);
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("newName", user.displayName);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("lastTokenTime", new Date().getTime());
      // user.getToken().then(function(accessToken) {
      //   console.log(accessToken);
      // });
      createUser(user);
      // ...
    })
    .catch(function (error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

function createUser(user) {
  let id = user.displayName.replace(/ .*/, "");
  id = id.toLowerCase() + Math.floor(Math.random() * 90000);
  db.ref("users/" + user.uid).once("value", function (snapshot) {
    var exists = snapshot.val() !== null;
    if (exists) {
      db.ref("users/" + user.uid).update({
        photoURL: user.photoURL,
      });
    } else {
      db.ref("users/" + user.uid).set({
        created_at: user.metadata.creationTime,
        email_address: user.email,
        id: id,
        username: user.displayName,
        photoURL: user.photoURL,
      });
    }
  });
}

export { auth, authFunc };
