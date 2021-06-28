import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { createContext } from 'react';


// 1-пункт

var firebaseConfig = {
  apiKey: "AIzaSyAHmKWe122VB9iq8a3_1y5SSOCF0MSymzY",
  authDomain: "react-simple-chat-20c6c.firebaseapp.com",
  projectId: "react-simple-chat-20c6c",
  storageBucket: "react-simple-chat-20c6c.appspot.com",
  messagingSenderId: "779262742890",
  appId: "1:779262742890:web:3dfaf0dfe29e2ed92c9513",
  measurementId: "G-6Y0YC318KH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// ----------------------

// 2-пункт 
const auth = firebase.auth();
const firestore = firebase.firestore()
// ----------------------

// 3-пункт
export const Context = createContext(null)
// -----------------------

ReactDOM.render(
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);

