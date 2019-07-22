
var map;
var markers = [];

function initAutocomplete() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.386051, lng: -122.083855},
  zoom: 9,
  mapTypeId: 'roadmap'
});


// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

var input2 = document.getElementById('pac-input2');
//var searchBox = new google.maps.places.SearchBox(input2);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input2);

var input3 = document.getElementById('pac-input3');
//var searchBox = new google.maps.places.SearchBox(input3);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input3);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
searchBox.setBounds(map.getBounds());
});


// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
var places = searchBox.getPlaces();

if (places.length == 0) {
  return;
}

// Clear out the old markers.
//markers.forEach(function(marker) {
//   marker.setMap(null);
//  });

// For each place, get the icon, name and location.
var bounds = new google.maps.LatLngBounds();
places.forEach(function(place) {
  if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
  }
  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };

  // Create a marker for each place.
  markers.push(new google.maps.Marker({
    map: map,
    icon: icon,
    title: place.name,
    position: place.geometry.location
  }));
  console.log("markers: " + markers)
  if (place.geometry.viewport) {
    // Only geocodes have viewport.
    bounds.union(place.geometry.viewport);
  } else {
    bounds.extend(place.geometry.location);
  }
});
map.fitBounds(bounds);
});
}


function middle() {
var totalLat = 0;
var totalLng = 0;

for (var i = 0; i < markers.length; i += 1){
var newlat=markers[i].getPosition().lat();
console.log(markers[i].getPosition().lat())
totalLat = totalLat+ newlat;

console.log("for loop: " + i + " lat: "+totalLat);

totalLng += markers[i].getPosition().lng();
console.log("for loop: " + i + " lng: "+totalLng);
}

var latAvg = totalLat/markers.length;
var lngAvg = totalLng/markers.length;


console.log("lngAvg= " + lngAvg);
console.log("totalLng= " + totalLng );
console.log("latgAvg= " + latAvg);
console.log("totalLat= " + totalLat );
console.log(latAvg + ", " + lngAvg);


var middleMarker = new google.maps.Marker({
    position: {lat: latAvg, lng: lngAvg},
    map: map,
    zoom: 9,
    icon: 'marker.png',
  });
map.panTo(middleMarker.getPosition());


// ADDED THE FOLLOWING
return middleMarker.position;
}

function clearPage() {
    window.location.reload();
  }

// ADDED THE FOLLOWING

var infowindow;

function initMapCafe() {

var pyrmont = middle();

map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 13
    });

infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 5000,
      type: ['cafe']
      //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
    }, callbackCafe);
  }

  function callbackCafe(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarkerCafe(results[i]);
      }
    }
  }

  function createMarkerCafe(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }


  function initMapRestaurant() {

  var pyrmont = middle();

  map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 13
      });

  infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pyrmont,
        radius: 5000,
        type: ['restaurant']
        //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
      }, callbackRestaurant);
    }


        function callbackRestaurant(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarkerRestaurant(results[i]);
            }
          }
        }

        function createMarkerRestaurant(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

    function initMapParks() {

    var pyrmont = middle();

    map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 13
        });



    infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 5000,
          type: ['amusement_park']
          //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
        }, callbackParks);
      }


        function callbackParks(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarkerParks(results[i]);
            }
          }
        }

        function createMarkerParks(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }
///////////////////////////////////////////////////////////////////////////////
function initMapMovies() {
  var pyrmont = middle();
  map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pyrmont,
    radius: 5000,
    type: ['movie_theater']
    //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
    }, callbackMovies);}

function callbackMovies(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
      createMarkerMovies(results[i]);
  }}}

function createMarkerMovies(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.setContent(place.name);
  infowindow.open(map, this);
  });}
///////////////////////////////////////////////////////////////////////////////
function initMapBowling() {
  var pyrmont = middle();
  map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pyrmont,
    radius: 5000,
    type: ['bowling_alley']
    //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
  }, callbackBowling);}

function callbackBowling(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
      createMarkerBowling(results[i]);
  }}}

function createMarkerBowling(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.setContent(place.name);
  infowindow.open(map, this);
  });}
///////////////////////////////////////////////////////////////////////////////
function initMapMall() {
  var pyrmont = middle();
  map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pyrmont,
    radius: 5000,
    type: ['shopping_mall']
    //'restaurant','spa','amusement_park','bowling_alley','movie_theater','night_club','shoe_store','shopping_mall'
  }, callbackMall);}

function callbackMall(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
      createMarkerMall(results[i]);
  }}}

function createMarkerMall(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.setContent(place.name);
  infowindow.open(map, this);
  });}
///////////////////////////////////////////////////////////////////////////////
function initMap() {
  var pyrmont = middle();
  map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pyrmont,
    radius: 5000,
    type: ['shopping_mall']
  }, callbackMall);}

function callbackMall(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
      createMarkerMall(results[i]);
  }}}

function createMarkerMall(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.setContent(place.name);
  infowindow.open(map, this);
  });}
///////////////////////////////////////////////////////////////////////////////
