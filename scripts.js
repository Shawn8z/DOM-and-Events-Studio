// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", ()=>{
    let takeOff = document.querySelector("#takeoff");
    let land = document.querySelector("#landing");
    let abort = document.querySelector("#missionAbort");

    takeOff.addEventListener("click", takeOffLink);
    land.addEventListener("click", landing);
    abort.addEventListener("click", missionAbort);




    



    function takeOffLink() {
        let ready = confirm("Confirm that the shuttle is ready for takeoff.");

        if (ready) {
            document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";

            let currentHeight = document.querySelector("#spaceShuttleHeight").innerHTML
            document.querySelector("#spaceShuttleHeight").innerHTML = parseInt(currentHeight) + 10000;
        }
    }

    function landing() {
        alert("The shuttle is landing. Landing gear engaged.");
        document.querySelector("#flightStatus").innerHTML = "The shuttle has landed.";
        document.querySelector("#shuttleBackground").style.backgroundColor = "green";
        document.querySelector("#spaceShuttleHeight").innerHTML = 0;
    }

    function missionAbort() {
        let abort = confirm("Confirm that you want to abort the mission.");
        if (abort) {
            document.querySelector("#flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "green";
            document.querySelector("#spaceShuttleHeight").innerHTML = 0;
        }
    }

    
})