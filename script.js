
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
    
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image
            )
    })
    
 });