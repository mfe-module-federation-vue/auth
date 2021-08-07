// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyAF84kSwn39tSNvsHIS1UZk7VyyEA-baMQ",
  authDomain: "mfe-module-federation-vue.firebaseapp.com",
  projectId: "mfe-module-federation-vue",
  storageBucket: "mfe-module-federation-vue.appspot.com",
  messagingSenderId: "432015408398",
  appId: "1:432015408398:web:d14ca292fbf3d9481f2b5f",
  // measurementId: "G-LZBHFDWHGD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
