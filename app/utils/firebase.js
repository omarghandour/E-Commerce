import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
       apiKey: "AIzaSyC69viKQe-sGlMUYkZ4XOfk_Y1JQp3ytN0",
       authDomain: "testnot-8d54c.firebaseapp.com",
       projectId: "testnot-8d54c",
       storageBucket: "testnot-8d54c.appspot.com",
       messagingSenderId: "115486259996",
       appId: "1:115486259996:web:9eed31bb2206d9187b98d9",
       measurementId: "G-41798MF3NC"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BMFlqSdz6dPExwqvWqirQ6Ulk7bPPv5E8ET4grEXd9BAxIwZW-zt4HWq4xC0SPRt7okLGYRkDwRFzq216xZwuj4",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };