// alert("it works!")


// Map Initialisation
function initMap() {

  // Initial LatLng
  let myLatLng = { lat: 1.290270, lng: 103.851959 }


  // The map, centered at Singapore
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });


  // The marker, positioned at Singapore
  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Begin planning your trips!'
  });


  // Autocomplete box
  var autocompleteSearch = document.getElementById('search-location')
  new google.maps.places.Autocomplete(autocompleteSearch);

}



// Find me function
function findMe() {

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
  });

  // Infowindow for find me function
  let infoWindow = new google.maps.InfoWindow;
  // Geolocation.

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // console.log(pos)
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }
  else {
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





// searchLocation function/Directions service
function searchLocation(location) {

  let searchLocationRequest = document.getElementById("search-location").value



  mapSearch = new google.maps.places.PlacesService(map);



}
//   mapSearch.findPlaceFromQuery(searchLocationRequest, function(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }

// function createMarker(place) {
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }





axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyDoEv5jmhi5Iw1bPJTBGAEAWUsS-BQnBro")
  .then(function(response) {
    // handle success
    console.log(response);
  })
