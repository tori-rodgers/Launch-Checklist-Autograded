// Write your JavaScript code here!

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
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });