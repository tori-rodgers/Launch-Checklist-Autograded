
window.addEventListener("load", function() {
    // Object for form
    const form = document.getElementById('launchForm');

    // Object for list parameter
    const list = document.getElementById('faultyItems');
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Objects for input elements
      const pilot = document.querySelector("[name=pilotName]").value;
      const copilot = document.querySelector("[name=copilotName]").value;
      const fuelLevel = document.querySelector("[name=fuelLevel]").value;
      const cargoLevel = document.querySelector("[name=cargoMass]").value;

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    }); 
    

    let listedPlanets;
    let listedPlanetsResponse = myFetch(); // assign response from myFetch()

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
            // listedPlanets is now assigned the result of line 22 (response from myFetch(), which is the JSON)
    }).then(function () {
            let randomPlanet = pickPlanet(listedPlanets);
                // randomPlanet assigned the result of passing listedPlanets (the JSON) to pickPlanet()
            addDestinationInfo(
                document,
                randomPlanet.name,
                randomPlanet.diameter,
                randomPlanet.star,
                randomPlanet.distance,
                randomPlanet.moons,
                randomPlanet.image
                //randomPlanet.xxx accesses the keys in the JSON object and changes the HTML through 
                        // the addDestinationInfo() function
        )
    })
 });