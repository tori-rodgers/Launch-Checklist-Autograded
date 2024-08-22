// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
  
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
} 
   
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let checkedPilot = validateInput(pilot);
    let checkedCoPilot = validateInput(copilot);
    let checkedFuelLevel = validateInput(fuelLevel);
    let checkedCargoLevel = validateInput(cargoLevel);
    
    
    let fuelStatusElement = document.getElementById('fuelStatus');
    let faultyItemsElement = document.getElementById('faultyItems');
    let launchStatusElement = document.getElementById('launchStatus');
    let cargoStatusElement = document.getElementById('cargoStatus');

    list.style.visibility = "hidden";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${checkedPilot} Ready`;
    document.getElementById("copilotStatus").innerHTML = `Pilot ${checkedCoPilot} Ready`;
    

    if (checkedFuelLevel < 10000) {
        faultyItemsElement.style.visibility = "visible";
        fuelStatusElement.innerHTML = "Fuel level too low for launch";
        launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusElement.style.color = "red";
    }
    if (checkedCargoLevel > 10000) {
        faultyItemsElement.style.visibility = "visible";
        cargoStatusElement.innerHTML = "Too much mass for launch";
        launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusElement.style.color = "red";
    }
    if (checkedFuelLevel > 10000 & checkedCargoLevel < 10000) {
        launchStatusElement.innerHTML = "Shuttle is ready for launch";
        launchStatusElement.style.color = "green";
    }
    

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;