    // Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_4Zh9vp_K6qX8BXmslO3iskFnz41lL9k",
  authDomain: "studygroup-bab2e.firebaseapp.com",
  projectId: "studygroup-bab2e",
  storageBucket: "studygroup-bab2e.appspot.com",
  messagingSenderId: "706313921418",
  appId: "1:706313921418:web:651319be1a1ecee1db1e73",
  measurementId: "G-96JDWTPN8E"
};

// Initialize Firebase
let app;

if(firebase.app.length===0) {
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const auth = firebase.auth();

const analytics = getAnalytics(app);
