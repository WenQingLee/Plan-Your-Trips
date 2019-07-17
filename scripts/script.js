// Map Initialisation
function initMap() {

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
  });

  // Infowindow for find me function
  let infoWindow = new google.maps.InfoWindow;

  // Geolocation
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
  }
  else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // Autocomplete box
  var autocompleteSearch = document.getElementById("search-location")
  new google.maps.places.Autocomplete(autocompleteSearch);

}



// Placesearch Function

function placeSearch() {

  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });

  let searchInput = {
    query: document.getElementById("search-location").value,
    fields: ["name", "geometry"],
  };

  // SearchMap variable
  let searchMap = new google.maps.places.PlacesService(map);

  // SearchMap function
  searchMap.findPlaceFromQuery(searchInput, function(results, status) {

    map.setCenter(results[0].geometry.location);

    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i], map)
      }
    }

  });


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);

}


// createMarker Function

function createMarker(place, map) {

  new google.maps.Marker({
    position: place.geometry.location,
    map: map
  });
}



axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyDoEv5jmhi5Iw1bPJTBGAEAWUsS-BQnBro")
  .then(function(response) {
    // handle success
    console.log(response);
  })

