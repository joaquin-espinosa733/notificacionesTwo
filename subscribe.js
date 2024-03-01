navigator.serviceWorker.register("/firebase-messaging-sw.js").then(function (registration) {

    return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BCMsIM4vsjes3m_ILKbQGZBWtSlzDM1Bbmdwl2rYvNNYHV0fnEql7uV6-xRONOUYrJ075zZMbaJTIUK7tV4tFXg"
    });
}).then(function (subscription) {
    console.log("user is subscribre : ", subscription);
}).catch(function (error) {
    console.log("Failed to subscribe the user: ", error);
})