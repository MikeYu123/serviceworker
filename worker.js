console.log("I am a Service Worker");

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
   a = function(){
    self.registration.showNotification("Go back to serviceworker", {
      actions: [{action: 'archive', title: "Archive"}]
    });
    setTimeout(a);
    };

  
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

this.addEventListener('fetch', function(e) {
  self.registration.showNotification("Go back to serviceworker", {
    actions: [{action: 'archive', title: "Archive"}]
  });
  
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

this.addEventListener('message', function(e) {
  self.registration.showNotification("Go back to serviceworker", {
    actions: [{action: 'archive', title: "Archive"}]
  });
  
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
