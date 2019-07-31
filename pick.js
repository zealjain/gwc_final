var map;
var markers = [];
var fruitMarkers = [];

function initMap() {
  //first init map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 37.326431,
      lng: -122.062398
    },
    zoom: 10,
    mapTypeId: 'roadmap'
  });

  initMarkers();
  initAutocomplete();
  readData();
}

function readData() {
  var postsRef = firebase.database().ref('userPosts/');
  alert(postsRef);
  postsRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var lat = childData.lat;
      var lng = childData.lng;
      var fruitType = childData.fruitType;
      var accessibility = childData.accessibility;
      var phoneNum = childData.phoneNum;
      var email = childData.email;
      var instructions = childData.instructions;
      var source = childData.source;
      createMarker(lat, lng, fruitType, accessibility, phoneNum, email, instructions, source);
    });
  });
}

function createMarker(latitude, longitude, fruitType, accessibility, phoneNum, email, instructions, source) {
  var marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude,
    },
    title: fruitType,
    map: map
  });

  //add marker to list
  fruitMarkers.push(marker);

  //create info window for marker
  var tab = "  -  ";
  var infoWindow = new google.maps.InfoWindow({
    content: '<h2>' + fruitType + ' </h2>' + '<body>' + '<b>Accessibility:</b> ' + accessibility + '<br><b>Instructions: </b>' + instructions + '<br> <b>Contact:<br></b>' + tab + 'Phone number: ' + phoneNum + '<br>' + tab + 'Email: ' + email +
      '<br><br><i>Attribution: ' + source + '</i></body>'
  });

  //on click zoom in
  marker.addListener('click', function() {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
  //on click opens info window
  marker.addListener('click', function() {
    infoWindow.open(map, marker);

  });
}

//removes marker from array
function removeMarker(marker) {
  var indexOf = this.fruitMarkers.indexOf(marker);
  if (indexOf !== -1) {
    this.fruitMarkers.splice(indexOf, 1);
    marker.setMap(null);
  }
}

//find marker in array given float lat
function findMarkerByLat(lat) {
  for (var i = 0; i < this.fruitMarkers.length; i++) {
    var currMarker = this.fruitMarkers[i];
    if (currMarker.position.lat() == lat) {
      return marker;
    }
  }
}

//initial data points
function initMarkers() {
  createMarker(37.464239, -122.146301, "Orange", "Private", "n/a", "n/a", "Two orange trees with very juicy oranges. Owner doesn't mind if you pick the oranges on the street.", "www.fallingfruit.org");
  createMarker(37.463744, -122.119619, "Wild Radish", "Public", "n/a", "n/a", "Radish along San Francisquito Trail by the creek.", "www.inaturalist.org");
  createMarker(37.437770, -122.119931, "Lemon", "Private", "n/a", "n/a", "Small tree in front yard, ripe in April. Ask owner before picking.", "www.fallingfruit.org");
  createMarker(37.432489, -122.127782, "Strawberry", "Public", "n/a", "n/a", "Easy to access, grows on land between sidewalk near Safeway parking lot.", "www.fallingfruit.org");
  createMarker(37.424561, -122.121957, "Japanese Permission and Loquat", "Private", "n/a", "n/a", "Permission overhangs fence to public area but loquat is on front yard. Both contain good quality fruit but on private property so ask permission before picking.", "www.fallingfruit.org");
  createMarker(37.472015, -122.236929, "Apple, Pear, Fig, Mandarin, Cherry, Apricot", "Public", "n/a", "n/a", "Behing McGarvey Baseball field wall, trees are small.", "www.fallingfruit.org");
  createMarker(37.431356, -122.175982, "Rosemary", "Unkown", "n/a", "n/a", "Dozen of large rosemary bushes, part of LKSC Herb Garden. Best around Jan-Dec.", "www.fallingfruit.org");
  createMarker(37.421207, -122.170120, "Orange", "Public", "n/a", "n/a", "Tree at the front of basketball court.", "www.fallingfruit.org");
  createMarker(37.425297, -122.165412, "Strawberry", "Public", "n/a", "n/a", "Many small bushes ripe from Sept-Jan. Located in Stanford University.", "www.fallingfruit.org");
  createMarker(37.402117, -122.1568901, "Fennel", "Public", "n/a", "n/a", "Lots of large, green bulbs along the pedestrian/bike path.", "www.fallingfruit.org");
  createMarker(37.384501, -122.120774, "Mulberry", "Public", "n/a", "n/a", "Tree on corner of the street, lots of fruit.", "www.fallingfruit.org");
  createMarker(37.415349, -122.121246, "Orange", "Private", "n/a", "n/a", "Orange tree in front yard, ask owner before picking.", "www.fallingfruit.org");
  createMarker(37.415349, -122.121246, "Olive", "Public", "n/a", "n/a", "Tree at the front of Robles Park in fair condition. Many more trees further in the park.", "www.fallingfruit.org");
  createMarker(37.408045, -122.0896273, "Loquat", "Public", "n/a", "n/a", "Tree is tall with plenty of good quality fruit but tree is very tall and fruit can be hard to reach. Most ripe during May.", "www.fallingfruit.org");
  createMarker(37.403566, -122.059454, "Walnut", "Public", "n/a", "n/a", "Large walnut tree with lots a good quality walnuts. Located in Devonshire Park.", "www.fallingfruit.org");
  createMarker(37.407540, -122.125873, "Almond", "Public", "n/a", "n/a", "Many small almond trees along the road.", "www.fallingfruit.org");
  createMarker(37.406725, -122.126072, "Plum", "Public", "n/a", "n/a", "About 10 plum trees at the front of Juana Briones Park.", "www.fallingfruit.org");
  createMarker(37.3979963, -122.1213036, "Plum", "Public", "n/a", "n/a", "Three medium sized plum trees on the side of the road.", "www.fallingfruit.org");
  createMarker(37.381388, -122.069821, "Walnut", "Unknown", "n/a", "n/a", "Tree is large and unmanaged, right next to gas station.", "www.fallingfruit.org");
  createMarker(37.363528, -122.042417, "Orange", "Private", "n/a", "n/a", "Tree located on private property but overhangs to sidewalk. Ask owner for permission to pick but lots of fruit on ground.", "www.fallingfruit.org");
  createMarker(37.32675000, -122.062954, "Apricot", "Public", "n/a", "n/a", "Multiple trees located in Varian Park, open to public. Good yeild.", "Julianne");
  createMarker(37.378335, -122.028976, "Avocado", "Public", "n/a", "n/a", "Tree overhangs Caltrain fence to public area", "www.fallingfruit.org");
  createMarker(37.430880, -122.112355, "Lemon", "Private", "n/a", "n/a", "A few trees along sidewalk, some hang to public area. Ripe in April.", "www.fallingfruit.org");
  createMarker(37.414833, -122.121723, "Fig", "Private", "n/a", "n/a", "Many ripe figs around Sept-Oct. In private backyard but tree overhangs to Robles Park.", "www.fallingfruit.org");
  createMarker(37.414607, -122.119804, "Lemon", "Private", "n/a", "n/a", "Small tree that overhangs sidewalk, owners let you pick if knock you ask.", "www.fallingfruit.org");
  createMarker(37.407166, -122.113427, "Olive", "Public", "n/a", "n/a", "Tree in front of apartments on the right of Del Medio Park.", "www.fallingfruit.org");
  createMarker(37.394243, -122.087748, "Avocado", "Unknown", "n/a", "n/a", "Large tree at the front of a house, unclear if it's on public or private land.", "www.fallingfruit.org");
  createMarker(37.395110, -122.057683, "Apricot", "Private", "n/a", "n/a", "Huge abandoned orchard of apricots, behind Huawei and MobileIron parking lot. Lots of fruit from June-July.", "www.fallingfruit.org");
  createMarker(37.348581, -122.035824, "Lemon", "Private", "n/a", "n/a", "Tree in private backyard but sometimes fruit falls on ground or overhangs backyard.", "www.fallingfruit.com");
  createMarker(37.321622, -122.037965, "Black Mulberry", "Public", "n/a", "n/a", "Behind Staples parking lot, fruit overhangs from private backyard. Fruit is high up so you might need to stand on your car or bring a ladder.", "www.fallingfruit.org");
  createMarker(37.356780, -121.910069, "Lemon", "Private", "n/a", "n/a", "This source is private. Ask for permission before you pick.", "www.fallingfruit.org");
  createMarker(37.357050, -121.909878, "Plum", "Public", "n/a", "n/a", "This source is on public land.", "www.fallingfruit.org");
  createMarker(37.359388, -121.911904, "Grapefruit", "Private", "n/a", "n/a", "This source is private. Ask for permission before you pick.", "www.fallingfruit.org");
  createMarker(37.361245, -121.910283, "Apple", "Private", "n/a", "n/a", "Big fruit, green with red streaks", "www.fallingfruit.org");
  createMarker(37.352322, -121.899261, "Avocado", "Public", "n/a", "n/a", "Located on the curb", "www.fallingfruit.org");
  createMarker(37.341901, -121.998008, "Lemon", "Private", "n/a", "n/a", "Lots of fruit. Lots of branches. Possibly more than one type.", "www.fallingfruit.org");
  createMarker(37.342957, -121.996141, "Lemon", "Private", "n/a", "n/a", "Small tree on side of the front yard. Fruit hangs to sidewalk.", "www.fallingfruit.org");
  createMarker(37.396647, -122.005001, "Loquat", "Private", "n/a", "n/a", "2 trees by John W. Christian Greenbelt between Hiddenlake Dr. and Meadowlake Dr.", "www.fallingfruit.org");
  createMarker(37.352358, -122.020665, "Mandarin", "Private", "n/a", "n/a", "Small mandarin tree hangs over the wall, many juicy fruits.", "www.fallingfruit.org");
  createMarker(37.333239, -121.956938, "Strawberry", "Public", "n/a", "n/a", "Strawberry tree in Everett Alvarez Jr Park.", "www.fallingfruit.org");
  createMarker(37.348310, -121.940886, "Orange", "Public", "n/a", "n/a", "Tree is next to Santa Clara university student housing, quite tall but lots of fruit.", "www.fallingfruit.org");
  createMarker(37.300956, -121.927866, "Orange", "Public", "n/a", "n/a", "Tree is in aparment area facing Southwest Expy.", "www.fallingfruit.org");
  createMarker(37.300956, -121.927866, "Cherry", "Public", "n/a", "n/a", "4 cherry trees in the island of the road. Quite tall and visible fruit.", "www.fallingfruit.org");
  createMarker(37.392577, -121.927435, "Cherry", "Public", "n/a", "n/a", "2 cherry trees in the side of the road.", "www.fallingfruit.org");
  createMarker(37.362971, -121.913699, "Strawberry", "Public", "n/a", "n/a", "Tree on side of the sidewalk, quite tall.", "www.fallingfruit.org");
  createMarker(37.359172, -121.909804, "Prickly Pear", "Public", "n/a", "n/a", "Cactus on the ground next to sidewalk", "www.fallingfruit.org");
  createMarker(37.349203, -121.880986, "Mulberry", "Private", "n/a", "n/a", "Owner is happy to share if you ask. Easy to pick and very sweet. Ripe from April-June.", "www.fallingfruit.org");
  createMarker(37.350448, -121.869709, "Loquat", "Public", "n/a", "n/a", "3 trees by sidewalk, owner is happy to share. Very good fruit from May-June.", "www.nextdoor.com");
  createMarker(37.855270, -122.285739, "Sugar Maple", "Public", "n/a", "n/a")
}

function initAutocomplete() {

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

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      displayClosest(place.geometry.location);

      var icon = {
        url: 'Assets/home_marker.png',
        //size: new google.maps.Size(180, 180),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(50, 50)
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

function displayClosest(position) {
  findClosestMarker(position);
  // google.maps.event.addListener(map, 'click', find_closest_marker);
}

function rad(x) {
  return x * Math.PI / 180;
}

function findClosestMarker(position) {
  var lat = position.lat();
  var lng = position.lng();
  var R = 6371; // radius of earth in km
  var distances = [];
  var closest = -1;
  for (i = 0; i < fruitMarkers.length; i++) {
    var mlat = fruitMarkers[i].position.lat();
    var mlng = fruitMarkers[i].position.lng();
    var dLat = rad(mlat - lat);
    var dLong = rad(mlng - lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    distances[i] = d;
    if (closest == -1 || d < distances[closest]) {
      closest = i;
    }
  }
  //alert("array length" + fruitMarkers.length + "closest index" + closest);
  alert("The closest tree to you is " + fruitMarkers[closest].title);
}

function middle() {
  var totalLat = 0;
  var totalLng = 0;

  for (var i = 0; i < markers.length; i += 1) {
    var newlat = markers[i].getPosition().lat();
    console.log(markers[i].getPosition().lat())
    totalLat = totalLat + newlat;

    console.log("for loop: " + i + " lat: " + totalLat);

    totalLng += markers[i].getPosition().lng();
    console.log("for loop: " + i + " lng: " + totalLng);
  }

  var latAvg = totalLat / markers.length;
  var lngAvg = totalLng / markers.length;


  console.log("lngAvg= " + lngAvg);
  console.log("totalLng= " + totalLng);
  console.log("latgAvg= " + latAvg);
  console.log("totalLat= " + totalLat);
  console.log(latAvg + ", " + lngAvg);


  var middleMarker = new google.maps.Marker({
    position: {
      lat: latAvg,
      lng: lngAvg
    },
    map: map,
    zoom: 3,
    icon: 'marker.png',
  });
  map.panTo(middleMarker.getPosition());

  return middleMarker.position;
}
