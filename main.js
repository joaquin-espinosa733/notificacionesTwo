// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js";


const firebaseConfig = {
    apiKey: "AIzaSyDdBgBEbB7hjAPte5ilzVW28e0yX3zOVuw",
    authDomain: "notificaciones-7157d.firebaseapp.com",
    projectId: "notificaciones-7157d",
    storageBucket: "notificaciones-7157d.appspot.com",
    messagingSenderId: "468924504962",
    appId: "1:468924504962:web:3ca3c11a2774ef6b6c0d9b",
    measurementId: "G-ZP7Y6R39JL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


function saveTokenToServer(token) {
    // Crear un objeto con el token
    const data = { token: token };

    // Realizar una solicitud HTTP POST al servidor
    fetch('http://localhost:3000/save-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save token to server');
            }
            console.log('Token saved to server successfully');
        })
        .catch(error => {
            console.error('Error saving token to server:', error);
        });
}
// Obtener el token antes de solicitar el permiso de notificación
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async function () {
        try {
            const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
            console.log('Service Worker registered:', registration.scope);

            // Solicitar permiso y obtener el token cuando se concede el permiso
            requestPermissionAndSaveToken();
        } catch (error) {
            console.error('Failed to register Service Worker:', error);
        }
    });
}

function requestPermissionAndSaveToken() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted");

            // Obtener el token usando Firebase Messaging
            getToken(messaging, { vapidKey: 'BCMsIM4vsjes3m_ILKbQGZBWtSlzDM1Bbmdwl2rYvNNYHV0fnEql7uV6-xRONOUYrJ075zZMbaJTIUK7tV4tFXg' }).then((currentToken) => {
                if (currentToken) {
                    console.log("Current token:", currentToken);
                    // Enviar el token al servidor si es necesario
                    saveTokenToServer(currentToken);
                } else {
                    console.log("Unable to get token");
                }
            }).catch((err) => {
                console.error("Error getting token:", err);
            });
        } else {
            console.log("Notification permission denied");
        }
    }).catch((err) => {
        console.error("Error requesting permission:", err);
    });
}




// Llama a la función para solicitar permisos y guardar el token cuando se concede el permiso
requestPermissionAndSaveToken();
