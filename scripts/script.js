alert("it works!")


function initMap() {
  // The map, centered at Singapore
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: {lat: 1.290270, lng: 103.851959}});
  // The marker, positioned at Singapore
  var marker = new google.maps.Marker({position: {lat: 1.290270, lng: 103.851959}, map: map});
}