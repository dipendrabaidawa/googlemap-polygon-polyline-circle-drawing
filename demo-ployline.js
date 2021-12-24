function initialize() {
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(0, -180),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
  
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  
  var r=['13.034056,80.250489|13.036324,80.248538|13.026394,80.237562'];
  var coordinates = r[0].split("|");
  var flightPlanCoordinates = new Array();
  var bounds = new google.maps.LatLngBounds();
  for(i=0;i<coordinates.length;i++)
  {  
    var point =new google.maps.LatLng(coordinates[i].split(',')[0],coordinates[i].split(',')[1]);
    bounds.extend(point);
    flightPlanCoordinates.push(point);   
  }   
  
  
  var flightPath = new google.maps.Polyline({
   path: flightPlanCoordinates,
   geodesic: true,
   strokeColor: '#FF0000',
   strokeOpacity: 1.0,
   strokeWeight: 2
   });
  
  flightPath.setMap(map);
  map.fitBounds(bounds);
  }
  google.maps.event.addDomListener(window, 'load', initialize);