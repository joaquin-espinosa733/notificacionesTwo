importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDdBgBEbB7hjAPte5ilzVW28e0yX3zOVuw",
  authDomain: "notificaciones-7157d.firebaseapp.com",
  projectId: "notificaciones-7157d",
  storageBucket: "notificaciones-7157d.appspot.com",
  messagingSenderId: "468924504962",
  appId: "1:468924504962:web:3ca3c11a2774ef6b6c0d9b",
  measurementId: "G-ZP7Y6R39JL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging(app);


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
