// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyC722IRejFTZ28dtnUfU6DHBzO7fkH8YFo",
//     authDomain: "gymwebsite-9c3bf.firebaseapp.com",
//     projectId: "gymwebsite-9c3bf",
//     storageBucket: "gymwebsite-9c3bf.appspot.com",
//     messagingSenderId: "401565458131",
//     appId: "1:401565458131:web:38a3dbebea26118691be26"
// }


// const firebaseApp = firebase.initializeApp(firebaseConfig)

// export const auth = firebaseApp.auth();
// export const db = firebaseApp.firestore();
// export const usersCollection = db.collection('users')



import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// firebase init - add your own config here
const firebaseConfig = {
        apiKey: "AIzaSyC722IRejFTZ28dtnUfU6DHBzO7fkH8YFo",
        authDomain: "gymwebsite-9c3bf.firebaseapp.com",
        projectId: "gymwebsite-9c3bf",
        storageBucket: "gymwebsite-9c3bf.appspot.com",
        messagingSenderId: "401565458131",
        appId: "1:401565458131:web:38a3dbebea26118691be26"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users');
const exercisesCollection = db.collection('exercises');


// export utils/refs
export {
db,
auth,
usersCollection,
exercisesCollection,
}