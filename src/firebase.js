import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4Tf5eT4_2l9neuh7N_jnIzhkpZZLmn0w",
    authDomain: "cursoreduxii.firebaseapp.com",
    databaseURL: "https://cursoreduxii.firebaseio.com",
    projectId: "cursoreduxii",
    storageBucket: "cursoreduxii.appspot.com",
    messagingSenderId: "286804230648",
    appId: "1:286804230648:web:175f803812962627a2160d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db= firebase.firestore().collection('favs')

  export function getFavs(uid){
    return db.doc(uid).get()
    .then(snap=>{
      return snap.data().array
    })
  }

  export function updateDB(array, uid){
    return db.doc(uid).set({array})

  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }

  export function loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
    .then(snap=>snap.user)

  }