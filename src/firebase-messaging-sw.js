importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');
firebase.initializeApp({ 
    apiKey: 'AIzaSyDC_awUkpQIzq_JnifegLEotgVqw71Y2Do', 
    authDomain: "push-notifications-hck23.firebaseapp.com", 
    //databaseURL: "from firebase config", 
    projectId: "push-notifications-hck23", 
    storageBucket: "push-notifications-hck23.appspot.com", 
    messagingSenderId: "723005789203", 
    appId: "1:723005789203:web:04356c56ffb20ff9e61be6", 
    measurementId: "G-39QYWMPNPZ" 
});const messaging = firebase.messaging();