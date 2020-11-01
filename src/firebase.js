import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDXZEOi_czeNROEjfR9aWzEtVPEKec7rag',
  authDomain: 'exhale-project-ff168.firebaseapp.com',
  databaseURL: 'https://exhale-project-ff168.firebaseio.com',
  projectId: 'exhale-project-ff168',
  storageBucket: 'exhale-project-ff168.appspot.com',
  messagingSenderId: '1059533838634',
  appId: '1:1059533838634:web:126b010b6e4bffd8a02653',
  measurementId: 'G-B3QBECYKQ2',
};
const fire = firebase.initializeApp(firebaseConfig);
export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export default fire;
