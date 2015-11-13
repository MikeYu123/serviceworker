console.log("I am a Service Worker");

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
   a = function(){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://mikeyu123.github.io/serviceworker/');
    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        self.registration.showNotification("Go back to serviceworker", {
          actions: [{action: 'archive', title: "Archive"}]
        });
      setTimeout(a,5000);
      }
    }
    };
  a();

  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    if (event.action === 'archive') {
      var win = window.open('https://mikeyu123.github.io/serviceworker/', '_blank');
      win.focus();
    } else {
      clients.openWindow("https://mikeyu123.github.io/serviceworker/");
    }
  }, false);
});
