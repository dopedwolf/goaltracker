import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAaLDIFkkC6zIo8yvAObgJ8hSOu-dFzCtk",
  authDomain: "goalcoach-23ec5.firebaseapp.com",
  databaseURL: "https://goalcoach-23ec5.firebaseio.com",
  projectId: "goalcoach-23ec5",
  storageBucket: "goalcoach-23ec5.appspot.com",
  messagingSenderId: "785649547554"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
