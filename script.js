// Write your JavaScript code here!


//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    // Object for form
    const form = document.querySelector("form");

    // Object for submit button
    const submitButton = document.getElementById('formSubmit');
    
    // Objects for input elements
    const pilotName = document.getElementById('pilotName');
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");


    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                alert("All fields are required!");
        } else {
            formSubmission(document, )
        }
            
        
    }) 
    
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
 });