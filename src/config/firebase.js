import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNZN2qoksGhcdbiHM4U7wldTXVbIVaEzc",
  authDomain: "eventos-c2dfa.firebaseapp.com",
  databaseURL: "https://eventos-c2dfa.firebaseio.com",
  projectId: "eventos-c2dfa",
  storageBucket: "eventos-c2dfa.appspot.com",
  messagingSenderId: "112880303310",
  appId: "1:112880303310:web:4fe3a88e5275e459f9a49f"
};

export default firebase.initializeApp(firebaseConfig);