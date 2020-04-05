import { db, auth, authFunc } from "./firebase";

export const doGoogleSignIn = () => {
  var provider = new authFunc.GoogleAuthProvider();
  provider.addScope(
    "https://www.googleapis.com/auth/calendar.events.readonly"
  );
  provider.addScope(
    "https://www.googleapis.com/auth/userinfo.email"
  );
  auth.signInWithPopup(provider).then(function(result) {
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
    localStorage.setItem("lastTokenTime", (new Date()).getTime());
    // user.getToken().then(function(accessToken) {
    //   console.log(accessToken);
    // });
    createUser(user);
    // ...
  }).catch(function(error) {
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
}

function createUser(user) {
  let id = user.displayName.replace(/ .*/, "");
  id = id.toLowerCase() + Math.floor(Math.random() * 90000);
  db.ref("users/" + user.uid)
    .once("value", function(snapshot) {
      var exists = snapshot.val() !== null;
      if(exists) {
        db.ref('users/' + user.uid).update({
          photoURL: user.photoURL
        });
      } else {
        db.ref('users/' + user.uid).set({
          created_at: user.metadata.creationTime,
          email_address: user.email,
          id: id,
          username: user.displayName,
          photoURL: user.photoURL
        });
      }
    });
}

export { auth, authFunc };
