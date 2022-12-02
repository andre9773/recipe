import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOMIfBr2TmF3nKNdc_trFxW8nzw0D9bOE",
    authDomain: "recipe-site-e9fa0.firebaseapp.com",
    projectId: "recipe-site-e9fa0",
    storageBucket: "recipe-site-e9fa0.appspot.com",
    messagingSenderId: "432750045274",
    appId: "1:432750045274:web:046d2ea5178d8986f2d063"
  };

// init firebace
  firebase.initializeApp(firebaseConfig)

// init services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}