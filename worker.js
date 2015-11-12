console.log("I am a Service Worker");

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
  Notification.requestPermission(function(permission){
  document.permission = permission;
  console.log(permission);
});
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
});
