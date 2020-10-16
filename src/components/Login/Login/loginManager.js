import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
export const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = { 
            isSignedIn: true,
            name: displayName, 
            email: email, 
            photo: photoURL          
        }
        // setLoggedInUser(signedInUser);
        storeAuthToken();
        return signedInUser;

        // ...
    }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
    });
    
}


const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            // history.replace(from);
        }).catch(function (error) {
            // Handle error
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      return signedOutUser;
    }).catch(err => {
      // An error happened.
    });
  }