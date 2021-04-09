"use strict";
console.log("Good afternoon yall");

/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

// We have completed the above to do! keys.js made > put it into our .gitignore, following that we demonstrated the quickstart option from Mapbox to make sure we were all connected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]

mapboxgl.accessToken = mapBoxToken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-98.4861, 29.4252],
    zoom: 10
}

// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
//     center: [-98.4861, 29.4252], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

var marcoMap = new mapboxgl.Map(mapOptions);

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

// Messed around with styles the center, and the zoom level above on lines 22 thru 27!


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.

//var marker = new mapboxgl.Marker().setLngLat([-98.4861, 29.4260]).addTo(marcoMap);

// TODO TOGETHER: Change the color of the marker

//See a pattern of sorts: new mapboxgl.NameOfMethod({object: "option value"})
var marcoMarker = new mapboxgl.Marker({color: "orange"})
    .setLngLat([-98.4861, 29.4260])
    .addTo(marcoMap)

// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]

//var codeupSAMarker = new mapboxgl.Marker({color: "rebeccapurple"}).setLngLat([-98.4895, 29.4267]).addTo(marcoMap);

var codeupDalMarker = new mapboxgl.Marker({color: "cornflowerblue"}).setLngLat([-96.8056, 32.7786]).addTo(marcoMap);

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

var codeupSAMarker = new mapboxgl.Marker({color: "rebeccapurple", draggable: true}).setLngLat([-98.4895, 29.4267]).addTo(marcoMap);


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup

// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"

    var marcoPopup = new mapboxgl.Popup().setLngLat([-98.4895, 29.4267]).setHTML("<h6><em>Codeup Rocks!</em></h6>").addTo(marcoMap);
    // dont have to put the longitude and latitude for it to work if youre gonna set it to a marker, like in line 83.

    codeupSAMarker.setPopup(marcoPopup);

//There are other things we can program our Popup to pay attention to if we wanted:

    marcoPopup.on('close', function(){
    console.log('popup was closed');
    });

    marcoPopup.on('open', function(){
    console.log('popup was opened');
    });

// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!

var alamoPopup = new mapboxgl.Popup().setHTML("<p>Remember the Alamo</p>")

marcoMarker.setPopup(alamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!



// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?




/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!

// We set up: a mapbox-geocoder-utils.js, hooked it up to our .html file, and console.logged to confirm hooking them up!

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter
// ex. function call: geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
//     // do something with results
// })

// geocode("701 Commerce St #100A, Dallas, TX 75202", mapBoxToken).then(function (results) {
//     console.log(results);
//     marcoMap.setCenter(results); // results, right now, are an array of coordinates
// });

//TODO: Using the geocode method above, add a marker at Codeup to the map

geocode("11501 Braesview, San Antonio, TX 78213", mapBoxToken).then(function (results) {
    console.log(results)
    var popup = new mapboxgl.Popup().setHTML('<h6>Thanks Geocode</h6>');

    new mapboxgl.Marker().setLngLat(results).setPopup(popup).addTo(marcoMap);
});

//TODO: Instead of setCenter try using map.jumpTo()

// geocode("701 Commerce St #100A, Dallas, TX 75202", mapBoxToken).then(function (results) {
//     console.log(results)
//     var popup = new mapboxgl.Popup().setHTML('<h6>Thanks Geocode</h6>');
//
//     new mapboxgl.Marker().setLngLat(results).setPopup(popup).addTo(marcoMap);
//
//     marcoMap.jumpTo({center: results})
// });


//TODO: Instead of setCenter try using map.flyTo()

// geocode("701 Commerce St #100A, Dallas, TX 75202", mapBoxToken).then(function (results) {
//     console.log(results)
//     var popup = new mapboxgl.Popup().setHTML('<h6>Thanks Geocode</h6>');
//
//     new mapboxgl.Marker().setLngLat(results).setPopup(popup).addTo(marcoMap);
//
//     marcoMap.flyTo({center: results})
// });

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo
// reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
//     // do something with results
// })



reverseGeocode({lat: 29.4260, lng: -98.4861}, mapBoxToken).then(function (results) {
    console.log(results)
})

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

reverseGeocode({lng: -96.8056, lat: 32.7786}, mapBoxToken).then(function (results) {
    console.log(results)
})