import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJ-rw1zM8zMqgw9jLbUSZaiLIHXtDRJiE',
  authDomain: 'my-doctor-5cc40.firebaseapp.com',
  databaseURL: 'https://my-doctor-5cc40-default-rtdb.firebaseio.com',
  projectId: 'my-doctor-5cc40',
  storageBucket: 'my-doctor-5cc40.appspot.com',
  messagingSenderId: '175551315063',
  appId: '1:175551315063:web:b7d5d50b1b0339bb4a1a72',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
