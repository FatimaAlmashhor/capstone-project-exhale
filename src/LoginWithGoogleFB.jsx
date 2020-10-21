import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: 'AIzaSyDXZEOi_czeNROEjfR9aWzEtVPEKec7rag',
  authDomain: 'exhale-project-ff168.firebaseapp.com',
});

function LoginWithGoogleFB() {
  // Firebase
  const [isSignedIn, setisSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  return (
    <div>
      {/* Firebase Test */}
      {isSignedIn ? (
        <span>
          <div>Signed In!</div>
          <button type="button" onClick={() => firebase.auth().signOut()}>
            Sign out!
          </button>
          <h1>
            Welcome
            {firebase.auth().currentUser.displayName}
          </h1>
          <img alt="profile" src={firebase.auth().currentUser.photoURL} />
        </span>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </div>
  );
}

export default LoginWithGoogleFB;
