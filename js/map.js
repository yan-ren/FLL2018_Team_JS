function initialize() {
	var montreal = new google.maps.LatLng(45.5017, -73.5673);
	var myOptions = {
		zoom: 10,
		center: montreal
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: montreal
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
