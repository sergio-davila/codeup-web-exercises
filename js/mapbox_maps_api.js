"use strict";
console.log("Hello!")

mapboxgl.accessToken = mapBoxToken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-99.47930, 27.58843],
    zoom: 20
}

var marcoMap = new mapboxgl.Map(mapOptions);

var parentsHome = new mapboxgl.Marker({color: "blue"}).setLngLat([-99.47930, 27.58843]).addTo(marcoMap);

var papasPopup = new mapboxgl.Popup().setHTML("<p><b>Casa de padres</b>: <em>Esta muuuuy caliente! :(</em></p>");

parentsHome.setPopup(papasPopup);

var oliveGardenMarker = new mapboxgl.Marker({color: "green"}).setLngLat([-98.480534, 29.565984]).addTo(marcoMap);

var oGPopup = new mapboxgl.Popup().setHTML("<p><b>Olive Garden</b>: <em>Italian Food ROCKS!</em></p>");

oliveGardenMarker.setPopup(oGPopup);

var hopDoddysMarker = new mapboxgl.Marker({color: "brown"}).setLngLat([-98.51219268866876 ,29.60937692133791]).addTo(marcoMap);

var hPPopup = new mapboxgl.Popup().setHTML("<p><b>Hop Doddy's</b>: <em>My favorite burgers!</em></p>")

hopDoddysMarker.setPopup(hPPopup);

var whataburgerMarker = new mapboxgl.Marker({color: "orange"}).setLngLat([-98.5343967636326, 29.557535144987945]).addTo(marcoMap);

var wBPopup = new mapboxgl.Popup().setHTML("<p><b>Whataburger</b>: <em>Ol' faithful!</em></p>")

whataburgerMarker.setPopup(wBPopup);