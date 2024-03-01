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


// Escucha el evento 'activate' para asegurarse de que el Service Worker esté activo antes de suscribirse a las notificaciones push
self.addEventListener('activate', async function () {
  try {
    // Obtén la suscripción a las notificaciones push
    const subscription = await self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BCMsIM4vsjes3m_ILKbQGZBWtSlzDM1Bbmdwl2rYvNNYHV0fnEql7uV6-xRONOUYrJ075zZMbaJTIUK7tV4tFXg'
    });
    console.log('Subscribed to push notifications:', subscription);
  } catch (err) {
    console.error('Failed to subscribe to push notifications:', err);
  }
});


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: './firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
