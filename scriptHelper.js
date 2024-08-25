// Write your helper functions here!

require('cross-fetch/polyfill');

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
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(Number(testInput))) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
    
} 
   
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');


    // all Empty
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' ||validateInput(cargoLevel) === 'Empty') {
        alert("Please enter information for all fields.");
    // wrong type
    } else if ( validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert("Please enter a valid name.");
    } else if (validateInput(fuelLevel) === 'Not a Number' ||validateInput(cargoLevel) === 'Not a Number') {
        alert("Please enter a valid number.");
    } else {

        let fuelReady = false;
        let cargoReady = false;
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;

        // fuelLevel
        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (fuelLevel >= 10000){
            fuelReady = true;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
        // cargoLevel
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (cargoLevel <= 10000) {
            cargoReady = true;
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        // both true
        if (fuelReady && cargoReady) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }

    }
    
 }
 
 async function myFetch() {
     try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const planetsReturned = await response.json();
        console.log(planetsReturned);

     } catch (error) {
        console.error(error);
     }
 
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;