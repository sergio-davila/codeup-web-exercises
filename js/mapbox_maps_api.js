"use strict";
console.log("Hello!")

mapboxgl.accessToken = mapBoxToken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-98.4861, 29.4260],
    zoom: 9.5
}

var marcoMap = new mapboxgl.Map(mapOptions);

// Showed parents some code below, not really part of exercise

var parentsHome = new mapboxgl.Marker({color: "blue"}).setLngLat([-99.47930, 27.58843]).addTo(marcoMap);

var papasPopup = new mapboxgl.Popup().setHTML("<p><b>Casa de padres</b>: <em>Esta muuuuy caliente! :(</em></p>");

parentsHome.setPopup(papasPopup);

// Array loop of restaurants

var restaurantArray = [{name: "Olive Garden", address: "13730 San Pedro Ave, San Antonio, TX 78232"}, {name: "Hopdoddy's", address: "1301 N Loop 1604 W #101, San Antonio, TX 78258"}, {name: "Whataburger", address: "11003 NW Military Hwy, San Antonio, TX 78231"}];

restaurantArray.forEach(function(restaurant) {
    geocode(restaurant.address, mapBoxToken).then(function (results) {
        new mapboxgl.Marker({color: "blue"}).addTo(marcoMap);
    });
});

// Markers/popups of fave restaurants below

// //Olive Garden
// var oliveGardenMarker = new mapboxgl.Marker({color: "green"}).setLngLat([-98.480534, 29.565984]).addTo(marcoMap);
//
// var oGPopup = new mapboxgl.Popup().setHTML("<p><b>Olive Garden</b>: <em>Italian Food ROCKS!</em></p>");
//
// oliveGardenMarker.setPopup(oGPopup);
//
// //Hopdoddy's
// var hopDoddysMarker = new mapboxgl.Marker({color: "brown"}).setLngLat([-98.51219268866876 ,29.60937692133791]).addTo(marcoMap);
//
// var hPPopup = new mapboxgl.Popup().setHTML("<p><b>Hop Doddy's</b>: <em>My favorite burgers!</em></p>")
//
// hopDoddysMarker.setPopup(hPPopup);
//
// //Whataburger
// var whataburgerMarker = new mapboxgl.Marker({color: "orange"}).setLngLat([-98.5343967636326, 29.557535144987945]).addTo(marcoMap);
//
// var wBPopup = new mapboxgl.Popup().setHTML("<p><b>Whataburger</b>: <em>Ol' faithful!</em></p>")
//
// whataburgerMarker.setPopup(wBPopup);

// BONUS

$('#zoom-button-5').click(function (e) {
    console.log("pressed")
    marcoMap.setZoom(5);
})

$('#zoom-button-15').click(function (e) {
    console.log("pressed")
    marcoMap.setZoom(15);
})

$('#zoom-button-20').click(function (e) {
    console.log("pressed")
    marcoMap.setZoom(20);
})

$('#submit-change-center').click(function(e) {
    var mapInput = $('#change-center').val();
    console.log(mapInput);

    geocode(mapInput, mapBoxToken).then(function (results) {
        console.log(results);
        marcoMap.setCenter(results);
    });
});

