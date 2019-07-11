// alert("it works!")


function initMap() {
  // The map, centered at Singapore
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: { lat: 1.290270, lng: 103.851959 } });
  // The marker, positioned at Singapore
  var marker = new google.maps.Marker({ position: { lat: 5.290270, lng: 102.851959 }, map: map });
}


function findMe(){
  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 4
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      
}



// function searchLocation(){
//   alert("location search!");
// }

axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyA_Vfu-FYPJTrpiFgnNOaUP5jrtbeyJflk")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  
  