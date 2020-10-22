import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBDVy9xvM6tslYN6BDrMqTBS2CmG193tQI",
    authDomain: "learn-ai-7df72.firebaseapp.com",
    databaseURL: "https://learn-ai-7df72.firebaseio.com",
    projectId: "learn-ai-7df72",
    storageBucket: "learn-ai-7df72.appspot.com",
    messagingSenderId: "678683641339",
    appId: "1:678683641339:web:05d63f86682a595592375e",
    measurementId: "G-58TJ8ZGLRJ"
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();