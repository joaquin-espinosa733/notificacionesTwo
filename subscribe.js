// (async function() {
//     try {
//         // Verificar si ya hay un service worker registrado
//         const existingRegistration = await navigator.serviceWorker.getRegistration('firebase-messaging-sw.js');
        
//         if (existingRegistration) {
//             // Ya hay un service worker registrado, no necesitas registrar uno nuevo
//             console.log('Service worker already registered:', existingRegistration);
//         } else {
//             // No hay un service worker registrado, registra uno nuevo
//             const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
            
//             // Suscribir al usuario para recibir notificaciones push
//             const subscription = await registration.pushManager.subscribe({
//                 userVisibleOnly: true,
//                 applicationServerKey: "BCMsIM4vsjes3m_ILKbQGZBWtSlzDM1Bbmdwl2rYvNNYHV0fnEql7uV6-xRONOUYrJ075zZMbaJTIUK7tV4tFXg"
//             });

//             console.log('User is subscribed:', subscription);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
