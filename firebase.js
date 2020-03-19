import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDwAOkgktEQ5_-VakiqWvhViOKOsk3NlXk",
    authDomain: "todolist-tut-88478.firebaseapp.com",
    databaseURL: "https://todolist-tut-88478.firebaseio.com",
    projectId: "todolist-tut-88478",
    storageBucket: "todolist-tut-88478.appspot.com",
    messagingSenderId: "743486535016",
    appId: "1:743486535016:web:d4e77ae8529812cf9fd2dd"
});

export { firebaseConfig as firebase }