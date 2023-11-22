importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
          apiKey: "AIzaSyC69viKQe-sGlMUYkZ4XOfk_Y1JQp3ytN0",
          authDomain: "testnot-8d54c.firebaseapp.com",
          projectId: "testnot-8d54c",
          storageBucket: "testnot-8d54c.appspot.com",
          messagingSenderId: "115486259996",
          appId: "1:115486259996:web:9eed31bb2206d9187b98d9",
          measurementId: "G-41798MF3NC"
});

const messaging = firebase.messaging();