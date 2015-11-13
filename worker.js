console.log("I am a Service Worker");

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
   a = function(){
    fetch('https://mikeyu123.github.io/serviceworker/')  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }
        else {
          console.log(response);
          self.registration.showNotification("Go back to serviceworker", {
            actions: [{action: 'archive', title: "Archive"}]
          });
          setTimeout(a,5000);
        }
    }  
  )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
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
