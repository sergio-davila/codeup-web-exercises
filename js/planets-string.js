(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     planetsArray = planetsString.split("|");

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     var newPlanetsString = planetsArray.join("<br>");
     console.log(newPlanetsString);
     // planetsArray.unshift("<ul>");
     // console.log(planetsArray);
     // planetsArray.push("</ul>");
     // console.log(planetsArray);
     // planetsArray.forEach(function(planet) {
     //     planet = "<li>" + planet + "</li>"
     //     console.log(planet);
     // });
     // //console.log(planetsArray.join("<li>"));
     // console.log(planetsArray);
     var ulPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
     console.log(ulPlanets);
     document.write(ulPlanets);

})();