// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  // REPLACE BY YOUR FIREBASE CONFIG HERE
  projectId: "dmg-ng-pwa",
  appId: "1:32926529190:web:2e23d259d8034b0431a667",
  databaseURL:
    "https://dmg-ng-pwa-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "dmg-ng-pwa.appspot.com",
  apiKey: "AIzaSyC2b_gXr6SLR5SYFoLHgPE1TBmhTNO5nm4",
  authDomain: "dmg-ng-pwa.firebaseapp.com",
  messagingSenderId: "32926529190",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
