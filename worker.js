console.log("I am a Service Worker");
Notification.requestPermission(function(permission){
// переменная permission содержит результат запроса
  document.permission = permission
});

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
});
