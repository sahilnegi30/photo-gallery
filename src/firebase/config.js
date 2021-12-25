import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAICj4lx82yEby-8YzQKCVwMDcEQ4CYZys",
  authDomain: "mini-project-5e4f5.firebaseapp.com",
  projectId: "mini-project-5e4f5",
  storageBucket: "mini-project-5e4f5.appspot.com",
  messagingSenderId: "19667570740",
  appId: "1:19667570740:web:5e7aabbe10c9454b2aba61",
  measurementId: "G-YY8BGQS300"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };