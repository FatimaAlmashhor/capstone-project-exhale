/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//Edit API key and authDomain from firebase
firebase.initializeApp({
  apiKey: "AIzaSyCIsm5BgxDnP1xWnUL0sz5YRtCBU7uPHvI",
  authDomain: "exhale-mental-health.firebaseapp.com"
})
 
function App() {
  // or const [t, i18n] = useTranslation();
  const { t, i18n } = useTranslation();

  function handleLang(lang) {

    i18n.changeLanguage(lang);
  }
  //Firebase
  const [isSignedIn, setisSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => console.log("Success")
    }
  };
  useEffect(() => {
   firebase.auth().onAuthStateChanged(user => {
      setisSignedIn(!!user)
      console.log("user", user)
   })
  });
  return (
    <div>
      <button className="bg-blue mr-10" onClick={() => handleLang('ar')}>
        Arabic{' '}
      </button>
      <button
        className="bg-blue-400 mr-10 from-red-800"
        onClick={() => handleLang('en')}
      >
        English{' '}
      </button>
      <h1 className="text-3xl text-red-300">{t('Hello.1')}</h1>
      <p>text</p>
       {/*Firebase Test*/}
       {isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
    </div>
  )
}

export default App;